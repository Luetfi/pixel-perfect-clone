import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: 'rewrite-html-extension',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Rewrite /impressum-seite to /impressum-seite.html
          if (req.url === '/impressum-seite') {
            req.url = '/impressum-seite.html';
          }
          // Rewrite /datenschutz-seite to /datenschutz-seite.html
          if (req.url === '/datenschutz-seite') {
            req.url = '/datenschutz-seite.html';
          }
          next();
        });
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
