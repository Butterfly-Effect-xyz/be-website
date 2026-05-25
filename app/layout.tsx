import type { Metadata } from 'next'
import './globals.css'
import QuickNav from '@/components/QuickNav'
import MobileNav from '@/components/MobileNav'

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
              <a href="/work" className="nav-link">Our Work</a>
              <a href="/mission" className="nav-link">Our Mission</a>
              <a href="/mission/team" className="nav-link">Our Team</a>
              <a href="/mission/careers" className="nav-link">Butterfly Effect Careers</a>
              <a href="/insights" className="nav-link">Free Sauce</a>
              <a href="/catalyst" className="nav-link" style={{display:'inline-flex',alignItems:'center',gap:6}}>
                Catalyst
                <span style={{fontFamily:'var(--mono)',fontSize:8,fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',background:'rgba(181,69,42,0.14)',color:'#b5452a',padding:'2px 7px',borderRadius:100,lineHeight:1.6}}>Soon</span>
              </a>
            </div>
            <MobileNav />
            <a href="/contact" className="nav-cta">
              Get in Contact
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
                  <li><a href="/work">Our Work</a></li>
                  <li><a href="/mission">Our Mission</a></li>
                  <li><a href="/mission/team">Our Team</a></li>
                  <li><a href="/mission/careers">Butterfly Effect Careers</a></li>
                  <li><a href="/insights">Free Sauce</a></li>
                  <li><a href="/catalyst">Catalyst</a></li>
                  <li><a href="/contact">Get in Contact</a></li>
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
