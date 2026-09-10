'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import SearchBar from '../SearchBar';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero({
  image,
  tipos,
  cidades,
}: {
  image: string;
  tipos: string[];
  cidades: string[];
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '14%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      {/* background image */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt="Imóvel à beira-mar no litoral sul de São Paulo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      {/* scrims */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/40 to-deep/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep/80 via-deep/20 to-transparent" />

      <div className="container-x flex min-h-[100svh] flex-col justify-end pb-12 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="eyebrow-light mb-5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Litoral Sul de São Paulo · a maior imobiliária de Itanhaém
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.08 }}
          className="max-w-4xl display text-[2.9rem] leading-[1.0] text-white text-balance sm:text-6xl lg:text-7xl"
        >
          Encontre o seu lugar{' '}
          <span className="italic text-goldsoft">à beira-mar.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.18 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Casas, apartamentos, terrenos e chácaras selecionados em Itanhaém, Praia
          Grande, Peruíbe e Mongaguá — com a confiança, a transparência e a
          credibilidade da maior imobiliária da região.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
          className="mt-9 max-w-3xl"
        >
          <SearchBar tipos={tipos} cidades={cidades} variant="onImage" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/75"
        >
          <span className="inline-flex items-center gap-2">
            <Star className="h-4 w-4 fill-gold text-gold" />
            Atendimento nota máxima dos nossos clientes
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" />
            <Link href="/imoveis" className="underline-offset-4 hover:underline">
              Ver todos os imóveis disponíveis
            </Link>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
