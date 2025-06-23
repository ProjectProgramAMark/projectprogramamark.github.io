import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5232-2601-140-8781-1aa0-7cd1-e605-ed8c-547f.ngrok-free.app',
    ],
  },
})
