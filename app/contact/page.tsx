export default function ContactPage() {
  return (
    <main>
      <section style={{padding:'140px 0 64px'}}>
        <div className="container">
          <span className="t-eyebrow" style={{display:'block',marginBottom:24}}>Contact</span>
          <h1 className="t-display" style={{maxWidth:'14ch',marginBottom:24}}>Let&apos;s talk.</h1>
          <p className="t-lede" style={{maxWidth:'48ch'}}>Got a brief, a question, or just want to say hello — we&apos;re all ears.</p>
        </div>
      </section>
      <section className="container" style={{paddingBottom:160}}>
        <div className="contact-cards-grid">
          {[
            { title:'New business', desc:'Ready to work together? Tell us about your brand and goals.', cta:'Send a brief', href:'mailto:hello@butterflyeffect.xyz' },
            { title:'Press & media', desc:'For press enquiries, interviews and media requests.', cta:'Get in touch', href:'mailto:press@butterflyeffect.xyz' },
            { title:'Careers', desc:'Want to join the team? We are always looking for great people.', cta:'See openings', href:'mailto:careers@butterflyeffect.xyz' },
          ].map(card => (
            <a key={card.title} href={card.href} style={{border:'1px solid var(--rule)',borderRadius:4,padding:'40px 36px 32px',minHeight:260,display:'flex',flexDirection:'column',gap:16,color:'inherit',textDecoration:'none',transition:'border-color 0.3s'}}>
              <h2 style={{fontFamily:'var(--display)',fontWeight:800,fontSize:'clamp(28px,2.8vw,38px)',lineHeight:1.05,letterSpacing:'-0.02em',color:'var(--fg-mute)',margin:0}}>{card.title}</h2>
              <p style={{fontSize:16,lineHeight:1.5,color:'var(--fg-mute)',margin:0,maxWidth:'28ch'}}>{card.desc}</p>
              <span style={{marginTop:'auto',display:'inline-flex',alignItems:'center',gap:10,fontFamily:'var(--sans)',fontSize:11,fontWeight:600,letterSpacing:'0.28em',textTransform:'uppercase',color:'var(--forest-deep)'}}>
                {card.cta}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:14,height:14}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
