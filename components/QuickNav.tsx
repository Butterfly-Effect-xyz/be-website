
"use client"
import { useState } from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { label: 'Our Work',                 href: '/work',             num: '01' },
  { label: 'Our Mission',              href: '/mission',          num: '02' },
  { label: 'Our Team',                 href: '/mission/team',     num: '03' },
  { label: 'Butterfly Effect Careers', href: '/mission/careers',  num: '04' },
  { label: 'Free Sauce',               href: '/insights',         num: '05' },
  { label: 'Get in Contact',           href: '/contact',          num: '06' },
  { label: 'Catalyst',                 href: '/catalyst',         num: '07', badge: 'Soon' },
]

export default function QuickNav() {
  const [open, setOpen] = useState(true)

  return (
    <>
      {/* Pill button */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: 100,
          padding: '12px 20px',
          fontFamily: 'var(--sans)',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        }}
      >
        <span style={{width:10,height:10,borderRadius:'50%',background:'#b94a26',display:'block',flexShrink:0}} />
        Quick Nav
      </button>

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',zIndex:1000,backdropFilter:'blur(4px)'}}
        />
      )}

      {/* Modal */}
      <div style={{
        position:       'fixed',
        bottom:         open ? 32 : 32,
        right:          32,
        zIndex:         1001,
        width:          'min(480px, calc(100vw - 48px))',
        background:     '#fff',
        borderRadius:   20,
        padding:        '32px 32px 24px',
        boxShadow:      '0 24px 80px rgba(0,0,0,0.2)',
        transform:      open ? 'translateY(0)' : 'translateY(calc(100% + 48px))',
        opacity:        open ? 1 : 0,
        pointerEvents:  open ? 'auto' : 'none',
        transition:     'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',
      }}>
        {/* Header */}
        <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:32}}>
          <div>
            <span style={{fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.28em',textTransform:'uppercase',color:'rgba(0,0,0,0.4)',display:'block',marginBottom:8}}>Quick Nav</span>
            <h2 style={{fontFamily:'var(--display)',fontWeight:800,fontSize:28,letterSpacing:'-0.02em',margin:0,lineHeight:1.1}}>Looking for<br/>something?</h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{width:40,height:40,borderRadius:'50%',border:'1.5px solid rgba(0,0,0,0.15)',background:'transparent',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Nav items */}
        <div style={{display:'flex',flexDirection:'column'}}>
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
                padding:'18px 0',
                borderTop: i === 0 ? 'none' : '1px solid rgba(0,0,0,0.08)',
                textDecoration:'none',
                color:'#000',
                transition:'background 0.2s',
              }}
            >
              <div style={{display:'flex',alignItems:'center',gap:8}}>
                <span style={{fontFamily:'var(--display)',fontWeight:700,fontSize:18,letterSpacing:'-0.01em'}}>{item.label}</span>
                {item.badge && (
                  <span style={{fontFamily:'var(--mono)',fontSize:8,fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',background:'rgba(181,69,42,0.12)',color:'#b5452a',padding:'2px 7px',borderRadius:100,lineHeight:1.6}}>
                    {item.badge}
                  </span>
                )}
              </div>
              <div style={{display:'flex',alignItems:'center',gap:16}}>
                <span style={{fontFamily:'var(--mono)',fontSize:11,color:'rgba(0,0,0,0.3)',letterSpacing:'0.1em'}}>{item.num}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <button
          onClick={() => setOpen(false)}
          style={{width:'100%',marginTop:16,padding:'14px',background:'transparent',border:'none',fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.28em',textTransform:'uppercase',color:'rgba(0,0,0,0.35)',cursor:'pointer'}}
        >
          I&apos;m just browsing
        </button>
      </div>
    </>
  )
}
