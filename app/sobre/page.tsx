import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Compass, Target, Check, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/ui/WhatsAppFab';
import Reveal from '@/components/ui/Reveal';
import { ABOUT, BRAND, TEAM, STATS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sobre a Oliveira FILX Imóveis',
  description:
    'Conheça a maior imobiliária de Itanhaém. Missão, visão e valores da Oliveira FILX Imóveis — confiança, transparência e credibilidade no litoral sul de SP.',
};

function initials(name: string) {
  return name.split(' ').slice(0, 2).map((n) => n[0]).join('');
}

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main id="conteudo" className="pt-[74px]">
        {/* Intro */}
        <section className="container-x grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Sobre nós
              </p>
            </Reveal>
            <Reveal i={1}>
              <h1 className="display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
                A maior imobiliária de{' '}
                <span className="italic text-golddeep">Itanhaém.</span>
              </h1>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
                {BRAND.pilares} Há anos ajudamos famílias a encontrar o lugar certo
                para viver, investir e recomeçar no litoral sul de São Paulo — sempre
                com atendimento próximo e humano.
              </p>
            </Reveal>
          </div>
          <Reveal i={1} className="lg:col-span-6">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem]">
              <Image
                src="/imoveis/3343519.jpeg"
                alt="Imóvel de alto padrão no litoral sul"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </section>

        {/* Stats band */}
        <section className="bg-deep py-14 text-porcelain">
          <div className="container-x grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} i={i}>
                <div>
                  <p className="display text-3xl text-gold sm:text-4xl">{s.value}</p>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Mission + Vision */}
        <section className="container-x py-16 sm:py-24">
          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-[1.75rem] border border-ink/10 bg-white p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal/10 text-teal">
                  <Compass className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h2 className="mt-5 display text-2xl text-ink">Missão</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{ABOUT.mission}</p>
              </article>
            </Reveal>
            <Reveal i={1}>
              <article className="h-full rounded-[1.75rem] bg-teal p-8 text-porcelain">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-gold">
                  <Target className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h2 className="mt-5 display text-2xl text-white">Visão</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/80">{ABOUT.vision}</p>
              </article>
            </Reveal>
          </div>

          {/* Values */}
          <div className="mt-14">
            <Reveal>
              <h2 className="display text-2xl text-ink sm:text-3xl">Nossos valores</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {ABOUT.values.map((v, i) => (
                <Reveal key={v.title} i={i}>
                  <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold/15 text-gold">
                      <Check className="h-5 w-5" strokeWidth={2.4} />
                    </span>
                    <h3 className="mt-4 display text-lg text-ink">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-cream/60 py-16 sm:py-24">
          <div className="container-x">
            <Reveal>
              <p className="eyebrow mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Nossa equipe
              </p>
              <h2 className="display text-3xl text-ink sm:text-4xl">
                Corretores que vivem o litoral sul
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {TEAM.map((name, i) => (
                <Reveal key={name} i={i % 4}>
                  <div className="flex flex-col items-center rounded-2xl border border-ink/10 bg-white p-6 text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-teal/10 display text-xl text-teal">
                      {initials(name)}
                    </span>
                    <p className="mt-4 font-semibold text-ink">{name}</p>
                    <p className="text-xs text-ink/65">Consultor(a) imobiliário(a)</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container-x py-16 text-center sm:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-2xl display text-3xl leading-[1.1] text-ink sm:text-4xl">
              Pronto para encontrar o seu imóvel no litoral?
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/imoveis" className="btn-primary">
                Ver imóveis
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </Link>
              <Link href="/contato" className="btn-outline">
                Falar com a equipe
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
