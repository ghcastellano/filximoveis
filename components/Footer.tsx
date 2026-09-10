import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BRAND, CONTACT, REGIONS, wa, WHATSAPP_MAIN } from '@/lib/site';
import Social from './ui/Social';
import Reveal from './ui/Reveal';

export default function Footer() {
  return (
    <footer className="bg-deep text-porcelain">
      {/* CTA band */}
      <div className="container-x py-20 sm:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-teal/25 to-transparent px-8 py-14 text-center sm:px-12 sm:py-20">
            <p className="eyebrow-light justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Vamos encontrar o seu lugar no litoral
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl display text-4xl leading-[1.05] text-white text-balance sm:text-5xl">
              O seu próximo endereço à beira-mar começa com uma conversa.
            </h2>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={wa(WHATSAPP_MAIN, 'Olá! Quero encontrar um imóvel no litoral sul com a FILX.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                Falar com um consultor
              </a>
              <Link href="/imoveis" className="btn-glass">
                Ver imóveis disponíveis
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Grid */}
      <div className="container-x grid gap-10 border-t border-white/10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="flex items-baseline gap-1.5">
            <span className="display text-3xl text-white">FILX</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
              Imóveis
            </span>
          </span>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {BRAND.pilares}
          </p>
          <Social className="mt-6" variant="dark" />
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Navegar
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {[
              ['Comprar', '/imoveis'],
              ['Anunciar imóvel', '/seu-imovel'],
              ['Financiamento', '/financiamento'],
              ['Sobre nós', '/sobre'],
              ['Contato', '/contato'],
            ].map(([l, h]) => (
              <li key={h}>
                <Link href={h} className="transition-colors hover:text-gold">
                  {l}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={CONTACT.clientArea}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Área do Cliente
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Regiões
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {REGIONS.map((r) => (
              <li key={r.name}>
                <Link href={r.href} className="transition-colors hover:text-gold">
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Contato
          </p>
          <ul className="mt-5 space-y-3.5 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {CONTACT.phone1} · {CONTACT.phone2}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {CONTACT.address.line1}, {CONTACT.address.line2}
                <br />
                {CONTACT.address.city} · {CONTACT.address.zip}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{CONTACT.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © 2026 {BRAND.name}. Todos os direitos reservados.
          </p>
          <Link
            href="/politica-de-privacidade"
            className="text-xs text-white/60 transition-colors hover:text-white/70"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
