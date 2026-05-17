import { client, urlFor } from '@/lib/sanity'
import { heroSlidesQuery, testimonialsQuery, teamMembersQuery, featuredCaseStudiesQuery } from '@/lib/queries'
import Link from 'next/link'

const LOGOS = ['NETFLIX',"McDONALD'S",'META','SQUARE','THE CHEESECAKE FACTORY','MOVELLA','BUMBLE','DUTCH BARN']

const SERVICES = [
  { id:'1', num:'01', name:'Brand', desc:'Strategy, identity, narrative. We\'re the architects behind the scenes, designing blueprints to guide brands through the ever-changing digital terrain.', cat:'brand' },
  { id:'2', num:'02', name:'Influencer', desc:'The bridge between audiences and brands. We immerse ourselves in communities, absorb culture, and identify the talent that shapes narratives.', cat:'influencer' },
  { id:'3', num:'03', name:'Creative', desc:'We breathe life into brands, moulding ideas into unforgettable moments. We don\'t create for the sake of it — we work backwards from the endgame.', cat:'creative' },
  { id:'4', num:'04', name:'Social', desc:'It\'s not about posting pretty pictures. It\'s about leveraging insights and data to build communities, drive conversation, and deliver tangible ROI.', cat:'social' },
]

async function getData() {
  try {
    const [slides, testimonials, team] = await Promise.all([
      client.fetch(heroSlidesQuery),
      client.fetch(testimonialsQuery),
      client.fetch(teamMembersQuery),
    ])
    return { slides: slides?.length ? slides : null, testimonials: testimonials || [], team: team || [] }
  } catch { return { slides: null, testimonials: [], team: [] } }
}

