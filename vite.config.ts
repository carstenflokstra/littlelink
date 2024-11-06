// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
    base: './', // Use relative paths
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
    }
})