import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'HasuraAuthClient',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        if (format === 'es') return 'index.esm.js'
        if (format === 'cjs') return 'index.cjs.js'
        return `index.${format}.js`
      }
    },
    rollupOptions: {
      external: (id) => {
        // Don't externalize @simplewebauthn/browser (it's bundled)
        if (id === '@simplewebauthn/browser') return false
        // Externalize all node_modules
        return !id.startsWith('.') && !id.startsWith('/')
      },
      output: {
        globals: {}
      }
    },
    sourcemap: true,
    minify: 'esbuild',
    target: 'es2022'
  }
})

