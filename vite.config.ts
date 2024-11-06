import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Keep relative paths
    build: {
        outDir: 'dist',
        copyPublicDir: true,
        emptyOutDir: true,
        rollupOptions: {
            output: {
                entryFileNames: '[name].js', // Remove assets/ prefix
                chunkFileNames: '[name].js',
                assetFileNames: '[name][extname]'
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$primary-color: blue;`
            },
        },
    },
});
