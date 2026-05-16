import { client, urlFor } from '@/lib/sanity'
import { heroSlidesQuery, testimonialsQuery, teamMembersQuery } from '@/lib/queries'
import Link from 'next/link'

const FALLBACK_HERO = { kicker: 'Mission', headline: 'We build the trust that turns audiences into communities.', dek: 'Seize the void.', ctaLabel: 'Our work', ctaHref: '/work' }

const FALLBACK_SERVICES = [
  { id: '1', number: '01', name: 'Brand', description: 'Strategy, identity, narrative. We are the architects behind the scenes.' },
  { id: '2', number: '02', name: 'Influencer', description: 'The bridge between audiences and brands. We identify the talent that shapes narratives.' },
  { id: '3', number: '03', name: 'Creative', description: 'We breathe life into brands, moulding ideas into unforgettable moments.' },
  { id: '4', number: '04', name: 'Social', description: 'Leveraging insights and data to build communities and deliver tangible ROI.' },
]

const LOGOS = ['NETFLIX', "McDONALD'S", 'META', 'SQUARE', 'CHEESECAKE FACTORY', 'WETRANSFER', 'BUMBLE', 'DUTCH BARN']

async function getData() {
  try {
    const [testimonials, teamMembers] = await Promise.all([
      client.fetch(testimonialsQuery),
      client.fetch(teamMembersQuery),
    ])
    return {
      voices: testimonials?.length ? testimonials : [],
      crew: teamMembers?.length ? teamMembers : [],
    }
  } catch {
    return { voices: [], crew: [] }
  }
}

export default async function HomePage() {
  const { voices, crew } = await getData()

  return (
    <main>
      <section className="min-h-[90vh] bg-forest-deep text-ivory flex items-center">
        <div className="max-w-[1480px] mx-auto px-8 sm:px-14 w-full py-24">
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-ivory/50 block mb-6">{FALLBACK_HERO.kicker}</span>
          <h1 className="font-display font-extrabold text-[clamp(48px,7.2vw,120px)] leading-[0.96] tracking-[-0.03em] max-w-[14ch] mb-8">{FALLBACK_HERO.headline}</h1>
          <p className="text-ivory/60 text-[clamp(16px,1.25vw,20px)] leading-relaxed mb-10">{FALLBACK_HERO.dek}</p>
          <Link href="/work" className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-rust text-white font-sans font-semibold text-[12px] tracking-[0.22em] uppercase hover:bg-rust-deep transition-colors">
            See our work
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      <div className="border-y border-forest-deep/10 bg-cream overflow-hidden py-5">
        <div className="flex gap-0 w-max" style={{animation: 'marquee 30s linear infinite'}}>
          {[...LOGOS, ...LOGOS].map((name, i) => (
            <span key={i} className="font-sans font-semibold text-[11px] tracking-[0.28em] uppercase text-forest-deep/40 px-10 whitespace-nowrap">{name}</span>
          ))}
        </div>
      </div>

      <section className="py-24 bg-ivory">
        <div className="max-w-[1480px] mx-auto px-8 sm:px-14">
          <span className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-forest-deep/40 block mb-3">What we do</span>
          <h2 className="font-display font-extrabold text-[clamp(34px,4.4vw,72px)] leading-[1.02] tracking-[-0.025em] mb-14">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-forest-deep/10">
            {FALLBACK_SERVICES.map((svc) => (
              <div key={svc.id} className="bg-ivory p-10 hover:bg-forest-deep hover:text-ivory transition-all duration-500 group">
                <span className="font-mono text-[11px] tracking-[0.28em] text-forest-deep/40 group-hover:text-ivory/40 block mb-6">{svc.number}</span>
                <h3 className="font-display font-extrabold text-[24px] tracking-[-0.015em] mb-4">{svc.name}</h3>
                <p className="text-[14px] leading-relaxed text-forest-deep/60 group-hover:text-ivory/60">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {voices.length > 0 && (
        <section className="py-24 bg-cream">
          <div className="max-w-[1480px] mx-auto px-8 sm:px-14">
            <span className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-forest-deep/40 block mb-12">Client voices</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {voices.slice(0, 3).map((v: any) => (
                <div key={v._id} className="p-8 border border-forest-deep/10 rounded-sm">
                  <p className="font-display font-bold text-[18px] leading-[1.4] tracking-[-0.01em] text-forest-deep mb-6">"{v.quote}"</p>
                  <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-forest-deep/40">{v.attribution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 bg-forest-deep text-ivory">
        <div className="max-w-[1480px] mx-auto px-8 sm:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-ivory/40 block mb-8">The void</span>
              <h2 className="font-display font-extrabold text-[clamp(48px,6vw,96px)] leading-[0.96] tracking-[-0.035em]">Disruption<br/>is dead.</h2>
            </div>
            <div>
              <p className="text-ivory/65 leading-relaxed text-[16px] mb-8">There was a time when shock earned trust. Not anymore. In a world where belief has become currency, we help brands earn it through clarity, consistency, and follow-through.</p>
              <h3 className="font-display font-extrabold text-[28px] tracking-[-0.015em] mb-8">Seize the void.</h3>
              <Link href="/mission" className="inline-flex items-center gap-3 font-sans font-semibold text-[12px] tracking-[0.22em] uppercase text-ivory/70 hover:text-ivory transition-colors">
                Read our philosophy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-ivory text-center">
        <div className="max-w-[1480px] mx-auto px-8 sm:px-14">
          <h2 className="font-display font-extrabold text-[clamp(40px,6vw,96px)] leading-[0.96] tracking-[-0.035em] text-forest-deep mb-12">Ready to seize<br/>the void?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-rust text-white font-sans font-semibold text-[12px] tracking-[0.22em] uppercase hover:bg-rust-deep transition-colors">
              Drop us a DM →
            </Link>
            <Link href="/work" className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-forest-deep/20 text-forest-deep font-sans font-semibold text-[12px] tracking-[0.22em] uppercase hover:bg-forest-deep hover:text-ivory transition-colors">
              See the work →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
