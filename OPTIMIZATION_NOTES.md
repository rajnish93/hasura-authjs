# Optimization Notes

## Package Information

- **Package Name**: `hasura-authjs`
- **Version**: 3.0.0
- **Based on**: [`@nhost/hasura-auth-js`](https://www.npmjs.com/package/@nhost/hasura-auth-js) v2.12.0 by [Nhost](https://nhost.io)
- **Original Repository**: [nhost/nhost](https://github.com/nhost/nhost)

### Versioning Strategy

Version **3.0.0** was chosen to indicate this is the next major version after the deprecated `@nhost/hasura-auth-js` package (which ended at v2.12.0). This follows semantic versioning:

- **Major version (3.x.x)**: Significant updates including major dependency upgrades, API changes, and architectural improvements
- **Minor version (x.1.x)**: New features while maintaining backward compatibility
- **Patch version (x.x.1)**: Bug fixes and minor improvements

The jump from 2.12.0 to 3.0.0 reflects:
- Major dependency updates (WebAuthn v9 → v13, Vite 6 → 7, etc.)
- WebAuthn API changes requiring code updates
- Removal of deprecated packages
- Modern build tooling and optimizations

## Changes Made

### 1. Package Updates
- **XState**: v4.38.3 (stable version, avoiding v5 breaking changes)
- **@simplewebauthn/browser**: v13.2.2 (latest, with integrated types - no separate types package needed)
- **Vite**: v7.2.1 (latest)
- **TypeScript**: v5.9.3 (latest)
- **jwt-decode**: v4.0.0 (latest)
- **js-cookie**: v3.0.5 (latest)
- **fetch-ponyfill**: v7.1.0 (latest)

### 2. Build Configuration
- Modern ES2022 target
- Dual output: ESM and CommonJS formats
- Improved tree-shaking
- Better source maps (both .map files and declaration maps)
- Optimized minification with esbuild
- Source maps enabled for debugging

### 3. TypeScript Configuration
- ES2022 target for modern JavaScript features
- Strict type checking enabled
- Declaration files generated for TypeScript support
- Declaration maps for better IDE experience

### 4. Project Structure
- Clean separation of concerns
- Removed typegen files (can be regenerated)
- Better file organization

## Package Improvements

### Stability
- Using XState v4.38.3 (stable, well-tested version)
- All dependencies are at stable, production-ready versions
- No breaking changes from the original package API

### Build Output
- **ESM**: `dist/index.esm.js` (~110 KB, gzipped: ~21 KB)
- **CommonJS**: `dist/index.cjs.js` (~62 KB, gzipped: ~14 KB)
- Full TypeScript declarations included
- Source maps for both formats

### WebAuthn Updates
- Updated to `@simplewebauthn/browser` v13.2.2
- Types are now integrated directly into the browser package (no separate `@simplewebauthn/types` package)
- API updated to use new function signatures with `optionsJSON` parameter

### Attribution
- Proper attribution to original Nhost package
- Links to original repository and documentation
- Maintains MIT license compatibility

## Installation & Usage

### Install
```bash
npm install hasura-authjs
# or
pnpm add hasura-authjs
# or
yarn add hasura-authjs
```

### Development

1. **Install Dependencies**:
   ```bash
   pnpm install
   ```

2. **Build**:
   ```bash
   pnpm build
   ```

3. **Type Check**:
   ```bash
   pnpm typecheck
   ```

4. **Watch Mode**:
   ```bash
   pnpm dev
   ```

### Publishing

The package is configured with:
- `prepublishOnly` script that automatically builds before publishing
- Proper `.npmignore` to exclude source files
- All necessary files included in `package.json` `files` field

To publish:
```bash
npm login
npm publish
```

## Compatibility Notes

- **Node.js**: Modern Node.js versions (no specific minimum requirement in package.json)
- **Browsers**: Modern browsers with ES2022 support
- **Hasura Auth**: Compatible with Hasura Auth v0.38.0+
- **Package Format**: Supports both ESM and CommonJS
- **TypeScript**: Full TypeScript support with type definitions
- **WebAuthn**: Uses latest SimpleWebAuthn v13.2.2 with integrated types

## Migration from @nhost/hasura-auth-js

This package is a drop-in replacement for the deprecated `@nhost/hasura-auth-js`:

1. **Install**:
   ```bash
   npm uninstall @nhost/hasura-auth-js
   npm install hasura-authjs
   ```

2. **Update Imports**:
   ```typescript
   // Before
   import { HasuraAuthClient } from '@nhost/hasura-auth-js'
   
   // After
   import { HasuraAuthClient } from 'hasura-authjs'
   ```

3. **API Compatibility**: The API is identical, so no code changes are needed beyond the import statement.

## Credits

This package is based on the original work by [Nhost](https://nhost.io). See the [README.md](./README.md) for full attribution details.

