import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      formats: ['es'],
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        manualChunks: {
          lit: ['lit'],
          'custom-elements-polyfill': ['@ungap/custom-elements'],
        },
      },
    },
  },
  plugins: [
    dts({
      exclude: "src/**/*.stories.ts",
    }),
  ],
});
