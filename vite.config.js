import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For https://USERNAME.github.io/REPOSITORY/ set BASE_PATH to /REPOSITORY/.
// For https://USERNAME.github.io/ use '/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})
