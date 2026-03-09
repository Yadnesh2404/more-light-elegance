# More Light — Premium Hair Salon

A modern, elegant website for **More Light**, a premium hair salon offering expert haircuts, styling, coloring, and treatments in a calm and sophisticated atmosphere.

## Tech Stack

- **Vite** — lightning-fast dev server and build tool
- **React** + **TypeScript** — component-based UI with type safety
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — accessible, composable UI components

## Getting Started

Make sure you have **Node.js** and **npm** installed, then run:

```sh
# 1. Clone the repository
git clone <YOUR_GIT_URL>

# 2. Navigate into the project directory
cd more-light-elegance

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The dev server will start at `http://localhost:5173` with hot-module reloading.

## Building for Production

```sh
npm run build
```

The built output will be in the `dist/` folder, ready to be deployed to any static hosting provider (Netlify, Vercel, Cloudflare Pages, etc.).

## Project Structure

```
├── public/
│   └── images/          # Static images and assets (logo, hero, branches, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-level components
│   ├── hooks/           # Custom React hooks
│   └── main.tsx         # App entry point
├── index.html           # HTML shell with meta tags and favicon
└── vite.config.ts       # Vite configuration
```
