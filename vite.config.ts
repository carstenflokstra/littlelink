import { defineConfig } from 'vite'

export default defineConfig({
    base: '/',
    server: {
        port: 3000,
    },
    build: {
        outDir: 'dist',
        copyPublicDir: true, // Ensure public directory is copied
        emptyOutDir: true, // Clean dist before build
    },
    optimizeDeps: {
        include: [],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`
            }
        }
    }
})