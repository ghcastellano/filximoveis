import type { Metadata } from 'next';
import Link from 'next/link';
import { Landmark, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/ui/WhatsAppFab';
import Financiamento from '@/components/home/Financiamento';
import Reveal from '@/components/ui/Reveal';
import { wa, WHATSAPP_MAIN } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Financiamento e correspondente bancário',
  description:
    'Simule o financiamento do seu imóvel e conte com a FILX como correspondente bancário para acelerar a aprovação do seu crédito imobiliário.',
};

const STEPS = [
  'Simule a parcela e o valor financiado em segundos.',
  'Enviamos a sua proposta aos principais bancos.',
  'Acompanhamos a análise e aceleramos a aprovação.',
  'Você assina e recebe as chaves do seu imóvel.',
];

export default function FinanciamentoPage() {
  return (
    <>
      <Navbar />
      <main id="conteudo" className="pt-[74px]">
        <section className="container-x pt-14 text-center sm:pt-20">
          <Reveal>
            <p className="eyebrow justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Financiamento · Correspondente bancário
            </p>
            <h1 className="mx-auto mt-5 max-w-3xl display text-4xl leading-[1.05] text-ink sm:text-5xl">
              Realize o sonho da casa própria com{' '}
              <span className="italic text-golddeep">as melhores condições.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/65">
              Como correspondente bancário, cuidamos de toda a burocracia e negociamos
              com os principais bancos para você conseguir o melhor crédito.
            </p>
          </Reveal>
        </section>

        <Financiamento />

        <section className="container-x py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal/10 text-teal">
                <Landmark className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2 className="mt-5 display text-3xl text-ink sm:text-4xl">
                Como funciona o correspondente FILX
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink/65">
                Um caminho simples e acompanhado de perto, do primeiro cálculo à
                entrega das chaves.
              </p>
              <Link href={wa(WHATSAPP_MAIN, 'Olá! Quero falar sobre financiamento com o correspondente da FILX.')} className="btn-primary mt-7" target="_blank" rel="noopener noreferrer">
                Falar com o correspondente
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </Link>
            </Reveal>
            <Reveal i={1}>
              <ol className="space-y-4">
                {STEPS.map((s, i) => (
                  <li key={s} className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-5">
                    <span className="display text-xl text-gold">{i + 1}</span>
                    <span className="flex items-center gap-2 text-sm text-ink/75">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
