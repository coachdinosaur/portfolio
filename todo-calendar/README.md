# Todo List

A simple todo list with urgency levels. The list is the main screen; type new tasks in the bar at the bottom
(pick Critical / High / Medium / Low above it). New tasks go on today's list.
To check or plan another day, tap the calendar button (or the date at the top, or the date pill in the bottom bar)
to pull up the calendar, pick a day, then add tasks for that date.

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
- Finished tasks move to a collapsible *Completed* section
- "Move to today" for unfinished tasks from earlier days
- Works offline; an **Install** button appears when Chrome allows installing it (or Chrome ⋮ → *Add to Home screen*). It shows up as "Todo List" in your apps
- Export / import a JSON backup

Tasks are stored in the browser's `localStorage`, so they stay on the device you use.
No build step: it's plain HTML, CSS and JavaScript in `index.html`.
