export const dynamic = 'force-dynamic'
export const revalidate = 60

import { urlFor } from '@/lib/sanity'
import { createClient } from '@sanity/client'
import { caseStudyBySlugQuery, allCaseStudiesQuery } from '@/lib/queries'

const client = createClient({
  projectId: 'x4948ouk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const work = await client.fetch(caseStudyBySlugQuery, { slug: params.slug })
    return { title: work ? `${work.client} — ${work.heroHeadline} · Butterfly Effect` : 'Case Study · Butterfly Effect' }
  } catch { return { title: 'Case Study · Butterfly Effect' } }
}

export async function generateStaticParams() {
  try { const w = await client.fetch(allCaseStudiesQuery); return w.map((i: any) => ({slug: i.slug?.current})).filter(Boolean) } catch { return [] }
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  let work: any = null
  try { work = await client.fetch(caseStudyBySlugQuery, { slug: params.slug }); console.log('WORK:', JSON.stringify(work)); } catch(e) { console.log('ERROR:', e) }
  if (!work) return <main style={{padding:'120px 40px',textAlign:'center'}}><h1 style={{fontFamily:'var(--display)',fontWeight:800,fontSize:48}}>Case study coming soon.</h1><a href='/work' style={{display:'inline-block',marginTop:32,color:'var(--rust)'}}>← Back to work</a></main>

  const heroImageUrl = work.heroImageUrl || (work.heroImage ? urlFor(work.heroImage).width(1600).height(900).url() : null)

  return (
    <main style={{background:'var(--bg)'}}>
      {/* BACK LINK */}
      <div style={{borderBottom:'1px solid var(--rule)',padding:'0'}}>
        <div style={{maxWidth:1280,margin:'0 auto',padding:'0 40px'}}>
          <Link href="/work" style={{display:'inline-flex',alignItems:'center',gap:8,fontFamily:'var(--sans)',fontSize:11,fontWeight:600,letterSpacing:'0.22em',textTransform:'uppercase',color:'var(--fg-mute)',padding:'20px 0',transition:'color 0.2s',textDecoration:'none'}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:14,height:14,transform:'rotate(180deg)'}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            All work
          </Link>
        </div>
      </div>

      <div style={{maxWidth:1280,margin:'0 auto',padding:'0 40px'}}>
        {/* HEAD SECTION */}
        <section style={{padding:'64px 0 48px'}} data-screen-label="01 Head">
          <div style={{maxWidth:'62ch'}}>
            <span style={{fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.28em',textTransform:'uppercase',color:'var(--fg-mute)',display:'block',marginBottom:32}}>
              {work.heroLabel || `Case Study — ${work.client}`}
            </span>
            <h1 style={{fontFamily:'var(--display)',fontWeight:800,fontSize:'clamp(40px,5.8vw,72px)',lineHeight:1.02,letterSpacing:'-0.025em',color:'var(--forest-deep)',margin:'0 0 28px'}}>
              {work.heroHeadline || work.title}
            </h1>
            {work.heroSubhead && (
              <p style={{fontSize:'clamp(16px,1.4vw,20px)',lineHeight:1.6,color:'var(--fg-soft)',margin:0,maxWidth:'50ch'}}>
                {work.heroSubhead}
              </p>
            )}
          </div>
        </section>

        {/* HERO IMAGE */}
        {heroImageUrl && (
          <div style={{borderRadius:6,overflow:'hidden',height:'clamp(320px,52vh,620px)',marginBottom:80,position:'relative'}}>
            <img src={heroImageUrl} alt={`${work.client} campaign`} style={{width:'100%',height:'100%',objectFit:'cover'}} />
          </div>
        )}

        {/* BODY + ASIDE */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:80,alignItems:'start',paddingBottom:120}} data-screen-label="02 Body">
          
          {/* LEFT COLUMN */}
          <div>
            {/* SECTION 01 - CHALLENGE */}
            {work.theChallenge && (
              <section style={{marginBottom:80}}>
                <span style={{fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.28em',textTransform:'uppercase',color:'var(--rust)',display:'block',marginBottom:24}}>
                  01 / THE CHALLENGE
                </span>
                <h2 style={{fontFamily:'var(--display)',fontWeight:800,fontSize:'clamp(28px,3vw,44px)',lineHeight:1.1,letterSpacing:'-0.02em',color:'var(--forest-deep)',margin:'0 0 32px',maxWidth:'18ch'}}>
                  {work.challengeHeading || 'The challenge'}
                </h2>
                <p style={{fontSize:16,lineHeight:1.7,color:'var(--fg-soft)',margin:0,maxWidth:'58ch'}}>
                  {work.theChallenge}
                </p>
              </section>
            )}

            {/* SECTION 02 - APPROACH */}
            {work.approach && (
              <section style={{marginBottom:80}}>
                <span style={{fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.28em',textTransform:'uppercase',color:'var(--rust)',display:'block',marginBottom:24}}>
                  02 / OUR APPROACH
                </span>
                <h2 style={{fontFamily:'var(--display)',fontWeight:800,fontSize:'clamp(28px,3vw,44px)',lineHeight:1.1,letterSpacing:'-0.02em',color:'var(--forest-deep)',margin:'0 0 48px',maxWidth:'18ch'}}>
                  {work.approachHeading || 'Our approach'}
                </h2>
                <div style={{display:'flex',flexDirection:'column',gap:0}}>
                  {[
                    {num:'01', kicker: work.approach.blueprintKicker || 'Mine', title: work.approach.blueprintTitle || '', body: work.approach.blueprint},
                    {num:'02', kicker: work.approach.buildKicker || 'Match', title: work.approach.buildTitle || '', body: work.approach.build},
                    {num:'03', kicker: work.approach.broadcastKicker || 'Amplify', title: work.approach.broadcastTitle || '', body: work.approach.broadcast},
                  ].filter(p => p.body).map((pillar, i) => (
                    <div key={i} style={{display:'grid',gridTemplateColumns:'80px 1fr',gap:'0 32px',borderTop:'1px solid var(--rule)',padding:'32px 0'}}>
                      <div>
                        <span style={{fontFamily:'var(--mono)',fontSize:11,color:'var(--fg-mute)',display:'block'}}>{pillar.num}</span>
                        <span style={{fontFamily:'var(--mono)',fontSize:11,color:'var(--fg-mute)',letterSpacing:'0.06em'}}>{pillar.kicker}</span>
                      </div>
                      <div>
                        {pillar.title && <h3 style={{fontFamily:'var(--display)',fontWeight:700,fontSize:18,letterSpacing:'-0.01em',color:'var(--forest-deep)',margin:'0 0 12px'}}>{pillar.title}</h3>}
                        <p style={{fontSize:15,lineHeight:1.7,color:'var(--fg-soft)',margin:0}}>{pillar.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* SECTION 03 - RESULTS */}
            {work.results?.length > 0 && (
              <section style={{marginBottom:80}}>
                <span style={{fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.28em',textTransform:'uppercase',color:'var(--rust)',display:'block',marginBottom:24}}>
                  03 / THE RESULTS
                </span>
                {work.resultsHeading && (
                  <h2 style={{fontFamily:'var(--display)',fontWeight:800,fontSize:'clamp(28px,3vw,44px)',lineHeight:1.1,letterSpacing:'-0.02em',color:'var(--forest-deep)',margin:'0 0 32px'}}>
                    {work.resultsHeading}
                  </h2>
                )}
                {work.resultsSummary && (
                  <p style={{fontSize:16,lineHeight:1.7,color:'var(--fg-soft)',margin:0,maxWidth:'58ch'}}>
                    {work.resultsSummary}
                  </p>
                )}
              </section>
            )}

            {/* TESTIMONIAL */}
            {work.testimonial?.quote && (
              <section style={{borderLeft:'3px solid var(--rust)',paddingLeft:32,marginBottom:80}}>
                <p style={{fontFamily:'var(--display)',fontWeight:700,fontSize:'clamp(18px,1.8vw,24px)',lineHeight:1.4,color:'var(--forest-deep)',margin:'0 0 16px'}}>
                  &ldquo;{work.testimonial.quote}&rdquo;
                </p>
                <span style={{fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.28em',textTransform:'uppercase',color:'var(--fg-mute)'}}>
                  {work.testimonial.attribution}
                </span>
              </section>
            )}
          </div>

          {/* RIGHT ASIDE - STICKY */}
          <aside style={{position:'sticky',top:120}}>
            <div style={{display:'flex',flexDirection:'column',gap:40}}>
              {/* Brand */}
              <div>
                <span style={{fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.32em',textTransform:'uppercase',color:'var(--fg-mute)',display:'block',marginBottom:16}}>Brand</span>
                <p style={{fontFamily:'var(--display)',fontWeight:700,fontSize:22,letterSpacing:'-0.01em',color:'var(--forest-deep)',margin:'0 0 4px'}}>{work.client}</p>
                {work.title && <p style={{fontFamily:'var(--display)',fontStyle:'italic',fontSize:16,color:'var(--fg-mute)',margin:0}}>{work.title}</p>}
              </div>

              {/* Services */}
              {work.services?.length > 0 && (
                <div>
                  <span style={{fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.32em',textTransform:'uppercase',color:'var(--fg-mute)',display:'block',marginBottom:16}}>Services</span>
                  <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                    {work.services.map((s: string) => (
                      <span key={s} style={{fontFamily:'var(--sans)',fontSize:11,fontWeight:600,letterSpacing:'0.18em',textTransform:'uppercase',border:'1.5px solid var(--rule)',borderRadius:100,padding:'8px 14px',color:'var(--fg-soft)'}}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              {work.results?.length > 0 && (
                <div>
                  <span style={{fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.32em',textTransform:'uppercase',color:'var(--fg-mute)',display:'block',marginBottom:20}}>Results</span>
                  <div style={{display:'flex',flexDirection:'column',gap:20}}>
                    {work.results.map((r: any, i: number) => (
                      <div key={i}>
                        <p style={{fontFamily:'var(--display)',fontWeight:800,fontSize:'clamp(32px,3.5vw,48px)',lineHeight:1,letterSpacing:'-0.03em',color:'var(--forest-deep)',margin:'0 0 4px'}}>{r.stat}</p>
                        <p style={{fontFamily:'var(--sans)',fontSize:13,color:'var(--fg-mute)',margin:0}}>{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* CLOSER */}
      <section style={{background:'var(--forest-deep)',color:'var(--ivory)',padding:'100px 40px'}} data-screen-label="03 Closer">
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <h2 style={{fontFamily:'var(--display)',fontWeight:800,fontSize:'clamp(40px,6vw,80px)',lineHeight:0.96,letterSpacing:'-0.035em',margin:'0 0 56px',maxWidth:'12ch'}}>
            Ready to seize<br/>the void?
          </h2>
          <div style={{display:'flex',alignItems:'center',gap:16,flexWrap:'wrap'}}>
            <Link href="/contact" className="btn btn-primary">
              Drop us a DM
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/work" className="btn btn-outline-light">
              See more work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
