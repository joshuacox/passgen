import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Passgen - Secure Password Generator',
    short_name: 'Passgen',
    description: 'A powerful, offline-capable password and passphrase generator based on the passgen CLI.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // You could add 192x192 and 512x512 PNG icons here in a real app
    ],
  };
}
