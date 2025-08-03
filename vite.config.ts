
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // simulates browser DOM part
    globals: true,
    setupFiles: './src/setupTests.ts', // setup of file path
  },
});
