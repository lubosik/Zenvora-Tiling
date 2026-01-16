/**
 * Projects data model
 */

export interface Project {
  id: string
  slug: string
  title: string
  type: string
  location: string
  volume?: string
  tileTypes: string[]
  outcome: string
  description: string
  image: string
  imageAlt: string
  clientConfidential?: boolean
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'project-1',
    slug: 'luxury-hotel-dubai-marina',
    title: 'Luxury Hotel Lobby',
    type: 'Hotel',
    location: 'Dubai Marina, UAE',
    volume: '15,000 sqm',
    tileTypes: ['3D Series', 'Vitrified Tiles', 'Wall Tiles'],
    outcome:
      'Delivered premium marble-effect tiles on schedule, with perfect batch consistency across all areas. Client praised the seamless installation and quality.',
    description:
      'A 5-star luxury hotel in Dubai Marina required premium tile solutions for its grand lobby, guest areas, and restaurants. We coordinated the supply of over 15,000 square meters of premium tiles with consistent batch matching.',
    image: '/placeholders/projects/featured-1.jpg',
    imageAlt: 'Luxury hotel lobby with premium tile installation',
    featured: true,
  },
  {
    id: 'project-2',
    slug: 'corporate-office-business-bay',
    title: 'Corporate Office Complex',
    type: 'Office',
    location: 'Business Bay, Dubai',
    volume: '8,500 sqm',
    tileTypes: ['Vitrified Tiles', 'Large Format Slabs'],
    outcome:
      'Completed delivery ahead of schedule. The large format slabs created a seamless, professional appearance that exceeded client expectations.',
    description:
      'Modern corporate office complex required high-traffic tile solutions for lobbies, corridors, and common areas. Large format slabs were selected for a seamless, professional appearance.',
    image: '/placeholders/projects/featured-2.jpg',
    imageAlt: 'Corporate office complex with modern tile flooring',
    featured: true,
  },
  {
    id: 'project-3',
    slug: 'retail-mall-downtown-dubai',
    title: 'Retail Shopping Mall',
    type: 'Retail',
    location: 'Downtown Dubai, UAE',
    volume: '25,000 sqm',
    tileTypes: ['Large Format Slabs', 'Abstract Series'],
    outcome:
      'Successfully managed bulk supply for entire mall. Consistent quality across all areas with zero batch variations. Project completed on time.',
    description:
      'Major shopping mall development required bulk tile supply for corridors, food courts, and retail spaces. We coordinated the supply of 25,000 square meters with strict batch consistency requirements.',
    image: '/placeholders/projects/featured-3.jpg',
    imageAlt: 'Shopping mall with large format tile installation',
    featured: true,
  },
  {
    id: 'project-4',
    slug: 'restaurant-jbr-dubai',
    title: 'Restaurant & F&B Space',
    type: 'Food & Beverage',
    location: 'JBR, Dubai',
    volume: '2,500 sqm',
    tileTypes: ['Vitrified Tiles', 'Wall Tiles'],
    outcome:
      'Delivered slip-resistant tiles perfect for F&B environment. Client appreciated the fast sample approval process and on-time delivery.',
    description:
      'Upscale restaurant required durable, slip-resistant tiles for dining areas and kitchen spaces. We provided samples quickly and coordinated delivery to match renovation timeline.',
    image: '/placeholders/projects/featured-4.jpg',
    imageAlt: 'Restaurant space with commercial tile flooring',
    featured: true,
  },
  {
    id: 'project-5',
    slug: 'residential-tower-dubai',
    title: 'Residential Tower Development',
    type: 'Residential Towers',
    location: 'Dubai',
    volume: '12,000 sqm',
    tileTypes: ['Wall Tiles', 'Vitrified Tiles', 'Full-Body Tiles'],
    outcome:
      'Managed bulk supply for 200+ units with perfect batch consistency. All units received uniform tiles with no color variations.',
    description:
      'Large residential tower project required consistent tile supply across 200+ units. We ensured batch consistency and coordinated delivery to match construction phases.',
    image: '/placeholders/projects/project-5.jpg',
    imageAlt: 'Residential tower with tile installation',
    clientConfidential: true,
  },
  {
    id: 'project-6',
    slug: 'hospital-facility-dubai',
    title: 'Hospital Facility',
    type: 'Hospitals',
    location: 'Dubai',
    volume: '6,000 sqm',
    tileTypes: ['Vitrified Tiles', 'Full-Body Tiles'],
    outcome:
      'Delivered hygienic, easy-to-clean tiles meeting strict healthcare standards. All documentation provided for compliance requirements.',
    description:
      'Healthcare facility required tiles meeting strict hygiene and safety standards. We provided technical documentation and ensured all tiles met healthcare compliance requirements.',
    image: '/placeholders/projects/project-6.jpg',
    imageAlt: 'Hospital facility with commercial tile flooring',
    clientConfidential: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectsByType(type: string): Project[] {
  return projects.filter((project) => project.type === type)
}

export function getProjectsByLocation(location: string): Project[] {
  return projects.filter((project) => project.location.includes(location))
}

export function getAllProjectTypes(): string[] {
  return Array.from(new Set(projects.map((project) => project.type)))
}

export function getAllProjectLocations(): string[] {
  return Array.from(new Set(projects.map((project) => project.location)))
}

