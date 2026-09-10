'use client';

import { useEffect, useState } from 'react';
import { CalendarClock, Sun, Sunset, MessageCircle, Check } from 'lucide-react';
import { wa } from '@/lib/site';

type Day = { key: string; weekday: string; day: string; month: string };

export default function ScheduleWidget({
  whatsapp,
  context,
}: {
  whatsapp: string;
  context?: string;
}) {
  const [days, setDays] = useState<Day[]>([]);
  const [sel, setSel] = useState('');
  const [period, setPeriod] = useState<'Manhã' | 'Tarde'>('Manhã');

  // Build upcoming visiting days on the client (Mon–Sat), avoiding hydration mismatch.
  useEffect(() => {
    const wd = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const mo = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    const out: Day[] = [];
    const d = new Date();
    d.setDate(d.getDate() + 1);
    while (out.length < 6) {
      if (d.getDay() !== 0) {
        out.push({
          key: d.toISOString().slice(0, 10),
          weekday: wd[d.getDay()],
          day: String(d.getDate()).padStart(2, '0'),
          month: mo[d.getMonth()],
        });
      }
      d.setDate(d.getDate() + 1);
    }
    setDays(out);
    setSel(out[0].key);
  }, []);

  const chosen = days.find((x) => x.key === sel);
  const slot = chosen ? `${chosen.weekday}, ${chosen.day}/${chosen.month}` : '';
  const msg =
    `Olá, Mário! Quero agendar uma visita para ${slot}, no período da ${period}.` +
    (context ? ` Imóvel: ${context}.` : '') +
    ` Esse horário está disponível?`;

  return (
    <div className="rounded-[1.75rem] border border-ink/10 bg-white p-7 shadow-soft sm:p-8">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal">
          <CalendarClock className="h-5 w-5" />
        </span>
        <div>
          <p className="display text-lg text-ink">Agende uma visita</p>
          <p className="text-xs text-ink/65">Escolha o melhor dia e horário</p>
        </div>
      </div>

      {/* Days */}
      <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {days.map((d) => {
          const active = d.key === sel;
          return (
            <button
              key={d.key}
              onClick={() => setSel(d.key)}
              className={`flex flex-col items-center rounded-xl border py-3 transition-colors ${
                active ? 'border-teal bg-teal text-porcelain' : 'border-ink/12 bg-porcelain/50 text-ink hover:border-teal/40'
              }`}
            >
              <span className="text-[11px] uppercase tracking-wide opacity-70">{d.weekday}</span>
              <span className="display text-xl leading-tight">{d.day}</span>
              <span className="text-[11px] opacity-70">{d.month}</span>
            </button>
          );
        })}
      </div>

      {/* Period */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {([['Manhã', Sun, '9h – 12h'], ['Tarde', Sunset, '13h – 17h']] as const).map(([p, Icon, hrs]) => {
          const active = period === p;
          return (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`flex items-center justify-center gap-2 rounded-xl border py-3 text-sm font-medium transition-colors ${
                active ? 'border-teal bg-teal/10 text-teal' : 'border-ink/12 text-ink/70 hover:border-teal/40'
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={1.8} />
              {p}
              <span className="text-xs opacity-60">· {hrs}</span>
            </button>
          );
        })}
      </div>

      <a
        href={wa(whatsapp, msg)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-6 w-full"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={2} />
        Confirmar visita no WhatsApp
      </a>
      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-ink/65">
        <Check className="h-3.5 w-3.5 text-teal" />
        O Mário confirma a disponibilidade e agenda direto com você.
      </p>
    </div>
  );
}
