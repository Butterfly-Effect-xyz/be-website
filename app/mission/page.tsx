import { client, urlFor } from '@/lib/sanity'
import { missionPageQuery, teamMembersQuery } from '@/lib/queries'

async function getData() {
  try {
    const [mission, team] = await Promise.all([client.fetch(missionPageQuery), client.fetch(teamMembersQuery)])
    return { mission, team: team || [] }
  } catch { return { mission: null, team: [] } }
}

export default async function MissionPage() {
  const { mission, team } = await getData()
  return (
    <main>
      <section style={{background:'var(--forest-deep)',color:'var(--ivory)',marginTop:-88,paddingTop:220,paddingBottom:120}}>
        <div className="container">
          <span className="t-mono" style={{display:'block',marginBottom:32,color:'rgba(244,239,230,0.5)'}}>Our mission</span>
          <h1 className="t-display" style={{color:'var(--ivory)',maxWidth:'14ch',marginBottom:40}}>{mission?.headline || 'We build the trust that turns audiences into communities.'}</h1>
          {mission?.subheadline && <p className="t-lede" style={{color:'rgba(244,239,230,0.65)',maxWidth:'52ch'}}>{mission.subheadline}</p>}
        </div>
      </section>
      {mission?.manifesto && (
        <section className="sec-pad">
          <div className="container">
            <div style={{maxWidth:'68ch'}}>
              <span className="t-eyebrow" style={{display:'block',marginBottom:32}}>The manifesto</span>
              <p style={{fontSize:'clamp(18px,1.6vw,24px)',lineHeight:1.65,color:'var(--fg-soft)'}}>{mission.manifesto}</p>
            </div>
          </div>
        </section>
      )}
      {team.length > 0 && (
        <section className="sec-pad" style={{background:'var(--cream)'}}>
          <div className="container">
            <span className="t-eyebrow" style={{display:'block',marginBottom:18}}>The crew</span>
            <h2 className="t-h2" style={{marginBottom:64}}>Who we are</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'clamp(24px,3vw,48px)'}}>
              {team.map((m: any) => (
                <div key={m._id} className="crew-card" style={{display:'flex',flexDirection:'column',gap:22}}>
                  <div style={{aspectRatio:'4/5',background:'var(--bg)',borderRadius:2,overflow:'hidden',position:'relative'}}>
                    {m.photo
                      ? <img src={urlFor(m.photo).width(400).height(500).url()} alt={m.name} style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0,transition:'opacity 0.3s'}} className="crew-photo-static" />
                      : <div className="crew-portrait-placeholder"><span>{m.name.split(' ').map((n: string) => n[0]).join('')}</span></div>
                    }
                    {m.hoverGif && <img src={urlFor(m.hoverGif).url()} alt="" aria-hidden style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0,opacity:0,transition:'opacity 0.3s'}} className="crew-photo-gif" />}
                  </div>
                  <div>
                    <h3 style={{fontFamily:'var(--display)',fontWeight:800,fontSize:'clamp(20px,1.8vw,26px)',letterSpacing:'-0.01em',margin:'0 0 4px'}}>{m.name}</h3>
                    <p style={{fontSize:15,color:'var(--fg-mute)',margin:0}}>{m.role}</p>
                    {m.bio && <p style={{fontSize:14,color:'var(--fg-soft)',margin:'8px 0 0',lineHeight:1.5}}>{m.bio}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="closer">
        <h2 className="closer-headline">Join the team.</h2>
        <div className="closer-actions">
          <a href="mailto:hello@butterflyeffect.xyz" className="btn btn-primary">Get in touch <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
        </div>
      </section>
    </main>
  )
}
