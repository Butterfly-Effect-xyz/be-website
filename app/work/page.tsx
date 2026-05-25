export const revalidate = 60

import { client, urlFor } from '@/lib/sanity'
import { allCaseStudiesQuery } from '@/lib/queries'
import Link from 'next/link'
import WorkGrid from '@/components/WorkGrid'

const FALLBACK = [
  { _id:'1', heroHeadline:'The Spirit of Comedy', client:'Dutch Barn Vodka', services:['Influencer','Creative','Social','Strategy'], slug:{current:'dutch-barn-vodka-spirit-of-comedy'}, heroImage:null, results:[{stat:'+1,300%',label:'Revenue YoY'},{stat:'+388%',label:'Audience Growth'}] },
  { _id:'2', heroHeadline:'The Crispy Chicken Sandwich', client:"McDonald's", services:['Social','Creative'], slug:{current:'mcdonalds-crispy-chicken'}, heroImage:null, results:[] },
  { _id:'3', heroHeadline:'Top Boy: The Final Series', client:'Netflix', services:['Influencer','Creative'], slug:{current:'netflix-top-boy'}, heroImage:null, results:[] },
  { _id:'4', heroHeadline:"You Don't Know Me... Yet", client:'Bumble', services:['Influencer','Brand','Social'], slug:{current:'bumble'}, heroImage:null, results:[] },
  { _id:'5', heroHeadline:"Yara Shahidi's Day Off", client:'Meta', services:['Influencer','Creative'], slug:{current:'meta-yara-shahidi'}, heroImage:null, results:[] },
  { _id:'6', heroHeadline:'Think It. Make It. Move It.', client:'WeTransfer', services:['Influencer','Brand'], slug:{current:'wetransfer'}, heroImage:null, results:[] },
  { _id:'7', heroHeadline:'March Madness', client:'The Cheesecake Factory', services:['Social','Creative'], slug:{current:'cheesecake-march-madness'}, heroImage:null, results:[] },
  { _id:'8', heroHeadline:'CPQD', client:'Nike', services:['Brand','Influencer'], slug:{current:'nike-cpqd'}, heroImage:null, results:[] },
]

async function getWorks() {
  try { const d = await client.fetch(allCaseStudiesQuery); return d?.length ? d : FALLBACK } catch { return FALLBACK }
}

export default async function WorkPage() {
  const works = await getWorks()
  return (
    <main style={{paddingTop:24}}>
      <section className="container" style={{paddingBottom:48,paddingTop:24}}>
        <span className="t-mono" style={{display:'block',marginBottom:32}}>P O R T F O L I O</span>
        <h1 className="t-display" style={{maxWidth:'14ch'}}>Our <em>work.</em></h1>
        <p className="t-lede" style={{marginTop:32}}>Campaigns, brands, and moments that moved the needle.</p>
      </section>
      <WorkGrid works={works} />
    </main>
  )
}
