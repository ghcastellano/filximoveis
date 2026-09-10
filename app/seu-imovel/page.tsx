import Image from 'next/image';
import type { Metadata } from 'next';
import { TrendingUp, Camera, Users, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/ui/WhatsAppFab';
import SeuImovelForm from '@/components/SeuImovelForm';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Anuncie seu imóvel',
  description:
    'Venda o seu imóvel com a maior imobiliária de Itanhaém. Avaliação gratuita, anúncio de alto padrão e a maior vitrine de compradores do litoral sul.',
};

const PERKS = [
  { icon: TrendingUp, title: 'Avaliação justa', text: 'Precificação de mercado para vender no tempo certo, sem deixar dinheiro na mesa.' },
  { icon: Camera, title: 'Anúncio de destaque', text: 'Fotos e divulgação de alto padrão em todos os canais e redes sociais.' },
  { icon: Users, title: 'Maior vitrine', text: 'A maior base de compradores de Itanhaém e do litoral sul procurando imóveis.' },
  { icon: ShieldCheck, title: 'Segurança jurídica', text: 'Cuidamos de toda a documentação, da proposta à assinatura da escritura.' },
];

export default function SeuImovelPage() {
  return (
    <>
      <Navbar />
      <main id="conteudo" className="pt-[74px]">
        <section className="container-x grid items-start gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Anuncie com a FILX
              </p>
            </Reveal>
            <Reveal i={1}>
              <h1 className="display text-4xl leading-[1.05] text-ink sm:text-5xl">
                Venda o seu imóvel com quem{' '}
                <span className="italic text-golddeep">mais vende no litoral.</span>
              </h1>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65">
                Coloque o seu imóvel na maior vitrine de Itanhaém e conte com uma
                equipe que cuida de tudo — da avaliação à entrega das chaves.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PERKS.map((p, i) => (
                <Reveal key={p.title} i={i}>
                  <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal">
                      <p.icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-4 display text-lg text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal i={2}>
              <div className="relative mt-6 hidden aspect-[16/7] overflow-hidden rounded-2xl lg:block">
                <Image src="/imoveis/2887785.jpg" alt="Casa vendida no litoral sul" fill sizes="560px" className="object-cover" />
              </div>
            </Reveal>
          </div>

          <Reveal i={1}>
            <div className="lg:sticky lg:top-[92px]">
              <SeuImovelForm />
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
