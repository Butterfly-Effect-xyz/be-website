import { client, urlFor } from '@/lib/sanity'
import { articlesQuery } from '@/lib/queries'
import Link from 'next/link'

async function getArticles() {
  try { const d = await client.fetch(articlesQuery); return d || [] } catch { return [] }
}

export default async function InsightsPage() {
  const articles = await getArticles()
  return (
    <main>
      <section style={{padding:'140px 0 32px'}}>
        <div className="container">
          <span className="t-eyebrow" style={{display:'block',marginBottom:24}}>Insights</span>
          <h1 className="t-display" style={{maxWidth:'14ch'}}>Ideas,<br/>perspectives.</h1>
        </div>
      </section>
      <section className="container" style={{paddingBottom:140}}>
        {articles.length === 0 ? (
          <div style={{padding:'80px 0',borderTop:'1px solid var(--rule)',textAlign:'center'}}>
            <p style={{color:'var(--fg-mute)',fontSize:16}}>Articles coming soon.</p>
          </div>
        ) : (
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'clamp(36px,4vw,72px) clamp(24px,3vw,48px)'}}>
            {articles.map((a: any) => (
              <Link key={a._id} href={'/insights/' + a.slug?.current} style={{display:'flex',flexDirection:'column',gap:22,textDecoration:'none',color:'inherit'}}>
                <div style={{aspectRatio:'16/9',background:'var(--cream)',borderRadius:2,overflow:'hidden'}}>
                  {a.coverImage
                    ? <img src={urlFor(a.coverImage).width(600).height(338).url()} alt={a.title} style={{width:'100%',height:'100%',objectFit:'cover'}} />
                    : <div style={{width:'100%',height:'100%',background:'linear-gradient(135deg,var(--cream),var(--ivory-2))'}} />
                  }
                </div>
                <div>
                  {a.category && <span className="t-mono" style={{display:'block',marginBottom:12}}>{a.category}</span>}
                  <h3 style={{fontFamily:'var(--display)',fontWeight:800,fontSize:'clamp(20px,1.8vw,26px)',letterSpacing:'-0.01em',margin:'0 0 12px'}}>{a.title}</h3>
                  {a.excerpt && <p style={{fontSize:15,color:'var(--fg-soft)',lineHeight:1.55,margin:0}}>{a.excerpt}</p>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
