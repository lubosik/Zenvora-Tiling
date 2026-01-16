/**
 * Industries data model
 */

export interface Industry {
  id: string
  name: string
  slug: string
  description: string
  useCases: string[]
  relevantSpecs: string[]
  suggestedCategories: string[]
  caseStudySnippet?: {
    title: string
    description: string
    location: string
  }
}

export const industries: Industry[] = [
  {
    id: 'hotels',
    name: 'Hotels',
    slug: 'hotels',
    description:
      'Luxury hotels require tiles that combine aesthetic appeal with exceptional durability. From grand lobbies to high-traffic corridors, our premium tile solutions meet the demanding standards of 5-star hospitality.',
    useCases: [
      'Hotel lobbies and reception areas',
      'Guest room bathrooms and wet areas',
      'Restaurant and dining spaces',
      'Spa and wellness facilities',
      'Pool decks and outdoor areas',
      'Corridors and common areas',
    ],
    relevantSpecs: [
      'High slip resistance (R11-R13 for wet areas)',
      'Low maintenance and easy cleaning',
      'Luxury aesthetic with premium finishes',
      'Durability for high foot traffic',
      'Moisture resistance for bathrooms',
    ],
    suggestedCategories: ['3D Series', 'Abstract Series', 'Wall Tiles', 'Vitrified Tiles'],
    caseStudySnippet: {
      title: '5-Star Hotel, Dubai Marina',
      description: 'Premium marble-effect tiles throughout lobby and guest areas',
      location: 'Dubai Marina, UAE',
    },
  },
  {
    id: 'offices',
    name: 'Offices',
    slug: 'offices',
    description:
      'Corporate office environments demand tiles that balance professional aesthetics with practical performance. Our commercial tile solutions are designed for high-traffic areas while maintaining a sophisticated appearance.',
    useCases: [
      'Office lobbies and reception areas',
      'Open-plan workspaces',
      'Meeting rooms and conference facilities',
      'Break rooms and cafeterias',
      'Elevator lobbies',
      'Executive suites',
    ],
    relevantSpecs: [
      'High durability for daily foot traffic',
      'Professional, neutral color palettes',
      'Easy maintenance and cleaning',
      'Acoustic properties where needed',
      'Large format options for seamless appearance',
    ],
    suggestedCategories: ['Vitrified Tiles', 'Large Format Slabs', 'Full-Body Tiles'],
    caseStudySnippet: {
      title: 'Corporate Office Complex, Business Bay',
      description: 'Modern vitrified tiles for high-traffic office spaces',
      location: 'Business Bay, Dubai',
    },
  },
  {
    id: 'retail',
    name: 'Retail',
    slug: 'retail',
    description:
      'Retail spaces need tiles that enhance the shopping experience while withstanding constant customer traffic. Our tile collections offer both visual impact and practical durability for retail environments.',
    useCases: [
      'Shopping malls and retail centers',
      'Individual retail stores',
      'Boutique shops',
      'Showrooms and display areas',
      'Food courts',
      'Retail corridors',
    ],
    relevantSpecs: [
      'High abrasion resistance',
      'Visual appeal to enhance shopping experience',
      'Easy maintenance for high-traffic areas',
      'Slip resistance for safety',
      'Large format options for modern aesthetics',
    ],
    suggestedCategories: ['Large Format Slabs', 'Vitrified Tiles', 'Abstract Series'],
    caseStudySnippet: {
      title: 'Shopping Mall, Downtown Dubai',
      description: 'Large format slabs creating seamless retail spaces',
      location: 'Downtown Dubai, UAE',
    },
  },
  {
    id: 'food-beverage',
    name: 'Food & Beverage',
    slug: 'food-beverage',
    description:
      'F&B establishments require tiles that can handle spills, frequent cleaning, and high humidity while maintaining an inviting atmosphere. Our commercial tiles are specifically selected for food service environments.',
    useCases: [
      'Restaurants and dining areas',
      'Kitchens and food preparation areas',
      'Bars and lounges',
      'Cafes and coffee shops',
      'Food courts',
      'Outdoor dining terraces',
    ],
    relevantSpecs: [
      'High slip resistance (R11 minimum)',
      'Chemical resistance for cleaning agents',
      'Stain resistance',
      'Hygienic, non-porous surfaces',
      'Moisture and humidity resistance',
    ],
    suggestedCategories: ['Vitrified Tiles', 'Full-Body Tiles', 'Wall Tiles'],
    caseStudySnippet: {
      title: 'Restaurant & F&B Space, JBR',
      description: 'Durable tiles designed for food and beverage environments',
      location: 'JBR, Dubai',
    },
  },
  {
    id: 'residential-towers',
    name: 'Residential Towers',
    slug: 'residential-towers',
    description:
      'Residential tower developments require consistent, high-quality tiles across multiple units while meeting budget and timeline constraints. Our bulk supply capabilities ensure uniform quality throughout large-scale projects.',
    useCases: [
      'Residential unit bathrooms',
      'Kitchen areas',
      'Balconies and terraces',
      'Common areas and lobbies',
      'Gym and fitness facilities',
      'Parking areas',
    ],
    relevantSpecs: [
      'Batch consistency for uniform appearance',
      'Cost-effective solutions for bulk projects',
      'Durability for residential use',
      'Moisture resistance',
      'Range of finishes and sizes',
    ],
    suggestedCategories: ['Wall Tiles', 'Vitrified Tiles', 'Full-Body Tiles'],
  },
  {
    id: 'hospitals',
    name: 'Hospitals',
    slug: 'hospitals',
    description:
      'Healthcare facilities demand tiles that meet strict hygiene standards while providing a calming environment. Our commercial tiles are selected for their antimicrobial properties and ease of sanitization.',
    useCases: [
      'Hospital corridors and common areas',
      'Patient rooms and bathrooms',
      'Operating theaters and sterile areas',
      'Reception and waiting areas',
      'Cafeterias and dining areas',
      'Laboratories',
    ],
    relevantSpecs: [
      'Hygienic, non-porous surfaces',
      'Chemical resistance for sanitization',
      'Slip resistance for safety',
      'Easy cleaning and maintenance',
      'Calming, professional aesthetics',
    ],
    suggestedCategories: ['Vitrified Tiles', 'Full-Body Tiles', 'Wall Tiles'],
  },
  {
    id: 'malls',
    name: 'Malls',
    slug: 'malls',
    description:
      'Shopping malls require tiles that can handle millions of visitors while maintaining visual appeal. Our large-format and high-traffic tile solutions are ideal for mall environments.',
    useCases: [
      'Mall corridors and walkways',
      'Atriums and central spaces',
      'Food courts',
      'Retail unit fronts',
      'Parking areas',
      'Restroom facilities',
    ],
    relevantSpecs: [
      'Extremely high durability',
      'Large format for seamless appearance',
      'Easy maintenance for high-traffic',
      'Visual impact for public spaces',
      'Cost-effective for large areas',
    ],
    suggestedCategories: ['Large Format Slabs', 'Vitrified Tiles', 'Abstract Series'],
  },
  {
    id: 'airports',
    name: 'Airports',
    slug: 'airports',
    description:
      'Airport terminals require tiles that can withstand constant international traffic while meeting strict safety and maintenance standards. Our commercial tiles are engineered for these demanding environments.',
    useCases: [
      'Terminal concourses',
      'Check-in areas',
      'Security and immigration areas',
      'Retail and dining zones',
      'Gate areas',
      'Baggage claim areas',
    ],
    relevantSpecs: [
      'Maximum durability for constant traffic',
      'High slip resistance for safety',
      'Easy maintenance and cleaning',
      'Large format for seamless appearance',
      'International quality standards',
    ],
    suggestedCategories: ['Large Format Slabs', 'Vitrified Tiles', 'Full-Body Tiles'],
  },
]

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug)
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((industry) => industry.slug)
}

