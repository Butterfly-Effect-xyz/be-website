"use client"

const PODCASTS = [
  { date:"May 2026", videoId:"BiFbLxJSbk8", title:"Jamie Bartlett with Rory Sutherland and Elfried Samba on AI, trust and the internet", blurb:"Jamie Bartlett, author of How to Talk to AI, has spent 15 years investigating the strange corners of the internet. He joins Rory Sutherland and Elfried Samba to explore how AI is reshaping trust, attention, and the future of influence." },
  { date:"Apr 2026", videoId:"4Wlv3gXptLI", title:"Robbie Lyle with Elfried Samba on AFTV, Global Fan Network, and building a sports media empire", blurb:"Robbie Lyle started AFTV with a borrowed camera, a borrowed mic, and a belief that football fans deserved to be heard. He joins Elfried Samba to unpack how he built one of the most influential fan media brands in the world." },
  { date:"Apr 2026", videoId:"k7cYxoLBTdg", title:"Conny Kalcher with Rory Sutherland on customer loyalty, human connection and the LEGO playbook", blurb:"Conny Kalcher, Chief Marketing Officer at Zurich, joins Rory Sutherland to explore why most companies get customer loyalty wrong — and what LEGO did differently." },
  { date:"Mar 2026", videoId:"ajoDPCERwF0", title:"Matt Pohlson with Rory Sutherland and Elfried Samba on flatlining, £400M growth and the new charity model", blurb:"What happens when you literally die and come back with a completely different view on business, risk, and what matters? Matt Pohlson joins the podcast to find out." },
  { date:"Mar 2026", videoId:"TC6rQiZMM14", title:"June Sarpong with Rory Sutherland and Elfried Samba on culture, connection and creative longevity", blurb:"What does it take to build a career that lasts three decades and stay curious enough to keep reinventing it? June Sarpong joins Rory and Elfried to explore culture, connection, and the long game." },
  { date:"Feb 2026", videoId:"aSx5Iwsl-lg", title:"Ellie Norman with Rory Sutherland and Elfried Samba on finding fans and making them stay", blurb:"Ellie Norman, Chief Marketing Officer at Formula E and former Chief Communications Officer at Manchester United, joins the podcast to talk about what it really means to build a fanbase." },
  { date:"Feb 2026", videoId:"lql9p45KncM", title:"Eliza Filby with Rory Sutherland and Elfried Samba on the Bank of Mum and Dad and the new generational economy", blurb:"Dr. Eliza Filby, historian and author, joins Rory Sutherland and Elfried Samba to examine why inheritance now matters more than ever — and what it means for brands, employers, and society." },
  { date:"Jan 2026", videoId:"DFUPgJYlF2w", title:"Oscar Ryndziewicz with Rory Sutherland and Elfried Samba on DFYNE's record-breaking growth and hiring", blurb:"Oscar Ryndziewicz, founder of DFYNE, joins Rory Sutherland and Elfried Samba to unpack the decisions behind one of fitness apparel's fastest-growing brands." },
  { date:"Jan 2026", videoId:"Zf7u6ERlRRs", title:"Clarke Ching with Rory Sutherland and Elfried Samba on bottlenecks, leadership and getting unstuck", blurb:"Clarke Ching, author of The Bottleneck Detective, joins Rory Sutherland and Elfried Samba to unpack why progress stalls and how the right constraint can unlock everything." },
  { date:"Dec 2025", videoId:"5WUHP5CLE-s", title:"Ama Amo-Agyei with Rory Sutherland and Elfried Samba on founders and the cost of scale", blurb:"Ama Amo-Agyei scaled Plantmade from £100 to £13m and discovered that success changes the rules faster than you can learn them." },
  { date:"Dec 2025", videoId:"PLyAaigkc_M", title:"Rory Sutherland, Elfried Samba and Lottie Whyte on founder focus and knowing your customer", blurb:"Growth stalls when founders lose focus. Lottie Whyte, founder of MyoMaster, joins Rory Sutherland and Elfried Samba to explore what it takes to stay sharp while scaling." },
  { date:"Nov 2025", videoId:"qw8Ff_d2sHg", title:"Rory Sutherland, Elfried Samba and Nicholas Gruen on why systems break and how to fix them", blurb:"This episode discusses the toxic nature of modern politics. Economist Nicholas Gruen joins Rory and Elfried to talk about why systems break and how to fix them." },
  { date:"Nov 2025", videoId:"OpkdzfFizKw", title:"Rory Sutherland, Elfried Samba and Jess Butcher MBE on the age of distraction", blurb:"This episode of The Bottleneck Podcast explores how our digital world has turned attention into the ultimate commodity." },
  { date:"Nov 2025", videoId:"TGtaaSP6hIs", title:"Rory Sutherland, Elfried Samba and Ben Francis on building a billion dollar brand", blurb:"This episode explores what it really takes to build a billion-dollar brand. Ben Francis MBE, founder of Gymshark, joins Rory and Elfried." },
  { date:"Oct 2025", videoId:"mQ8aVcbhLCw", title:"Rory Sutherland, Elfried Samba and Max Osborne on marketing's next wave", blurb:"This episode dives into the uneasy relationship between creativity and data in modern marketing." },
  { date:"Oct 2025", videoId:"0MfaSVPuEE4", title:"Rory Sutherland, Elfried Samba and Timothy Armoo on the future for influencers", blurb:"This episode explores the future of influence — who really holds it, how it is shifting, and what that means for brands." },
  { date:"Sep 2025", videoId:"Y07noRhVOSY", title:"Rory Sutherland, Elfried Samba and Jordan Schwarzenberger on Scaling the Sidemen", blurb:"This episode explores how creators turn audiences into real businesses and why many media companies are struggling to keep up." },
  { date:"Sep 2025", videoId:"-He1RjdC4f8", title:"Rory Sutherland, Elfried Samba and Krish Ramineni on whether you can trust AI", blurb:"Elfried and Rory tackle a defining challenge: convincing people that AI meeting software is not a spy in the room." },
]

