import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "../backend/static",
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: ['scheduler'],
            output:{
                manualChunks(id) {
                  if (id.includes('node_modules')) {
                      return id.toString().split('node_modules/')[1].split('/')[0].toString();
                  }
              }
            }
        }
    },
    server: {
        proxy: {
            "/ask": "http://127.0.0.1:5000",
            "/chat": "http://127.0.0.1:5000",
            "/uploadFile": "http://127.0.0.1:5000"
        }
    }
});
