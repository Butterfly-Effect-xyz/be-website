"use client"
import { useState } from "react"
import Link from "next/link"

const TABS = [
  {
    id: "what-we-do",
    label: "What We Do",
    heading: "What We Do",
    body: "We help brands connect with creators, communities and culture in a way that feels authentic and impactful. From strategy to activation, we engage in every step of the journey — because we believe that when people feel seen, change happens.",
  },
  {
    id: "who-we-are",
    label: "Who We Are",
    heading: "Who We Are",
    body: "At Butterfly Effect you will be working alongside ambitious, passionate people who care deeply about our craft and culture. You will move fast, take ownership of meaningful work, and help shape the direction of our business and our culture from the ground up. We are a high-energy collaborative team, committed to inclusivity and breakthrough thinking.",
  },
  {
    id: "culture",
    label: "Our People & Culture",
    heading: "Our People & Culture",
    body: "At Butterfly Effect, our secret sauce is not just our strategy alone — it is the people who make it happen. We are a lively bunch of creatives, thinkers, doers, and culture-spotters who love a good challenge and bringing it to life. Expect a mix of focused deep work, lots of spontaneity, and working closely as a global team. We celebrate diversity of people and thought, champion curiosity, and cheer each other on — because great ideas come from great people feeling free to be themselves.",
  },
  {
    id: "offer",
    label: "What We Offer",
    heading: "What We Offer",
    body: "",
    perks: [
      "25 days holiday + Bank Holidays",
      "3% Pension Contribution from us, 5% from you",
      "Remote flexible working",
      "Yulife and BUPA Private Medical Insurance",
      "Regular team on-sites, creative workshops and culture-driven social events",
    ],
  },
]

export default function CareersPage() {
  const [active, setActive] = useState("what-we-do")
  const tab = TABS.find(t => t.id === active) || TABS[0]

  return (
    <main>
      {/* HERO */}
      <section style={{padding:"120px 0 64px",borderBottom:"1px solid rgba(0,0,0,0.08)"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px"}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,fontWeight:500,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(0,0,0,0.4)",display:"block",marginBottom:24}}>Careers</span>
          <h1 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(56px,8vw,110px)",lineHeight:0.96,letterSpacing:"-0.035em",margin:"0 0 32px"}}>Work With<br/>Us</h1>
          <p style={{fontFamily:"var(--sans)",fontSize:"clamp(16px,1.4vw,20px)",lineHeight:1.6,color:"rgba(0,0,0,0.55)",maxWidth:"52ch",margin:0}}>At Butterfly Effect we believe small actions spark big change. We build brand-centred communities, launch disruptive activations and mentor in-house marketing teams on their metamorphosis. Join us if you are excited by culture, creativity and transformation.</p>
        </div>
      </section>

      {/* TABS */}
      <section style={{padding:"0 0 96px"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px"}}>
          <div style={{display:"flex",gap:0,borderBottom:"1px solid rgba(0,0,0,0.08)",marginBottom:64,overflowX:"auto"}}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActive(t.id)}
                style={{
                  fontFamily:"var(--sans)",fontSize:12,fontWeight:600,letterSpacing:"0.18em",textTransform:"uppercase",
                  padding:"20px 28px",border:"none",background:"transparent",cursor:"pointer",whiteSpace:"nowrap",
                  color: active === t.id ? "#000" : "rgba(0,0,0,0.35)",
                  borderBottom: active === t.id ? "2px solid #000" : "2px solid transparent",
                  marginBottom:-1,transition:"color 0.2s",
                }}>
                {t.label}
              </button>
            ))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center"}}>
            <div style={{aspectRatio:"4/3",background:"#f0f0f0",borderRadius:2,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{fontFamily:"var(--display)",fontWeight:800,fontSize:64,color:"rgba(0,0,0,0.06)"}}>{tab.label.split(" ").map((w:string)=>w[0]).join("")}</span>
            </div>
            <div>
              <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(32px,3.5vw,52px)",lineHeight:1.05,letterSpacing:"-0.025em",margin:"0 0 24px"}}>{tab.heading}</h2>
              {tab.body && <p style={{fontFamily:"var(--sans)",fontSize:17,lineHeight:1.7,color:"rgba(0,0,0,0.6)",margin:0}}>{tab.body}</p>}
              {(tab as any).perks && (
                <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:16}}>
                  {(tab as any).perks.map((perk:string, i:number) => (
                    <li key={i} style={{display:"flex",alignItems:"flex-start",gap:16,fontFamily:"var(--sans)",fontSize:16,lineHeight:1.5,color:"rgba(0,0,0,0.7)"}}>
                      <span style={{width:6,height:6,borderRadius:"50%",background:"#000",flexShrink:0,marginTop:8}} />
                      {perk}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section style={{padding:"80px 0",background:"#f4f4f4"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px"}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,fontWeight:500,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(0,0,0,0.4)",display:"block",marginBottom:24}}>Open Positions</span>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"start"}}>
            <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(36px,4vw,60px)",lineHeight:1.02,letterSpacing:"-0.025em",margin:0}}>Work With<br/>Us</h2>
            <div>
              <p style={{fontFamily:"var(--sans)",fontSize:16,lineHeight:1.65,color:"rgba(0,0,0,0.55)",margin:"0 0 40px"}}>Current openings across the Butterfly Effect family.</p>
              <div style={{padding:"32px",background:"#fff",borderRadius:2,marginBottom:24,textAlign:"center"}}>
                <p style={{fontFamily:"var(--sans)",fontSize:15,color:"rgba(0,0,0,0.4)",margin:"0 0 20px"}}>We couldn&apos;t load positions right now.</p>
                <a href="https://job-boards.eu.greenhouse.io/butterflyeffect" target="_blank" rel="noopener noreferrer"
                  style={{fontFamily:"var(--mono)",fontSize:11,fontWeight:600,letterSpacing:"0.28em",textTransform:"uppercase",color:"#000",textDecoration:"underline",display:"inline-flex",alignItems:"center",gap:8}}>
                  View on Greenhouse
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:14,height:14}}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSER */}
      <section style={{background:"#000",color:"#fff",padding:"100px 40px"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(40px,6vw,80px)",lineHeight:0.96,letterSpacing:"-0.035em",margin:"0 0 24px"}}>Don&apos;t see<br/>your role?</h2>
          <p style={{fontFamily:"var(--sans)",fontSize:18,lineHeight:1.6,color:"rgba(255,255,255,0.6)",margin:"0 0 48px",maxWidth:"44ch"}}>We are always open to hearing from exceptional people. Drop us a line.</p>
          <Link href="/contact" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"16px 32px",borderRadius:100,background:"#fff",color:"#000",fontFamily:"var(--sans)",fontSize:12,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",textDecoration:"none"}}>
            Get in touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