const ARTICLES = [
  { date:"May 2026", show:"Butterfly Effect", title:"Influencer marketing in the 21st century", blurb:"Michael Heaven on why the influencer model needs to evolve and what the next generation of creator partnerships actually looks like.", url:"https://linkedin.com" },
  { date:"Apr 2026", show:"Butterfly Effect", title:"What Dutch Barn Vodka taught us about community-led growth", blurb:"A breakdown of the strategy behind one of the most talked-about campaigns in UK spirits — +1,300% YoY revenue.", url:"/work/dutch-barn-vodka-spirit-of-comedy" },
]

export default function InsightsPage() {
  return (
    <main>
      <section style={{padding:"120px 0 48px"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px"}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,fontWeight:500,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(0,0,0,0.4)",display:"block",marginBottom:16}}>— 04 / INSIGHTS</span>
          <h1 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(56px,8vw,110px)",lineHeight:0.96,letterSpacing:"-0.035em",margin:"0 0 48px"}}>Notes from<br/>the studio.</h1>
          <div style={{display:"flex",gap:32,borderBottom:"1px solid rgba(0,0,0,0.1)",paddingBottom:0}}>
            <a href="#podcasts" style={{fontFamily:"var(--sans)",fontSize:12,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"#000",textDecoration:"none",paddingBottom:16,borderBottom:"2px solid #000"}}>Podcasts</a>
            <a href="#articles" style={{fontFamily:"var(--sans)",fontSize:12,fontWeight:500,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(0,0,0,0.35)",textDecoration:"none",paddingBottom:16}}>Articles &amp; More</a>
          </div>
        </div>
      </section>

      <section id="podcasts" style={{padding:"64px 0 96px"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"clamp(36px,4vw,72px) clamp(24px,3vw,48px)"}}>
            {PODCASTS.map((item, i) => {
              const thumb = "https://i.ytimg.com/vi/" + item.videoId + "/maxresdefault.jpg"
              const thumb2 = "https://i.ytimg.com/vi/" + item.videoId + "/hqdefault.jpg"
              const url = "https://www.youtube.com/watch?v=" + item.videoId
              return (
                <a key={i} href={url} target="_blank" rel="noopener noreferrer"
                  style={{display:"flex",flexDirection:"column",gap:16,textDecoration:"none",color:"inherit"}}
                  className="ins-card">
                  <div style={{aspectRatio:"16/9",background:"#ffd80a",borderRadius:2,position:"relative",overflow:"hidden"}} className="ins-thumb">
                    <img src={thumb} loading="lazy" alt="" className="ins-thumb-img"
                      style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}
                      onError={(e:any) => { const t = e.currentTarget; if(t.src !== thumb2) t.src = thumb2 }} />
                    <span style={{position:"absolute",left:18,bottom:18,width:48,height:48,borderRadius:"50%",background:"#b94a26",color:"#fff",display:"grid",placeItems:"center",boxShadow:"0 6px 22px rgba(0,0,0,0.28)",zIndex:2}} className="ins-thumb-play">
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{width:16,height:16,marginLeft:2}}><path d="M8 5v14l11-7z"/></svg>
                    </span>
                  </div>
                  <p style={{fontFamily:"var(--sans)",fontSize:11,fontWeight:600,letterSpacing:"0.28em",textTransform:"uppercase",color:"#b94a26",margin:0}}>Podcast</p>
                  <h3 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(18px,1.6vw,22px)",lineHeight:1.18,letterSpacing:"-0.01em",margin:0}} className="ins-title">{item.title}</h3>
                  <p style={{fontFamily:"var(--sans)",fontSize:14,lineHeight:1.55,color:"rgba(0,0,0,0.42)",margin:0,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical" as any,overflow:"hidden"}}>{item.blurb}</p>
                  <p style={{fontFamily:"var(--sans)",fontSize:13,color:"rgba(0,0,0,0.32)",margin:0}}>The Bottleneck Podcast · {item.date}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section id="articles" style={{padding:"64px 0 96px",background:"#f4f4f4"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 40px"}}>
          <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(28px,3vw,44px)",letterSpacing:"-0.02em",margin:"0 0 48px"}}>Articles &amp; More</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"clamp(36px,4vw,72px) clamp(24px,3vw,48px)"}}>
            {ARTICLES.map((item, i) => (
              <a key={i} href={item.url} target={item.url.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                style={{display:"flex",flexDirection:"column",gap:16,textDecoration:"none",color:"inherit"}}
                className="ins-card">
                <div style={{aspectRatio:"16/9",background:"#e5e5e5",borderRadius:2,position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{fontFamily:"var(--display)",fontWeight:800,fontSize:48,color:"rgba(0,0,0,0.08)"}}>BE</span>
                </div>
                <p style={{fontFamily:"var(--sans)",fontSize:11,fontWeight:600,letterSpacing:"0.28em",textTransform:"uppercase",color:"#b94a26",margin:0}}>Article</p>
                <h3 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(18px,1.6vw,22px)",lineHeight:1.18,letterSpacing:"-0.01em",margin:0}} className="ins-title">{item.title}</h3>
                <p style={{fontFamily:"var(--sans)",fontSize:14,lineHeight:1.55,color:"rgba(0,0,0,0.42)",margin:0}}>{item.blurb}</p>
                <p style={{fontFamily:"var(--sans)",fontSize:13,color:"rgba(0,0,0,0.32)",margin:0}}>{item.show} · {item.date}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:"#000",color:"#fff",padding:"100px 40px",textAlign:"center"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <h2 style={{fontFamily:"var(--display)",fontWeight:800,fontSize:"clamp(40px,6vw,80px)",lineHeight:0.96,letterSpacing:"-0.035em",margin:"0 0 48px"}}>Ready to seize<br/>the void?</h2>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap"}}>
            <a href="/contact" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"14px 28px",borderRadius:100,background:"#fff",color:"#000",fontFamily:"var(--sans)",fontSize:12,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",textDecoration:"none"}}>
              Drop us a DM
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
