import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  MessageCircle, CalendarClock, Star, MapPin, ShieldCheck, Clock,
  Handshake, MapPinned, Zap, Phone,
} from 'lucide-react';
import { Wordmark } from '@/components/Navbar';
import ScheduleWidget from '@/components/mario/ScheduleWidget';
import MarioPropertyCard from '@/components/mario/MarioPropertyCard';
import Reveal from '@/components/ui/Reveal';
import Social from '@/components/ui/Social';
import { PROPERTIES } from '@/lib/properties';
import { MARIO, BRAND, CONTACT, wa } from '@/lib/site';

export const metadata: Metadata = {
  title: `${MARIO.name} — Consultor Imobiliário no Litoral Sul`,
  description:
    'Fale direto com o Mário Oliveira, consultor da FILX Imóveis. Imóveis no litoral sul de SP, atendimento humano e agendamento de visita pelo WhatsApp.',
  robots: { index: false, follow: true },
};

const REASONS = [
  { icon: Handshake, title: 'Atendimento direto', text: 'Você fala comigo, uma pessoa de verdade — sem robô e sem call center.' },
  { icon: MapPinned, title: 'Conheço a região', text: 'Cada bairro de Itanhaém, Praia Grande e Peruíbe na palma da mão.' },
  { icon: Zap, title: 'Resposta rápida', text: 'Retorno ágil no WhatsApp para você não perder a melhor oportunidade.' },
  { icon: CalendarClock, title: 'Visita no seu tempo', text: 'Agende a visita no horário que for melhor pra você, sem burocracia.' },
];

export default async function MarioPage({
  searchParams,
}: {
  searchParams: Promise<{ imovel?: string }>;
}) {
  const { imovel } = await searchParams;
  const featured = imovel ? PROPERTIES.find((p) => p.code === imovel) : undefined;

  const picks = [
    ...(featured ? [featured] : []),
    ...PROPERTIES.filter((p) => p.featured && p.code !== featured?.code),
  ].slice(0, 6);

  const heroMsg = featured
    ? `Olá, Mário! Vim pelo anúncio do imóvel ${featured.tipo} em ${featured.cidade} (cód. ${featured.code}). Quero mais informações.`
    : 'Olá, Mário! Vim pelo seu anúncio e quero ajuda para encontrar um imóvel no litoral.';

  return (
    <div className="bg-porcelain">
      {/* Minimal header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-deep">
        <div className="container-x flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex items-baseline gap-1.5">
              <span className="display text-2xl text-white">FILX</span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">Imóveis</span>
            </span>
          </Link>
          <a
            href={wa(MARIO.whatsapp, heroMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            Falar com o Mário
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-deep text-porcelain">
        <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow-light mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {MARIO.role}
            </p>
            <h1 className="display text-4xl leading-[1.03] text-white text-balance sm:text-5xl lg:text-[3.4rem]">
              Vai comprar um imóvel no litoral?{' '}
              <span className="italic text-gold">Fale direto comigo.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {MARIO.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={wa(MARIO.whatsapp, heroMsg)} target="_blank" rel="noopener noreferrer" className="btn-gold">
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                Chamar no WhatsApp
              </a>
              <a href="#agenda" className="btn-glass">
                <CalendarClock className="h-4 w-4" strokeWidth={2} />
                Agendar visita
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
              <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 fill-gold text-gold" /> Clientes nota máxima</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> Resposta rápida no WhatsApp</span>
            </div>
          </div>

          {/* Profile card */}
          <Reveal i={1}>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-8">
              <div className="flex items-center gap-4">
                <span className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gold text-deep display text-3xl">
                  MO
                </span>
                <div>
                  <p className="display text-2xl text-white">{MARIO.name}</p>
                  <p className="text-sm text-white/60">Consultor Imobiliário · FILX</p>
                  {MARIO.creci ? (
                    <p className="mt-1 text-xs text-white/60">{MARIO.creci}</p>
                  ) : null}
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {MARIO.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-white/80">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {h}
                  </li>
                ))}
              </ul>
              <a href={wa(MARIO.whatsapp, heroMsg)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                Conversar agora
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured property (from ad) */}
      {featured && (
        <section className="container-x -mt-8 pb-4">
          <Reveal>
            <div className="grid gap-6 overflow-hidden rounded-[1.75rem] border border-gold/30 bg-white p-4 shadow-soft sm:grid-cols-2 sm:p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-auto">
                <Image src={featured.img} alt={`${featured.tipo} em ${featured.cidade}`} fill sizes="(max-width:768px) 100vw, 520px" className="object-cover" priority />
              </div>
              <div className="flex flex-col justify-center p-3 sm:p-5">
                <span className="chip w-fit">Você veio pelo anúncio deste imóvel</span>
                <p className="mt-3 display text-3xl text-ink">{featured.priceLabel}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/60">
                  <MapPin className="h-4 w-4 text-teal" /> {featured.tipo} · {featured.cidade}{featured.bairro ? `, ${featured.bairro}` : ''}
                </p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/60">{featured.desc}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={wa(MARIO.whatsapp, heroMsg)} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <MessageCircle className="h-4 w-4" strokeWidth={2} /> Quero este imóvel
                  </a>
                  <Link href={`/imovel/${featured.code}`} className="btn-outline">Ver detalhes</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* Why */}
      <section className="container-x py-16 sm:py-20">
        <Reveal>
          <h2 className="max-w-2xl display text-3xl text-ink sm:text-4xl">
            Por que falar com o Mário
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} i={i}>
              <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal">
                  <r.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 display text-lg text-ink">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Picks */}
      <section className="bg-cream/60 py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Seleção do Mário
            </p>
            <h2 className="display text-3xl text-ink sm:text-4xl">Imóveis que separei pra você</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {picks.map((p, i) => (
              <Reveal key={p.code} i={i % 3}>
                <MarioPropertyCard p={p} whatsapp={MARIO.whatsapp} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="agenda" className="container-x py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Agende sua visita
              </p>
              <h2 className="display text-3xl leading-[1.08] text-ink sm:text-4xl">
                Escolha o melhor dia e{' '}
                <span className="italic text-golddeep">eu te encontro lá.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65">
                Selecione um dia e período — eu confirmo a disponibilidade e agendamos
                a visita direto pelo WhatsApp, do jeito mais fácil pra você.
              </p>
              <div className="mt-7 flex items-center gap-3 rounded-2xl border border-ink/10 bg-white/60 p-4 text-sm text-ink/60">
                <Phone className="h-4 w-4 shrink-0 text-teal" />
                Prefere ligar? <a href={`tel:+55${MARIO.whatsapp.slice(2)}`} className="ml-1 font-semibold text-teal">{MARIO.phone}</a>
              </div>
            </Reveal>
          </div>
          <Reveal i={1}>
            <ScheduleWidget
              whatsapp={MARIO.whatsapp}
              context={featured ? `${featured.tipo} em ${featured.cidade} (cód. ${featured.code})` : undefined}
            />
          </Reveal>
        </div>
      </section>

      {/* Slim footer */}
      <footer className="bg-deep text-porcelain">
        <div className="container-x flex flex-col items-center gap-6 py-10 text-center">
          <Wordmark dark />
          <Social variant="dark" />
          <p className="max-w-md text-sm text-white/55">
            {BRAND.name} · {CONTACT.address.city} · Atendimento {CONTACT.hours}
          </p>
          <p className="text-xs text-white/60">© 2026 {BRAND.name}. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
