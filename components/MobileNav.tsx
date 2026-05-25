"use client"
import { useState } from "react"
import Link from "next/link"

const NAV_ITEMS = [
  { label: "Our Work",                 href: "/work" },
  { label: "Our Mission",              href: "/mission" },
  { label: "Our Team",                 href: "/mission/team" },
  { label: "Butterfly Effect Careers", href: "/mission/careers" },
  { label: "Free Sauce",               href: "/insights" },
  { label: "Catalyst",                 href: "/catalyst", badge: "Soon" },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger — mobile only */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        style={{display:"none",flexDirection:"column",gap:5,padding:8,background:"transparent",border:"none",cursor:"pointer",zIndex:200}}
        className="mobile-menu-btn"
      >
        <span style={{width:22,height:2,background:"currentColor",borderRadius:2,transition:"all 0.3s",transform:open?"rotate(45deg) translateY(7px)":"none",display:"block"}} />
        <span style={{width:22,height:2,background:"currentColor",borderRadius:2,transition:"all 0.3s",opacity:open?0:1,display:"block"}} />
        <span style={{width:22,height:2,background:"currentColor",borderRadius:2,transition:"all 0.3s",transform:open?"rotate(-45deg) translateY(-7px)":"none",display:"block"}} />
      </button>

      {/* Overlay */}
      {open && (
        <div style={{position:"fixed",inset:0,background:"#000",zIndex:150,display:"flex",flexDirection:"column",padding:"88px 32px 48px",overflowY:"auto"}}>
          <button onClick={() => setOpen(false)} style={{position:"absolute",top:24,right:24,width:40,height:40,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.2)",background:"transparent",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          <nav style={{display:"flex",flexDirection:"column",gap:0,flex:1}}>
            {NAV_ITEMS.map((item) => (
              <div key={item.href} style={{borderBottom:"1px solid rgba(255,255,255,0.08)",padding:"20px 0",display:"flex",alignItems:"center",gap:12}}>
                <Link href={item.href} onClick={() => setOpen(false)}
                  style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(26px,6.5vw,38px)",letterSpacing:"-0.02em",color:"#fff",textDecoration:"none"}}>
                  {item.label}
                </Link>
                {item.badge && (
                  <span style={{fontFamily:"var(--mono)",fontSize:8,fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",background:"rgba(181,69,42,0.18)",color:"#b5452a",padding:"3px 8px",borderRadius:100,lineHeight:1.6,flexShrink:0}}>
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </nav>

          <Link href="/contact" onClick={() => setOpen(false)}
            style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:"16px",borderRadius:100,background:"#fff",color:"#000",fontFamily:"var(--sans)",fontSize:12,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",textDecoration:"none",marginTop:32}}>
            Get in Contact
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </Link>
        </div>
      )}
    </>
  )
}
