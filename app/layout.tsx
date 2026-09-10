import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { SITE_URL, BRAND } from '@/lib/site';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Oliveira FILX Imóveis — Imóveis no litoral sul de SP',
    template: '%s · FILX Imóveis',
  },
  description:
    'A maior imobiliária de Itanhaém. Casas, apartamentos, terrenos e chácaras à venda em Itanhaém, Praia Grande, Peruíbe e Mongaguá. Confiança, transparência e credibilidade.',
  keywords: [
    'imóveis Itanhaém',
    'casa à venda Itanhaém',
    'apartamento Praia Grande',
    'terreno litoral sul SP',
    'imobiliária Itanhaém',
    'FILX Imóveis',
    'imóveis litoral sul',
  ],
  authors: [{ name: BRAND.name }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: BRAND.name,
    title: 'Oliveira FILX Imóveis — O litoral sul onde você merece morar',
    description:
      'A maior imobiliária de Itanhaém. Casas, apartamentos, terrenos e chácaras no litoral sul de São Paulo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oliveira FILX Imóveis',
    description: 'A maior imobiliária de Itanhaém — imóveis no litoral sul de SP.',
  },
  icons: { icon: '/favicon.svg', apple: '/brand/logo-original.png' },
};

export const viewport: Viewport = {
  themeColor: '#0a2b27',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased grain-soft">{children}</body>
    </html>
  );
}
