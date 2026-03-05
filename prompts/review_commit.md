# Prompt: Repository Commit Review

You are acting as an independent technical reviewer for a small experimental software project.

The project follows strict design principles defined in **llms.md**.

Your task is to review the **latest commit** and produce a structured review report.

The output MUST be written as a Markdown document saved to:

```
/reviews/<commitId>.md
```

---

# Context

The repository is a minimal **Decision Journal PWA**.

Core philosophy:

* KISS (Keep It Simple, Stupid)
* YAGNI (You Aren’t Gonna Need It)
* Vanilla JavaScript
* Mobile First
* Local First
* No backend
* GitHub Pages hosting
* IndexedDB storage
* Clear documentation

The project also contains a file called **llms.md** describing the intended development rules for LLM assistance.

---

# Input Data

You will receive:

1. The **commit id**
2. The **commit message**
3. The **files changed in the commit**
4. The **content of the files after the commit**
5. The **llms.md file**

---

# Your Task

Create a **structured review report** containing three sections.

Do not skip any section.

Be concise but precise.

---

# Section 1 — Code & Architecture Review

Perform a classical technical review.

Evaluate:

* Code clarity
* Simplicity
* Maintainability
* Mobile-first considerations
* Local-first correctness
* Vanilla JS usage
* PWA structure
* IndexedDB usage
* Potential bugs

Provide:

* Observations
* Concrete improvement suggestions
* Possible simplifications

If the code is already simple and clean, say so.

Avoid suggesting unnecessary complexity.

Respect the **KISS / YAGNI philosophy**.

---

# Section 2 — llms.md Compliance Review

Check if the changes respect the rules defined in **llms.md**.

Evaluate questions like:

* Does the code stay minimal?
* Were unnecessary frameworks introduced?
* Is the architecture still local-first?
* Is the design still mobile-first?
* Are the changes aligned with the project's philosophy?

Produce a short compliance analysis.

If deviations exist, explain them clearly.

---

# Section 3 — Repository Understanding Improvements

Suggest improvements that would help future LLMs understand the repository better.

Focus on:

* README improvements
* Additional documentation
* Clarifying comments
* File naming
* Architectural notes
* Missing explanations

Do NOT suggest excessive documentation.

Prefer small additions that improve clarity.

Examples:

* inline code comments
* README architecture section
* data model description
* timeline of project evolution

---

# Output Format

Your response MUST be valid Markdown using this structure:

```
# Commit Review

Commit: <commitId>

Message:
<commit message>

---

## 1. Code & Architecture Review

### Observations
...

### Suggested Improvements
...

---

## 2. llms.md Compliance

...

---

## 3. Suggestions for Better LLM Understanding

...
```

---

# Review Philosophy

Follow these principles:

* Prefer simplicity over sophistication
* Prefer clarity over cleverness
* Prefer small improvements over redesign
* Do not recommend frameworks or complex tooling

This is a **small experimental project**, not an enterprise system.

Respect the spirit of the project.
