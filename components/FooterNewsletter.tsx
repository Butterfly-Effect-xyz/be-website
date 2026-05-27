"use client"
import { useState } from "react"

const INPUT: React.CSSProperties = {
  display:      'block',
  width:        '100%',
  background:   'transparent',
  border:       'none',
  borderBottom: '1px solid rgba(244,239,230,0.15)',
  padding:      '13px 0',
  fontFamily:   'var(--sans)',
  fontSize:      14,
  color:        'rgba(244,239,230,0.85)',
  outline:      'none',
}

export default function FooterNewsletter() {
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <div>
        <p className="footer-col-label">Newsletter</p>
        <p style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 'clamp(18px,1.6vw,24px)', letterSpacing: '-0.01em', color: 'rgba(244,239,230,0.9)', margin: '0 0 10px' }}>
          Free Smoke
        </p>
        <p style={{ fontSize: 14, color: 'rgba(244,239,230,0.5)', lineHeight: 1.55, margin: '0 0 32px' }}>
          You're on the list.
        </p>
      </div>
    )
  }

  return (
    <div>
      <p className="footer-col-label">Newsletter</p>

      <p style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 'clamp(18px,1.6vw,24px)', letterSpacing: '-0.01em', color: 'rgba(244,239,230,0.9)', margin: '0 0 10px' }}>
        Free Smoke
      </p>
      <p style={{ fontSize: 14, color: 'rgba(244,239,230,0.5)', lineHeight: 1.55, margin: '0 0 32px' }}>
        Culture, trends, and the occasional hot take.
      </p>

      <form onSubmit={e => { e.preventDefault(); setDone(true) }}>
        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          required
          className="footer-nl-input"
          style={{ ...INPUT, marginBottom: 4 }}
        />

        {/* Email + arrow submit on same line */}
        <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(244,239,230,0.15)', marginBottom: 28 }}>
          <input
            type="email"
            placeholder="Email"
            required
            className="footer-nl-input"
            style={{ ...INPUT, border: 'none', borderBottom: 'none', flex: 1, marginBottom: 0 }}
          />
          <button
            type="submit"
            style={{
              background: 'none',
              border:     'none',
              cursor:     'pointer',
              padding:    '4px 0 4px 8px',
              color:      'rgba(244,239,230,0.55)',
              display:    'flex',
              alignItems: 'center',
              transition: 'color 0.2s',
              flexShrink:  0,
            }}
            className="footer-nl-arrow"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 15, height: 15 }}>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Consent */}
        {[
          { text: 'I agree to allow Butterfly Effect to store and process my personal data.',                                                                           required: true  },
          { text: 'I agree to receive communications from Butterfly Effect about our products and services, as well as other content that may be of interest to me.', required: false },
        ].map(({ text, required }, i) => (
          <label key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12, cursor: 'pointer' }}>
            <input
              type="checkbox"
              required={required}
              style={{ marginTop: 2, flexShrink: 0, width: 14, height: 14, cursor: 'pointer', accentColor: '#fff' } as React.CSSProperties}
            />
            <span style={{ fontFamily: 'var(--sans)', fontSize: 12, lineHeight: 1.55, color: 'rgba(244,239,230,0.38)' }}>
              {text}
            </span>
          </label>
        ))}
      </form>
    </div>
  )
}
