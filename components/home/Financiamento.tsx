'use client';

import { useMemo, useState } from 'react';
import { Calculator, MessageCircle, Info } from 'lucide-react';
import { wa, WHATSAPP_MAIN } from '@/lib/site';
import Reveal from '../ui/Reveal';

// Build deterministically to avoid SSR/hydration whitespace-glyph mismatches
// (ICU emits U+00A0 vs U+202F between "R$" and digits across environments).
const brl = (n: number) =>
  'R$ ' + Math.round(n).toLocaleString('pt-BR', { maximumFractionDigits: 0 });

function Slider({
  label, value, min, max, step, onChange, format,
}: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; format: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-ink/70">{label}</label>
        <span className="display text-lg text-teal">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-ink/10 accent-teal"
      />
    </div>
  );
}

export default function Financiamento() {
  const [valor, setValor] = useState(450000);
  const [entradaPct, setEntradaPct] = useState(20);
  const [anos, setAnos] = useState(30);
  const [taxa, setTaxa] = useState(10.5);

  const { financiado, parcela, entrada } = useMemo(() => {
    const entrada = valor * (entradaPct / 100);
    const financiado = valor - entrada;
    const i = taxa / 100 / 12;
    const n = anos * 12;
    const parcela = i > 0 ? (financiado * i) / (1 - Math.pow(1 + i, -n)) : financiado / n;
    return { financiado, parcela, entrada };
  }, [valor, entradaPct, anos, taxa]);

  return (
    <section id="financiamento" className="bg-cream/60 py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Financiamento
            </p>
          </Reveal>
          <Reveal i={1}>
            <h2 className="display text-3xl leading-[1.08] text-ink sm:text-4xl lg:text-[2.9rem]">
              Simule o seu financiamento em{' '}
              <span className="italic text-golddeep">segundos.</span>
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60 sm:text-lg">
              Descubra o valor estimado da parcela e planeje a compra do seu imóvel.
              Como correspondente bancário, aceleramos a aprovação do seu crédito com
              os principais bancos.
            </p>
          </Reveal>
          <Reveal i={3}>
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-ink/10 bg-white/60 p-4 text-sm text-ink/60">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              Simulação aproximada pela tabela Price, para fins ilustrativos. As
              condições finais dependem da análise de crédito de cada banco.
            </div>
          </Reveal>
        </div>

        {/* Calculator */}
        <Reveal i={1}>
          <div className="rounded-[2rem] border border-ink/10 bg-white p-7 shadow-soft sm:p-9">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal">
                <Calculator className="h-5 w-5" />
              </span>
              <div>
                <p className="display text-lg text-ink">Simulador de parcelas</p>
                <p className="text-xs text-ink/65">Ajuste os valores abaixo</p>
              </div>
            </div>

            <div className="mt-7 space-y-6">
              <Slider label="Valor do imóvel" value={valor} min={50000} max={3000000} step={10000} onChange={setValor} format={brl} />
              <Slider label="Entrada" value={entradaPct} min={10} max={70} step={1} onChange={setEntradaPct} format={(v) => `${v}% · ${brl(entrada)}`} />
              <Slider label="Prazo" value={anos} min={5} max={35} step={1} onChange={setAnos} format={(v) => `${v} anos`} />
              <Slider label="Taxa de juros (a.a.)" value={taxa} min={8} max={14} step={0.1} onChange={setTaxa} format={(v) => `${v.toFixed(1)}%`} />
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4 rounded-2xl bg-deep p-5 text-porcelain">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50">Valor financiado</p>
                <p className="mt-1 display text-2xl text-white">{brl(financiado)}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50">Parcela estimada</p>
                <p className="mt-1 display text-2xl text-gold">{brl(parcela)}</p>
              </div>
            </div>

            <a
              href={wa(
                WHATSAPP_MAIN,
                `Olá! Simulei um financiamento no site: imóvel de ${brl(valor)}, entrada de ${brl(entrada)}, ${anos} anos. Parcela estimada de ${brl(parcela)}. Gostaria de conversar com o correspondente.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Falar com o correspondente
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
