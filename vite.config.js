import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    eslintPlugin({
      cache: true,
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue', 'src/*.nvue'],
      failOnError: false // eslint报错不影响运行
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
