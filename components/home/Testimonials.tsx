import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/site';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

export default function Testimonials() {
  return (
    <section className="container-x py-20 sm:py-28">
      <SectionHeading
        eyebrow="Quem confia, recomenda"
        title="Histórias de quem já encontrou"
        emphasis="o seu lar."
        description="Avaliações reais de clientes atendidos pela equipe da Oliveira FILX Imóveis."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} i={i % 3}>
            <figure className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 shadow-[0_10px_30px_-22px_rgba(10,43,39,0.4)]">
              <Quote className="h-7 w-7 text-gold/50" />
              <div
                className="mt-3 flex gap-0.5"
                role="img"
                aria-label="Avaliação 5 de 5 estrelas"
              >
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/75">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/8 pt-4">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink/65">Atendimento: {t.corretor}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
