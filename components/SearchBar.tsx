'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ChevronDown } from 'lucide-react';

function Field({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <div className="flex-1">
      <label
        htmlFor={id}
        className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-ink/60"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-ink/10 bg-porcelain/60 py-3 pl-3.5 pr-9 text-sm font-medium text-ink outline-none transition-colors focus-visible:border-teal focus-visible:ring-2 focus-visible:ring-teal/40"
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" />
      </div>
    </div>
  );
}

export default function SearchBar({
  tipos,
  cidades,
  variant = 'light',
}: {
  tipos: string[];
  cidades: string[];
  variant?: 'light' | 'onImage';
}) {
  const router = useRouter();
  const [tipo, setTipo] = useState('');
  const [cidade, setCidade] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (tipo) params.set('tipo', tipo);
    if (cidade) params.set('cidade', cidade);
    router.push(`/imoveis${params.toString() ? '?' + params.toString() : ''}`);
  };

  const wrap =
    variant === 'onImage'
      ? 'bg-white/95 backdrop-blur-xl shadow-soft'
      : 'bg-white border border-ink/10 shadow-card';

  return (
    <form
      onSubmit={submit}
      className={`flex flex-col gap-3 rounded-2xl p-3 sm:flex-row sm:items-end ${wrap}`}
    >
      <Field
        id="sb-tipo"
        label="Tipo de imóvel"
        value={tipo}
        onChange={setTipo}
        options={tipos}
        placeholder="Todos os tipos"
      />
      <Field
        id="sb-cidade"
        label="Cidade"
        value={cidade}
        onChange={setCidade}
        options={cidades}
        placeholder="Todo o litoral sul"
      />
      <button
        type="submit"
        className="btn-primary h-[46px] shrink-0 focus-visible:ring-2 focus-visible:ring-teal/50 focus-visible:ring-offset-2 sm:w-auto"
      >
        <Search className="h-4 w-4" strokeWidth={2.2} />
        Buscar
      </button>
    </form>
  );
}
