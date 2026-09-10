'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { wa, WHATSAPP_MAIN } from '@/lib/site';

const field =
  'w-full rounded-xl border border-ink/12 bg-porcelain/50 px-4 py-3 text-sm text-ink placeholder-ink/60 outline-none transition-colors focus-visible:border-teal focus-visible:ring-2 focus-visible:ring-teal/40 focus:bg-white';

const INTERESSES = ['Comprar um imóvel', 'Vender / anunciar', 'Financiamento', 'Outro assunto'];

export default function ContatoForm() {
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '', interesse: INTERESSES[0], msg: '' });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá, FILX Imóveis! Meu nome é ${form.nome || '—'}.\n` +
      `Interesse: ${form.interesse}\n` +
      `E-mail: ${form.email || '—'}\n` +
      `WhatsApp: ${form.whatsapp || '—'}\n\n` +
      `${form.msg || 'Gostaria de mais informações.'}`;
    const url = wa(WHATSAPP_MAIN, text);
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) window.location.href = url;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="rounded-[1.75rem] border border-ink/10 bg-white p-7 shadow-soft sm:p-9">
      <h2 className="display text-2xl text-ink">Envie uma mensagem</h2>
      <p className="mt-1.5 text-sm text-ink/65">
        Preencha os campos e abrimos uma conversa no WhatsApp com os seus dados já prontos.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="c-nome" className="mb-1.5 block text-xs font-medium text-ink/60">Nome *</label>
          <input id="c-nome" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="Seu nome" className={field} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="c-email" className="mb-1.5 block text-xs font-medium text-ink/60">E-mail *</label>
            <input id="c-email" required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="voce@email.com" className={field} />
          </div>
          <div>
            <label htmlFor="c-wpp" className="mb-1.5 block text-xs font-medium text-ink/60">WhatsApp *</label>
            <input id="c-wpp" required inputMode="numeric" pattern="[0-9()\s-]{10,}" title="Inclua o DDD, ex.: (13) 99999-9999" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="(13) 99999-9999" className={field} />
          </div>
        </div>
        <div>
          <label htmlFor="c-int" className="mb-1.5 block text-xs font-medium text-ink/60">Interesse</label>
          <select id="c-int" value={form.interesse} onChange={(e) => setForm({ ...form, interesse: e.target.value })} className={field}>
            {INTERESSES.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="c-msg" className="mb-1.5 block text-xs font-medium text-ink/60">Mensagem</label>
          <textarea id="c-msg" rows={4} value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} placeholder="Conte o que você procura…" className={`${field} resize-none`} />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full">
        Enviar pelo WhatsApp
        <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
      </button>
      {sent ? (
        <p role="status" className="mt-4 text-center text-xs text-teal">
          Conversa aberta no WhatsApp! Se não abrir automaticamente,{' '}
          <a href={wa(WHATSAPP_MAIN, `Olá, sou ${form.nome || 'cliente'} e vim pelo site.`)} target="_blank" rel="noopener noreferrer" className="underline">
            toque aqui
          </a>
          .
        </p>
      ) : (
        <p className="mt-4 text-center text-xs text-ink/65">
          Resposta rápida no horário comercial · Seg–Sáb, 9h às 17h.
        </p>
      )}
    </form>
  );
}
