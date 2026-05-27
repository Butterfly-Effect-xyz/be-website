import type { Metadata } from 'next'
import './globals.css'
import QuickNav from '@/components/QuickNav'
import MobileNav from '@/components/MobileNav'
import FooterNewsletter from '@/components/FooterNewsletter'

export const metadata: Metadata = {
  title: 'Butterfly Effect — Seize the void',
  description: 'We build the trust that turns audiences into communities.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&family=JetBrains+Mono:wght@400;500&family=Montserrat:wght@400;500;600;700&display=swap" />
      </head>
      <body>
        <nav className="nav" id="site-nav">
          <div className="nav-inner">
            <a href="/" className="nav-logo">Butterfly Effect</a>
            <div className="nav-links">
              <div className="nav-drop">
                <a href="/mission" className="nav-link">Mission <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg></a>
                <div className="nav-drop-panel">
                  <a href="/mission/story">Our Story</a>
                  <a href="/mission/team">Team</a>
                  <a href="/mission/careers">Careers</a>
                </div>
              </div>
              <a href="/work" className="nav-link">Work</a>
              <div className="nav-drop">
                <a href="/insights" className="nav-link">Insights <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg></a>
                <div className="nav-drop-panel">
                  <a href="/insights">All</a>
                  <a href="/insights?cat=podcast">Podcasts</a>
                  <a href="/insights?cat=article">Articles</a>
                </div>
              </div>
              <a href="/catalyst" className="nav-link">Catalyst</a>
            </div>
            <MobileNav />
            <a href="/contact" className="nav-cta">
              Let&apos;s talk
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
        </nav>
        {children}
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-grid">

              {/* Col 1: Brand + nav links */}
              <div>
                <p className="footer-brand">Butterfly Effect</p>
                <p className="footer-tagline">We build the trust that turns audiences into communities.</p>
                <ul className="footer-links" style={{marginTop:32}}>
                  {[
                    { label: 'Mission',  href: '/mission'          },
                    { label: 'Work',     href: '/work'             },
                    { label: 'Insights', href: '/insights'         },
                    { label: 'Team',     href: '/mission/team'     },
                    { label: 'Catalyst', href: '/catalyst'         },
                    { label: 'Contact',  href: '/contact'          },
                    { label: 'Careers',  href: '/mission/careers'  },
                  ].map(({ label, href }) => (
                    <li key={label}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              </div>

              {/* Col 2: Connect */}
              <div>
                <p className="footer-col-label">Connect</p>
                <ul className="footer-links">
                  <li>
                    <a href="https://www.linkedin.com/company/butterfly-effect-xyz" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:10}}>
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{width:14,height:14,flexShrink:0,opacity:0.6}}>
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/butterfly.effect.xyz" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:10}}>
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{width:14,height:14,flexShrink:0,opacity:0.6}}>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                      </svg>
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 3: Newsletter */}
              <FooterNewsletter />

            </div>
            <div className="footer-base">
              <p className="footer-copy">© {new Date().getFullYear()} Butterfly Effect. All rights reserved.</p>
              <div style={{display:'flex',gap:24}}>
                <a href="/privacy" className="footer-copy" style={{opacity:0.6}}>Privacy</a>
                <a href="/terms"   className="footer-copy" style={{opacity:0.6}}>Terms</a>
              </div>
            </div>
          </div>
        </footer>
        <QuickNav />
        <script dangerouslySetInnerHTML={{__html: `
          const nav = document.getElementById('site-nav');
          const heroDark = document.querySelector('main')?.dataset?.heroDark === '1';
          if(heroDark) nav.classList.add('on-dark');
          window.addEventListener('scroll', () => {
            if(window.scrollY > 40) { nav.classList.add('scrolled'); nav.classList.remove('on-dark'); }
            else { nav.classList.remove('scrolled'); if(heroDark) nav.classList.add('on-dark'); }
          });
        `}} />
      </body>
    </html>
  )
}
