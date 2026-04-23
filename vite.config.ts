import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = Number(env.VITE_PORT) || 5173;

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
    server: {
      host: true,
      port,
    },
    css: {
      devSourcemap: true,
    },
  };
});
