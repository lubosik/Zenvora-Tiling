/**
 * Featured projects for homepage carousel
 */

export interface FeaturedProject {
  id: string
  title: string
  description: string
  location: string
  type: string
  image: string
  imageAlt: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'project-1',
    title: 'Luxury Hotel Lobby',
    description: 'Premium marble-effect tiles in a 5-star hotel lobby',
    location: 'Dubai Marina, UAE',
    type: 'Hotel',
    image: '/placeholders/projects/featured-1.jpg',
    imageAlt: 'Luxury hotel lobby with premium tile installation',
  },
  {
    id: 'project-2',
    title: 'Corporate Office Complex',
    description: 'Modern vitrified tiles for high-traffic office spaces',
    location: 'Business Bay, Dubai',
    type: 'Office',
    image: '/placeholders/projects/featured-2.jpg',
    imageAlt: 'Corporate office complex with modern tile flooring',
  },
  {
    id: 'project-3',
    title: 'Retail Shopping Mall',
    description: 'Large format slabs creating seamless retail spaces',
    location: 'Downtown Dubai, UAE',
    type: 'Retail',
    image: '/placeholders/projects/featured-3.jpg',
    imageAlt: 'Shopping mall with large format tile installation',
  },
  {
    id: 'project-4',
    title: 'Restaurant & F&B Space',
    description: 'Durable tiles designed for food and beverage environments',
    location: 'JBR, Dubai',
    type: 'Food & Beverage',
    image: '/placeholders/projects/featured-4.jpg',
    imageAlt: 'Restaurant space with commercial tile flooring',
  },
]

