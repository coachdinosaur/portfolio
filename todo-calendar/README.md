# Todo Calendar

A simple todo list on a calendar. Pick a day, type a task, choose a priority, and tap **Add**.

**Live:** https://coachdinosaur.github.io/portfolio/todo-calendar/

## Priorities

| Level    | Use it for                          |
|----------|-------------------------------------|
| Critical | Must be done now / today, no excuses |
| High     | Urgent, do soon                     |
| Medium   | Needed, but can wait a bit          |
| Low      | Normal, whenever there's time       |

## Features

- Month calendar with coloured dots for open tasks on each day (swipe to change month)
- Tap a task to edit it, tap its label to change priority, × to delete (with undo)
- "Move to today" for unfinished tasks from earlier days
- Works offline and can be installed to the home screen (Chrome menu → *Add to Home screen*)
- Export / import a JSON backup

Tasks are stored in the browser's `localStorage`, so they stay on the device you use.
No build step: it's plain HTML, CSS and JavaScript in `index.html`.
