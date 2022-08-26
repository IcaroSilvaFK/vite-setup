import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import stylelintPlugin from '@frsource/vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), stylelintPlugin()],
});
