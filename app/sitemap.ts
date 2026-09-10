import type { MetadataRoute } from 'next';
import { PROPERTIES } from '@/lib/properties';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/imoveis', '/sobre', '/contato', '/seu-imovel', '/financiamento'].map(
    (r) => ({
      url: `${SITE_URL}${r}`,
      lastModified: new Date('2026-07-05'),
      changeFrequency: 'weekly' as const,
      priority: r === '' ? 1 : 0.8,
    })
  );
  const imoveis = PROPERTIES.map((p) => ({
    url: `${SITE_URL}/imovel/${p.code}`,
    lastModified: new Date('2026-07-05'),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));
  return [...routes, ...imoveis];
}
