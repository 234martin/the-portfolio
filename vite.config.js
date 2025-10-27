import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/kihungi-folio/', // make sure this matches your GitHub repo name exactly
  plugins: [react()],
})
