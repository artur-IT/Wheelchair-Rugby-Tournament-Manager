You are a senior UX + frontend architect. Create a clear sitemap and file structure for a responsive multi-page admin dashboard web app.

App: Wheelchair Rugby Tournament Manager (season management + weekend tournaments).
Tech constraints: HTML5 + CSS3 only. No JavaScript. No CSS frameworks (no Bootstrap/Tailwind). Use only semantic HTML5 and built-in form validation attributes.
Language: UI text in Polish. Code and code comments in English.

Layout decision: Authenticated area uses Topbar + Left Sidebar dashboard layout. Public landing page is separate.

Required pages (multi-page):
- index.html (public landing): app title, short description, login form (email + password), CTA buttons.
- app.html (post-login home/dashboard): quick links, season summary.
- tournaments-list.html: list of tournaments, search/filter UI (non-functional), “New tournament” link/button.
- tournament-new.html: tournament creation form.
- tournament-edit.html: tournament edit form (same fields as new).
- tournament-detail.html: tournament details displayed as cards/tables/lists with per-field edit and clear UI (use forms + inputs + reset buttons; non-functional).
- settings.html (season settings overview): cards linking to modules.
- settings-teams-list.html, team-new.html, team-edit.html, team-detail.html
- settings-referees-list.html, referee-new.html, referee-edit.html
- settings-classifiers-list.html, classifier-new.html, classifier-edit.html
- settings-volunteers-list.html, volunteer-new.html, volunteer-edit.html
- account-edit.html (edit account)
- logout.html (simple “You have been logged out” page)

Team data requirements (fields shown in forms and details):
- Team: name, logo placeholder, address/contact data, contact person (first name, last name, email, phone), coach, staff.
- Team detail includes: players list (table), add/edit/remove player UI (non-functional), coach section, staff section.

Tournament detail sections (cards/tables):
- sports hall + map link
- accommodation + map link
- catering (text)
- teams list
- match schedule between teams (table)
- referees list
- classifiers list
- volunteers list
- refereeing schedule (table)

Deliverables:
1) Sitemap as a bullet list grouped by Public vs Authenticated.
2) Recommended navigation structure (sidebar items + subitems).
3) A “shared layout” plan: which header/sidebar elements repeat on every authenticated page.
4) A list of all HTML files to generate (exact filenames).
Keep it practical and consistent.
