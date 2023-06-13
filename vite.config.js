import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: { overlay: false },
  },
  define: {
    // "process.env": process.env,
    // // By default, Vite doesn't include shims for NodeJS/
    // // necessary for segment analytics lib to work
    //"global": {},
}
})
