'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};
const staticV: Variants = { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } };

export default function Reveal({
  children,
  i = 0,
  className,
  as = 'div',
}: {
  children: ReactNode;
  i?: number;
  className?: string;
  as?: 'div' | 'li' | 'span' | 'section' | 'article';
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      custom={i}
      variants={reduce ? staticV : variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-70px' }}
    >
      {children}
    </Tag>
  );
}
