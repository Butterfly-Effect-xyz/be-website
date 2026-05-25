import type { Metadata } from 'next'
import './globals.css'
import QuickNav from '@/components/QuickNav'

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
        <nav className="nav on-dark" id="site-nav">
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
              <div>
                <p className="footer-brand">Butterfly Effect</p>
                <p className="footer-tagline">We build the trust that turns audiences into communities.</p>
              </div>
              <div>
                <p className="footer-col-label">Navigate</p>
                <ul className="footer-links">
                  {['Work','Mission','Insights','Catalyst','Contact'].map(item => (
                    <li key={item}><a href={`/${item.toLowerCase()}`}>{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="footer-col-label">Get in touch</p>
                <a href="/contact" className="btn btn-outline-light">
                  Drop us a DM
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:16,height:16}}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
            <div className="footer-base">
              <p className="footer-copy">© {new Date().getFullYear()} Butterfly Effect. All rights reserved.</p>
              <p className="footer-copy">Seize the void.</p>
            </div>
          </div>
        </footer>
        <QuickNav />
        <script dangerouslySetInnerHTML={{__html: `
          const nav = document.getElementById('site-nav');
          let dark = document.body.dataset.heroDark === '1';
          if(dark) nav.classList.add('on-dark');
          window.addEventListener('scroll', () => {
            if(window.scrollY > 40) { nav.classList.add('scrolled'); nav.classList.remove('on-dark'); }
            else { nav.classList.remove('scrolled'); if(dark) nav.classList.add('on-dark'); }
          });
        `}} />
      </body>
    </html>
  )
}
