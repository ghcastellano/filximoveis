import type { MetadataRoute } from 'next';
import { BRAND } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND.name,
    short_name: 'FILX Imóveis',
    description: 'A maior imobiliária de Itanhaém — imóveis no litoral sul de SP.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f2ea',
    theme_color: '#0a2b27',
    icons: [{ src: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' }],
  };
}
