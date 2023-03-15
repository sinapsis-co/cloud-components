import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin(['REACT_APP_API_URL', 'REACT_APP_BUGSNAG'])],
  server: {
    port: 3000,
  },
});
