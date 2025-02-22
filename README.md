# Guess Number - [let's go](https://guess-number-123.vercel.app/)

This is a simple game in which the user writes a number, and then the other part (the machine) guesses the number. The machine says a number with four digits, and if the digits coincide with your number (the same place and value), the number is correct. However, you must tell the amount the number coincides in place and value.

Main features:
- You can play on mobile as well as on the web.
- You can open the app on any mobile OS. If your phone is an iPhone, it is convenient to open the app on Safari. If your phone is an Android, you can open the app on Chrome.
- In addition, you can installing it on the mobile without use the market, because of is a WPA which the application working similar to a native app.


## Tech

Some tech that were used on the built
- [vite](https://vite.dev) to create the app
- [bun](https://bun.sh/) it was used to replace NPM, because of is the fastest and best practice
- The app is hosted at [vercel](https://vercel.com/). 
- [Squoosh](https://squoosh.app/) was used to improve the weight of the images, icons, svg, etc.
- [TailwindCss](https://tailwindcss.com/) to styles and components
----
----
----


### Create app using [vite](https://vite.dev) & [bun](https://bun.sh/)
```bash
bun create vite@latest guess-number --template react-ts
cd guess-number
bun install # Important: Install the dependencies after project creation.
bun run dev
code . # Open Visual Studio Code
```

----

### Install [TailwindCss](https://tailwindcss.com/docs/installation/using-vite) using vite

Terminal
```bash
bun add tailwindcss @tailwindcss/vite
```

vite.config.ts
```ts
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // <--
export default defineConfig({
  plugins: [
    tailwindcss(), // <--
  ],
})
```

index.css
```css
@import "tailwindcss";
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
3 - Update the `vite.config.ts` file to include the vite-plugin-pwa plugin.
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My PWA App',
        short_name: 'PWA App',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
```
4 - Register the service worker: Update your main.tsx or index.tsx file to register the service worker.
```tsx
import './sw';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```
6 - Add the PWA icons to the public directory:
```
\ public
  \ pwa-192x192.png
  \ pwa-512x512.png
```
----


<br />
<br />
