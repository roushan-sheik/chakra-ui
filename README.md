This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# scripts

```
  "scripts": {
   "env": "scripts/env.sh",
   "dev": "npm run env && next dev",
   "build": "npm run tokens && npm run env && next build",
   "start": "next start",
   "lint": "next lint",
   "lint:fix": "eslint \"src/**/*.{js,ts,tsx}\" --fix && prettier --write \"src/**/*.{js,ts,tsx}\"",
   "start:prod": "next start -p 80",
   "tokens": "npx @chakra-ui/cli typegen ./src/styles/theme/index.ts",
   "tokens:watch": "npx @chakra-ui/cli typegen ./src/styles/theme/index.ts --watch"
 },
```
