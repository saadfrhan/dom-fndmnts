# DOM Fundamentals

A tiny Vite + TypeScript demo that teaches basic DOM manipulation patterns via a small contact list app. Data is stored client-side (localStorage).

## Features

- Render a list of contacts (implemented in `src/main.ts`)
- Add new contacts
- Remove contacts
- Client-side search/filter
- Browser persistence using localStorage (`src/storage.ts`)

## Stack / Notable deps

- Language: TypeScript (v6)
- Runtime / Tooling: Vite (dev server and build)
- Notable dev deps: vite, typescript

## Prerequisites

- Node.js (recommended v16+)
- pnpm (optional — npm or yarn also work)

## Install

Clone and install dependencies:

```bash
git clone https://github.com/saadfrhan/dom-fndmnts.git
cd dom-fndmnts
pnpm install
# or
npm install
```

## Development

Start the dev server (Vite):

```bash
pnpm dev
# or
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build & Preview

Create a production build:

```bash
pnpm build
# or
npm run build
```

Preview the production build locally:

```bash
pnpm preview
# or
npm run preview
```

## Project structure

```
index.html            — app entry (mounts /src/main.ts)
package.json          — scripts & dev dependencies (vite, typescript)
tsconfig.json         — TypeScript config
src/
  main.ts             — DOM logic: render, add, remove, search
  storage.ts          — localStorage helpers (save/load)
  types.ts            — Contact type
pnpm-lock.yaml        — lockfile (if using pnpm)
```

How it fits together: 

- `src/main.ts` is the app entrypoint (imported by index.html). It loads contacts from localStorage via loadFromStorage, renders them to the DOM, and wires the Add / Delete / Search buttons.
- `storage.ts` contains small JSON serialization helpers that read/write the "contacts" key in localStorage. All state stays in the browser.

## Implementation notes

- Contacts are simple objects: `{ id: number, name: string }` (see `src/types.ts`).
- New contact IDs are generated with `Date.now()`; data is persisted under the "contacts" key in localStorage.
- The app uses TypeScript and is bundled by Vite for development and production builds.


## License

(If you want a license, add a LICENSE file — otherwise this repo currently has no explicit license.)
