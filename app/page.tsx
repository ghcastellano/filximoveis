import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Regions from '@/components/home/Regions';
import Featured from '@/components/home/Featured';
import Pilares from '@/components/home/Pilares';
import Services from '@/components/home/Services';
import Financiamento from '@/components/home/Financiamento';
import Anuncie from '@/components/home/Anuncie';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/ui/WhatsAppFab';
import { TIPOS, CIDADES } from '@/lib/properties';
import { BRAND, CONTACT, SITE_URL } from '@/lib/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${SITE_URL}/#organization`,
  name: BRAND.name,
  url: SITE_URL,
  description:
    'A maior imobiliária de Itanhaém. Compra e venda de casas, apartamentos, terrenos e chácaras no litoral sul de São Paulo.',
  logo: `${SITE_URL}/brand/logo-original.png`,
  image: `${SITE_URL}/brand/logo-original.png`,
  telephone: '+5513991487111',
  email: CONTACT.email,
  priceRange: 'R$$$',
  areaServed: ['Itanhaém', 'Praia Grande', 'Peruíbe', 'Mongaguá'].map((name) => ({
    '@type': 'City',
    name,
  })),
  geo: { '@type': 'GeoCoordinates', latitude: -24.1836, longitude: -46.7889 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '17:00',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.address.line1,
    addressLocality: 'Itanhaém',
    addressRegion: 'SP',
    postalCode: CONTACT.address.zip,
    addressCountry: 'BR',
  },
  sameAs: [
    CONTACT.social.instagram,
    CONTACT.social.facebook,
    CONTACT.social.youtube,
    CONTACT.social.tiktok,
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#conteudo"
        className="sr-only rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-porcelain focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80]"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero image="/imoveis/3343519.jpeg" tipos={TIPOS} cidades={CIDADES} />
        <Regions />
        <Featured />
        <Pilares />
        <Services />
        <Financiamento />
        <Anuncie />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
