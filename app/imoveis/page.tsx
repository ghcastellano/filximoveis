import { Suspense } from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/ui/WhatsAppFab';
import ImoveisView from '@/components/imoveis/ImoveisView';
import { PROPERTIES, TIPOS, CIDADES } from '@/lib/properties';

export const metadata: Metadata = {
  title: 'Imóveis à venda no litoral sul de SP',
  description:
    'Casas, apartamentos, terrenos e chácaras à venda em Itanhaém, Praia Grande, Peruíbe e Mongaguá. Encontre o seu imóvel com a Oliveira FILX Imóveis.',
};

export default function ImoveisPage() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Suspense fallback={<div className="min-h-screen" />}>
          <ImoveisView properties={PROPERTIES} tipos={TIPOS} cidades={CIDADES} />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
