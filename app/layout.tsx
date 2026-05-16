import type { Metadata } from 'next'
import './globals.css'

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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&family=JetBrains+Mono:wght@400;500&display=swap" />
      </head>
      <body className="bg-ivory text-forest-deep antialiased overflow-x-hidden">
        <nav className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-sm border-b border-forest-deep/8">
          <div className="max-w-[1480px] mx-auto px-8 sm:px-14 flex items-center justify-between h-[80px]">
            <a href="/" className="font-sans font-extrabold text-[13px] tracking-[0.22em] uppercase text-forest-deep hover:opacity-70 transition-opacity">
              Butterfly Effect
            </a>
            <div className="hidden md:flex items-center gap-10">
              {[['Work','/work'],['Mission','/mission'],['Catalyst','/catalyst'],['Insights','/insights'],['Contact','/contact']].map(([label,href]) => (
                <a key={href} href={href} className="font-sans font-medium text-[12px] tracking-[0.24em] uppercase text-forest-deep/60 hover:text-forest-deep transition-colors">
                  {label}
                </a>
              ))}
            </div>
            <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rust text-white font-sans font-semibold text-[11px] tracking-[0.22em] uppercase hover:bg-rust-deep transition-colors">
              Let&apos;s talk
            </a>
          </div>
        </nav>
        {children}
        <footer className="bg-forest-deep text-ivory pt-20 pb-10">
          <div className="max-w-[1480px] mx-auto px-8 sm:px-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-ivory/10">
              <div>
                <p className="font-sans font-extrabold text-[13px] tracking-[0.22em] uppercase mb-4">Butterfly Effect</p>
                <p className="text-ivory/50 text-sm leading-relaxed max-w-xs">We build the trust that turns audiences into communities.</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.32em] uppercase text-ivory/40 mb-6">Navigation</p>
                <ul className="space-y-3">
                  {['Work','Mission','Insights','Catalyst','Contact'].map(item => (
                    <li key={item}><a href={`/${item.toLowerCase()}`} className="text-ivory/60 text-sm hover:text-ivory transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.32em] uppercase text-ivory/40 mb-6">Get in touch</p>
                <a href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-ivory/20 text-ivory/70 font-sans font-semibold text-[12px] tracking-[0.22em] uppercase hover:bg-ivory/10 transition-colors">
                  Drop us a DM
                </a>
              </div>
            </div>
            <div className="pt-8 flex flex-col md:flex-row justify-between gap-4">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ivory/30">© {new Date().getFullYear()} Butterfly Effect. All rights reserved.</p>
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ivory/30">Seize the void.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
