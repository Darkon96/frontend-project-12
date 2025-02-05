<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
>>>>>>> parent of 6543d03 (del)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5002,
    proxy: {
      // Проксируем запросы к API
      '/api': {
        target: 'http://localhost:5001',
      },
      // Проксируем WebSocket соединения
      '/socket.io': {
        target: 'ws://localhost:5001',
        ws: true,
        rewriteWsOrigin: true,
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
<<<<<<< HEAD
      target: 'esnext'
    }
  },
  build: {
    target: 'esnext'
  },
})
=======
      target: 'esnext',
    },
  },
  build: {
    target: 'esnext',
  },
});
>>>>>>> parent of 6543d03 (del)
