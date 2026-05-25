import { client } from '@/lib/sanity'
import { homeAnnouncementsQuery } from '@/lib/queries'

function renderBlock(block: any) {
  const children: any[] = block.children ?? []
  const markDefs: any[] = block.markDefs ?? []

  return children
    .filter((c) => c._type === 'span' && c.text && c.text !== '\n')
    .map((child) => {
      const linkKey = (child.marks as string[])?.find((m) =>
        markDefs.some((d) => d._key === m && d._type === 'link')
      )
      const linkDef = linkKey ? markDefs.find((d) => d._key === linkKey) : null

      let node: React.ReactNode = child.text
      if (child.marks?.includes('strong')) node = <strong style={{ fontWeight: 700 }}>{node}</strong>
      if (child.marks?.includes('em'))     node = <em>{node}</em>

      if (linkDef) {
        return (
          <a key={child._key} href={linkDef.href} target="_blank" rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3, textDecorationColor: 'rgba(255,255,255,0.35)' }}>
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
    (b: any) => b._type === 'block' && b.children?.some((c: any) => c.text?.replace('\n', '').trim())
  )

  if (!blocks.length) return null

  return (
    <section style={{
      background:      '#080808',
      padding:         '48px 24px',
      borderBottom:    '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        maxWidth:  640,
        margin:    '0 auto',
        display:   'flex',
        flexDirection: 'column',
        gap:       12,
      }}>

        {/* Header chip */}
        <div style={{
          display:        'flex',
          alignItems:     'center',
          gap:            8,
          marginBottom:   4,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: '#b94a26', display: 'block', flexShrink: 0,
          }} />
          <span style={{
            fontFamily:    'var(--mono)',
            fontSize:      9,
            fontWeight:    700,
            letterSpacing: '0.42em',
            textTransform: 'uppercase',
            color:         'rgba(255,255,255,0.38)',
          }}>What&apos;s new</span>
        </div>

        {/* Notice cards */}
        {blocks.map((block, i) => (
          <div key={block._key} style={{
            display:        'flex',
            alignItems:     'flex-start',
            gap:            14,
            background:     'rgba(255,255,255,0.04)',
            border:         '1px solid rgba(255,255,255,0.08)',
            borderRadius:   10,
            padding:        '14px 16px',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}>
            {/* Number badge */}
            <span style={{
              flexShrink:    0,
              width:         22,
              height:        22,
              borderRadius:  '50%',
              border:        '1px solid rgba(255,255,255,0.12)',
              display:       'flex',
              alignItems:    'center',
              justifyContent:'center',
              fontFamily:    'var(--mono)',
              fontSize:      9,
              color:         'rgba(255,255,255,0.3)',
              letterSpacing: '0.04em',
              marginTop:     1,
            }}>
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Text */}
            <p style={{
              fontFamily:    'var(--sans)',
              fontSize:      13,
              lineHeight:    1.6,
              color:         'rgba(255,255,255,0.68)',
              margin:        0,
              fontWeight:    400,
            }}>
              {renderBlock(block)}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}
