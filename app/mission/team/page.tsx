import { client, urlFor } from "@/lib/sanity"
import { teamMembersQuery } from "@/lib/queries"
import TeamCard from "@/components/TeamCard"

async function getTeam() {
  try { return await client.fetch(teamMembersQuery) || [] } catch { return [] }
}

export default async function TeamPage() {
  const team = await getTeam()

  return (
    <main>
      {/* HERO */}
      <section style={{padding:"140px 0 80px",borderBottom:"1px solid rgba(0,0,0,0.08)"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px",display:"grid",gridTemplateColumns:"1fr 2fr",gap:80,alignItems:"end"}}>
          <div>
            <span style={{fontFamily:"var(--mono)",fontSize:11,fontWeight:500,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(0,0,0,0.4)",display:"block",marginBottom:24}}>Leadership</span>
            <h1 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(40px,5vw,72px)",lineHeight:1.0,letterSpacing:"-0.03em",margin:"0 0 24px"}}>Our starting<br/>12.</h1>
            <p style={{fontFamily:"var(--sans)",fontSize:16,lineHeight:1.65,color:"rgba(0,0,0,0.55)",margin:0,maxWidth:"28ch"}}>Founded by creatives, for creatives.</p>
          </div>
          <div style={{paddingBottom:8}}>
            <p style={{fontFamily:"var(--sans)",fontSize:"clamp(16px,1.4vw,20px)",lineHeight:1.65,color:"rgba(0,0,0,0.5)",margin:0,maxWidth:"52ch"}}>Butterfly Effect was built to create more accessible avenues for diverse talent seeking opportunity.</p>
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section style={{padding:"80px 0"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"48px 32px"}}>
            {team.map((m: any) => (
              <TeamCard
                key={m._id}
                member={{
                  _id:         m._id,
                  name:        m.name,
                  role:        m.role,
                  bio:         m.bio,
                  photoUrl:    m.photo ? urlFor(m.photo).width(400).height(533).url() : null,
                  hoverGifUrl: m.hoverGifUrl || null,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section style={{padding:"96px 0",borderTop:"1px solid rgba(0,0,0,0.08)"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px",display:"grid",gridTemplateColumns:"1fr 2fr",gap:80,alignItems:"start"}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,fontWeight:500,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(0,0,0,0.4)"}}>Culture</span>
          <p style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(24px,2.8vw,40px)",lineHeight:1.2,letterSpacing:"-0.02em",color:"rgba(0,0,0,0.35)",margin:0}}>
            Butterfly Effect was built to create more accessible avenues for diverse creatives seeking opportunities. We believe the best work comes from teams that reflect the world they&apos;re creating for.
          </p>
        </div>
      </section>

      {/* CLOSER */}
      <section style={{background:"#000",color:"#fff",padding:"100px 40px",textAlign:"center"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(40px,6vw,80px)",lineHeight:0.96,letterSpacing:"-0.035em",margin:"0 0 48px"}}>Want to join<br/>the team?</h2>
          <a href="/mission/careers" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"16px 32px",borderRadius:100,background:"#fff",color:"#000",fontFamily:"var(--sans)",fontSize:12,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",textDecoration:"none"}}>
            See openings
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>
    </main>
  )
}
