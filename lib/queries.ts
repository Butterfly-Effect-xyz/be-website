export const heroSlidesQuery = `*[_type == "heroSlide"] | order(order asc) { _id, kicker, headline, dek, ctaLabel, ctaHref }`

export const featuredCaseStudiesQuery = `*[_type == "caseStudy" && featured == true] | order(displayOrder asc)[0...4] { _id, title, slug, client, heroImage { asset-> }, services, displayOrder }`

export const allCaseStudiesQuery = `*[_type == "caseStudy"] | order(displayOrder asc) { _id, title, slug, client, heroImage { asset-> }, heroLabel, heroHeadline, heroSubhead, summary, services, year, featured, displayOrder, results[] { stat, label } }`

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] { _id, title, slug, client, heroImage { asset-> }, heroLabel, heroHeadline, heroSubhead, summary, services, year, results[] { stat, label }, theChallenge, approach { blueprint, build, broadcast }, testimonial { quote, attribution } }`

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) { _id, name, role, photo, order }`

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc) { _id, quote, attribution, order }`

export const articlesQuery = `*[_type == "article"] | order(publishedAt desc) { _id, title, slug, excerpt, coverImage, publishedAt, category }`

export const missionPageQuery = `*[_type == "missionPage"][0] { headline, subheadline, body, manifesto, values[] { title, description } }`

export const catalystConfigQuery = `*[_type == "catalystConfiguration"][0] { headline, subheadline, description, ctaLabel, ctaHref }`

export const catalystEventsQuery = `*[_type == "catalystEvent"] | order(date asc) { _id, title, date, location, description, image }`
