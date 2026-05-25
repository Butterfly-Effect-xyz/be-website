"use client"
import { useState } from "react"
import Link from "next/link"

const FILTERS = ["All", "Brand", "Influencer", "Creative", "Social", "Strategy"]

export default function WorkGrid({ works }: { works: any[] }) {
  const [active, setActive] = useState("All")

  const filtered = active === "All"
    ? works
    : works.filter((w: any) =>
        w.services?.some((s: string) => s.toLowerCase() === active.toLowerCase())
      )

  return (
    <>
      {/* Filter bar */}
      <section className="container" style={{ paddingBottom: 40 }}>
        <div className="work-filters">
          {FILTERS.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={"work-filter" + (cat === active ? " is-active" : "")}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container" style={{ paddingBottom: 140 }}>
        {filtered.length === 0 ? (
          <p style={{ fontFamily: "var(--sans)", fontSize: 16, color: "var(--fg-mute)", padding: "40px 0" }}>
            No projects under {active} yet.
          </p>
        ) : (
          <div className="work-grid">
            {filtered.map((w: any) => (
              <Link key={w._id} href={"/work/" + w.slug?.current} className="wcard">
                <div className="wcard-img">
                  {w.heroImageUrl
                    ? <img src={w.heroImageUrl} alt={w.heroHeadline} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    : <div className="wcard-placeholder"><span>{w.client}</span></div>
                  }
                  <div className="wcard-hover">
                    <span className="wcard-hover-cta">
                      View case study
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                    </span>
                    {w.results?.length > 0 && (
                      <div className="wcard-hover-results">
                        {w.results.slice(0, 4).map((r: any, i: number) => (
                          <div key={i} className="wcard-hover-result">
                            <span className="v">{r.stat}</span>
                            <span className="l">{r.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="wcard-tags">
                  {w.services?.map((s: string) => <span key={s}>{s}</span>)}
                </div>
                <p className="wcard-campaign">{w.client}</p>
                <h3 className="wcard-title">{w.heroHeadline || w.title}</h3>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
