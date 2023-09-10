import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    eslintPlugin({
      cache: true,
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue', 'src/*.nvue'],
      failOnError: false // eslint报错不影响运行
    }),
    AutoImport({
      // targets to transform
      include: [
        /\.[j]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
        /\.nvue$/,
        /\.nvue\?nvue/,
        /\.md$/
      ],

      // global imports to register
      imports: [
        // 插件预设支持导入的api
        'vue',
        'pinia',
        'uni-app'
      ],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: './auto-imports.d.ts'
      // dts:false
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  transpileDependencies: ['@dcloudio/uni-ui']
})
