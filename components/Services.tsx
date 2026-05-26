"use client"
import { useState } from "react"
import Link from "next/link"

const SERVICES = [
  { i: 1, bg: "#506054", title: "Brand", body: "Strategy, identity, narrative. We\'re the architects behind the scenes, designing blueprints to guide brands through the ever-changing digital terrain.", cta: "View brand work", href: "/work?cat=brand" },
  { i: 2, bg: "#161e1b", title: "Influencer", body: "The bridge between audiences and brands. We immerse ourselves in communities, absorb culture, and identify the talent that shapes narratives.", cta: "View influencer work", href: "/work?cat=influencer" },
  { i: 3, bg: "#341c12", title: "Creative", body: "We breathe life into brands, moulding ideas into unforgettable moments. We don\'t create for the sake of it — we work backwards from the endgame.", cta: "View creative work", href: "/work?cat=creative" },
  { i: 4, bg: "#611e1f", title: "Social", body: "It\'s not about posting pretty pictures. It\'s about leveraging insights and data to build communities, drive conversation, and deliver tangible ROI.", cta: "View social work", href: "/work?cat=social" },
]

export default function Services() {
  const [open, setOpen] = useState(1)
  const [mobileOpen, setMobileOpen] = useState<number | null>(1)

  const gridCols = {
    1: "1fr 0.42fr 0.42fr 0.42fr",
    2: "0.42fr 1fr 0.42fr 0.42fr",
    3: "0.42fr 0.42fr 1fr 0.42fr",
    4: "0.42fr 0.42fr 0.42fr 1fr",
  }[open]

  return (
    <section style={{padding:"80px 0"}}>
      <div className="svc-container">
        <div style={{marginBottom:56}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,fontWeight:500,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(0,0,0,0.4)",display:"block",marginBottom:12}}>What we do</span>
          <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(34px,4.4vw,72px)",lineHeight:1.02,letterSpacing:"-0.025em",margin:0}}>Services</h2>
        </div>

        {/* Desktop: horizontal expanding grid */}
        <div className="svc-desktop-grid" style={{
          display:"grid",
          gridTemplateColumns:gridCols,
          transition:"grid-template-columns 0.7s cubic-bezier(0.22,1,0.36,1)",
          borderTop:"1px solid rgba(0,0,0,0.10)",
        }}>
          {SERVICES.map(s => {
            const isOpen = open === s.i
            return (
              <div
                key={s.i}
                onMouseEnter={() => setOpen(s.i)}
                onClick={() => setOpen(s.i)}
                style={{
                  position:"relative",
                  minHeight:520,
                  padding:36,
                  overflow:"hidden",
                  background: isOpen ? "#000" : s.bg,
                  color: isOpen ? "#fff" : "#000",
                  borderRight:"1px solid rgba(22,30,27,0.15)",
                  display:"flex",
                  flexDirection:"column",
                  justifyContent:"space-between",
                  cursor:"pointer",
                  transition:"background 0.5s ease, color 0.5s ease",
                }}
              >
                {/* Number */}
                <span style={{fontFamily:"var(--mono)",fontSize:12,letterSpacing:"0.22em",textTransform:"uppercase",opacity:0.55,color:"#fff"}}>0{s.i}</span>

                {/* Spine - vertical title, shown when collapsed */}
                <div style={{
                  position:"absolute",
                  top:"50%",
                  left:"50%",
                  transform:"translate(-50%,-50%)",
                  opacity: isOpen ? 0 : 1,
                  transition:"opacity 0.4s ease",
                  pointerEvents:"none",
                }}>
                  <span style={{
                    writingMode:"vertical-rl",
                    transform:"rotate(180deg)",
                    display:"block",
                    fontFamily:"var(--display)",
                    fontWeight:800,
                    fontSize:"clamp(22px,1.8vw,30px)",
                    letterSpacing:"-0.01em",
                    whiteSpace:"nowrap",
                  }}>{s.title}</span>
                </div>

                {/* Body - shown when open */}
                <div style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "none" : "translateY(8px)",
                  transition:"opacity 0.5s 0.1s ease, transform 0.5s 0.1s ease",
                }}>
                  <h3 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(28px,3vw,44px)",letterSpacing:"-0.025em",margin:"0 0 16px",color:"#fff"}}>{s.title}</h3>
                  <p style={{fontSize:16,lineHeight:1.55,maxWidth:"38ch",color:"rgba(155,167,129,0.85)",margin:0}}>{s.body}</p>
                </div>

                {/* Footer link - shown when open */}
                <Link href={s.href} style={{
                  display:"inline-flex",
                  alignItems:"center",
                  gap:14,
                  fontSize:12,
                  fontWeight:600,
                  letterSpacing:"0.24em",
                  textTransform:"uppercase",
                  color:"#9ba781",
                  textDecoration:"none",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "none" : "translateY(8px)",
                  transition:"opacity 0.5s 0.2s ease, transform 0.5s 0.2s ease",
                }}>
                  {s.cta}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Mobile: stacked accordion */}
        <div className="svc-mobile-accordion" style={{borderTop:"1px solid rgba(0,0,0,0.10)"}}>
          {SERVICES.map(s => {
            const isOpen = mobileOpen === s.i
            return (
              <div
                key={s.i}
                onClick={() => setMobileOpen(isOpen ? null : s.i)}
                style={{
                  background: isOpen ? "#000" : "#fff",
                  color: isOpen ? "#fff" : "#000",
                  borderBottom:"1px solid rgba(0,0,0,0.10)",
                  padding:"22px 0",
                  cursor:"pointer",
                  transition:"background 0.4s ease, color 0.4s ease",
                }}
              >
                {/* Row: number + title + chevron */}
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <div style={{display:"flex",alignItems:"center",gap:16}}>
                    <span style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.22em",opacity:0.5,flexShrink:0,color: isOpen ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)"}}>0{s.i}</span>
                    <span style={{fontFamily:"var(--display)",fontWeight:800,fontSize:22,letterSpacing:"-0.01em"}}>{s.title}</span>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    style={{width:18,height:18,flexShrink:0,transform: isOpen ? "rotate(180deg)" : "none",transition:"transform 0.3s ease"}}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
                {/* Expandable body */}
                <div style={{
                  overflow:"hidden",
                  maxHeight: isOpen ? 320 : 0,
                  opacity: isOpen ? 1 : 0,
                  transition:"max-height 0.5s ease, opacity 0.4s ease",
                }}>
                  <p style={{fontSize:15,lineHeight:1.65,color:"rgba(155,167,129,0.9)",margin:"16px 0 20px",maxWidth:"40ch"}}>{s.body}</p>
                  <Link
                    href={s.href}
                    onClick={e => e.stopPropagation()}
                    style={{
                      display:"inline-flex",alignItems:"center",gap:10,
                      fontSize:11,fontWeight:600,letterSpacing:"0.24em",textTransform:"uppercase",
                      color:"#9ba781",textDecoration:"none",marginBottom:4,
                    }}
                  >
                    {s.cta}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:14,height:14}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
