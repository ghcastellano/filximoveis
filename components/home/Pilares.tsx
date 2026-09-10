import Image from 'next/image';
import { ShieldCheck, Eye, Award } from 'lucide-react';
import { STATS } from '@/lib/site';
import Reveal from '../ui/Reveal';

const PILLARS = [
  { icon: ShieldCheck, title: 'Confiança', text: 'Relações construídas para durar toda a vida.' },
  { icon: Eye, title: 'Transparência', text: 'Cada etapa da negociação é clara e sem surpresas.' },
  { icon: Award, title: 'Credibilidade', text: 'A maior imobiliária de Itanhaém, reconhecida pelos clientes.' },
];

export default function Pilares() {
  return (
    <section className="bg-deep py-20 text-porcelain sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* image */}
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/imoveis/3265147.jpeg"
              alt="Imóvel de alto padrão no litoral sul"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        </Reveal>

        {/* content */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow-light mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Por que a FILX
            </p>
          </Reveal>
          <Reveal i={1}>
            <h2 className="display text-3xl leading-[1.08] text-white sm:text-4xl lg:text-[2.9rem]">
              Confiança, transparência e{' '}
              <span className="italic text-gold">credibilidade.</span>
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Cada negociação é conduzida com clareza total — do primeiro contato à
              entrega das chaves, você sabe exatamente o que esperar. É assim que
              construímos relações que duram para além da compra.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} i={i}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold">
                    <p.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 display text-lg text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} i={i}>
                <div>
                  <p className="display text-3xl text-gold sm:text-4xl">{s.value}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/55">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
