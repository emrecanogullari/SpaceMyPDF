# SpaceMyPDF

A free, browser-based tool for adding customizable note-taking space to existing PDFs. PDF processing happens locally in the browser: uploaded documents are not sent to the application server.

## Features

- Upload a PDF from your device (up to 50 MB).
- Add note space on the left, right, top, bottom, or multiple sides at once.
- Set shared or separate horizontal and vertical note-space widths.
- Choose a white or custom note-space color.
- Add optional lines, grids, or dots and configure their spacing.
- Add an optional blank gap between the original page and the note area.
- Apply note space to every page (the default) or selected pages using ranges such as `1-3, 5, 8-10`.
- Preview the original and modified first three pages before downloading.
- Download the altered PDF directly, or select a save location in browsers that support the File System Access API.

## Technology Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **PDF processing**: pdf-lib, running client-side
- **Database and admin tooling**: PostgreSQL and custom JWT authentication
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd SpaceMyPDF
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. For the public PDF tool, no environment variables are required. Database, analytics, donation, email, Stripe, and admin features may require environment variables; see `PROJECT_HANDOFF.md` for the names and operational guidance. Never commit environment values.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Useful commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

`npm run lint` currently has known pre-existing failures, and the production build intentionally does not fail on all TypeScript or ESLint issues. A successful build is not a complete quality check.

## Maintainer notes

- `PROJECT_HANDOFF.md` is the local source of truth for product posture, security constraints, integrations, known debt, and manual verification.
- The public product is completely free and does not require accounts, trials, or memberships.
- Historic membership, dashboard, referral, and Stripe code remains in the repository but is intentionally inactive. Do not remove or reactivate it without following the handoff guidance.
- The active PDF-generation logic is in `app/page.tsx`. Preview generation and download generation are separate paths and must be kept behaviorally identical.
