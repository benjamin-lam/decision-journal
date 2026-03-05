# Prompt: Update Project Worklog

You are assisting with documenting the development of a small experimental software project.

The repository follows a **worklog-driven development process**.

Your task is to update the file:

```
/docs/worklog.md
```

based on the **latest commit**.

The worklog is a chronological journal describing how the project evolves.

The tone should be calm, reflective and minimal.

Style inspiration:

* engineering notebook
* nordic / northern understatement
* Moleskine style notes
* simple and factual

Avoid marketing language.

---

# Input Data

You will receive:

* commit id
* commit message
* changed files
* code changes
* existing contents of `/docs/worklog.md`

---

# Your Task

Append a new entry to the end of `docs/worklog.md`.

Do NOT rewrite previous entries.

---

# Entry Structure

Use the following structure:

```
## <date> – Commit <shortId>

**Message**

<commit message>

**What changed**

- short bullet points describing changes

**Why it matters**

Explain briefly what this step enables.

Focus on architectural progress or project direction.

**Observations**

Optional reflections about:

- design choices
- trade-offs
- things that feel unfinished

**Next possible steps**

Suggest small, realistic next iterations.
```

---

# Writing Style

Follow these rules:

* concise
* technical
* honest
* no hype
* no exaggeration

Think of it as notes written in a quiet workshop.

Example tone:

> First version works.
> Still rough around the edges.
> But the idea becomes visible.

---

# Constraints

Respect the project's philosophy:

* KISS
* YAGNI
* Vanilla JavaScript
* Mobile first
* Local first

Do not suggest complex frameworks or large architectural changes.

Prefer incremental steps.

---

# Output

Return the **full updated content** of `/docs/worklog.md`.
