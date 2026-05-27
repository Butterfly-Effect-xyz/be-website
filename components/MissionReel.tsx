"use client"
import { useState, useEffect, useRef } from "react"

interface Props {
  vimeoId: string   // paste your Vimeo video ID here after uploading
  label?:  string
}

export default function MissionReel({ vimeoId, label = "The Reel" }: Props) {
  const [playing,  setPlaying]  = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [hovered,  setHovered]  = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Trigger clip-path reveal once the section scrolls 20% into view
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true) },
      { threshold: 0.18 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Nothing to show until there is a real Vimeo ID
  if (!vimeoId || vimeoId === 'VIMEO_ID') return null

  return (
    <section style={{ background: '#fff', padding: '0' }}>
      <div
        ref={ref}
        onClick={() => !playing && setPlaying(true)}
        style={{
          position:   'relative',
          width:      '100%',
          aspectRatio:'16 / 9',
          background: '#080808',
          overflow:   'hidden',
          cursor:     playing ? 'default' : 'pointer',
          /* Clip-path reveal: inset → full open */
          clipPath:   revealed
            ? 'inset(0% 0% 0% 0%)'
            : 'inset(5% 4% 5% 4%)',
          transition: 'clip-path 1.2s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* ── Grid texture ────────────────────────────────── */}
        <div style={{
          position:        'absolute',
          inset:            0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
          backgroundSize:  '64px 64px',
          pointerEvents:   'none',
          zIndex:           1,
        }} />

        {/* ── Vignette ────────────────────────────────────── */}
        <div style={{
          position:   'absolute',
          inset:       0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)',
          zIndex:      2,
          pointerEvents:'none',
        }} />

        {/* ── Poster / play state ─────────────────────────── */}
        {!playing && (
          <div style={{
            position:       'absolute',
            inset:           0,
            display:        'flex',
            flexDirection:  'column',
            alignItems:     'center',
            justifyContent: 'center',
            gap:             28,
            zIndex:          3,
            /* Fade in as clip-path opens */
            opacity:         revealed ? 1 : 0,
            transform:       revealed ? 'none' : 'translateY(12px)',
            transition:     'opacity 0.8s 0.3s ease, transform 0.8s 0.3s ease',
          }}>
            <span style={{
              fontFamily:    'var(--mono)',
              fontSize:       11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color:         'rgba(255,255,255,0.38)',
            }}>
              Butterfly Effect
            </span>

            <h2 style={{
              fontFamily:    'var(--display)',
              fontWeight:     200,
              fontSize:      'clamp(52px,9vw,140px)',
              lineHeight:     0.9,
              letterSpacing: '-0.04em',
              color:         '#fff',
              margin:         0,
              textAlign:     'center',
            }}>
              {label}
            </h2>

            {/* Play button */}
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                marginTop:      16,
                width:           72,
                height:          72,
                borderRadius:   '50%',
                border:         '1.5px solid rgba(255,255,255,0.5)',
                background:      hovered ? 'rgba(255,255,255,0.1)' : 'transparent',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                cursor:         'pointer',
                color:          '#fff',
                transition:     'background 0.25s, border-color 0.25s, transform 0.25s',
                transform:       hovered ? 'scale(1.08)' : 'scale(1)',
              }}
              aria-label="Play reel"
            >
              {/* Play triangle */}
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22, marginLeft: 3 }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            <span style={{
              fontFamily:    'var(--mono)',
              fontSize:       10,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color:         'rgba(255,255,255,0.25)',
              marginTop:     -8,
            }}>
              Press play
            </span>
          </div>
        )}

        {/* ── Vimeo iframe (lazy — only mounts on click) ──── */}
        {playing && (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&byline=0&title=0&portrait=0&color=ffffff`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              inset:     0,
              width:    '100%',
              height:   '100%',
              border:   'none',
              zIndex:    5,
            }}
          />
        )}
      </div>
    </section>
  )
}
