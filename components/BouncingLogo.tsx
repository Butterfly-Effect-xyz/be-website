"use client"
import { useEffect, useRef } from "react"

// Each colour is a CSS filter chain applied on bounce.
// invert(1) makes black lines → white, sepia+saturate+hue-rotate then tints those white lines.
// mix-blend-mode: screen (set on the img) makes the black background disappear over the dark video.
const COLOURS = [
  "invert(1)",                                                       // white
  "invert(1) sepia(1) saturate(15) hue-rotate(160deg)",            // cyan
  "invert(1) sepia(1) saturate(15) hue-rotate(80deg)",             // green
  "invert(1) sepia(1) saturate(15) hue-rotate(40deg)",             // yellow
  "invert(1) sepia(1) saturate(15) hue-rotate(300deg)",            // magenta
  "invert(1) sepia(1) saturate(15) hue-rotate(200deg)",            // blue
  "invert(1) sepia(1) saturate(15) hue-rotate(0deg)",              // orange
  "invert(1) sepia(1) saturate(15) hue-rotate(330deg)",            // pink
]

const SIZE  = 96   // logo size in px
const VX    = 1.5  // horizontal speed (px/frame at 60fps — DVD pace)
const VY    = 1.1  // different from VX so it never perfectly repeats a path

export default function BouncingLogo() {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    const container = img.parentElement!
    let x = 160, y = 120
    let vx = VX, vy = VY
    let colourIdx = 0
    let raf: number

    const el: HTMLImageElement = img

    function tick() {
      const cw = container.clientWidth
      const ch = container.clientHeight
      let bounced = false

      x += vx
      y += vy

      if (x <= 0)          { x = 0;         vx =  Math.abs(vx); bounced = true }
      if (x + SIZE >= cw)  { x = cw - SIZE; vx = -Math.abs(vx); bounced = true }
      if (y <= 0)          { y = 0;         vy =  Math.abs(vy); bounced = true }
      if (y + SIZE >= ch)  { y = ch - SIZE; vy = -Math.abs(vy); bounced = true }

      if (bounced) {
        colourIdx = (colourIdx + 1) % COLOURS.length
        el.style.filter = COLOURS[colourIdx]
      }

      el.style.transform = `translate(${x}px, ${y}px)`
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <img
      ref={imgRef}
      src="/logo-butterfly.png"
      alt=""
      aria-hidden="true"
      draggable={false}
      style={{
        position:      "absolute",
        top:           0,
        left:          0,
        width:         SIZE,
        height:        SIZE,
        objectFit:     "contain",
        filter:        "invert(1)",
        mixBlendMode:  "screen",
        pointerEvents: "none",
        userSelect:    "none",
        willChange:    "transform",
      }}
    />
  )
}
