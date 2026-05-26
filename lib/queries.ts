export const heroSlidesQuery = `*[_type == "heroSlide"] | order(order asc) { _id, kicker, headline, dek, ctaLabel, ctaHref }`

export const featuredCaseStudiesQuery = `*[_type == "caseStudy" && featured == true] | order(order asc)[0...4] { _id, title, slug, client, "heroImageUrl": heroImage.asset->url, services, order }`

export const allCaseStudiesQuery = `*[_type == "caseStudy"] | order(order asc) { _id, title, slug, client, "heroImageUrl": heroImage.asset->url, heroLabel, heroHeadline, heroSubhead, summary, services, year, featured, order, results[] { stat, label } }`

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] { _id, title, slug, client, "heroImageUrl": heroImage.asset->url, heroLabel, heroHeadline, heroSubhead, summary, services, year, results[] { stat, label }, challenge, challengeHeading, approachHeading, approach { blueprint, blueprintKicker, blueprintTitle, build, buildKicker, buildTitle, broadcast, broadcastKicker, broadcastTitle }, resultsHeading, resultsSummary, testimonial { quote, attribution } }`

export const homeAnnouncementsQuery = `*[_type == "homeAnnouncement" && isActive == true] | order(order asc)[0] { _id, text }`

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) { _id, name, role, bio, photo, "hoverGifUrl": hoverGif.asset->url, order }`

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc) { _id, quote, attribution, order }`

export const articlesQuery = `*[_type == "article"] | order(publishedAt desc) { _id, title, slug, excerpt, coverImage, publishedAt, category }`

export const missionPageQuery = `*[_type == "missionPage"][0] { headline, subheadline, body, manifesto, values[] { title, description } }`

export const catalystConfigQuery = `*[_type == "catalystConfiguration"][0] { headline, subheadline, description, ctaLabel, ctaHref, "mainPhotoUrl": mainPhoto.asset->url, "momentPhotoUrls": momentPhotos[].asset->url }`

export const catalystEventsQuery = `*[_type == "catalystEvent"] | order(date asc) { _id, title, date, location, description, image }`
