import { client, urlFor } from '@/lib/sanity'
import { caseStudyBySlugQuery, allCaseStudiesQuery } from '@/lib/queries'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  try { const w = await client.fetch(allCaseStudiesQuery); return w.map((i: any) => ({slug: i.slug?.current})).filter(Boolean) } catch { return [] }
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  let work: any = null
  try { work = await client.fetch(caseStudyBySlugQuery, { slug: params.slug }) } catch {}
  if (!work) notFound()
  return (
    <main>
      <section style={{background:'var(--forest-deep)',color:'var(--ivory)',minHeight:'65vh',display:'flex',alignItems:'flex-end',paddingBottom:80,position:'relative',marginTop:-88,paddingTop:88}}>
        {work.heroImage && <img src={urlFor(work.heroImage).width(1600).height(900).url()} alt={work.heroHeadline} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.4}} />}
        <div className="container" style={{position:'relative',zIndex:1}}>
          <span className="t-mono" style={{display:'block',marginBottom:24,color:'rgba(244,239,230,0.5)'}}>{work.heroLabel || 'Case Study'}</span>
          <h1 className="t-h1" style={{color:'var(--ivory)',marginBottom:16}}>{work.heroHeadline || work.title}</h1>
          {work.heroSubhead && <p style={{fontSize:20,color:'rgba(244,239,230,0.65)',maxWidth:'52ch',marginTop:16}}>{work.heroSubhead}</p>}
          <div style={{display:'flex',gap:12,marginTop:32,flexWrap:'wrap'}}>
            {work.services?.map((s: string) => <span key={s} style={{fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.28em',textTransform:'uppercase',color:'rgba(244,239,230,0.5)',border:'1px solid rgba(244,239,230,0.2)',padding:'6px 14px',borderRadius:100}}>{s}</span>)}
          </div>
        </div>
      </section>
      {work.results?.length > 0 && (
        <section style={{background:'var(--rust)',color:'#fff',padding:'48px 0'}}>
          <div className="container" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:32}}>
            {work.results.map((r: any, i: number) => (
              <div key={i} style={{textAlign:'center'}}>
                <p style={{fontFamily:'var(--display)',fontWeight:800,fontSize:'clamp(28px,3.5vw,56px)',lineHeight:1,letterSpacing:'-0.02em',margin:0}}>{r.stat}</p>
                <p style={{fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.28em',textTransform:'uppercase',opacity:0.7,marginTop:8,margin:'8px 0 0'}}>{r.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {work.summary && (
        <section className="sec-pad-s">
          <div className="container"><div style={{maxWidth:'68ch'}}><span className="t-mono" style={{display:'block',marginBottom:24}}>Overview</span><p style={{fontSize:'clamp(18px,1.6vw,24px)',lineHeight:1.55,color:'var(--fg-soft)'}}>{work.summary}</p></div></div>
        </section>
      )}
      {(work.theChallenge || work.approach) && (
        <section className="sec-pad-s" style={{background:'var(--cream)'}}>
          <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80}}>
            {work.theChallenge && <div><h2 className="t-h3" style={{marginBottom:24}}>The Challenge</h2><p style={{fontSize:16,lineHeight:1.65,color:'var(--fg-soft)'}}>{work.theChallenge}</p></div>}
            {work.approach && (
              <div>
                <h2 className="t-h3" style={{marginBottom:32}}>Our Approach</h2>
                {work.approach.blueprint && <div style={{marginBottom:24}}><h3 style={{fontFamily:'var(--display)',fontWeight:700,fontSize:18,marginBottom:8}}>01 — Blueprint</h3><p style={{fontSize:15,lineHeight:1.65,color:'var(--fg-soft)'}}>{work.approach.blueprint}</p></div>}
                {work.approach.build && <div style={{marginBottom:24}}><h3 style={{fontFamily:'var(--display)',fontWeight:700,fontSize:18,marginBottom:8}}>02 — Build</h3><p style={{fontSize:15,lineHeight:1.65,color:'var(--fg-soft)'}}>{work.approach.build}</p></div>}
                {work.approach.broadcast && <div><h3 style={{fontFamily:'var(--display)',fontWeight:700,fontSize:18,marginBottom:8}}>03 — Broadcast</h3><p style={{fontSize:15,lineHeight:1.65,color:'var(--fg-soft)'}}>{work.approach.broadcast}</p></div>}
              </div>
            )}
          </div>
        </section>
      )}
      {work.testimonial?.quote && (
        <section className="sec-pad" style={{background:'var(--forest-deep)',color:'var(--ivory)'}}>
          <div className="container" style={{maxWidth:'72ch'}}>
            <p className="voices-quote" style={{color:'var(--ivory)'}}>&ldquo;{work.testimonial.quote}&rdquo;</p>
            {work.testimonial.attribution && <p className="voices-attr" style={{color:'rgba(244,239,230,0.5)',marginTop:16}}>{work.testimonial.attribution}</p>}
          </div>
        </section>
      )}
      <section className="sec-pad-s">
        <div className="container">
          <Link href="/work" className="link-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16,transform:'rotate(180deg)'}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            Back to all work
          </Link>
        </div>
      </section>
    </main>
  )
}
