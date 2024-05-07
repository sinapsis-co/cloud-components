import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin([
      //   'REACT_APP_API_URL',
      //   'REACT_APP_COGNITO_USER_POOL_ID',
      //   'REACT_APP_COGNITO_WEB_CLIENT_ID',
      //   'REACT_APP_COGNITO_REGION',
      //   'REACT_APP_COGNITO_DOMAIN',
      //   'REACT_APP_STRIPE_KEY',
    ]),
    tsconfigPaths(),
  ],
  define: {
    'process.env': {},
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis', //<-- AWS SDK
      },
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: './build',
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
});
