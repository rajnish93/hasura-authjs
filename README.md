# @hasura/auth-js

Optimized Hasura Auth client library with latest packages and improved performance.

## Features

- 🔐 Multiple authentication methods (Email/Password, Passwordless, OAuth, WebAuthn, Anonymous)
- 🔄 Automatic token refresh with Bearer token support
- 🔒 MFA (Multi-Factor Authentication) support
- 🎫 Personal Access Tokens (PAT)
- 📱 Cross-tab synchronization
- 🎯 TypeScript support
- ⚡ Optimized with latest packages

## Installation

```bash
npm install @hasura/auth-js
# or
pnpm add @hasura/auth-js
# or
yarn add @hasura/auth-js
```

## Quick Start

```typescript
import { HasuraAuthClient } from '@hasura/auth-js'

const auth = new HasuraAuthClient({
  url: 'https://your-hasura-auth-endpoint.com'
})

// Sign up
const { session, error } = await auth.signUp({
  email: 'user@example.com',
  password: 'secure-password'
})

// Sign in
const { session, error } = await auth.signIn({
  email: 'user@example.com',
  password: 'secure-password'
})

// Sign out
await auth.signOut()
```

## Documentation

See the [original library documentation](https://docs.nhost.io/reference/javascript/auth) for detailed API reference.

## License

MIT

