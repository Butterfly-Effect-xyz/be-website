"use client"
import { useState, useEffect, useRef, useCallback } from "react"

interface Props {
  src:    string   // path to the video file, e.g. "/video/reel.mp4"
  label?: string
}

export default function MissionReel({ src, label = "The Reel" }: Props) {
  const [playing,  setPlaying]  = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [hovered,  setHovered]  = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Clip-path reveal when section scrolls 18% into viewport
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true) },
      { threshold: 0.18 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Auto-play as soon as the <video> element mounts
  const videoRef = useCallback((node: HTMLVideoElement | null) => {
    if (node) node.play().catch(() => {})
  }, [])

  if (!src) return null

  return (
    <section style={{ background: '#fff', padding: '72px 0' }}>
      <div style={{ maxWidth: 840, margin: '0 auto', padding: '0 clamp(24px,5vw,56px)' }}>
      <div
        ref={sectionRef}
        onClick={() => !playing && setPlaying(true)}
        style={{
          position:    'relative',
          width:       '100%',
          aspectRatio: '16 / 9',
          background:  '#080808',
          overflow:    'hidden',
          cursor:       playing ? 'default' : 'pointer',
          clipPath:     revealed ? 'inset(0% 0% 0% 0%)' : 'inset(6% 4% 6% 4%)',
          transition:  'clip-path 1.2s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Subtle grid texture */}
        <div style={{
          position:        'absolute',
          inset:            0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
          backgroundSize:  '64px 64px',
          pointerEvents:   'none',
          zIndex:           1,
        }} />

        {/* Edge vignette */}
        <div style={{
          position:      'absolute',
          inset:          0,
          background:    'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)',
          pointerEvents: 'none',
          zIndex:         2,
        }} />

        {/* Poster / play button — shown before play */}
        <div style={{
          position:       'absolute',
          inset:           0,
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          justifyContent: 'center',
          gap:             24,
          zIndex:          3,
          opacity:         revealed && !playing ? 1 : 0,
          transform:       revealed ? 'none' : 'translateY(12px)',
          transition:     'opacity 0.5s ease, transform 0.8s 0.3s ease',
          pointerEvents:   playing ? 'none' : 'auto',
        }}>
          <span style={{
            fontFamily:    'var(--mono)',
            fontSize:       11,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         'rgba(255,255,255,0.35)',
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

          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              marginTop:      12,
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
              transition:     'background 0.25s, transform 0.25s',
              transform:       hovered ? 'scale(1.08)' : 'scale(1)',
            }}
            aria-label="Play reel"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22, marginLeft: 3 }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          <span style={{
            fontFamily:    'var(--mono)',
            fontSize:       10,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color:         'rgba(255,255,255,0.22)',
            marginTop:     -8,
          }}>
            Press play
          </span>
        </div>

        {/* Video — only mounts after play is pressed */}
        {playing && (
          <video
            ref={videoRef}
            src={src}
            controls
            playsInline
            preload="none"
            style={{
              position: 'absolute',
              inset:     0,
              width:    '100%',
              height:   '100%',
              objectFit:'cover',
              zIndex:    5,
              background:'#000',
            }}
          />
        )}
      </div>
      </div>
    </section>
  )
}
