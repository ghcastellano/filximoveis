'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { CONTACT, wa, WHATSAPP_MAIN } from '@/lib/site';

const NAV = [
  { label: 'Comprar', href: '/imoveis' },
  { label: 'Anunciar', href: '/seu-imovel' },
  { label: 'Financiamento', href: '/financiamento' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

export function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-baseline gap-1.5 leading-none">
      <span
        className={`display text-2xl font-medium ${dark ? 'text-white' : 'text-ink'}`}
      >
        FILX
      </span>
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      <span
        className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${
          dark ? 'text-white/60' : 'text-ink/65'
        }`}
      >
        Imóveis
      </span>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-porcelain focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80]"
      >
        Pular para o conteúdo
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-ink/8 bg-porcelain/90 shadow-[0_6px_24px_-16px_rgba(10,43,39,0.4)] backdrop-blur-xl'
            : 'border-b border-transparent bg-porcelain/80 backdrop-blur-md'
        }`}
      >
        <nav className="container-x flex h-[74px] items-center justify-between">
          <Link href="/" aria-label="Oliveira FILX Imóveis — início">
            <Wordmark />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active ? 'text-teal' : 'text-ink/70 hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT.clientArea}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1 text-sm font-medium text-ink/60 transition-colors hover:text-ink xl:inline-flex"
            >
              Área do Cliente
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
            <a
              href={wa(WHATSAPP_MAIN, 'Olá! Vim pelo site e gostaria de falar com a FILX Imóveis.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-porcelain transition-all hover:bg-deep sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
            className="fixed inset-0 z-[60] bg-porcelain lg:hidden"
          >
            <div className="container-x flex h-[74px] items-center justify-between">
              <Wordmark />
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.ul
              className="container-x mt-6 flex flex-col"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: reduce ? 0 : 0.05 } } }}
            >
              {NAV.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: reduce ? 1 : 0, x: reduce ? 0 : -16 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink/8 py-4 display text-3xl text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <div className="container-x mt-8 flex flex-col gap-3">
              <a
                href={wa(WHATSAPP_MAIN, 'Olá! Vim pelo site e gostaria de falar com a FILX Imóveis.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                Falar no WhatsApp
              </a>
              <a
                href={CONTACT.clientArea}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full"
              >
                Área do Cliente
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
