'use client';

import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronDown, SlidersHorizontal, MapPin } from 'lucide-react';
import type { Property } from '@/lib/properties';
import PropertyCard from '../PropertyCard';
import Reveal from '../ui/Reveal';

const PRICE_RANGES = [
  { label: 'Qualquer preço', min: 0, max: Infinity },
  { label: 'Até R$ 200 mil', min: 0, max: 200000 },
  { label: 'R$ 200 – 500 mil', min: 200000, max: 500000 },
  { label: 'R$ 500 mil – 1 mi', min: 500000, max: 1000000 },
  { label: 'Acima de R$ 1 mi', min: 1000000, max: Infinity },
];

function Select({
  label, value, onChange, children,
}: {
  label: string; value: string; onChange: (v: string) => void; children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3 top-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink/70">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="w-full appearance-none rounded-xl border border-ink/12 bg-white pb-2.5 pl-3 pr-9 pt-6 text-sm font-medium text-ink outline-none transition-colors focus-visible:border-teal focus-visible:ring-2 focus-visible:ring-teal/40"
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/70" />
    </div>
  );
}

export default function ImoveisView({
  properties, tipos, cidades,
}: {
  properties: Property[]; tipos: string[]; cidades: string[];
}) {
  const params = useSearchParams();
  const [tipo, setTipo] = useState('');
  const [cidade, setCidade] = useState('');
  const [priceIdx, setPriceIdx] = useState(0);
  const [dorm, setDorm] = useState(0);
  const [sort, setSort] = useState('relevancia');

  useEffect(() => {
    const t = params.get('tipo');
    const c = params.get('cidade');
    if (t) setTipo(t);
    if (c) setCidade(c);
  }, [params]);

  const filtered = useMemo(() => {
    const pr = PRICE_RANGES[priceIdx];
    let list = properties.filter(
      (p) =>
        (!tipo || p.tipo === tipo) &&
        (!cidade || p.cidade === cidade) &&
        p.price >= pr.min &&
        p.price <= pr.max &&
        (!dorm || (p.dorm ?? 0) >= dorm)
    );
    if (sort === 'menor') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'maior') list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [properties, tipo, cidade, priceIdx, dorm, sort]);

  const clear = () => {
    setTipo(''); setCidade(''); setPriceIdx(0); setDorm(0); setSort('relevancia');
  };
  const hasFilters = tipo || cidade || priceIdx || dorm;

  return (
    <div className="container-x pb-24 pt-28 sm:pt-32">
      <Reveal>
        <p className="eyebrow mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Imóveis à venda
        </p>
        <h1 className="display text-4xl leading-[1.05] text-ink sm:text-5xl">
          O litoral sul de SP,{' '}
          <span className="italic text-golddeep">de casa em casa.</span>
        </h1>
      </Reveal>

      {/* Filter bar */}
      <div className="sticky top-[74px] z-30 mt-8 rounded-2xl border border-ink/10 bg-porcelain/90 p-3 backdrop-blur-xl">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
          <Select label="Tipo" value={tipo} onChange={setTipo}>
            <option value="">Todos</option>
            {tipos.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </Select>
          <Select label="Cidade" value={cidade} onChange={setCidade}>
            <option value="">Todas</option>
            {cidades.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
          <Select label="Preço" value={String(priceIdx)} onChange={(v) => setPriceIdx(Number(v))}>
            {PRICE_RANGES.map((r, i) => (
              <option key={r.label} value={i}>{r.label}</option>
            ))}
          </Select>
          <Select label="Dormitórios" value={String(dorm)} onChange={(v) => setDorm(Number(v))}>
            <option value="0">Qualquer</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </Select>
          <Select label="Ordenar" value={sort} onChange={setSort}>
            <option value="relevancia">Relevância</option>
            <option value="menor">Menor preço</option>
            <option value="maior">Maior preço</option>
          </Select>
        </div>
      </div>

      {/* Results header */}
      <div className="mt-6 flex items-center justify-between">
        <p className="flex items-center gap-2 text-sm text-ink/65">
          <SlidersHorizontal className="h-4 w-4 text-teal" />
          <strong className="text-ink">{filtered.length}</strong>
          {filtered.length === 1 ? ' imóvel encontrado' : ' imóveis encontrados'}
        </p>
        {hasFilters ? (
          <button onClick={clear} className="text-sm font-semibold text-teal hover:text-gold">
            Limpar filtros
          </button>
        ) : null}
      </div>

      {/* Grid */}
      {filtered.length ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <PropertyCard key={p.code} p={p} priority={i < 3} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center rounded-3xl border border-dashed border-ink/15 py-20 text-center">
          <MapPin className="h-8 w-8 text-ink/30" />
          <p className="mt-4 display text-2xl text-ink">Nenhum imóvel com esses filtros</p>
          <p className="mt-2 max-w-sm text-sm text-ink/65">
            Tente ampliar a busca ou fale com a nossa equipe — temos novos imóveis toda semana.
          </p>
          <button onClick={clear} className="btn-outline mt-6">
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
}
