"use client"
import { useState } from "react"

const BUDGET_TICKS  = ['<£10k', '£10k', '£25k', '£50k', '£100k+']
const BUDGET_LABELS = ['<£10k', '£10k – £25k', '£25k – £50k', '£50k – £100k', '£100k+']

type TabId = 'work' | 'press' | 'careers'

const TABS: { id: TabId; label: string; sub: string }[] = [
  { id: 'work',    label: 'Work with us',    sub: 'For brands ready to seize the void.'         },
  { id: 'press',   label: 'Press and media', sub: 'For media and partnership enquiries.'         },
  { id: 'careers', label: 'Careers',         sub: 'For creatives ready to make their mark.'     },
]

const PRIVACY = "Butterfly Effect is committed to protecting and respecting your privacy, and we'll only use your personal information to administer your account and to provide the products and services you requested from us."

const inputStyle: React.CSSProperties = {
  width:        '100%',
  background:   'transparent',
  border:       'none',
  borderBottom: '1px solid rgba(0,0,0,0.13)',
  padding:      '16px 0',
  fontFamily:   'var(--sans)',
  fontSize:      15,
  color:        'var(--fg)',
  outline:      'none',
  display:      'block',
  marginBottom:  32,
}

function Field({ label, type = 'text', required = false }: { label: string; type?: string; required?: boolean }) {
  return (
    <input
      type={type}
      placeholder={label}
      required={required}
      className="cf-input"
      style={inputStyle}
    />
  )
}

function Textarea({ label }: { label: string }) {
  return (
    <textarea
      placeholder={label}
      rows={5}
      className="cf-input"
      style={{ ...inputStyle, resize: 'none' }}
    />
  )
}

function BudgetSlider({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const pct = (value / 4) * 100
  return (
    <div style={{ marginBottom: 40 }}>
      <p style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'rgba(0,0,0,0.42)', margin: '0 0 24px', letterSpacing: '0.04em' }}>
        Budget range
      </p>

      {/* Track + dots */}
      <div style={{ position: 'relative', height: 16, marginBottom: 10 }}>
        {/* Grey background track */}
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'rgba(0,0,0,0.12)', transform: 'translateY(-50%)' }} />
        {/* Filled track */}
        <div style={{ position: 'absolute', top: '50%', left: 0, width: `${pct}%`, height: 1, background: 'var(--forest-deep)', transform: 'translateY(-50%)', transition: 'width 0.2s' }} />
        {/* Step dots */}
        {[0,1,2,3,4].map(i => (
          <div
            key={i}
            onClick={() => onChange(i)}
            style={{
              position:   'absolute',
              top:        '50%',
              left:       `${(i / 4) * 100}%`,
              transform:  'translate(-50%, -50%)',
              width:       14,
              height:      14,
              borderRadius:'50%',
              background:  i <= value ? 'var(--forest-deep)' : '#fff',
              border:      i <= value ? 'none' : '1.5px solid rgba(0,0,0,0.22)',
              cursor:     'pointer',
              zIndex:      1,
              transition: 'background 0.15s',
            }}
          />
        ))}
        {/* Invisible native range input captures drag gestures */}
        <input
          type="range"
          min={0} max={4} step={1} value={value}
          onChange={e => onChange(Number(e.target.value))}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', margin: 0, zIndex: 2 }}
        />
      </div>

      {/* Tick labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {BUDGET_TICKS.map((t, i) => (
          <span key={i} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(0,0,0,0.35)', letterSpacing: '0.06em' }}>{t}</span>
        ))}
      </div>

      {/* Selected range label */}
      <p style={{ fontFamily: 'var(--sans)', fontSize: 15, fontWeight: 600, color: 'var(--fg)', margin: '10px 0 0' }}>
        {BUDGET_LABELS[value]}
      </p>
    </div>
  )
}

