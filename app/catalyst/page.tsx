export const revalidate = 60

import { client } from '@/lib/sanity'
import { catalystConfigQuery, catalystEventsQuery } from '@/lib/queries'

async function getData() {
  try {
    const [config, events] = await Promise.all([client.fetch(catalystConfigQuery), client.fetch(catalystEventsQuery)])
    return { config, events: events || [] }
  } catch { return { config: null, events: [] } }
}

export default async function CatalystPage() {
  const { config, events } = await getData()
  return (
    <main>
      <section style={{background:'var(--forest-deep)',color:'var(--ivory)',minHeight:'65vh',display:'flex',alignItems:'center',marginTop:-88,paddingTop:88}}>
        <div className="container" style={{padding:'120px 56px'}}>
          <span className="t-mono" style={{display:'block',marginBottom:32,color:'rgba(244,239,230,0.5)'}}>Catalyst</span>
          <h1 className="t-display" style={{color:'var(--ivory)',maxWidth:'14ch',marginBottom:32}}>{config?.headline || 'The event series for culture-first brands.'}</h1>
          {config?.subheadline && <p className="t-lede" style={{color:'rgba(244,239,230,0.65)',maxWidth:'52ch',marginBottom:40}}>{config.subheadline}</p>}
          <a href="/contact" className="btn btn-primary">Get involved <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
        </div>
      </section>
      {events.length > 0 && (
        <section className="sec-pad">
          <div className="container">
            <span className="t-eyebrow" style={{display:'block',marginBottom:18}}>Events</span>
            <h2 className="t-h2" style={{marginBottom:64}}>Upcoming &amp; past</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:32}}>
              {events.map((e: any) => (
                <div key={e._id} style={{border:'1px solid var(--rule)',borderRadius:4,padding:32}}>
                  <h3 style={{fontFamily:'var(--display)',fontWeight:800,fontSize:24,letterSpacing:'-0.01em',margin:'0 0 8px'}}>{e.title}</h3>
                  {e.date && <p className="t-mono" style={{marginBottom:12}}>{new Date(e.date).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</p>}
                  {e.location && <p style={{fontSize:14,color:'var(--fg-mute)',margin:0}}>{e.location}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="closer">
        <h2 className="closer-headline">Be part of<br/>the conversation.</h2>
        <div className="closer-actions">
          <a href="/contact" className="btn btn-primary">Get involved <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
        </div>
      </section>
    </main>
  )
}
