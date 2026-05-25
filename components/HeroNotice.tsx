"use client"
import { useState, useEffect } from "react"

const SESSION_KEY = "be_notice_dismissed"

function renderBlock(block: any) {
  const markDefs: any[] = block.markDefs ?? []
  return (block.children ?? [])
    .filter((c: any) => c._type === "span" && c.text && c.text !== "\n")
    .map((child: any) => {
      const linkKey = (child.marks as string[])?.find((m: string) =>
        markDefs.some((d: any) => d._key === m && d._type === "link")
      )
      const linkDef = linkKey ? markDefs.find((d: any) => d._key === linkKey) : null
      let node: React.ReactNode = child.text
      if (child.marks?.includes("strong")) node = <strong key="b" style={{ fontWeight: 700 }}>{node}</strong>
      if (child.marks?.includes("em"))     node = <em key="i">{node}</em>
      if (linkDef) return (
        <a key={child._key} href={linkDef.href} target="_blank" rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 3, textDecorationColor: "rgba(255,255,255,0.35)" }}>
          {node}
        </a>
      )
      return <span key={child._key}>{node}</span>
    })
}

export default function HeroNotice({ blocks }: { blocks: any[] }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) setVisible(true)
  }, [])

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, "1")
    setVisible(false)
  }

  if (!visible || !blocks.length) return null

  return (
    <div
      className="hero-panel"
      style={{
        position:             "absolute",
        top:                  "50%",
        right:                160,
        transform:            "translateY(-50%)",
        width:                400,
        zIndex:               10,
        background:           "rgba(255,255,255,0.06)",
        border:               "1px solid rgba(255,255,255,0.13)",
        borderRadius:         18,
        padding:              "20px 22px",
        backdropFilter:       "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#b94a26", display: "block", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--mono)", fontSize: 9, fontWeight: 700, letterSpacing: "0.42em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
            What&apos;s new
          </span>
        </div>
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", padding: "2px 4px", fontSize: 18, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 4 }}
        >
          ×
        </button>
      </div>

      {/* Notice items */}
      {blocks.map((block: any, i: number) => (
        <div
          key={block._key}
          style={{
            display:    "flex",
            gap:        12,
            padding:    "12px 0",
            borderTop:  i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "rgba(255,255,255,0.25)", flexShrink: 0, marginTop: 2, letterSpacing: "0.08em" }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <p style={{ fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.72)", margin: 0 }}>
            {renderBlock(block)}
          </p>
        </div>
      ))}
    </div>
  )
}
