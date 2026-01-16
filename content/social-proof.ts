/**
 * Social proof content - testimonials and proof snippets
 * Easy to expand with additional testimonials
 */

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company?: string
  project?: string
  location?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'Their attention to detail and ability to deliver on time made our hotel project seamless. The tile quality exceeded our expectations.',
    author: 'Ahmed Al-Mansoori',
    role: 'Project Manager',
    company: 'Luxury Hotels Group',
    project: '5-Star Hotel, Dubai Marina',
    location: 'Dubai, UAE',
  },
  {
    id: 'testimonial-2',
    quote:
      'As a quantity surveyor, I appreciate their transparent pricing and comprehensive specifications. They made my job easier.',
    author: 'Sarah Johnson',
    role: 'Senior Quantity Surveyor',
    company: 'Commercial Construction Consultants',
    project: 'Office Complex, Business Bay',
    location: 'Dubai, UAE',
  },
  {
    id: 'testimonial-3',
    quote:
      'The sample approval process was smooth, and the batch consistency was excellent. No surprises on delivery day.',
    author: 'Mohammed Hassan',
    role: 'Procurement Manager',
    company: 'Retail Development Group',
    project: 'Shopping Mall, Downtown Dubai',
    location: 'Dubai, UAE',
  },
]

export const proofSnippets = [
  {
    metric: '500+',
    label: 'Commercial Projects',
    description: 'Completed across the UAE',
  },
  {
    metric: '50M+',
    label: 'Square Meters Supplied',
    description: 'Premium tiles delivered',
  },
  {
    metric: '98%',
    label: 'On-Time Delivery',
    description: 'Reliable logistics coordination',
  },
  {
    metric: '15+',
    label: 'Years Experience',
    description: 'Serving Dubai and the region',
  },
]