function Compliance() {
  return (
    <div style={{ marginTop: 48, paddingTop: 36, borderTop: '1px solid rgba(0,0,0,0.09)' }}>
      <p style={{ fontFamily: 'var(--sans)', fontSize: 13, lineHeight: 1.65, color: 'rgba(0,0,0,0.45)', margin: '0 0 28px' }}>
        {PRIVACY}
      </p>

      {[
        { text: 'I agree to allow Butterfly Effect to store and process my personal data.',                                                                           required: true  },
        { text: 'I agree to receive communications from Butterfly Effect about our products and services, as well as other content that may be of interest to me.', required: false },
      ].map(({ text, required }, i) => (
        <label key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 18, cursor: 'pointer' }}>
          <input
            type="checkbox"
            required={required}
            style={{ marginTop: 2, flexShrink: 0, width: 16, height: 16, cursor: 'pointer', accentColor: 'var(--forest-deep)' } as React.CSSProperties}
          />
          <span style={{ fontFamily: 'var(--sans)', fontSize: 13, lineHeight: 1.55, color: 'rgba(0,0,0,0.6)' }}>{text}</span>
        </label>
      ))}

      <button
        type="submit"
        style={{
          marginTop:     32,
          background:   'none',
          border:       'none',
          padding:       0,
          cursor:       'pointer',
          display:      'inline-flex',
          alignItems:   'center',
          gap:           12,
          fontFamily:   'var(--sans)',
          fontSize:      11,
          fontWeight:    700,
          letterSpacing:'0.28em',
          textTransform:'uppercase',
          color:        'var(--forest-deep)',
        }}
      >
        Send message
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default function ContactPage() {
  const [active, setActive]   = useState<TabId>('work')
  const [budget, setBudget]   = useState(2)

  // Simple client-side send — swap for an API route later
  function handleSubmit(e: React.FormEvent<HTMLFormElement>, to: string) {
    e.preventDefault()
    const fd   = new FormData(e.currentTarget)
    const body = Array.from(fd.entries()).map(([k, v]) => `${k}: ${v}`).join('\n')
    window.location.href = `mailto:${to}?subject=Website enquiry&body=${encodeURIComponent(body)}`
  }

  return (
    <main style={{ paddingBottom: 120 }}>
      <style>{`
        .cf-input::placeholder { color: rgba(0,0,0,0.28); }
        .cf-input:focus        { border-bottom-color: rgba(0,0,0,0.5); }
        @media (max-width: 600px) {
          .contact-tab-grid { grid-template-columns: 1fr !important; }
          .contact-tab-btn  { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; padding: 24px 0 !important; }
          .contact-tab-btn.is-active { border-bottom: 2px solid var(--forest-deep) !important; }
        }
      `}</style>

      {/* Tab headers */}
      <section style={{ paddingTop: 88 }}>
        <div className="container">
          <div
            className="contact-tab-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}
          >
            {TABS.map((tab, i) => {
              const isActive = active === tab.id
              return (
                <button
                  key={tab.id}
                  className={`contact-tab-btn${isActive ? ' is-active' : ''}`}
                  onClick={() => setActive(tab.id)}
                  style={{
                    background:    'none',
                    border:        'none',
                    borderRight:   i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                    borderBottom:  isActive ? '2px solid var(--forest-deep)' : '1px solid rgba(0,0,0,0.08)',
                    padding:       '40px 0 28px',
                    paddingRight:  i < 2 ? '6%' : 0,
                    paddingLeft:   i > 0 ? '6%' : 0,
                    textAlign:    'left',
                    cursor:       'pointer',
                  }}
                >
                  <h2 style={{
                    fontFamily:    'var(--display)',
                    fontWeight:     800,
                    fontSize:      'clamp(18px,1.8vw,28px)',
                    letterSpacing: '-0.02em',
                    margin:        '0 0 8px',
                    color:          isActive ? 'var(--fg)' : 'var(--fg-mute)',
                    transition:    'color 0.2s',
                  }}>{tab.label}</h2>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--fg-mute)', margin: 0 }}>
                    {tab.sub}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form — left-half width on desktop */}
      <section>
        <div className="container">
          <div style={{ maxWidth: 640, paddingTop: 56 }}>

            {active === 'work' && (
              <form onSubmit={e => handleSubmit(e, 'hello@butterflyeffect.xyz')}>
                <Field label="Name"    required />
                <Field label="Company" />
                <Field label="Email" type="email" required />
                <BudgetSlider value={budget} onChange={setBudget} />
                <Textarea label="Message" />
                <Compliance />
              </form>
            )}

            {active === 'press' && (
              <form onSubmit={e => handleSubmit(e, 'press@butterflyeffect.xyz')}>
                <Field label="Name"  required />
                <Field label="Email" type="email" required />
                <Field label="Publication / Outlet" />
                <Textarea label="Message" />
                <Compliance />
              </form>
            )}

            {active === 'careers' && (
              <form onSubmit={e => handleSubmit(e, 'careers@butterflyeffect.xyz')}>
                <Field label="Name"  required />
                <Field label="Email" type="email" required />
                <Field label="Portfolio or LinkedIn URL" />
                <Textarea label="Message" />
                <Compliance />
              </form>
            )}

          </div>
        </div>
      </section>
    </main>
  )
}
