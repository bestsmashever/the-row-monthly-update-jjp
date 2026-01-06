# Monthly Update Release Process

This project now treats each monthly update as a **versioned release** with an auditable trail. Use this checklist to keep updates consistent, traceable, and rollback-ready.

## 1) Create a new release entry
- Open `content/releases.ts`.
- Duplicate the latest entry and update:
  - `slug`: use `YYYY-MM` (e.g., `2026-01`).
  - `monthLabel`: human-readable month (e.g., `January 2026`).
  - `publishedAt`: publication date in `YYYY-MM-DD`.
  - `summary`, `highlights`, and `changesSincePrevious`: summarize what changed this month.
  - `rollbackPlan`: note how to restore the prior state (e.g., previous slug/commit).
  - `auditCheckpoints`: update status, owner, and dates for content freeze, QA, design, and sign-off.
- Keep the most recent release at the top of the array so the UI promotes it automatically.

## 2) Update visual content
- Replace or add images in `public/` that correspond to the new month’s materials.
- Update copy inside page components (e.g., `components/InvestmentThesis.tsx`, `components/MarketFundamentals.tsx`) with the new month’s data and narrative.
- Align bullets with the highlights you recorded in `content/releases.ts`.

## 3) Validate and preview
- Run `npm run lint`.
- Start the dev server (`npm run dev -- --hostname 0.0.0.0 --port 3000`) and visually QA:
  - Release Governance block shows the correct month, version slug, and checkpoints.
  - Change Tracking card lists the current-to-previous deltas you entered.
  - Release History cards display all versions with readable summaries.

## 4) Ship with auditability
- Commit the content changes together with the updated `content/releases.ts` entry so the codebase captures the frozen snapshot.
- Tag the release in version control if desired (e.g., `git tag release-2026-01`).
- Keep prior assets in `public/` or under version control to allow quick rollback to the previous slug/commit.

## 5) Rollback
- Identify the prior release slug/commit recorded in `rollbackPlan`.
- Revert the content components and `content/releases.ts` to that commit (or cherry-pick only the needed files).
- Re-deploy; the Release Governance block will automatically highlight the restored version.
