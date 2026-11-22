# Todo List

A simple todo list with urgency levels and Work / Personal categories. The list is the main screen; type new tasks
in the bar at the bottom (pick Work or Personal and Critical / High / Medium / Low above it). New tasks go on today's list.
Use the All / Work / Personal tabs to see only one kind of task.
To check or plan another day, tap the date at the top ("Today ▾") or the date pill in the bottom bar to pull up
the calendar, pick a day, then add tasks for that date. Tap **All tasks** in the calendar to see every task from every
date, grouped by date (Overdue, Today, Tomorrow, later), with finished ones under Completed.

**Live:** https://coachdinosaur.github.io/portfolio/todo-calendar/

## Urgency levels

| Level    | Use it for                           |
|----------|--------------------------------------|
| Critical | Must be done now / today, no excuses |
| High     | Urgent, do soon                      |
| Medium   | Needed, but can wait a bit           |
| Low      | Normal, whenever there's time        |

## Features

- Today's list is the main screen; the calendar slides up only when you need it
  (close it by tapping outside, dragging it down, or the phone's Back button)
- Coloured dots on the calendar show which days have unfinished tasks
- **Critical alerts:** the bell at the top shows how many Critical tasks are unfinished (today + overdue)
  and lists them. Turn on *Daily reminder* to get a phone notification once a day, after the time you pick,
  while Critical tasks are unfinished. When the app is installed (Add to Home screen) this also works with the
  app closed, using Chrome's periodic background sync; Chrome decides the exact moment, so it can come late.
- Bell button on each Critical task: adds it to Google Calendar for an exact-time alert
- Tap a task to edit its text, change urgency, move it to another date or delete it (with undo)
- **Sub-tasks:** open a task to add a checklist under it; tick sub-tasks right in the list. Finished tasks have a **+**
  button to add a follow-up, which puts the task back in *To do*. Ticking a task ticks its sub-tasks; repeating tasks
  get a fresh checklist each time.
- **Attachments:** open a task and use *Camera*, *Gallery* or *File*.
  Photos (up to 10 per task) are shrunk to ~1600 px JPEG; tap one to view it full screen, swipe between them, or
  delete it (with Undo). Documents (PDF, Word, Excel, anything; up to 10 per task, 25 MB each) are kept as-is:
  tap one to save/open it, share it to another app, or remove it (with Undo). Everything is stored in the browser's
  IndexedDB, shown as camera / paperclip counts in the list, and included in backups.
- **Private diary** (📖 button at the top): write entries with a date and optional mood; they save as you type and
  are listed by month. Set a 4–8 digit PIN to lock it: entries are then encrypted on the phone (AES-GCM, key derived
  from the PIN with PBKDF2) and the diary locks when you leave it or switch apps. A forgotten PIN can't be recovered;
  the only way back in is to erase the diary. Diary entries are kept apart from tasks and included in backups
  (still encrypted when a PIN is set).
- Finished tasks move to a collapsible *Completed* section
- **Deleting:** delete one task from its edit panel; long-press a task (or tap *Select*) to pick several and delete
  them together; *Clear* on the Completed section removes all finished tasks for that day. Every delete has Undo.
- **Repeating tasks:** open a task and pick Daily, Weekdays, Weekly, Monthly, Quarterly or Yearly. When you tick it off,
  the next one is added automatically (overdue ones skip ahead so the next isn't already late; month-based repeats keep
  their day, e.g. the 31st becomes the 28th in February and back to the 31st in March). Un-ticking takes the next copy back.
- "Move to today" for unfinished tasks from earlier days
- Works offline; an **Install** button appears when Chrome allows installing it (or Chrome ⋮ → *Add to Home screen*). It shows up as "Todo List" in your apps
- ⋮ Settings: theme (Auto / Light / Dark), accent colour, export / import a JSON backup, and About

Tasks are stored in the browser's `localStorage`, so they stay on the device you use.
No build step: it's plain HTML, CSS and JavaScript in `index.html`.

---

© 2026 CDDigital. All rights reserved. Designed with Claude Code.
