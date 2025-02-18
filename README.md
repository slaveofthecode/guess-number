# Guess Number - [let's go](https://guess-number-123.vercel.app/)

This is a simple game in which the user writes a number, and then the other part (the machine) guesses the number. The machine says a number with four digits, and if the digits coincide with your number (the same place and value), the number is correct. However, you must tell the amount the number coincides in place and value.

Main features:
- You can play on mobile as well as on the web.
- You can open the app on any mobile OS. If your phone is an iPhone, it is convenient to open the app on Safari. If your phone is an Android, you can open the app on Chrome.


## Tech

This app was built with different technologies, practices, and ways to use or apply different features, but always with love :)

Some tech used
- [vite](https://vite.dev) to create the app
- [bun](https://bun.sh/) it was used to replace NPM, because of is the fastest and best practice
- The app is hosted at [vercel](https://vercel.com/). 
- [Squoosh](https://squoosh.app/) was used to improve the weight of the images, icons, svg, etc.

----
----
----



- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
