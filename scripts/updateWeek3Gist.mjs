import "dotenv/config";

const token = process.env.GITHUB_GIST_TOKEN || process.env.GIST_TOKEN;
const gistUrl = process.env.GITHUB_DAILY_NOTES_GIST_URL;

if (!token) {
  console.error("Missing token. Set GITHUB_GIST_TOKEN or GIST_TOKEN in .env");
  process.exit(1);
}
if (!gistUrl) {
  console.error("Missing gist url. Set GITHUB_DAILY_NOTES_GIST_URL in .env");
  process.exit(1);
}

const gistId = gistUrl.trim().split("/").filter(Boolean).pop();
if (!gistId) {
  console.error("Could not parse gist id from GITHUB_DAILY_NOTES_GIST_URL");
  process.exit(1);
}

const entryMon = `

## 2026-03-16 (Mon)

- Extended the \`Team\` model with city and postal code fields, updating related forms, Zod validation, and API endpoints.
- Added a \`toTitleCase\` helper for consistent text normalization and wired it into API schemas.
- Improved UI details (e.g. app title) and strengthened new-player form validation + error handling.
- Updated dependencies and added/adjusted tests around validation.

<span style="color:#56D5FC;"><strong>Frontend — remember:</strong> JS-level validation (e.g. Zod) is more reliable than HTML-only attributes and keeps rules consistent across UI + API. Normalize data early (like title-casing names) to avoid messy edge cases later.</span>

---
`;

const entryTue = `

## 2026-03-17 (Tue)

- Enhanced tournament data (e.g. catering/parking) across the model and forms, and improved the tournament details view.
- Refined data fetching in \`TournamentDetails\` with clear loading/error/empty states and better date formatting.
- Added date pickers to \`TournamentForm\` plus Zod schemas and submit-state handling.
- Cleanup work: removed redundant HTML validation attrs and updated tests to prefer label-based queries.

<span style="color:#56D5FC;"><strong>Frontend — remember:</strong> In UI tests, prefer accessibility-first selectors (labels/roles with names) — they’re more stable than DOM structure. Treat loading/error/empty states as part of the feature, not an afterthought.</span>

---
`;

async function run() {
  const res = await fetch(`https://api.github.com/gists/${gistId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    console.error("Failed to fetch gist:", res.status, await res.text());
    process.exit(1);
  }

  const gist = await res.json();
  const files = gist.files || {};
  const weekKey =
    Object.keys(files).find((f) => f.toLowerCase() === "week-3.md") ||
    Object.keys(files).find((f) => /^week-3\b/i.test(f));

  if (!weekKey) {
    console.error("week-3.md not found in gist. Available files:", Object.keys(files).join(", "));
    process.exit(1);
  }

  const oldContent = files[weekKey]?.content || "";

  const hasMon = oldContent.includes("2026-03-16");
  const hasTue = oldContent.includes("2026-03-17");

  let newContent = oldContent;
  if (!hasMon) newContent += entryMon;
  if (!hasTue) newContent += entryTue;

  if (newContent === oldContent) {
    console.log("No changes needed (entries already present).");
    return;
  }

  const patchRes = await fetch(`https://api.github.com/gists/${gistId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ files: { [weekKey]: { content: newContent } } }),
  });

  if (!patchRes.ok) {
    console.error("Failed to patch gist:", patchRes.status, await patchRes.text());
    process.exit(1);
  }

  console.log(`Updated gist file: ${weekKey}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
