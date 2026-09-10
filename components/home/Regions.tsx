import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { REGIONS } from '@/lib/site';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function Regions() {
  return (
    <section className="container-x py-20 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Onde atuamos"
          title="Quatro cidades, um mesmo"
          emphasis="litoral."
          description="Do centro histórico de Itanhaém às orlas de Praia Grande, Peruíbe e Mongaguá — conhecemos cada bairro como quem mora aqui."
        />
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {REGIONS.map((r, i) => (
          <Reveal key={r.name} i={i}>
            <Link
              href={r.href}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl"
            >
              <Image
                src={r.img}
                alt={`Imóveis em ${r.name}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
                className="object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/25 to-transparent" />
              <div className="relative p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-goldsoft">
                  {r.tag}
                </p>
                <div className="mt-1 flex items-center justify-between">
                  <h3 className="display text-2xl text-white">{r.name}</h3>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:bg-gold group-hover:text-deep">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
