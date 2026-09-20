# Life Threads — WebRush

A frontend-only interactive data story for the challenge **Your Life, In Receipts**.

## Stack
- React + Vite
- Tailwind CSS
- Lucide React
- React Router
- JavaScript

## Data
The project uses three supplied datasets:
- Spotify history
- Daily Household Transactions
- India transaction dataset

The UI is privacy-conscious: it uses aggregate insights rather than exposing raw names, card numbers, addresses, or other direct identifiers.

## Current experience
- Overview dashboard
- Search and category exploration
- Evidence-led connections
- Story chapters based on dataset time ranges
- Responsive UI
- Semantic controls and accessible focus states

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## WebRush notes
No backend, database, or server-side implementation is used. Derived insights are represented as frontend data so the app remains deployable as a static site.
