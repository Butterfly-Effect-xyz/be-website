import { client } from '@/lib/sanity'
import { homeAnnouncementsQuery } from '@/lib/queries'

// Minimal portable-text renderer covering the marks used in this content
function renderBlock(block: any) {
  const children: any[] = block.children ?? []
  const markDefs: any[] = block.markDefs ?? []

  return children
    .filter((c) => c._type === 'span' && c.text && c.text !== '\n')
    .map((child) => {
      // Resolve a link mark if present
      const linkKey = (child.marks as string[])?.find((m) =>
        markDefs.some((d) => d._key === m && d._type === 'link')
      )
      const linkDef = linkKey ? markDefs.find((d) => d._key === linkKey) : null

      const isBold   = child.marks?.includes('strong')
      const isItalic = child.marks?.includes('em')

      let node: React.ReactNode = child.text
      if (isBold)   node = <strong style={{ fontWeight: 700 }}>{node}</strong>
      if (isItalic) node = <em>{node}</em>

      if (linkDef) {
        return (
          <a
            key={child._key}
            href={linkDef.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color:           'inherit',
              textDecoration:  'underline',
              textUnderlineOffset: 3,
              textDecorationColor: 'rgba(255,255,255,0.3)',
            }}
          >
            {node}
          </a>
        )
      }

      return <span key={child._key}>{node}</span>
    })
}

export default async function WhatsNew() {
  let announcement: any = null
  try { announcement = await client.fetch(homeAnnouncementsQuery) } catch { /* silent */ }

  const blocks: any[] = (announcement?.text ?? []).filter(
    (b: any) =>
      b._type === 'block' &&
      b.children?.some((c: any) => c.text?.replace('\n', '').trim())
  )

  if (!blocks.length) return null

  return (
    <section style={{
      background:   '#0d0d0d',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        {/* Header row */}
        <div style={{
          display:      'flex',
          alignItems:   'center',
          gap:          8,
          padding:      '18px 0',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>
          <span style={{
            width:        6,
            height:       6,
            borderRadius: '50%',
            background:   '#b94a26',
            display:      'block',
            flexShrink:   0,
          }} />
          <span style={{
            fontFamily:    'var(--mono)',
            fontSize:      9,
            fontWeight:    700,
            letterSpacing: '0.42em',
            textTransform: 'uppercase',
            color:         'rgba(255,255,255,0.4)',
          }}>What&apos;s new</span>
        </div>

        {/* One row per block */}
        {blocks.map((block, i) => (
          <div
            key={block._key}
            style={{
              display:      'grid',
              gridTemplateColumns: '44px 1fr',
              gap:          '0 20px',
              padding:      '18px 0',
              borderBottom: i < blocks.length - 1
                ? '1px solid rgba(255,255,255,0.05)'
                : 'none',
              alignItems:   'baseline',
            }}
          >
            <span style={{
              fontFamily:    'var(--mono)',
              fontSize:      10,
              color:         'rgba(255,255,255,0.22)',
              letterSpacing: '0.12em',
            }}>
              {String(i + 1).padStart(2, '0')}
            </span>

            <p style={{
              fontFamily:    'var(--sans)',
              fontSize:      14,
              lineHeight:    1.6,
              color:         'rgba(255,255,255,0.72)',
              margin:        0,
              fontWeight:    400,
              letterSpacing: '0.01em',
            }}>
              {renderBlock(block)}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}
