# hasura-authjs - Features & Methods

## Overview

`hasura-authjs` is an optimized Hasura Auth JavaScript client library with updated dependencies and improved structure. This package is based on the original [`@nhost/hasura-auth-js`](https://www.npmjs.com/package/@nhost/hasura-auth-js) package by [Nhost](https://nhost.io), which has been deprecated in favor of `@nhost/nhost-js@^4.0.0`.

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

const auth = new HasuraAuthClient({
  url: 'https://your-hasura-auth-endpoint.com'
})
```

## Core Features

### 1. Authentication Methods

#### Sign Up
- **Email/Password**: `signUp({ email, password })`
- **Security Key (WebAuthn)**: `signUp({ email, securityKey: true })`

#### Sign In
- **Email/Password**: `signIn({ email, password })`
- **Passwordless Email (Magic Link)**: `signIn({ email })`
- **Passwordless SMS**: `signIn({ phoneNumber })` + `signIn({ phoneNumber, otp })`
- **Email OTP**: `signInEmailOTP(email)` + `verifyEmailOTP(email, otp)`
- **OAuth Providers**: `signIn({ provider: 'google' })` (supports 20+ providers)
- **Security Key (WebAuthn)**: `signIn({ email, securityKey: true })` or `signInSecurityKey()`
- **Personal Access Token (PAT)**: `signInPAT(token)`
- **ID Token**: `signInIdToken({ provider, idToken, nonce })`
- **Anonymous**: `signIn()` (no params)
- **MFA TOTP**: `signIn({ otp, ticket })`

### 2. Session Management
- **Get Session**: `getSession()`
- **Get Access Token**: `getAccessToken()`
- **Get Decoded Token**: `getDecodedAccessToken()`
- **Get Hasura Claims**: `getHasuraClaims()` / `getHasuraClaim(name)`
- **Refresh Session**: `refreshSession(refreshToken?)`
- **Initialize with Session**: `initWithSession({ session })`
- **Automatic Token Refresh**: Built-in with Bearer token support

### 3. User Management
- **Get User**: `getUser()`
- **Change Email**: `changeEmail({ newEmail })`
- **Change Password**: `changePassword({ newPassword, ticket? })`
- **Reset Password**: `resetPassword({ email })`
- **Send Verification Email**: `sendVerificationEmail({ email })`
- **Deanonymize**: `deanonymize(params)`

### 4. Security Features
- **Add Security Key**: `addSecurityKey(nickname?)`
- **Elevate Email Security Key**: `elevateEmailSecurityKey(email)`
- **Connect Provider**: `connectProvider({ provider })`
- **Link ID Token**: `linkIdToken({ provider, idToken, nonce })`
- **Create PAT**: `createPAT(expiresAt, metadata?)`

### 5. Multi-Factor Authentication (MFA)
- **Enable MFA**: Via state machine
- **Sign in with MFA**: `signIn({ otp, ticket })`
- **MFA TOTP Support**: Full TOTP implementation

### 6. State Management
- **Authentication Status**: `isAuthenticated()`, `isAuthenticatedAsync()`, `getAuthenticationStatus()`
- **State Change Listeners**: `onAuthStateChanged(fn)`, `onTokenChanged(fn)`
- **Cross-tab Sync**: Automatic via BroadcastChannel

### 7. Sign Out
- **Sign Out**: `signOut()` - from current device
- **Sign Out All**: `signOut({ all: true })` - from all devices

## Architecture

### State Machine (XState)
- Uses XState for robust state management
- Handles complex authentication flows
- Automatic token refresh with configurable intervals
- Error handling and retry logic

### Storage
- Supports multiple storage types: `web` (localStorage), `custom`, `react-native`
- Secure token storage
- Automatic token persistence

### Network
- Bearer token support in all authenticated requests
- Automatic retry on network errors
- Configurable timeout and error handling

## Supported OAuth Providers
- Google, GitHub, Facebook, Twitter, Apple
- Azure AD, Bitbucket, Discord, GitLab
- LinkedIn, Spotify, Strava, Twitch
- Windows Live, WorkOS
- And more...

## Package Versions

- `@simplewebauthn/browser`: ^13.2.2 (types integrated, no separate types package needed)
- `xstate`: ^4.38.3
- `jwt-decode`: ^4.0.0
- `js-cookie`: ^3.0.5
- `fetch-ponyfill`: ^7.1.0
- `vite`: ^7.2.1 (build tool)
- `typescript`: ^5.9.3

## Improvements in This Package

1. ✅ Updated to latest stable package versions
2. ✅ Modern TypeScript configuration (ES2022)
3. ✅ Optimized build with Vite 7
4. ✅ Dual output: ESM and CommonJS formats
5. ✅ Better tree-shaking support
6. ✅ Improved type safety with full TypeScript declarations
7. ✅ Cleaner project structure
8. ✅ Source maps for better debugging
9. ✅ Stable XState v4 (avoiding v5 breaking changes)
10. ✅ Latest WebAuthn library (v13.2.2) with integrated types

## Migration from @nhost/hasura-auth-js

This package is a drop-in replacement for the deprecated `@nhost/hasura-auth-js`:

```typescript
// Before
import { HasuraAuthClient } from '@nhost/hasura-auth-js'

// After
import { HasuraAuthClient } from 'hasura-authjs'
```

The API is identical, so no code changes are needed beyond the import statement.

## Credits

This package is based on the original work by [Nhost](https://nhost.io):
- Original package: [`@nhost/hasura-auth-js`](https://www.npmjs.com/package/@nhost/hasura-auth-js)
- Original repository: [nhost/nhost](https://github.com/nhost/nhost)
- Original documentation: [Nhost Documentation](https://docs.nhost.io)

## License

MIT

