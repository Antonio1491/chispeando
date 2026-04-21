import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { pathToFileURL } from 'url'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      {
        name: 'api-middleware',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res, next) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk.toString() });
              req.on('end', async () => {
                try {
                  req.body = JSON.parse(body || '{}');
                  
                  // Pasamos la variable de entorno a Node para que la API la lea
                  process.env.GEMINI_API_KEY = env.GEMINI_API_KEY;
                  
                  // Evitamos cache y evitamos que Vite intente empaquetar este import dinámico
                  const apiPath = resolve(process.cwd(), 'api/chat.js');
                  const targetUrl = pathToFileURL(apiPath).href + '?update=' + Date.now();
                  const module = await import(/* @vite-ignore */ targetUrl);
                  const handler = module.default;
                  
                  // Simulamos los métodos de respuesta de Express/Vercel
                  res.status = (code) => {
                    res.statusCode = code;
                    return res;
                  };
                  res.json = (data) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                  };
                  
                  await handler(req, res);
                } catch (e) {
                  console.error("Error en servidor local:", e);
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: e.message }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ],
  }
})
