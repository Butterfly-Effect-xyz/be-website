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
      if (child.marks?.includes("strong")) node = <strong key="b">{node}</strong>
      if (child.marks?.includes("em"))     node = <em key="i">{node}</em>
      if (linkDef) return (
        <a key={child._key} href={linkDef.href} target="_blank" rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: 3 }}>
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
        right:                120,
        transform:            "translateY(-50%)",
        width:                380,
        background:           "rgba(255,255,255,0.07)",
        border:               "1px solid rgba(255,255,255,0.14)",
        borderRadius:         16,
        padding:              "20px 24px",
        backdropFilter:       "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#b94a26", display: "block" }} />
          <span style={{ fontFamily: "var(--mono)", fontSize: 9, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
            What&apos;s new
          </span>
        </div>
        <button onClick={dismiss} aria-label="Dismiss" style={{ background: "none", border: "none", color: "rgba(255,255,255,0.45)", cursor: "pointer", fontSize: 20, lineHeight: 1, padding: 0 }}>
          ×
        </button>
      </div>

      {/* One item per row, stacked */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {blocks.map((block: any, i: number) => (
          <div key={block._key} style={{
            paddingTop:    i === 0 ? 0 : 14,
            marginTop:     i === 0 ? 0 : 14,
            borderTop:     i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)",
          }}>
            <p style={{
              fontFamily:  "var(--sans)",
              fontSize:    14,
              lineHeight:  1.65,
              color:       "rgba(255,255,255,0.78)",
              margin:      0,
              fontWeight:  400,
            }}>
              {renderBlock(block)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
