import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/site';
import Icon from '../ui/Icon';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function Services() {
  return (
    <section className="container-x py-20 sm:py-28">
      <SectionHeading
        eyebrow="Como podemos ajudar"
        title="Do primeiro contato à"
        emphasis="entrega das chaves."
        description="Uma imobiliária completa para comprar, vender e financiar com segurança no litoral sul de São Paulo."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} i={i}>
            <Link
              href={s.href}
              className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-teal/30 hover:shadow-card"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-porcelain">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 display text-xl text-ink">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{s.text}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors group-hover:text-deep">
                {s.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
