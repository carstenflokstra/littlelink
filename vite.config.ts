import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    base: './',
    build: {
        outDir: 'dist',
        copyPublicDir: true,
        emptyOutDir: true,
    },
    css: {
        devSourcemap: true,
    },
});