import { defineConfig } from 'vite'

export default defineConfig({
    base: '/littlelink/', // This should match your GitHub repository name
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    }
})