export default async function HomePage() {
  const { slides, testimonials, team } = await getData()

  const heroSlides = slides || [
    { _id:'1', kicker:'Mission', headline:'We build the trust that turns audiences into communities.', dek:'Seize the void.', ctaLabel:'Our mission', ctaHref:'/mission' },
    { _id:'2', kicker:'News', headline:'Butterfly Effect named Agency of the Year.', dek:'Recognised for redefining influencer-led brand building.', ctaLabel:'Read more', ctaHref:'/insights' },
    { _id:'3', kicker:'Case study', headline:'Dutch Barn Vodka: +1,300% revenue YoY.', dek:'Influencer · Creative · Social · Strategy', ctaLabel:'View case study', ctaHref:'/work' },
  ]

  const voices = testimonials.length ? testimonials : [
    { _id:'1', quote:'One team, one dream attitude. The seamlessness in working together and providing the best solutions was exceptional.', attribution:'Global Brand Client' },
    { _id:'2', quote:'Reliable and excited to come up with ideas for our business, passionate about the work and great with communication.', attribution:'Technology Client' },
    { _id:'3', quote:'The creative is 10/10.', attribution:'Entertainment Client' },
  ]

  const crew = team.length ? team : [
    { _id:'1', name:'Elfried Samba', role:'Co-founder / CEO', photo:null },
    { _id:'2', name:'Michael Heaven', role:'Managing Director', photo:null },
    { _id:'3', name:'Chris Freer', role:'Commercial Director — UK', photo:null },
    { _id:'4', name:'Derby Samba', role:'Head of Influencer Marketing', photo:null },
    { _id:'5', name:'Ala Papaj', role:'Partnerships Manager', photo:null },
    { _id:'6', name:'Pablo Lorenzana', role:'Creative Producer', photo:null },
    { _id:'7', name:'Katrina Francis', role:'People and Talent Lead', photo:null },
    { _id:'8', name:'Ruth Ameku', role:'Project Manager', photo:null },
  ]

  return (
    <main data-hero-dark="1">
      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-stage" id="hero-stage">
          {heroSlides.map((slide: any, i: number) => (
            <article key={slide._id} className={`hero-slide${i === 0 ? ' is-active' : ''}`}>
              <div className="hero-slide-inner">
                <span className="hero-kicker">{slide.kicker}</span>
                <h1 className="hero-headline">{slide.headline}</h1>
                <p className="hero-dek">{slide.dek}</p>
                <div className="hero-cta-wrap">
                  <Link href={slide.ctaHref || '/work'} className="btn btn-primary">
                    {slide.ctaLabel}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="hero-foot">
          <div className="hero-dots" id="hero-dots">
            {heroSlides.map((_: any, i: number) => (
              <button key={i} className={`hero-dot${i === 0 ? ' is-active' : ''}`} aria-label={`Slide ${i+1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="logo-strip">
        <div className="logo-strip-track">
          {[...LOGOS,...LOGOS].map((name,i) => <span key={i} className="logo-strip-item">{name}</span>)}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="sec-pad" id="featured">
        <div className="container">
          <div className="featured-section-head">
            <div>
              <span className="t-eyebrow" style={{marginBottom:12,display:'block'}}>Selected work</span>
              <h2 className="t-h2">Featured Projects</h2>
            </div>
          </div>
          <div className="featured-grid">
            <Link href="/work/dutch-barn-vodka-spirit-of-comedy" className="featured-card is-cream" style={{backgroundImage:"url('/dutch-barn-gervais-bottle.png')"}}>
              <span className="featured-hero-name">DUTCH BARN VODKA</span>
              <span className="featured-hero-cta">View case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
            </Link>
            <Link href="/work/nike-cpqd" className="featured-card is-forest" style={{backgroundImage:"url('/nike-case.jpeg')"}}>
              <span className="featured-hero-name">NIKE</span>
              <span className="featured-hero-cta">View case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
            </Link>
          </div>
          <div className="featured-grid">
            <Link href="/work/netflix-top-boy" className="featured-card is-cream" style={{backgroundImage:"url('/netflix-case.png')"}}>
              <span className="featured-hero-name">NETFLIX</span>
              <span className="featured-hero-cta">View case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
            </Link>
            <Link href="/work/bumble" className="featured-card is-forest" style={{backgroundImage:"url('/bumble-cover.png')"}}>
              <span className="featured-hero-name">BUMBLE</span>
              <span className="featured-hero-cta">View case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
            </Link>
          </div>
          <div className="featured-foot">
            <Link href="/work" className="link-arrow">View all work <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec-pad" id="services" style={{paddingTop:40}}>
        <div className="container">
          <div className="sec-head">
            <span className="t-eyebrow">What we do</span>
            <h2 className="t-h2">Services</h2>
          </div>
          <div className="services-grid" id="services-grid">
            {SERVICES.map((svc, i) => (
              <div key={svc.id} className={`svc${i === 0 ? ' is-open' : ''}`}>
                <span className="svc-num">{svc.num}</span>
                <span className="svc-spine"><span>{svc.name}</span></span>
                <div className="svc-body">
                  <h3>{svc.name}</h3>
                  <p>{svc.desc}</p>
                </div>
                <Link href={`/work?cat=${svc.cat}`} className="svc-foot">
                  View {svc.name.toLowerCase()} work
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOICES */}
      <section className="sec-pad-s" id="voices">
        <div className="container">
          <span className="t-eyebrow" style={{marginBottom:48,display:'block'}}>Client voices</span>
          <p className="voices-quote" id="voices-q">"{voices[0].quote}"</p>
          <p className="voices-attr" id="voices-a">{voices[0].attribution}</p>
          <div className="voices-dots" id="voices-dots">
            {voices.map((_: any, i: number) => (
              <button key={i} className={`voices-dot${i === 0 ? ' is-active' : ''}`} aria-label={`Quote ${i+1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* VOID */}
      <section className="sec-pad">
        <div className="container">
          <div className="void-grid">
            <div>
              <span className="t-eyebrow" style={{marginBottom:32,display:'block'}}>The void</span>
              <h2 className="void-headline">Disruption<br/>is dead.</h2>
            </div>
            <div>
              <p className="void-body">There was a time when shock earned trust. Not anymore. People demand more from the brands they choose. In a world where belief has become currency, we help brands earn it — through clarity, consistency, and follow-through.</p>
              <h3 className="void-callout">Seize the void.</h3>
              <Link href="/mission" className="link-arrow">Read our philosophy <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CREW */}
      <section className="sec-pad crew" id="crew">
        <div className="container">
          <div className="crew-head">
            <div>
              <span className="t-eyebrow" style={{marginBottom:18,display:'block'}}>The crew</span>
              <h2 className="t-h2">Who we are</h2>
            </div>
            <div className="crew-arrows">
              <button className="crew-arrow" id="crew-prev" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 18l-6-6 6-6"/></svg></button>
              <button className="crew-arrow" id="crew-next" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 6l6 6-6 6"/></svg></button>
            </div>
          </div>
          <div className="crew-track-wrap">
            <div className="crew-track" id="crew-track">
              {crew.map((m: any) => (
                <div key={m._id} className="crew-card">
                  <div className="crew-portrait">
                    {m.photo
                      ? <img src={urlFor(m.photo).width(220).height(220).url()} alt={m.name} style={{width:'100%',height:'100%',objectFit:'cover'}} />
                      : <div className="crew-portrait-placeholder"><span>{m.name.split(' ').map((n:string)=>n[0]).join('')}</span></div>
                    }
                  </div>
                  <h3 className="crew-name">{m.name}</h3>
                  <p className="crew-role">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSER */}
      <section className="closer">
        <h2 className="closer-headline">Ready to seize<br/>the void?</h2>
        <div className="closer-actions">
          <Link href="/contact" className="btn btn-primary">Drop us a DM <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></Link>
          <Link href="/work" className="btn btn-outline-light">See the work <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></Link>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{__html:`
        // Hero carousel
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.hero-dot');
        let cur = 0;
        function goTo(i) {
          slides[cur].classList.remove('is-active'); dots[cur].classList.remove('is-active');
          cur = (i + slides.length) % slides.length;
          slides[cur].classList.add('is-active'); dots[cur].classList.add('is-active');
        }
        dots.forEach((d,i) => d.addEventListener('click', () => goTo(i)));
        setInterval(() => goTo(cur + 1), 6500);

        // Voices carousel
        const vdata = ${JSON.stringify(voices)};
        const vq = document.getElementById('voices-q');
        const va = document.getElementById('voices-a');
        const vdots = document.querySelectorAll('.voices-dot');
        let vcur = 0;
        function goVoice(i) {
          vdots[vcur].classList.remove('is-active');
          vcur = (i + vdata.length) % vdata.length;
          vq.textContent = '"' + vdata[vcur].quote + '"';
          va.textContent = vdata[vcur].attribution;
          vdots[vcur].classList.add('is-active');
        }
        vdots.forEach((d,i) => d.addEventListener('click', () => goVoice(i)));
        setInterval(() => goVoice(vcur + 1), 7000);

        // Services accordion
        document.querySelectorAll('.svc').forEach(svc => {
          svc.addEventListener('click', () => {
            document.querySelectorAll('.svc').forEach(s => s.classList.remove('is-open'));
            svc.classList.add('is-open');
          });
        });

        // Crew scroll
        const track = document.getElementById('crew-track');
        document.getElementById('crew-prev').addEventListener('click', () => track.scrollBy({left:-244,behavior:'smooth'}));
        document.getElementById('crew-next').addEventListener('click', () => track.scrollBy({left:244,behavior:'smooth'}));
        track.style.overflowX = 'auto'; track.style.scrollbarWidth = 'none';
      `}} />
    </main>
  )
}
