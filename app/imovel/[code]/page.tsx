import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  BedDouble, Bath, Car, Ruler, ShowerHead, MapPin, ArrowLeft,
  MessageCircle, CalendarClock, Phone, ShieldCheck, ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/ui/WhatsAppFab';
import PropertyCard from '@/components/PropertyCard';
import { PROPERTIES } from '@/lib/properties';
import { wa, WHATSAPP_MAIN, CONTACT, SITE_URL } from '@/lib/site';

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ code: p.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  const p = PROPERTIES.find((x) => x.code === code);
  if (!p) return { title: 'Imóvel não encontrado' };
  return {
    title: `${p.tipo} em ${p.cidade}${p.bairro ? ', ' + p.bairro : ''} — ${p.priceLabel}`,
    description: p.desc || `${p.tipo} à venda em ${p.cidade}. ${p.priceLabel}.`,
    openGraph: { images: [{ url: `${SITE_URL}${p.img}` }] },
  };
}

export default async function ImovelPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const p = PROPERTIES.find((x) => x.code === code);
  if (!p) notFound();

  const specs = [
    p.dorm ? { icon: BedDouble, label: 'Dormitórios', value: p.dorm } : null,
    p.suite ? { icon: ShowerHead, label: 'Suítes', value: p.suite } : null,
    p.banho ? { icon: Bath, label: 'Banheiros', value: p.banho } : null,
    p.vaga ? { icon: Car, label: 'Vagas', value: p.vaga } : null,
    p.area ? { icon: Ruler, label: 'Área', value: `${p.area} m²` } : null,
  ].filter(Boolean) as { icon: typeof BedDouble; label: string; value: string | number }[];

  const local = `${p.cidade}${p.bairro ? ', ' + p.bairro : ''}`;
  const waMsg = `Olá! Tenho interesse no imóvel ${p.tipo} em ${local} (cód. ${p.code}), anunciado por ${p.priceLabel}. Pode me passar mais informações?`;
  const visitMsg = `Olá! Gostaria de agendar uma visita ao imóvel ${p.tipo} em ${local} (cód. ${p.code}). Quais horários estão disponíveis?`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(local + ', SP')}&output=embed`;

  const related = PROPERTIES.filter(
    (x) => x.code !== p.code && (x.cidade === p.cidade || x.tipo === p.tipo)
  ).slice(0, 3);

  const listingLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${p.tipo} à venda em ${local}`,
    description: p.desc || `${p.tipo} à venda em ${local}, litoral sul de São Paulo.`,
    image: `${SITE_URL}${p.img}`,
    category: p.tipo,
    sku: p.code,
    offers: {
      '@type': 'Offer',
      price: p.price,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/imovel/${p.code}`,
    },
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Imóveis', item: `${SITE_URL}/imoveis` },
      { '@type': 'ListItem', position: 3, name: `${p.tipo} em ${local}`, item: `${SITE_URL}/imovel/${p.code}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <main id="conteudo" className="pt-[74px]">
        {/* Hero image */}
        <section className="container-x pt-6">
          <Link
            href="/imoveis"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition-colors hover:text-teal"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar aos imóveis
          </Link>
          <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] sm:aspect-[16/8]">
            <Image
              src={p.img}
              alt={`${p.tipo} à venda em ${local}`}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-9">
              <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-deep">
                {p.tipo} · à venda
              </span>
              <h1 className="mt-3 display text-3xl text-white sm:text-5xl">{p.priceLabel}</h1>
              <p className="mt-2 flex items-center gap-1.5 text-white/85">
                <MapPin className="h-4 w-4 text-gold" /> {local}
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="container-x grid gap-10 py-12 lg:grid-cols-3 lg:gap-14">
          <div className="lg:col-span-2">
            {/* specs */}
            {specs.length ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {specs.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-ink/10 bg-white p-4 text-center">
                    <s.icon className="mx-auto h-6 w-6 text-teal" strokeWidth={1.5} />
                    <p className="mt-2 display text-xl text-ink">{s.value}</p>
                    <p className="text-xs text-ink/65">{s.label}</p>
                  </div>
                ))}
              </div>
            ) : null}

            <h2 className="mt-10 display text-2xl text-ink">Sobre o imóvel</h2>
            <p className="mt-4 whitespace-pre-line text-[15px] leading-relaxed text-ink/70">
              {p.desc
                ? p.desc
                : `Excelente ${p.tipo.toLowerCase()} em ${local}, no litoral sul de São Paulo. Uma ótima oportunidade para morar ou investir com a segurança da maior imobiliária de Itanhaém.`}
            </p>
            <p className="mt-3 text-sm text-ink/65">Código do imóvel: {p.code}</p>

            {/* map */}
            <h2 className="mt-10 display text-2xl text-ink">Localização</h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                title={`Mapa de ${local}`}
                src={mapSrc}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Sticky contact card */}
          <aside className="lg:col-span-1">
            <div className="sticky top-[92px] rounded-[1.75rem] border border-ink/10 bg-white p-7 shadow-soft">
              <p className="text-sm text-ink/65">Valor de venda</p>
              <p className="display text-3xl text-ink">{p.priceLabel}</p>
              <div className="my-6 rule" />
              <p className="text-sm leading-relaxed text-ink/60">
                Fale agora com um consultor especialista no litoral sul e tire todas
                as suas dúvidas sobre este imóvel.
              </p>
              <a
                href={wa(WHATSAPP_MAIN, waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5 w-full"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                Tenho interesse
              </a>
              <a
                href={wa(WHATSAPP_MAIN, visitMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-3 w-full"
              >
                <CalendarClock className="h-4 w-4" strokeWidth={2} />
                Agendar visita
              </a>
              <a href={`tel:+55${WHATSAPP_MAIN.slice(2)}`} className="btn-outline mt-3 w-full">
                <Phone className="h-4 w-4" strokeWidth={2} />
                {CONTACT.phone2}
              </a>
              <p className="mt-5 flex items-center justify-center gap-2 text-xs text-ink/65">
                <ShieldCheck className="h-4 w-4 text-teal" />
                Atendimento com confiança e transparência
              </p>
            </div>
          </aside>
        </section>

        {/* Related */}
        {related.length ? (
          <section className="container-x pb-24">
            <div className="flex items-end justify-between">
              <h2 className="display text-2xl text-ink sm:text-3xl">Imóveis parecidos</h2>
              <Link href="/imoveis" className="group inline-flex items-center gap-2 text-sm font-semibold text-teal">
                Ver todos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <PropertyCard key={r.code} p={r} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
