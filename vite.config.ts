import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';
import { resolve } from 'path';

import { peerDependencies } from './package.json';

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      name: 'ReactViteLib',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      plugins: [typescript({ tsconfig: './tsconfig.json' })],
    },
  },
});
