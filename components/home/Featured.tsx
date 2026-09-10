import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROPERTIES } from '@/lib/properties';
import PropertyCard from '../PropertyCard';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function Featured() {
  const featured = PROPERTIES.filter((p) => p.featured).slice(0, 6);
  return (
    <section className="bg-cream/60 py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Seleção especial"
            title="Oportunidades em"
            emphasis="destaque."
            description="Uma curadoria dos imóveis mais procurados do litoral sul, prontos para uma nova história."
          />
          <Reveal i={2}>
            <Link
              href="/imoveis"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-teal"
            >
              Ver todos os imóveis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.code} i={i % 3}>
              <PropertyCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
