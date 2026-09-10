import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Camera, Users } from 'lucide-react';
import Reveal from '../ui/Reveal';

const PERKS = [
  { icon: TrendingUp, text: 'Avaliação profissional e preço justo de mercado' },
  { icon: Camera, text: 'Fotos e anúncio de alto padrão que vendem mais rápido' },
  { icon: Users, text: 'A maior vitrine de compradores de Itanhaém' },
];

export default function Anuncie() {
  return (
    <section className="container-x pb-4 pt-2 sm:pb-8">
      <Reveal>
        <div className="grid overflow-hidden rounded-[2rem] bg-teal text-porcelain lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-14">
            <p className="eyebrow-light">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Anuncie com a FILX
            </p>
            <h2 className="mt-5 display text-3xl leading-[1.08] text-white sm:text-4xl">
              Tem um imóvel para vender no litoral?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
              Coloque o seu imóvel na maior vitrine de Itanhaém e conte com uma
              equipe que cuida de tudo — da avaliação à assinatura.
            </p>
            <ul className="mt-7 space-y-3">
              {PERKS.map((p) => (
                <li key={p.text} className="flex items-center gap-3 text-sm text-white/85">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                    <p.icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  {p.text}
                </li>
              ))}
            </ul>
            <Link href="/seu-imovel" className="btn-gold mt-8">
              Anunciar meu imóvel
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </div>
          <div className="relative min-h-[280px] lg:min-h-full">
            <Image
              src="/imoveis/2732523.jpg"
              alt="Casa à venda no litoral sul de São Paulo"
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal/60 to-transparent lg:from-teal/40" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
