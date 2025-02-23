# Guess Number - [let's go](https://guess-number-123.vercel.app/)

This is a simple game in which the user writes a number, and then the other part (the machine) guesses the number. The machine says a number with four digits, and if the digits coincide with your number (the same place and value), the number is correct. However, you must tell the amount the number coincides in place and value.

Main features:
- You can play on mobile as well as on the web.
- You can open the app on any mobile OS. If your phone is an iPhone, it is convenient to open the app on Safari. If your phone is an Android, you can open the app on Chrome.
- In addition, you can installing it on the mobile without use the market, because of is a WPA which the application working similar to a native app.


## Tech

Technologies were used 
- [vite](https://vite.dev) to create the app
- [bun](https://bun.sh/) replaced to the NPM, because of is the fastest and best practice
- Hosted at [vercel](https://vercel.com/). 
- [Squoosh](https://squoosh.app/) to improve the weight of the images, icons, svg, etc.
- [TailwindCss](https://tailwindcss.com/) styling and components
----
----
----


### Create app using [vite](https://vite.dev) & [bun](https://bun.sh/)
```bash
bun create vite@latest guess-number --template react-ts
cd guess-number
bun install
bun run dev
code .
```

----

### Install [TailwindCss](https://tailwindcss.com/docs/installation/using-vite) using vite

1. Terminal
```bash
bun add -d tailwindcss @tailwindcss/vite
```

2. vite.config.ts
```ts
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // <--
export default defineConfig({
  plugins: [
    tailwindcss(), // <--
  ],
})
```
3. index.css
```css
@import "tailwindcss";
```
4. Initialize config
```bash
bun run tailwindcss init
```
5. tailwind.config.ts
```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // class to activate dark mode
  theme: {
    extend: {
      colors: {
        background: '#000000',
      },
    },
  },
  plugins: [],
};

export default config;
```
6. Reset server (some case is needed)
```bash
bun vite build
bun vite preview
```
----
### Convert to a PWA with Service Workers
1 - Terminal
```bash
bun add -d vite-plugin-pwa
```
2 - Create a `sw.ts` file in the src directory.
```ts
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New content available. Reload?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('App is ready to work offline.');
  },
});
```
2.1 - If the import isn't knowledge, you can apply the next solution
`tsconfig.app.json``
```json
{
  "compilerOptions": {
    // ...
    "types": ["vite-plugin-pwa/client"] // <--
    // ...
  },
}
```
3 - Update the `vite.config.ts` file to include the vite-plugin-pwa plugin.
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({ // <--
      registerType: 'autoUpdate',
      manifest: {
        orientation: 'portrait',
        name: 'My Guess Number PWA App',
        short_name: 'guess-number',
        description: 'A simple number guessing game',
        start_url: '/',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#000000',
        icons: [
          {
            src: '/icons/logo-mobile-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/logo-mobile-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      includeAssets: [
        'icons/logo-mobile-192.png', 
        'icons/logo-mobile-512.png'
      ],
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true, // This deletes the dist folder before each build
  },
});
```
4. Register the service worker.
`main.tsx` or `index.tsx` .
```tsx
import './sw';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
6 - Add the PWA icons to the public directory (has to have a relationship with the manifest setting)
```
\ public
  \ icons 
    \ logo-mobile-192.png
    \ logo-mobile-512.png
```
----


<br />
<br />
