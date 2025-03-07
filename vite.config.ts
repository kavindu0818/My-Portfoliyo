import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/My-Portfoliyo/",  // <-- Add your repo name here
  plugins: [tailwindcss(), react()],
});
