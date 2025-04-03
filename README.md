# Skin Seoul web

## Prerequisites
1. Node.js v20.4.0

## Getting Started

First, run the development server:

```bash
npm install   # to install the dependencies
npm run tokens   # to generate design system d.ts
flavor=local-dev npm run dev   # to start the development server
npm run start # to start the server
flavor={mode} npm run build # to build the project
```

## FAQ

### I want to set up a development environment
```bash
$ mv .env.local
# Run the development server
$ flavor={name} npm run dev
```

### I want to automatically use different files based on the environment
```bash
# Specify the .env suffix using the 'flavor' variable to use .env.dev-startup as the environment file
$ export flavor=dev-startup
# .env.dev-startup will be copied to .env.local, and the development server will start
$ npm run dev
```

## Setup Proxy

1. Assign assetPrefix in your next.config as shown below. This ensures chunk files are loaded from the configured origin.
```ts
const nextConfig: NextConfig = {
  assetPrefix: process.env.NEXT_ENV_ORIGN,
};
```

> [next-config-js/assetPrefix](https://nextjs.org/docs/app/api-reference/config/next-config-js/assetPrefix)

2. Next.js has a security policy allowing images to be loaded only from specific domains.
You can configure it as shown below. The domains field can be omitted if unnecessary.

```ts
const nextConfig: NextConfig = {
  images: {
    // Deprecated, you can remove this
    domains: [process.env.NEXT_ENV_ORIGN || 'http://localhost:3000'],
    path: `${process.env.NEXT_ENV_ORIGN}/_next/image`,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skin-seoul.com',
      },
      {
        protocol: 'https',
        hostname: 'dev.skin-seoul.com',
      },
      {
        protocol: 'https',
        hostname: 'dev-webapp.skin-seoul.com',
      },
    ],
  },
};
```

> [Nextjs remote patterns](https://nextjs.org/docs/app/api-reference/components/image#remotepatterns)
