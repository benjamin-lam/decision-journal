# Worklog

## Day 1

Idea:
Decision Journal – a minimal project memory tool.

Goals:

- local-first
- mobile-first
- extremely simple
- timeline based

Architecture:

GitHub Pages
PWA
IndexedDB

Next:

First timeline prototype.

## 2026-03-05 – Commit ee539fe

**Message**

Add signal property to journal entry

**What changed**

- Added `signal` field to entry object in `js/journal.js`
- Captures signal value from `entrySignal` input element
- Entry schema now includes: type, signal, text, time

**Why it matters**

Extends the data model beyond basic text entries.

Allows capturing context or metadata about each entry.

Still minimal—just one extra string field.

**Observations**

The commit shows some formatting inconsistencies (indentation).

The HTML likely needs an input field for `entrySignal` to exist.

No validation or display logic for the signal field yet.

**Next possible steps**

- Add the `entrySignal` input field to `index.html`
- Display signal value in timeline rendering
- Consider what "signal" means in the context of decisions/meetings/risks
- Add basic validation (empty check, max length)