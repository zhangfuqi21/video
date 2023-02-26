import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/assets/style/global.less";',
      },
    },
  },
  server:{
    proxy:{
      '/api':{
          target:'https://movie.douban.com ',
          changeOrigin:true,  // 允许跨域
          rewrite:path => path.replace(/^\/api/,'')
      },
      '/lay':{
        target:'https://api.pingcc.cn/',
        changeOrigin:true,  // 允许跨域
        rewrite:path => path.replace(/^\/lay/,'')
    }
  }
  }
  

})



