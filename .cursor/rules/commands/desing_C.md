Generate the full multi-page HTML5 + CSS3 starter for the described app.

Hard constraints:
- HTML5 + CSS3 only, no JavaScript.
- No external CSS frameworks.
- Use semantic tags: header, nav, main, aside, section, footer.
- All forms must use built-in HTML validation where possible (required, type="email", type="tel", minlength/maxlength, pattern where sensible).
- UI text in Polish. Code comments in English.
- Provide realistic placeholder data (2–3 tournaments, 2 teams, 2 referees, etc.) for tables/cards.

Project output:
- Create these files exactly:
  - styles.css
  - index.html
  - app.html
  - tournaments-list.html
  - tournament-new.html
  - tournament-edit.html
  - tournament-detail.html
  - settings.html
  - settings-teams-list.html
  - team-new.html
  - team-edit.html
  - team-detail.html
  - settings-referees-list.html
  - referee-new.html
  - referee-edit.html
  - settings-classifiers-list.html
  - classifier-new.html
  - classifier-edit.html
  - settings-volunteers-list.html
  - volunteer-new.html
  - volunteer-edit.html
  - account-edit.html
  - logout.html

Global layout rules:
- Authenticated pages share the same topbar + sidebar layout with consistent navigation links.
- Highlight the current page in the sidebar.
- Each page has a page title + primary action button (e.g., “Dodaj turniej”).
- Use a consistent container width and spacing.
- Add a footer with small text.

Tournament detail page rules:
- Show sections as cards and tables.
- For “per-field edit and clear”, represent each field with:
  - a read-only view and an “Edytuj” button that links to the edit page, and
  - a “Wyczyść” UI represented by a form with a reset button (non-functional but present).
- Include map links as normal anchors with placeholder URLs.

Include all file contents in the answer, each separated clearly with a filename header.
