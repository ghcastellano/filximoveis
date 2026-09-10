import { ImageResponse } from 'next/og';

export const alt = 'Oliveira FILX Imóveis — imóveis no litoral sul de SP';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(135deg, #0a2b27 0%, #12655c 100%)',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 16, height: 16, borderRadius: 99, background: '#bf9d5f' }} />
          <div style={{ color: '#d8be8e', fontSize: 24, letterSpacing: 6, fontWeight: 700, fontFamily: 'sans-serif' }}>
            LITORAL SUL DE SÃO PAULO
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: 'white', fontSize: 82, lineHeight: 1.02 }}>
            Encontre o seu lugar
          </div>
          <div style={{ fontSize: 82, lineHeight: 1.05, fontStyle: 'italic', color: '#d8be8e' }}>
            à beira-mar.
          </div>
          <div style={{ marginTop: 26, color: 'rgba(255,255,255,0.75)', fontSize: 28, maxWidth: 900, fontFamily: 'sans-serif' }}>
            Casas, apartamentos, terrenos e chácaras em Itanhaém, Praia Grande, Peruíbe e Mongaguá.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, color: 'white', fontSize: 40 }}>
            FILX<span style={{ color: '#bf9d5f', fontSize: 20, fontFamily: 'sans-serif' }}>IMÓVEIS</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 24, fontFamily: 'sans-serif' }}>
            A maior imobiliária de Itanhaém
          </div>
        </div>
      </div>
    ),
    size
  );
}
