# DOM Fundamentals

A minimal Vite + TypeScript demo showing basic DOM manipulation via a small contact list app.

## Quick Features

- List of contacts (rendered from `src/main.ts`)
- Add new contacts
- Remove contacts
- Client-side search/filter

## Prerequisites

- Node.js (recommended v16+)
- `pnpm` (optional — `npm` or `yarn` also work)

## Install

Install dependencies:

```bash
pnpm install
```

Or with npm:

```bash
npm install
```

## Development

Start the dev server (Vite):

```bash
pnpm dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build & Preview

Create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Project Structure

- `index.html` — app entry
- `src/main.ts` — DOM logic (add/search/remove contacts)
- `package.json` — scripts and dev deps
