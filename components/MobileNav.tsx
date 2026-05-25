"use client"
import { useState } from "react"
import Link from "next/link"

const NAV_ITEMS = [
  { label: "Mission", href: "/mission", children: [
    { label: "Our Story", href: "/mission/story" },
    { label: "Team", href: "/mission/team" },
    { label: "Careers", href: "/mission/careers" },
  ]},
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights", children: [
    { label: "All", href: "/insights" },
    { label: "Podcasts", href: "/insights#podcasts" },
    { label: "Articles", href: "/insights#articles" },
  ]},
  { label: "Catalyst", href: "/catalyst" },
  { label: "Contact", href: "/contact" },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        style={{
          display: "none",
          flexDirection: "column",
          gap: 5,
          padding: 8,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 200,
        }}
        className="mobile-menu-btn"
      >
        <span style={{width:22,height:2,background:"currentColor",borderRadius:2,transition:"all 0.3s",transform: open ? "rotate(45deg) translateY(7px)" : "none",display:"block"}} />
        <span style={{width:22,height:2,background:"currentColor",borderRadius:2,transition:"all 0.3s",opacity: open ? 0 : 1,display:"block"}} />
        <span style={{width:22,height:2,background:"currentColor",borderRadius:2,transition:"all 0.3s",transform: open ? "rotate(-45deg) translateY(-7px)" : "none",display:"block"}} />
      </button>

      {/* Mobile menu overlay */}
      {open && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          zIndex: 150,
          display: "flex",
          flexDirection: "column",
          padding: "88px 32px 48px",
          overflowY: "auto",
        }}>
          {/* Close button */}
          <button onClick={() => setOpen(false)} style={{
            position:"absolute",top:24,right:24,
            width:40,height:40,borderRadius:"50%",
            border:"1px solid rgba(255,255,255,0.2)",
            background:"transparent",color:"#fff",
            cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          <nav style={{display:"flex",flexDirection:"column",gap:0,flex:1}}>
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,255,0.08)",padding:"20px 0"}}>
                  <Link href={item.href} onClick={() => !item.children && setOpen(false)}
                    style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(28px,7vw,40px)",letterSpacing:"-0.02em",color:"#fff",textDecoration:"none"}}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <button onClick={() => setExpanded(expanded === item.href ? null : item.href)}
                      style={{background:"transparent",border:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",padding:8}}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:20,height:20,transform: expanded === item.href ? "rotate(180deg)" : "none",transition:"transform 0.3s"}}>
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </button>
                  )}
                </div>
                {item.children && expanded === item.href && (
                  <div style={{display:"flex",flexDirection:"column",gap:0,paddingLeft:16,background:"rgba(255,255,255,0.03)"}}>
                    {item.children.map(child => (
                      <Link key={child.href} href={child.href} onClick={() => setOpen(false)}
                        style={{fontFamily:"var(--sans)",fontSize:16,fontWeight:500,color:"rgba(255,255,255,0.65)",textDecoration:"none",padding:"14px 16px",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Link href="/contact" onClick={() => setOpen(false)}
            style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:"16px",borderRadius:100,background:"#fff",color:"#000",fontFamily:"var(--sans)",fontSize:12,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",textDecoration:"none",marginTop:32}}>
            Let&apos;s talk
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </Link>
        </div>
      )}
    </>
  )
}
