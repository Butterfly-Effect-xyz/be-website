"use client"
import { useState } from "react"

interface Props {
  member: {
    _id:         string
    name:        string
    role:        string
    photoUrl?:   string | null
    hoverGifUrl?: string | null
  }
}

export default function HomepageCrewCard({ member }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="crew-card"
      style={{ position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="crew-portrait" style={{ position: 'relative', overflow: 'hidden' }}>
        {member.photoUrl
          // eslint-disable-next-line @next/next/no-img-element
          ? <img src={member.photoUrl} alt={member.name} className="crew-photo-static" />
          : <div className="crew-portrait-placeholder">
              <span>{member.name.split(' ').map((n: string) => n[0]).join('')}</span>
            </div>
        }
        {/* Mount GIF only on hover so it always starts from frame 1 */}
        {hovered && member.hoverGifUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={member.hoverGifUrl} alt="" aria-hidden className="crew-photo-gif" />
        )}
      </div>
      <h3 className="crew-name">{member.name}</h3>
      <p className="crew-role">{member.role}</p>
    </div>
  )
}
