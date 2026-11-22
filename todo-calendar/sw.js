// Offline support: always try the network first so updates show right away,
// fall back to the cached copy when offline.
// Also shows the daily "critical tasks" notification.
const CACHE = "todo-calendar-v7";
const DATA = "todo-data"; // written by the page: alert settings + open Critical tasks
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./badge-96.png"];
const DATA_URL = new URL("__alerts.json", self.location.href).href;
const LAST_URL = new URL("__alerts-last.json", self.location.href).href;

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k !== DATA).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(e.request, { ignoreSearch: true })
          .then((r) => r || (e.request.mode === "navigate" ? caches.match("./index.html") : undefined))
      )
  );
});

// ---------- Critical alerts ----------
const pad = (n) => String(n).padStart(2, "0");
const keyOf = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

async function checkCritical() {
  const cache = await caches.open(DATA);
  const res = await cache.match(DATA_URL);
  if (!res) return;
  const s = await res.json();
  if (!s.enabled || !Array.isArray(s.tasks)) return;

  const now = new Date();
  const today = keyOf(now);
  const [h, m] = String(s.time || "08:00").split(":").map(Number);
  if (now.getHours() * 60 + now.getMinutes() < h * 60 + m) return; // not time yet

  const last = await cache.match(LAST_URL);
  if (last && (await last.text()) === today) return; // already reminded today

  const due = s.tasks.filter((t) => t.date <= today);
  if (!due.length) return;

  const lines = due.slice(0, 4).map((t) => (t.date < today ? "Overdue: " : "• ") + t.text);
  if (due.length > 4) lines.push(`+${due.length - 4} more`);
  await self.registration.showNotification(
    `🔴 ${due.length} critical task${due.length === 1 ? "" : "s"} unfinished`,
    { body: lines.join("\n"), icon: "icon-192.png", badge: "badge-96.png", tag: "critical-daily", renotify: true, data: { url: "./" } }
  );
  await cache.put(LAST_URL, new Response(today));
}

// run checks one at a time so two triggers can't both notify
let queue = Promise.resolve();
const queuedCheck = () => (queue = queue.then(checkCritical).catch(() => {}));

// background check (installed app, Chrome decides how often)
self.addEventListener("periodicsync", (e) => {
  if (e.tag === "critical-check") e.waitUntil(queuedCheck());
});
// check requested by the open page
self.addEventListener("message", (e) => {
  if (e.data === "check-critical") e.waitUntil(queuedCheck());
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) if ("focus" in c) return c.focus();
      return self.clients.openWindow("./");
    })
  );
});
