"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

const ANNOUNCEMENTS = [
  {
    _key: "1",
    text: <>We launched <b>Coding the Chaos</b>, a new YouTube series for Formula E hosted by Jeremiah Burton.</>,
    ctaLabel: "Watch the first episode",
    ctaUrl: "/insights",
    opensInNewTab: false,
  },
  {
    _key: "2",
    text: <>Michael just dropped a piece on <b>influencer marketing in the 21st century</b> over on LinkedIn.</>,
    ctaLabel: "Click for the sauce",
    ctaUrl: "https://linkedin.com",
    opensInNewTab: true,
  },
]

export default function AnnouncementCard() {
  const [current, setCurrent] = useState(0)
  const [dismissed, setDismissed] = useState(false)
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (sessionStorage.getItem("be_ann_dismissed")) { setDismissed(true); return }
    const t = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!visible || dismissed) return
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % ANNOUNCEMENTS.length)
    }, 7000)
    return () => clearInterval(timerRef.current)
  }, [visible, dismissed])

  const go = (i: number) => {
    clearInterval(timerRef.current)
    setCurrent((i + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length)
  }

  const dismiss = () => {
    sessionStorage.setItem("be_ann_dismissed", "1")
    setDismissed(true)
  }

  if (dismissed || !visible || ANNOUNCEMENTS.length === 0) return null

  const ann = ANNOUNCEMENTS[current]
  const multi = ANNOUNCEMENTS.length > 1

  return (
    <div
      role="region"
      aria-label="Site announcements"
      onMouseEnter={() => clearInterval(timerRef.current)}
      style={{
        position: "absolute",
        top: "50%",
        right: 32,
        transform: "translateY(-50%)",
        width: 340,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.14)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderRadius: 16,
        padding: "16px 20px",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
      className="ann-card"
    >
      {/* Header */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{width:7,height:7,borderRadius:"50%",background:"#b94a26",display:"block",flexShrink:0}} />
          <span style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.32em",textTransform:"uppercase",color:"rgba(255,255,255,0.55)"}}>What&apos;s new</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          {multi && <span style={{fontFamily:"var(--mono)",fontSize:10,color:"rgba(255,255,255,0.4)",letterSpacing:"0.1em"}}>0{current+1} / 0{ANNOUNCEMENTS.length}</span>}
          <button onClick={dismiss} aria-label="Dismiss announcements" style={{background:"transparent",border:"none",color:"rgba(255,255,255,0.5)",cursor:"pointer",padding:0,fontSize:16,lineHeight:1}}>×</button>
        </div>
      </div>

      {/* Body */}
      <div aria-live="polite">
        <p style={{fontFamily:"var(--sans)",fontWeight:500,fontSize:15,lineHeight:1.45,letterSpacing:"-0.012em",color:"rgba(255,255,255,0.9)",margin:0}}>
          {ann.text}
        </p>
      </div>

      {/* CTA */}
      <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:12}}>
        <Link
          href={ann.ctaUrl}
          target={ann.opensInNewTab ? "_blank" : undefined}
          rel={ann.opensInNewTab ? "noopener noreferrer" : undefined}
          style={{display:"flex",alignItems:"center",justifyContent:"space-between",textDecoration:"none",color:"rgba(255,255,255,0.8)",fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.22em",textTransform:"uppercase"}}
          className="ann-cta"
        >
          {ann.ctaLabel}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:14,height:14,transition:"transform 0.2s"}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </Link>
      </div>

      {/* Footer dots */}
      {multi && (
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",gap:6,alignItems:"center"}}>
            {ANNOUNCEMENTS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Announcement ${i+1}`}
                style={{
                  height:6,
                  width: i === current ? 18 : 6,
                  borderRadius:100,
                  background: i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                  border:"none",
                  cursor:"pointer",
                  padding:0,
                  transition:"all 0.3s ease",
                }}
              />
            ))}
          </div>
          <div style={{display:"flex",gap:6}}>
            {[[-1,"Previous"],[ 1,"Next"]].map(([dir, label]) => (
              <button
                key={label}
                onClick={() => go(current + (dir as number))}
                aria-label={label as string}
                style={{width:28,height:28,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.2)",background:"transparent",color:"rgba(255,255,255,0.6)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:12,height:12,transform: dir === -1 ? "rotate(180deg)" : "none"}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
