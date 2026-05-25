"use client"
import Link from "next/link"

export default function OurStoryPage() {
  return (
    <main>
      {/* HERO */}
      <section style={{background:"#000",color:"#fff",minHeight:"70vh",display:"flex",alignItems:"flex-end",padding:"140px 0 80px",marginTop:-88,paddingTop:228}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px",width:"100%"}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,fontWeight:500,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(255,255,255,0.45)",display:"block",marginBottom:32}}>Our Story</span>
          <h1 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(48px,7vw,96px)",lineHeight:0.96,letterSpacing:"-0.03em",margin:"0 0 40px",maxWidth:"16ch"}}>Built around a gap no one else would fill.</h1>
          <p style={{fontFamily:"var(--sans)",fontSize:"clamp(18px,1.6vw,22px)",lineHeight:1.55,color:"rgba(255,255,255,0.65)",maxWidth:"52ch",margin:0}}>Two people. One shared frustration. A company born not from a business plan, but from a problem they lived themselves.</p>
        </div>
      </section>

      {/* STORY BODY */}
      <section style={{padding:"96px 0"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"start"}}>
          <div>
            <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(32px,3.5vw,52px)",lineHeight:1.05,letterSpacing:"-0.025em",margin:"0 0 32px"}}>They set out to create what didn&apos;t exist.</h2>
            <p style={{fontFamily:"var(--sans)",fontSize:17,lineHeight:1.7,color:"rgba(0,0,0,0.65)",margin:"0 0 24px"}}>Elfried came up through Gymshark. Michael through Social Chain. Between them, years inside some of the most culturally relevant brands in the world — watching how real influence is built, and watching how often diverse creative voices were left out of that story.</p>
            <p style={{fontFamily:"var(--sans)",fontSize:17,lineHeight:1.7,color:"rgba(0,0,0,0.65)",margin:0}}>Both wanted to leave a mark on the industry. Both hit the same wall. No one who looked like them had done it before. No blueprint. No door left open.</p>
          </div>
          <div style={{paddingTop:8}}>
            {/* Founders */}
            <div style={{display:"flex",flexDirection:"column",gap:32}}>
              <div style={{borderLeft:"3px solid #000",paddingLeft:24}}>
                <h3 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:20,letterSpacing:"-0.01em",margin:"0 0 6px"}}>Elfried Samba</h3>
                <p style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(0,0,0,0.45)",margin:"0 0 10px"}}>Co-Founder & CEO</p>
                <p style={{fontFamily:"var(--sans)",fontSize:15,lineHeight:1.6,color:"rgba(0,0,0,0.6)",margin:0}}>Former Gymshark. Spent years understanding how culture becomes commerce at scale.</p>
              </div>
              <div style={{borderLeft:"3px solid #000",paddingLeft:24}}>
                <h3 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:20,letterSpacing:"-0.01em",margin:"0 0 6px"}}>Michael Heaven</h3>
                <p style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(0,0,0,0.45)",margin:"0 0 10px"}}>Co-Founder & MD</p>
                <p style={{fontFamily:"var(--sans)",fontSize:15,lineHeight:1.6,color:"rgba(0,0,0,0.6)",margin:0}}>Former Social Chain. Built creator and social strategies for some of the UK&apos;s fastest-growing brands.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE VOID */}
      <section style={{background:"#000",color:"#fff",padding:"96px 0"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px"}}>
          <div style={{maxWidth:"72ch"}}>
            <span style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)",display:"block",marginBottom:32}}>The origin</span>
            <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(48px,6vw,80px)",lineHeight:0.96,letterSpacing:"-0.03em",margin:"0 0 40px"}}>The <em style={{fontStyle:"italic"}}>Void.</em></h2>
            <p style={{fontFamily:"var(--sans)",fontSize:18,lineHeight:1.7,color:"rgba(255,255,255,0.7)",margin:"0 0 24px"}}>Not a crisis of creativity. A crisis of trust and access. The gap between culture and commerce — between brand ambition and the people who could actually carry it.</p>
            <p style={{fontFamily:"var(--sans)",fontSize:18,lineHeight:1.7,color:"rgba(255,255,255,0.7)",margin:"0 0 40px"}}>That gap had a name. And it became the foundation of everything they built.</p>
            <p style={{fontFamily:"var(--sans)",fontSize:18,lineHeight:1.7,color:"rgba(255,255,255,0.85)",margin:0}}>So in 2023, rather than wait for someone else to solve it, they launched Butterfly Effect. A culture-first agency built to close the distance between brands and the communities that matter most to them.</p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{padding:"96px 0",background:"#f4f4f4"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px"}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(0,0,0,0.4)",display:"block",marginBottom:32}}>What we&apos;re here to do</span>
          <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(36px,4vw,60px)",lineHeight:1.02,letterSpacing:"-0.025em",margin:"0 0 64px"}}>Fill the void.<br/>On every front.</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:48}}>
            {[
              { num:"01", title:"Trust over noise", body:"Brands earn belief, not just attention. Consistent identity and cultural credibility are the only things that compound." },
              { num:"02", title:"Culture as strategy", body:"Culture is not a campaign lever — it is the whole lens. The brands that move people understand the communities they serve and show up honestly within them." },
              { num:"03", title:"A path for the next generation", body:"More accessible avenues for diverse creatives. Through our work, our community, and the platforms we build together." },
            ].map(item => (
              <div key={item.num} style={{borderTop:"2px solid #000",paddingTop:32}}>
                <span style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.22em",color:"rgba(0,0,0,0.35)",display:"block",marginBottom:16}}>{item.num}</span>
                <h3 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:22,letterSpacing:"-0.01em",margin:"0 0 16px"}}>{item.title}</h3>
                <p style={{fontFamily:"var(--sans)",fontSize:15,lineHeight:1.65,color:"rgba(0,0,0,0.6)",margin:0}}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSER */}
      <section style={{background:"#000",color:"#fff",padding:"100px 40px"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(40px,6vw,80px)",lineHeight:0.96,letterSpacing:"-0.035em",margin:"0 0 24px"}}>Seize the void.</h2>
          <p style={{fontFamily:"var(--sans)",fontSize:18,lineHeight:1.6,color:"rgba(255,255,255,0.65)",margin:"0 0 48px",maxWidth:"48ch"}}>Build your brand around who you are, what you stand for, and how you show up.</p>
          <Link href="/contact" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"16px 32px",borderRadius:100,background:"#fff",color:"#000",fontFamily:"var(--sans)",fontSize:12,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",textDecoration:"none"}}>
            Get in touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
