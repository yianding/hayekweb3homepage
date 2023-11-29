import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {  
  // 获取.env文件里定义的环境变量
  const env = loadEnv(mode, process.cwd());  
  return {
    base: env.VITE_BASE_URL || '/', // 部署时的子目录
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: '0.0.0.0',
      port: 5039,//自定义端口
    },
    build: {
      assetsInlineLimit: 6144, // 图片转 base64 编码的阈值
      rollupOptions: {
        output: {
          manualChunks: false,
          inlineDynamicImports: true,
          entryFileNames: '[name].js',   // currently does not work for the legacy bundle
          assetFileNames: '[name].[ext]', // currently does not work for images
        },
      },
    },
  }
})