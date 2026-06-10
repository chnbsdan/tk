import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://tk.hangdn.com',
        changeOrigin: true,
      },
      '/random': {
        target: 'https://tk.hangdn.com',
        changeOrigin: true,
      },
      '/json': {
        target: 'https://tk.hangdn.com',
        changeOrigin: true,
      },
      '/list': {
        target: 'https://tk.hangdn.com',
        changeOrigin: true,
      },
      '/stats': {
        target: 'https://tk.hangdn.com',
        changeOrigin: true,
      },
    },
  },
})
