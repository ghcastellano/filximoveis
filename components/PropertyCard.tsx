import Image from 'next/image';
import Link from 'next/link';
import { BedDouble, Bath, Car, Ruler, MapPin, ArrowUpRight } from 'lucide-react';
import type { Property } from '@/lib/properties';

function Spec({ icon: Icon, value, suffix }: { icon: typeof BedDouble; value: number | string; suffix?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] text-ink/65">
      <Icon className="h-4 w-4 text-teal" strokeWidth={1.6} />
      {value}
      {suffix}
    </span>
  );
}

export default function PropertyCard({
  p,
  priority = false,
}: {
  p: Property;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/imovel/${p.code}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-[0_10px_30px_-20px_rgba(10,43,39,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <Image
          src={p.img}
          alt={`${p.tipo} à venda em ${p.cidade}${p.bairro ? ', ' + p.bairro : ''}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/45 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-porcelain/95 px-3 py-1 text-xs font-semibold text-deep backdrop-blur">
          {p.tipo}
        </span>
        <span className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-medium text-white/90">
          <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
          {p.cidade}
          {p.bairro ? `, ${p.bairro}` : ''}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="display text-2xl text-ink">{p.priceLabel}</p>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink/65">
          {p.desc || `${p.tipo} em ${p.cidade}${p.bairro ? ', ' + p.bairro : ''}.`}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5">
          {p.dorm ? <Spec icon={BedDouble} value={p.dorm} /> : null}
          {p.banho ? <Spec icon={Bath} value={p.banho} /> : null}
          {p.vaga ? <Spec icon={Car} value={p.vaga} /> : null}
          {p.area ? <Spec icon={Ruler} value={p.area} suffix=" m²" /> : null}
          <span className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-teal transition-colors group-hover:text-deep">
            Ver
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
          </span>
        </div>
      </div>
    </Link>
  );
}
