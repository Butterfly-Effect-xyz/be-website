"use client"
import { useState } from "react"

interface Member {
  _id:        string
  name:       string
  role:       string
  bio?:       string
  photoUrl?:  string | null
  hoverGifUrl?: string | null
}

export default function TeamCard({ member }: { member: Member }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="crew-card"
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ aspectRatio: "3/4", background: "#f0f0f0", borderRadius: 2, overflow: "hidden", position: "relative" }}>
        {/* Static photo — CSS handles the fade-out on hover */}
        {member.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={member.photoUrl} alt={member.name} className="crew-photo-static" />
        ) : (
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#333,#000)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 32, color: "rgba(255,255,255,0.2)" }}>
              {member.name.split(" ").map((n: string) => n[0]).join("")}
            </span>
          </div>
        )}

        {/*
          GIF only mounts when hovered — this resets it to frame 1 every time.
          Mounting into an already-hovered .crew-card triggers the CSS
          opacity transition (0 → 1) immediately.
        */}
        {hovered && member.hoverGifUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={member.hoverGifUrl} alt="" aria-hidden className="crew-photo-gif" />
        )}
      </div>

      <div>
        <h3 style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 18, letterSpacing: "-0.01em", margin: "0 0 4px" }}>
          {member.name}
        </h3>
        <p style={{ fontFamily: "var(--sans)", fontSize: 13, color: "rgba(0,0,0,0.45)", margin: 0 }}>
          {member.role}
        </p>
        {member.bio && (
          <p style={{ fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.55, color: "rgba(0,0,0,0.5)", margin: "8px 0 0" }}>
            {member.bio}
          </p>
        )}
      </div>
    </div>
  )
}
