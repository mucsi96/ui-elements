import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    target: ['chrome124', 'safari17.3'],
    lib: {
      formats: ['es'],
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'custom-elements-polyfill': ['@ungap/custom-elements'],
        },
      },
    },
  },
  plugins: [
    dts({
      exclude: 'src/**/*.stories.ts',
    }),
  ],
});
