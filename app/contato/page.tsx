import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/ui/WhatsAppFab';
import ContatoForm from '@/components/ContatoForm';
import Social from '@/components/ui/Social';
import Reveal from '@/components/ui/Reveal';
import { CONTACT, wa, WHATSAPP_MAIN } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com a Oliveira FILX Imóveis. Telefone, WhatsApp, e-mail e endereço em Itanhaém — SP. Atendimento de segunda a sábado.',
};

const mapQuery = encodeURIComponent(
  `${CONTACT.address.line1}, ${CONTACT.address.line2}, ${CONTACT.address.city}, ${CONTACT.address.zip}`
);

export default function ContatoPage() {
  const info = [
    { icon: Phone, label: 'Telefone', value: `${CONTACT.phone1} · ${CONTACT.phone2}`, href: `tel:+55${WHATSAPP_MAIN.slice(2)}` },
    { icon: MessageCircle, label: 'WhatsApp', value: CONTACT.phone2, href: wa(WHATSAPP_MAIN, 'Olá, FILX Imóveis!') },
    { icon: Mail, label: 'E-mail', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MapPin, label: 'Endereço', value: `${CONTACT.address.line1}, ${CONTACT.address.line2} · ${CONTACT.address.city} · ${CONTACT.address.zip}`, href: `https://www.google.com/maps?q=${mapQuery}` },
    { icon: Clock, label: 'Horário', value: CONTACT.hours },
  ];

  return (
    <>
      <Navbar />
      <main id="conteudo" className="pt-[74px]">
        <section className="container-x grid gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Contato
              </p>
            </Reveal>
            <Reveal i={1}>
              <h1 className="display text-4xl leading-[1.05] text-ink sm:text-5xl">
                Vamos conversar sobre o seu{' '}
                <span className="italic text-golddeep">próximo lar?</span>
              </h1>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65">
                Estamos no coração de Itanhaém, prontos para atender você com
                confiança e transparência. Escolha o canal que preferir.
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {info.map((item, i) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal">
                      <item.icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-ink/65">{item.label}</span>
                      <span className="mt-0.5 block text-sm font-medium text-ink/85">{item.value}</span>
                    </span>
                  </>
                );
                const cls = 'flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-4';
                return (
                  <Reveal key={item.label} i={i}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`${cls} transition-colors hover:border-teal/30`}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal i={3}>
              <div className="mt-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-ink/65">Siga a FILX</p>
                <Social />
              </div>
            </Reveal>
          </div>

          <Reveal i={1}>
            <ContatoForm />
          </Reveal>
        </section>

        {/* Map */}
        <section className="container-x pb-20">
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] border border-ink/10">
              <iframe
                title="Localização Oliveira FILX Imóveis"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-[340px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
