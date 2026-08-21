import { ImageResponse } from 'next/og';

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = 'image/png';
export const ogImageAlt = 'ZeroBusy — AI & Automation for Digital Businesses';

const PRIMARY = '#4299E1';
const ACCENT = '#0BC5EA';
const DARK = '#1A202C';

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: DARK,
          backgroundImage: `radial-gradient(circle at 22% 25%, ${PRIMARY}33 0%, transparent 45%), radial-gradient(circle at 78% 75%, ${ACCENT}33 0%, transparent 45%)`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div
            style={{
              width: 108,
              height: 108,
              borderRadius: '50%',
              border: `8px solid ${PRIMARY}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: 8,
                height: 36,
                borderRadius: 4,
                background: PRIMARY,
                top: 16,
                left: '50%',
                marginLeft: -4,
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: 8,
                height: 26,
                borderRadius: 4,
                background: ACCENT,
                top: 30,
                left: '54%',
                marginLeft: -4,
                transform: 'rotate(70deg)',
                transformOrigin: 'bottom center',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 104,
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: -2,
            }}
          >
            ZER
            <span style={{ color: PRIMARY }}>0</span>
            BUSY
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 32,
            fontSize: 34,
            fontWeight: 500,
            color: '#CBD5E1',
          }}
        >
          Streamline. Automate. Scale.
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
