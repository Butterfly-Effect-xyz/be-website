import Link from "next/link"
import MissionReel from "@/components/MissionReel"

const REEL_SRC = "/video/reel.mp4"

export default function MissionPage() {
  return (
    <main data-hero-dark="1">
      <section style={{background:"#000",color:"#fff",minHeight:"70vh",display:"flex",alignItems:"flex-end",padding:"140px 0 80px",marginTop:-88,paddingTop:228}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px",width:"100%"}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,fontWeight:500,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(255,255,255,0.45)",display:"block",marginBottom:32}}>Mission</span>
          <h1 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(48px,7vw,96px)",lineHeight:0.96,letterSpacing:"-0.03em",margin:"0 0 40px",maxWidth:"16ch"}}>We build the trust that turns audiences into communities.</h1>
          <p style={{fontFamily:"var(--sans)",fontSize:"clamp(16px,1.4vw,20px)",lineHeight:1.55,color:"rgba(255,255,255,0.6)",margin:0,maxWidth:"48ch"}}>A culture-first agency built to close the distance between brands and the communities that matter most to them.</p>
        </div>
      </section>
      <MissionReel src={REEL_SRC} label="On a mission" />

      <section style={{padding:"80px 0"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:2}}>
            {[
              {label:"Our Story", desc:"Where we came from and why we built this.", href:"/mission/story"},
              {label:"The Team", desc:"The people behind the work.", href:"/mission/team"},
              {label:"Careers", desc:"Come and build with us.", href:"/mission/careers"},
            ].map(item => (
              <Link key={item.href} href={item.href} style={{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"40px 36px",border:"1px solid rgba(0,0,0,0.08)",minHeight:220,textDecoration:"none",color:"inherit",transition:"background 0.2s"}}>
                <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(28px,2.8vw,40px)",letterSpacing:"-0.02em",margin:0}}>{item.label}</h2>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <p style={{fontFamily:"var(--sans)",fontSize:14,color:"rgba(0,0,0,0.45)",margin:0}}>{item.desc}</p>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:18,height:18,flexShrink:0}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
