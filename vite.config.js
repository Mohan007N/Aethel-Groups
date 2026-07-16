import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// Self-cleaning hook to delete unwanted files and folders
const unwantedPaths = ['api/contact.py', 'backend'];
unwantedPaths.forEach(p => {
  try {
    if (fs.existsSync(p)) {
      fs.rmSync(p, { recursive: true, force: true });
      console.log(`[Cleanup] Successfully deleted unwanted path: ${p}`);
    }
  } catch (err) {
    console.error(`[Cleanup] Failed to delete path ${p}:`, err);
  }
});

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  }
})
