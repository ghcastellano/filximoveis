import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BRAND, CONTACT } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade da Oliveira FILX Imóveis.',
};

export default function PrivacidadePage() {
  return (
    <>
      <Navbar />
      <main id="conteudo" className="pt-[74px]">
        <section className="container-x max-w-3xl py-16 sm:py-24">
          <h1 className="display text-4xl text-ink sm:text-5xl">Política de Privacidade</h1>
          <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink/70">
            <p>
              A {BRAND.name} valoriza a privacidade dos seus visitantes e clientes. Esta
              política descreve, de forma transparente, como tratamos as informações
              coletadas neste site, em conformidade com a Lei Geral de Proteção de
              Dados (LGPD).
            </p>
            <div>
              <h2 className="display text-xl text-ink">Dados que coletamos</h2>
              <p className="mt-2">
                Coletamos apenas as informações que você nos fornece voluntariamente —
                como nome, e-mail e telefone/WhatsApp — ao preencher nossos formulários
                de contato, avaliação de imóvel ou simulação de financiamento.
              </p>
            </div>
            <div>
              <h2 className="display text-xl text-ink">Como usamos</h2>
              <p className="mt-2">
                Utilizamos os seus dados exclusivamente para responder às suas
                solicitações, apresentar imóveis compatíveis com o seu interesse e
                prestar um atendimento personalizado. Não vendemos nem compartilhamos
                seus dados com terceiros para fins de marketing.
              </p>
            </div>
            <div>
              <h2 className="display text-xl text-ink">Seus direitos</h2>
              <p className="mt-2">
                Você pode solicitar a qualquer momento a consulta, correção ou exclusão
                dos seus dados pessoais entrando em contato pelo e-mail{' '}
                <a href={`mailto:${CONTACT.email}`} className="text-teal underline">
                  {CONTACT.email}
                </a>
                .
              </p>
            </div>
            <p className="text-sm text-ink/65">Última atualização: julho de 2026.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
