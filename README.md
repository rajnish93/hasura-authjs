# hasura-authjs

[![npm version](https://img.shields.io/npm/v/hasura-authjs.svg)](https://www.npmjs.com/package/hasura-authjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Optimized Hasura Auth client library with latest packages and improved performance. A drop-in replacement for the deprecated `@nhost/hasura-auth-js` package.

> **Note**: This package is based on the original [`@nhost/hasura-auth-js`](https://www.npmjs.com/package/@nhost/hasura-auth-js) package by [Nhost](https://nhost.io). The original package has been deprecated in favor of `@nhost/nhost-js@^4.0.0`. This fork provides an updated version with the latest dependencies and optimizations.

## Versioning

This package uses version **3.0.0** to indicate it's the next major version after the deprecated `@nhost/hasura-auth-js` package (which ended at v2.12.0). The major version bump reflects:

- **Major dependency updates**: WebAuthn v13.2.2, Vite 7, TypeScript 5.9
- **API changes**: Updated WebAuthn function signatures
- **Removed deprecated packages**: No longer depends on deprecated `@simplewebauthn/types`
- **Modern build tooling**: Latest stable versions of all dependencies

This follows semantic versioning principles, where version 3.0.0 signals significant updates and improvements over the 2.x series.

## Features

- 🔐 **Multiple Authentication Methods**: Email/Password, Passwordless, OAuth, WebAuthn, Anonymous, MFA
- 🔄 **Automatic Token Refresh**: Built-in token refresh with Bearer token support
- 🔒 **MFA Support**: Multi-Factor Authentication with TOTP
- 🎫 **Personal Access Tokens**: Create and manage PATs
- 📱 **Cross-tab Synchronization**: Automatic session sync across browser tabs
- 🎯 **TypeScript Support**: Full TypeScript definitions included
- ⚡ **Optimized**: Latest stable dependencies and modern build tools
- 📦 **Dual Format**: Supports both ESM and CommonJS
- 🗺️ **Source Maps**: Full source maps for debugging

For a complete list of features and methods, see [FEATURES.md](./FEATURES.md).

## Installation

```bash
npm install hasura-authjs
# or
pnpm add hasura-authjs
# or
yarn add hasura-authjs
```

## Quick Start

```typescript
import { HasuraAuthClient } from 'hasura-authjs'

// Initialize the client
const auth = new HasuraAuthClient({
  url: 'https://your-hasura-auth-endpoint.com'
})

// Sign up
const { session, error } = await auth.signUp({
  email: 'user@example.com',
  password: 'secure-password'
})

if (error) {
  console.error('Sign up error:', error)
} else {
  console.log('User signed up:', session?.user)
}

// Sign in
const { session: signInSession, error: signInError } = await auth.signIn({
  email: 'user@example.com',
  password: 'secure-password'
})

// Check authentication status
const isAuthenticated = auth.isAuthenticated()
const currentSession = auth.getSession()

// Sign out
await auth.signOut()
```

### More Examples

```typescript
// Passwordless email (magic link)
await auth.signIn({ email: 'user@example.com' })

// OAuth provider
await auth.signIn({ provider: 'google' })

// Anonymous sign in
await auth.signIn()

// Get access token
const token = auth.getAccessToken()

// Listen to auth state changes
auth.onAuthStateChanged((event, session) => {
  console.log('Auth state changed:', event, session)
})
```

For more examples and API reference, see [FEATURES.md](./FEATURES.md).

## Migration from @nhost/hasura-auth-js

This package is a drop-in replacement for the deprecated `@nhost/hasura-auth-js`:

1. **Uninstall the old package**:
   ```bash
   npm uninstall @nhost/hasura-auth-js
   ```

2. **Install the new package**:
   ```bash
   npm install hasura-authjs
   ```

3. **Update your imports**:
   ```typescript
   // Before
   import { HasuraAuthClient } from '@nhost/hasura-auth-js'
   
   // After
   import { HasuraAuthClient } from 'hasura-authjs'
   ```

That's it! The API is identical, so no other code changes are needed.

## Documentation

- **[FEATURES.md](./FEATURES.md)**: Complete feature list and API methods
- **[OPTIMIZATION_NOTES.md](./OPTIMIZATION_NOTES.md)**: Technical details and optimization notes
- **[Original Nhost Documentation](https://docs.nhost.io/reference/javascript/auth)**: Detailed API reference

## Requirements

- **Node.js**: >= 18.0.0
- **Browsers**: Modern browsers with ES2022 support
- **Hasura Auth**: Compatible with Hasura Auth v0.38.0+

## Credits

This package is based on the original work by [Nhost](https://nhost.io):
- Original package: [`@nhost/hasura-auth-js`](https://www.npmjs.com/package/@nhost/hasura-auth-js)
- Original repository: [nhost/nhost](https://github.com/nhost/nhost)
- Original documentation: [Nhost Documentation](https://docs.nhost.io)

## License

MIT

