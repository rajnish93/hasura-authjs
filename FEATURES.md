# Hasura Auth JS - Features & Methods

## Overview
This is an optimized clone of the Hasura Auth JavaScript client library with updated dependencies and improved structure.

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

## Package Versions (Latest)
- `@simplewebauthn/browser`: ^10.0.0
- `xstate`: ^5.0.0
- `jwt-decode`: ^4.0.0
- `js-cookie`: ^3.0.5
- `fetch-ponyfill`: ^7.1.0

## Improvements in This Clone
1. ✅ Updated to latest package versions
2. ✅ Modern TypeScript configuration (ES2022)
3. ✅ Optimized build with Vite 6
4. ✅ Better tree-shaking support
5. ✅ Improved type safety
6. ✅ Cleaner project structure

