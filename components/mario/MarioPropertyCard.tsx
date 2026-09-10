import Image from 'next/image';
import Link from 'next/link';
import { BedDouble, Bath, Car, Ruler, MapPin, MessageCircle } from 'lucide-react';
import type { Property } from '@/lib/properties';
import { wa } from '@/lib/site';

export default function MarioPropertyCard({
  p,
  whatsapp,
  priority = false,
}: {
  p: Property;
  whatsapp: string;
  priority?: boolean;
}) {
  const local = `${p.cidade}${p.bairro ? ', ' + p.bairro : ''}`;
  const msg = `Olá, Mário! Vim pelo anúncio e tenho interesse neste imóvel: ${p.tipo} em ${local} (cód. ${p.code}), ${p.priceLabel}. Pode me ajudar?`;
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-[0_10px_30px_-20px_rgba(10,43,39,0.4)]">
      <Link href={`/imovel/${p.code}`} className="relative block aspect-[4/3] overflow-hidden bg-cream">
        <Image
          src={p.img}
          alt={`${p.tipo} em ${local}`}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-105"
          priority={priority}
        />
        <span className="absolute left-3 top-3 rounded-full bg-porcelain/95 px-3 py-1 text-xs font-semibold text-deep">
          {p.tipo}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="display text-2xl text-ink">{p.priceLabel}</p>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/65">
          <MapPin className="h-3.5 w-3.5 text-teal" /> {local}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-ink/65">
          {p.dorm ? <span className="inline-flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-teal" strokeWidth={1.6} />{p.dorm}</span> : null}
          {p.banho ? <span className="inline-flex items-center gap-1.5"><Bath className="h-4 w-4 text-teal" strokeWidth={1.6} />{p.banho}</span> : null}
          {p.vaga ? <span className="inline-flex items-center gap-1.5"><Car className="h-4 w-4 text-teal" strokeWidth={1.6} />{p.vaga}</span> : null}
          {p.area ? <span className="inline-flex items-center gap-1.5"><Ruler className="h-4 w-4 text-teal" strokeWidth={1.6} />{p.area} m²</span> : null}
        </div>
        <a
          href={wa(whatsapp, msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2} />
          Falar sobre este imóvel
        </a>
      </div>
    </div>
  );
}
