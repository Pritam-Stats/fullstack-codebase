import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy : {
      '/api' : 'http://localhost:3000'  //now this will automatically get appended in the front of the every /api route
      //another point
      //now because of proxy, the url req it will send the server will treat it as ghar ka member so cors error gone
    }
  },
  plugins: [react()],

})
