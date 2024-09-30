import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      }
    ]
  },
  server: {
    hmr: true,
    port: 8083
  }
  // server: {
  //   proxy:{
  //     "^/api":{
  //       target: "http://localhost:3000",  //线上真实地址
  //       changeOrigin: true,  //跨域pnpm 
  //       rewrite: (path)=>path.replace(/^\/api/,""),
  //     }
  //   }
  // }
})
