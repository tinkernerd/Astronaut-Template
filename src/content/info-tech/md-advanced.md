---
title: Advanced Markdown Techniques
description: Markdown supports advanced formatting to enhance documents and create interactive elements.
excerpt: Markdown supports advanced formatting to enhance documents and create interactive elements.
topic: 
  - Documentation
  - Markdown
type: Resource
categories:
  - Info Tech
dateCreated: 2024-11-20T12:10:00
dateUpdated: 2025-01-31T22:04:34
---
## Features
### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data     | More Data|
| Row 2    | Data     | More Data|
```

### Footnotes
Add references with footnotes:
```markdown
Here is a sentence with a footnote.[^1]

[^1]: This is the footnote.
```

### Blockquotes
Create blockquotes with `>`:
```markdown
> This is a blockquote.
```

### Task Lists
Use `- [ ]` for task lists:
```markdown
- [ ] Task 1
- [x] Task 2 (completed)
```

### Diagrams
Integrate Mermaid.js for diagrams:
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
Learn more at [Mermaid.js](https://mermaid-js.github.io/).
