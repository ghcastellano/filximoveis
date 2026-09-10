'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { wa, WHATSAPP_MAIN } from '@/lib/site';

const field =
  'w-full rounded-xl border border-ink/12 bg-porcelain/50 px-4 py-3 text-sm text-ink placeholder-ink/60 outline-none transition-colors focus-visible:border-teal focus-visible:ring-2 focus-visible:ring-teal/40 focus:bg-white';

const TIPOS = ['Casa', 'Apartamento', 'Terreno', 'Chácara', 'Sítio', 'Comercial'];

export default function SeuImovelForm() {
  const [f, setF] = useState({ nome: '', whatsapp: '', tipo: TIPOS[0], cidade: '', bairro: '', valor: '', msg: '' });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá, FILX! Quero anunciar o meu imóvel.\n` +
      `Nome: ${f.nome || '—'}\n` +
      `WhatsApp: ${f.whatsapp || '—'}\n` +
      `Tipo: ${f.tipo}\n` +
      `Cidade/bairro: ${f.cidade || '—'}${f.bairro ? ' / ' + f.bairro : ''}\n` +
      `Valor pretendido: ${f.valor || 'a avaliar'}\n\n` +
      `${f.msg || 'Gostaria de uma avaliação.'}`;
    const url = wa(WHATSAPP_MAIN, text);
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) window.location.href = url;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="rounded-[1.75rem] border border-ink/10 bg-white p-7 shadow-soft sm:p-9">
      <h2 className="display text-2xl text-ink">Avaliação gratuita</h2>
      <p className="mt-1.5 text-sm text-ink/65">Conte sobre o seu imóvel — retornamos com uma avaliação sem compromisso.</p>

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="s-nome" className="mb-1.5 block text-xs font-medium text-ink/60">Nome *</label>
            <input id="s-nome" required value={f.nome} onChange={(e) => setF({ ...f, nome: e.target.value })} placeholder="Seu nome" className={field} />
          </div>
          <div>
            <label htmlFor="s-wpp" className="mb-1.5 block text-xs font-medium text-ink/60">WhatsApp *</label>
            <input id="s-wpp" required inputMode="numeric" pattern="[0-9()\s-]{10,}" title="Inclua o DDD" value={f.whatsapp} onChange={(e) => setF({ ...f, whatsapp: e.target.value })} placeholder="(13) 99999-9999" className={field} />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="s-tipo" className="mb-1.5 block text-xs font-medium text-ink/60">Tipo</label>
            <select id="s-tipo" value={f.tipo} onChange={(e) => setF({ ...f, tipo: e.target.value })} className={field}>
              {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="s-cid" className="mb-1.5 block text-xs font-medium text-ink/60">Cidade</label>
            <input id="s-cid" value={f.cidade} onChange={(e) => setF({ ...f, cidade: e.target.value })} placeholder="Itanhaém" className={field} />
          </div>
          <div>
            <label htmlFor="s-bai" className="mb-1.5 block text-xs font-medium text-ink/60">Bairro</label>
            <input id="s-bai" value={f.bairro} onChange={(e) => setF({ ...f, bairro: e.target.value })} placeholder="Bairro" className={field} />
          </div>
        </div>
        <div>
          <label htmlFor="s-val" className="mb-1.5 block text-xs font-medium text-ink/60">Valor pretendido (opcional)</label>
          <input id="s-val" value={f.valor} onChange={(e) => setF({ ...f, valor: e.target.value })} placeholder="R$ ..." className={field} />
        </div>
        <div>
          <label htmlFor="s-msg" className="mb-1.5 block text-xs font-medium text-ink/60">Detalhes do imóvel</label>
          <textarea id="s-msg" rows={3} value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} placeholder="Metragem, dormitórios, diferenciais…" className={`${field} resize-none`} />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full">
        Quero anunciar
        <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
      </button>
      {sent ? (
        <p role="status" className="mt-4 text-center text-xs text-teal">Conversa aberta no WhatsApp! Nossa equipe já vai te responder.</p>
      ) : (
        <p className="mt-4 text-center text-xs text-ink/65">Avaliação sem compromisso · a maior vitrine de Itanhaém.</p>
      )}
    </form>
  );
}
