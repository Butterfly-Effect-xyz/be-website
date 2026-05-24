export const revalidate = 60

const PODCASTS = [
  {
    kind: "podcast",
    date: "May 2026",
    show: "The Bottleneck Podcast",
    videoId: "BiFbLxJSbk8",
    title: "Jamie Bartlett with Rory Sutherland and Elfried Samba on AI, trust and the internet",
    blurb: "A wide-ranging conversation on how AI is reshaping trust, attention, and the future of influence in a fractured internet.",
  },
  {
    kind: "podcast",
    date: "Apr 2026",
    show: "The Bottleneck Podcast",
    videoId: "dQw4w9WgXcQ",
    title: "Building communities in the creator economy with Michael Heaven",
    blurb: "Michael Heaven breaks down how Butterfly Effect approaches community-first brand building and why it beats impressions every time.",
  },
  {
    kind: "podcast",
    date: "Mar 2026",
    show: "The Bottleneck Podcast",
    videoId: "9bZkp7q19f0",
    title: "The death of disruption: why authentic brands are winning",
    blurb: "The team digs into why the era of shock-first marketing is over and what brands need to do to earn genuine trust.",
  },
]

const ARTICLES = [
  {
    kind: "article",
    date: "May 2026",
    show: "Butterfly Effect",
    title: "Influencer marketing in the 21st century",
    blurb: "Michael Heaven on why the influencer model needs to evolve — and what the next generation of creator partnerships actually looks like.",
    url: "https://linkedin.com",
  },
  {
    kind: "article",
    date: "Apr 2026",
    show: "Butterfly Effect",
    title: "What Dutch Barn Vodka taught us about community-led growth",
    blurb: "A breakdown of the strategy behind one of the most talked-about campaigns in UK spirits — +1,300% YoY revenue.",
    url: "/work/dutch-barn-vodka-spirit-of-comedy",
  },
]

export default function InsightsPage() {
  return (
    <main>
      <section style={{padding:"120px 0 48px"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px"}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,fontWeight:500,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(0,0,0,0.4)",display:"block",marginBottom:24}}>Insights</span>
          <h1 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(56px,9.4vw,120px)",lineHeight:0.96,letterSpacing:"-0.035em",margin:0}}>Ideas,<br/>perspectives.</h1>
        </div>
      </section>

      {/* PODCASTS */}
      <section style={{padding:"64px 0 96px"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px"}}>
          <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:48,borderBottom:"1px solid rgba(0,0,0,0.08)",paddingBottom:24}}>
            <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(28px,3vw,44px)",letterSpacing:"-0.02em",margin:0}}>Podcasts</h2>
            <span style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(0,0,0,0.35)"}}>The Bottleneck</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"clamp(36px,4vw,72px) clamp(24px,3vw,48px)",marginBottom:96}}>
            {PODCASTS.map((item, i) => {
              const thumb = `https://i.ytimg.com/vi/${item.videoId}/maxresdefault.jpg`
              const thumb2 = `https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`
              const url = `https://www.youtube.com/watch?v=${item.videoId}`
              return (
                <a key={i} href={url} target="_blank" rel="noopener noreferrer"
                  style={{display:"flex",flexDirection:"column",gap:22,textDecoration:"none",color:"inherit"}}
                  className="ins-card">
                  <div style={{aspectRatio:"16/9",background:"#ffd80a",borderRadius:2,position:"relative",overflow:"hidden"}} className="ins-thumb">
                    <img src={thumb} loading="lazy" alt="" className="ins-thumb-img"
                      style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}
                      onError={(e:any) => { if(e.target.src !== thumb2) e.target.src = thumb2 }} />
                    <span style={{position:"absolute",left:18,bottom:18,width:48,height:48,borderRadius:"50%",background:"#b94a26",color:"#fff",display:"grid",placeItems:"center",boxShadow:"0 6px 22px rgba(0,0,0,0.28)",zIndex:2}} className="ins-thumb-play">
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{width:16,height:16,marginLeft:2}}><path d="M8 5v14l11-7z"/></svg>
                    </span>
                  </div>
                  <p style={{fontFamily:"var(--sans)",fontSize:11,fontWeight:600,letterSpacing:"0.28em",textTransform:"uppercase",color:"#b94a26",margin:0}}>Podcast</p>
                  <h3 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(20px,1.7vw,24px)",lineHeight:1.18,letterSpacing:"-0.01em",margin:0}} className="ins-title">{item.title}</h3>
                  <p style={{fontFamily:"var(--sans)",fontSize:15,lineHeight:1.55,color:"rgba(0,0,0,0.42)",margin:0,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{item.blurb}</p>
                  <p style={{fontFamily:"var(--sans)",fontSize:13,color:"rgba(0,0,0,0.32)",margin:0}}>{item.show} · {item.date}</p>
                </a>
              )
            })}
          </div>

          {/* ARTICLES */}
          <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:48,borderBottom:"1px solid rgba(0,0,0,0.08)",paddingBottom:24}}>
            <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(28px,3vw,44px)",letterSpacing:"-0.02em",margin:0}}>Articles</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"clamp(36px,4vw,72px) clamp(24px,3vw,48px)"}}>
            {ARTICLES.map((item, i) => (
              <a key={i} href={item.url} target={item.url.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                style={{display:"flex",flexDirection:"column",gap:22,textDecoration:"none",color:"inherit"}}
                className="ins-card">
                <div style={{aspectRatio:"16/9",background:"#f0f0f0",borderRadius:2,position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{fontFamily:"var(--display)",fontWeight:800,fontSize:32,color:"rgba(0,0,0,0.08)"}}>BE</span>
                </div>
                <p style={{fontFamily:"var(--sans)",fontSize:11,fontWeight:600,letterSpacing:"0.28em",textTransform:"uppercase",color:"#b94a26",margin:0}}>Article</p>
                <h3 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(20px,1.7vw,24px)",lineHeight:1.18,letterSpacing:"-0.01em",margin:0}} className="ins-title">{item.title}</h3>
                <p style={{fontFamily:"var(--sans)",fontSize:15,lineHeight:1.55,color:"rgba(0,0,0,0.42)",margin:0,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{item.blurb}</p>
                <p style={{fontFamily:"var(--sans)",fontSize:13,color:"rgba(0,0,0,0.32)",margin:0}}>{item.show} · {item.date}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSER */}
      <section style={{background:"#000",color:"#fff",padding:"100px 40px",textAlign:"center"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(40px,6vw,80px)",lineHeight:0.96,letterSpacing:"-0.035em",margin:"0 0 48px"}}>Ready to seize<br/>the void?</h2>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap"}}>
            <a href="/contact" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"14px 28px",borderRadius:100,background:"#fff",color:"#000",fontFamily:"var(--sans)",fontSize:12,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",textDecoration:"none"}}>
              Drop us a DM
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="/work" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"14px 28px",borderRadius:100,border:"1.5px solid rgba(255,255,255,0.3)",color:"#fff",fontFamily:"var(--sans)",fontSize:12,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",textDecoration:"none"}}>
              See the work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
