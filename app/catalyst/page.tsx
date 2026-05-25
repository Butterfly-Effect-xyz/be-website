export const revalidate = 60

import { client } from '@/lib/sanity'
import { catalystConfigQuery, catalystEventsQuery } from '@/lib/queries'

const RUST = '#b5452a'

async function getData() {
  try {
    const [config, events] = await Promise.all([
      client.fetch(catalystConfigQuery),
      client.fetch(catalystEventsQuery),
    ])
    return { config, events: events || [] }
  } catch { return { config: null, events: [] } }
}

const STATS = [
  { num: '400+', label: 'Senior leaders hosted' },
  { num: '12',   label: 'Events delivered' },
  { num: '6',    label: 'Cities worldwide' },
  { num: '95%',  label: 'Would attend again' },
]

const PHOTO_WIDTHS = [280, 340, 260, 320, 290]

export default async function CatalystPage() {
  const { config } = await getData()

  const headline    = config?.headline    || 'Conversations that shape culture'
  const description = config?.description || 'Catalyst brings together founders, creatives, and strategists for intimate evenings of candid dialogue. No panels. No pitches. Just the conversations that matter.'

  return (
    <main>
      <style>{`
        .catalyst-input::placeholder { color: rgba(255,255,255,0.45); }
        .catalyst-input { color: #fff; }
        .catalyst-register:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
        .catalyst-invite:hover { background: #8f3620; }
        .catalyst-subscribe:hover { background: #f0ede8; }
        .catalyst-gallery:hover { color: rgba(0,0,0,0.75); }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        position:        'relative',
        minHeight:       '100vh',
        background:      '#090909',
        display:         'flex',
        flexDirection:   'column',
        alignItems:      'center',
        justifyContent:  'center',
        overflow:        'hidden',
        marginTop:       -88,
        paddingTop:      88,
      }}>

        {/* Grid overlay */}
        <div style={{
          position:        'absolute',
          inset:           0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)',
          backgroundSize:  '64px 64px',
          pointerEvents:   'none',
        }} />

        {/* Rust glow – top right */}
        <div style={{
          position:      'absolute',
          top:           '-10%',
          right:         '8%',
          width:         '46vw',
          height:        '70vh',
          background:    'radial-gradient(ellipse at 60% 40%, rgba(181,69,42,0.5) 0%, rgba(120,38,18,0.28) 42%, transparent 70%)',
          filter:        'blur(48px)',
          pointerEvents: 'none',
        }} />

        {/* Subtle bottom-left glow */}
        <div style={{
          position:      'absolute',
          bottom:        '0',
          left:          '-4%',
          width:         '28vw',
          height:        '38vh',
          background:    'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
          filter:        'blur(60px)',
          pointerEvents: 'none',
        }} />

        {/* Sign in / Register / Contact – top right */}
        <div style={{
          position:   'absolute',
          top:        96,
          right:      40,
          display:    'flex',
          alignItems: 'center',
          gap:        20,
          zIndex:     10,
        }}>
          <a href="#" style={{
            fontFamily:     'var(--sans)',
            fontSize:       11,
            fontWeight:     600,
            letterSpacing:  '0.2em',
            textTransform:  'uppercase',
            color:          'rgba(255,255,255,0.6)',
            textDecoration: 'none',
          }}>Sign in</a>
          <a href="#" className="catalyst-register" style={{
            fontFamily:     'var(--sans)',
            fontSize:       11,
            fontWeight:     700,
            letterSpacing:  '0.2em',
            textTransform:  'uppercase',
            color:          '#fff',
            textDecoration: 'none',
            border:         '1.5px solid rgba(255,255,255,0.5)',
            padding:        '10px 22px',
            borderRadius:   2,
            transition:     'border-color 0.2s, background 0.2s',
          }}>Register</a>
          <a href="/contact" style={{
            fontFamily:     'var(--sans)',
            fontSize:       11,
            fontWeight:     700,
            letterSpacing:  '0.2em',
            textTransform:  'uppercase',
            color:          '#fff',
            textDecoration: 'none',
            background:     RUST,
            padding:        '10px 22px',
            borderRadius:   2,
            transition:     'background 0.2s',
          }}>Contact</a>
        </div>

        {/* Centred content */}
        <div style={{
          position:  'relative',
          zIndex:    2,
          textAlign: 'center',
          padding:   '0 40px',
          maxWidth:  1000,
        }}>
          <span style={{
            fontFamily:    'var(--mono)',
            fontSize:      11,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         'rgba(255,255,255,0.4)',
            display:       'block',
            marginBottom:  36,
          }}>Butterfly Effect Presents</span>

          <h1 style={{
            fontFamily:    'var(--display)',
            fontWeight:    200,
            fontSize:      'clamp(88px,15vw,196px)',
            lineHeight:    0.92,
            letterSpacing: '-0.04em',
            color:         '#fff',
            margin:        '0 0 44px',
          }}>Catalyst</h1>

          <p style={{
            fontFamily: 'var(--sans)',
            fontSize:   'clamp(15px,1.2vw,18px)',
            lineHeight: 1.65,
            color:      'rgba(255,255,255,0.5)',
            maxWidth:   '42ch',
            margin:     '0 auto',
          }}>
            Where bold ideas meet the people who build them.
            <br />An invitation-only series for creative leaders.
          </p>
        </div>
      </section>

      {/* ── ABOUT + STATS ────────────────────────────────────── */}
      <section style={{ background: '#f5f0ea' }}>

        {/* Split row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

          {/* Image placeholder */}
          <div style={{
            minHeight:       480,
            background:      'linear-gradient(145deg,#c5bdb5 0%,#a89f96 100%)',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
          }}>
            <span style={{
              fontFamily:    'var(--mono)',
              fontSize:      10,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color:         'rgba(255,255,255,0.4)',
            }}>Photo</span>
          </div>

          {/* Copy */}
          <div style={{
            padding:         'clamp(48px,7vw,96px)',
            display:         'flex',
            flexDirection:   'column',
            justifyContent:  'center',
          }}>
            <span style={{
              fontFamily:    'var(--mono)',
              fontSize:      10,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color:         RUST,
              display:       'block',
              marginBottom:  28,
            }}>About the series</span>

            <h2 style={{
              fontFamily:    'var(--display)',
              fontWeight:    700,
              fontSize:      'clamp(30px,4.2vw,56px)',
              lineHeight:    1.07,
              letterSpacing: '-0.025em',
              color:         RUST,
              margin:        '0 0 28px',
              maxWidth:      '16ch',
            }}>{headline}</h2>

            <p style={{
              fontFamily: 'var(--sans)',
              fontSize:   16,
              lineHeight: 1.7,
              color:      'rgba(0,0,0,0.52)',
              margin:     '0 0 40px',
              maxWidth:   '44ch',
            }}>{description}</p>

            <a href="/contact" className="catalyst-invite" style={{
              display:        'inline-flex',
              alignItems:     'center',
              gap:            10,
              padding:        '14px 28px',
              background:     RUST,
              color:          '#fff',
              fontFamily:     'var(--sans)',
              fontSize:       11,
              fontWeight:     700,
              letterSpacing:  '0.2em',
              textTransform:  'uppercase',
              textDecoration: 'none',
              borderRadius:   100,
              alignSelf:      'flex-start',
              transition:     'background 0.2s',
            }}>Request an invitation →</a>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          borderTop:           '1px solid rgba(0,0,0,0.09)',
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding:     'clamp(40px,5vw,64px) clamp(28px,4vw,52px)',
              borderRight: i < 3 ? '1px solid rgba(0,0,0,0.09)' : 'none',
            }}>
              <p style={{
                fontFamily:    'var(--display)',
                fontWeight:    300,
                fontSize:      'clamp(44px,6vw,80px)',
                lineHeight:    1,
                letterSpacing: '-0.04em',
                color:         RUST,
                margin:        '0 0 10px',
              }}>{s.num}</p>
              <p style={{
                fontFamily:    'var(--mono)',
                fontSize:      10,
                fontWeight:    500,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color:         'rgba(0,0,0,0.42)',
                margin:        0,
              }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PAST MOMENTS ─────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '80px 0 96px' }}>

        <div style={{ padding: '0 40px', marginBottom: 36 }}>
          <span style={{
            fontFamily:    'var(--mono)',
            fontSize:      10,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         'rgba(0,0,0,0.38)',
          }}>Past moments</span>
        </div>

        {/* Photo strip */}
        <div style={{
          display:       'flex',
          gap:           4,
          overflowX:     'auto',
          scrollbarWidth:'none',
        }}>
          {PHOTO_WIDTHS.map((w, i) => (
            <div key={i} style={{
              flex:            `0 0 ${w}px`,
              height:          290,
              background:      `hsl(${22 + i * 6},${10 + i * 2}%,${68 + i * 4}%)`,
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
            }}>
              <span style={{
                fontFamily:    'var(--mono)',
                fontSize:      10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color:         'rgba(255,255,255,0.35)',
              }}>Photo {i + 1}</span>
            </div>
          ))}
        </div>

        {/* Gallery link */}
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <a href="#" className="catalyst-gallery" style={{
            fontFamily:     'var(--mono)',
            fontSize:       10,
            letterSpacing:  '0.3em',
            textTransform:  'uppercase',
            color:          'rgba(0,0,0,0.38)',
            textDecoration: 'none',
            transition:     'color 0.2s',
          }}>Gallery</a>
        </div>
      </section>

      {/* ── NEWSLETTER CTA ───────────────────────────────────── */}
      <section style={{
        background: RUST,
        padding:    '100px 40px 120px',
        textAlign:  'center',
      }}>
        <h2 style={{
          fontFamily:    'var(--display)',
          fontWeight:    300,
          fontSize:      'clamp(38px,6.5vw,88px)',
          lineHeight:    1.05,
          letterSpacing: '-0.035em',
          color:         '#fff',
          margin:        '0 auto 20px',
          maxWidth:      '18ch',
        }}>Stay ahead of the conversation</h2>

        <p style={{
          fontFamily: 'var(--sans)',
          fontSize:   16,
          color:      'rgba(255,255,255,0.65)',
          margin:     '0 0 48px',
        }}>Be the first to know about upcoming Catalyst events</p>

        <form style={{
          display:      'flex',
          gap:          0,
          maxWidth:     480,
          margin:       '0 auto 20px',
          borderRadius: 100,
          overflow:     'hidden',
          border:       '1.5px solid rgba(255,255,255,0.28)',
          background:   'rgba(255,255,255,0.1)',
        }}>
          <input
            type="email"
            placeholder="your@email.com"
            className="catalyst-input"
            style={{
              flex:       1,
              padding:    '16px 24px',
              background: 'transparent',
              border:     'none',
              outline:    'none',
              fontFamily: 'var(--sans)',
              fontSize:   14,
            }}
          />
          <button type="submit" className="catalyst-subscribe" style={{
            padding:       '16px 28px',
            background:    '#fff',
            color:         RUST,
            fontFamily:    'var(--sans)',
            fontSize:      11,
            fontWeight:    700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            border:        'none',
            cursor:        'pointer',
            borderRadius:  100,
            margin:        3,
            transition:    'background 0.2s',
          }}>Subscribe</button>
        </form>

        <p style={{
          fontFamily: 'var(--sans)',
          fontSize:   12,
          color:      'rgba(255,255,255,0.4)',
          margin:     0,
        }}>By signing up, you agree to our terms and receive curated professional content.</p>
      </section>
    </main>
  )
}
