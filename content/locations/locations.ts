/**
 * Locations data model
 */

export interface Location {
  id: string
  name: string
  slug: string
  country: string
  region?: string
  description: string
  keyPoints: string[]
  industries: string[]
  relatedProjects?: string[]
}

export const locations: Location[] = [
  {
    id: 'dubai',
    name: 'Dubai',
    slug: 'dubai',
    country: 'UAE',
    region: 'Middle East',
    description:
      'Dubai is our primary market and home base. We have deep expertise in Dubai\'s construction landscape, understanding local regulations, project timelines, and the specific requirements of Dubai\'s ambitious commercial developments.',
    keyPoints: [
      'Primary market with extensive local expertise',
      'Fast delivery times with local logistics network',
      'Understanding of Dubai construction regulations',
      'Strong relationships with local contractors and developers',
      'Experience with Dubai\'s luxury hospitality and commercial sectors',
    ],
    industries: ['Hotels', 'Offices', 'Retail', 'Food & Beverage', 'Residential Towers', 'Malls'],
    relatedProjects: ['luxury-hotel-dubai-marina', 'corporate-office-business-bay', 'retail-mall-downtown-dubai'],
  },
  {
    id: 'abu-dhabi',
    name: 'Abu Dhabi',
    slug: 'abu-dhabi',
    country: 'UAE',
    region: 'Middle East',
    description:
      'We serve commercial projects across Abu Dhabi, providing premium tile solutions for the capital\'s growing commercial and hospitality sectors.',
    keyPoints: [
      'Serving Abu Dhabi commercial projects',
      'Coordination with Abu Dhabi-based contractors',
      'Understanding of local project requirements',
    ],
    industries: ['Hotels', 'Offices', 'Retail'],
  },
  {
    id: 'sharjah',
    name: 'Sharjah',
    slug: 'sharjah',
    country: 'UAE',
    region: 'Middle East',
    description:
      'Commercial tile supply for Sharjah\'s developing commercial and retail sectors, with focus on cost-effective solutions for mid-scale projects.',
    keyPoints: [
      'Cost-effective tile solutions',
      'Mid-scale commercial projects',
      'Retail and commercial focus',
    ],
    industries: ['Retail', 'Offices'],
  },
  {
    id: 'riyadh',
    name: 'Riyadh',
    slug: 'riyadh',
    country: 'Saudi Arabia',
    region: 'Middle East',
    description:
      'Serving commercial projects in Riyadh, Saudi Arabia\'s capital, with expertise in large-scale developments and government projects.',
    keyPoints: [
      'Large-scale commercial developments',
      'Government and institutional projects',
      'Cross-border logistics coordination',
    ],
    industries: ['Offices', 'Hospitals', 'Malls'],
  },
  {
    id: 'doha',
    name: 'Doha',
    slug: 'doha',
    country: 'Qatar',
    region: 'Middle East',
    description:
      'Commercial tile supply for Doha\'s hospitality and commercial sectors, with experience in luxury hotel and office projects.',
    keyPoints: [
      'Luxury hospitality focus',
      'Commercial office projects',
      'International shipping coordination',
    ],
    industries: ['Hotels', 'Offices'],
  },
  {
    id: 'london',
    name: 'London',
    slug: 'london',
    country: 'United Kingdom',
    region: 'Europe',
    description:
      'Serving select commercial projects in London, providing premium tile solutions for high-end hospitality and retail spaces.',
    keyPoints: [
      'High-end hospitality projects',
      'Premium retail spaces',
      'International logistics expertise',
    ],
    industries: ['Hotels', 'Retail'],
  },
  {
    id: 'nairobi',
    name: 'Nairobi',
    slug: 'nairobi',
    country: 'Kenya',
    region: 'Africa',
    description:
      'Commercial tile supply for Nairobi\'s growing commercial sector, with focus on office buildings and retail developments.',
    keyPoints: [
      'Growing commercial market',
      'Office and retail focus',
      'International shipping and logistics',
    ],
    industries: ['Offices', 'Retail'],
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug)
}

export function getAllLocationSlugs(): string[] {
  return locations.map((location) => location.slug)
}

export function getLocationsByRegion(region: string): Location[] {
  return locations.filter((location) => location.region === region)
}

