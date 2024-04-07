# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Question :question:

File `server\api\call-function.js`

```
  // QUESTION - how to call this without the full URL?
  // ❌ this does NOT work locally
  // const whatever = await $fetch('/.netlify/functions/hello')

  // when running `netfliy dev` this will work if I use this full URL
  // http://localhost:8888/.netlify/functions/hello

  // how is this supposed to work in production? Do I something like BASE_URL?

  const whatever = await $fetch('https://nuxt3-netlify-functions.netlify.app/.netlify/functions/hello')
  console.log("🐥🐥", whatever)
  return whatever
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
