import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Kagan Kuscu',
        short_name: 'KgnKsc',
        description: 'Kagan Kuscu links',
        theme_color: '#ffffff',
        icons: [
          {
            "src": "\/android-icon-36x36.png",
            "sizes": "36x36",
            "type": "image\/png",
          },
          {
            "src": "\/android-icon-48x48.png",
            "sizes": "48x48",
            "type": "image\/png",
          },
          {
            "src": "\/android-icon-72x72.png",
            "sizes": "72x72",
            "type": "image\/png",
          },
          {
            "sizes": "96x96",
            "src": "\/android-icon-96x96.png",
            "type": "image\/png",
          },
          {
            "src": "\/android-icon-144x144.png",
            "sizes": "144x144",
            "type": "image\/png",
          },
          {
            "src": "\/android-icon-192x192.png",
            "sizes": "192x192",
            "type": "image\/png",
          }
        ]
    }
  })
  ],
  server: {
    port: 3000
  }
})
