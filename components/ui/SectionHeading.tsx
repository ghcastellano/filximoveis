import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  emphasis,
  description,
  align = 'left',
  variant = 'light',
}: {
  eyebrow: string;
  title: string;
  emphasis?: string;
  description?: string;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
}) {
  const titleColor = variant === 'dark' ? 'text-white' : 'text-ink';
  const descColor = variant === 'dark' ? 'text-white/65' : 'text-ink/60';
  const eyebrowCls = variant === 'dark' ? 'eyebrow-light' : 'eyebrow';
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <Reveal>
        <p className={`${eyebrowCls} mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal i={1}>
        <h2 className={`display text-3xl leading-[1.08] sm:text-4xl lg:text-[2.9rem] ${titleColor}`}>
          {title}
          {emphasis && (
            <>
              {' '}
              <span className={`italic ${variant === 'dark' ? 'text-gold' : 'text-golddeep'}`}>
                {emphasis}
              </span>
            </>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal i={2}>
          <p className={`mt-5 text-base leading-relaxed sm:text-lg ${descColor}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
