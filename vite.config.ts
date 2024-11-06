import { defineConfig } from 'vite'

export default defineConfig({
    base: '/', 
    server: {
        port: 3000,
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    },
    // Add this to properly handle TypeScript
    optimizeDeps: {
        include: [],
    },
    // Add SCSS configuration
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`
            }
        }
    }
})