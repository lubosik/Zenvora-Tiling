/**
 * Resources articles metadata
 */

export interface Article {
  slug: string
  title: string
  description: string
  category: 'Guide' | 'Technical' | 'FAQ'
  date: string
  readTime: string
  hasFAQs?: boolean
}

export const articles: Article[] = [
  {
    slug: 'what-is-boq-in-construction',
    title: 'What is a BOQ in Construction?',
    description:
      'Learn what a Bill of Quantities (BOQ) is, why it matters for commercial tile projects, and how to prepare one effectively.',
    category: 'Guide',
    date: '2024-01-15',
    readTime: '5 min',
    hasFAQs: true,
  },
  {
    slug: 'how-to-estimate-tile-quantities-from-drawings',
    title: 'How to Estimate Tile Quantities From Drawings',
    description:
      'A practical guide for estimators and quantity surveyors on calculating tile quantities from architectural drawings and specifications.',
    category: 'Guide',
    date: '2024-01-20',
    readTime: '8 min',
  },
  {
    slug: 'slip-resistance-ratings-explained',
    title: 'Slip Resistance Ratings Explained',
    description:
      'Understanding R9, R10, R11, R12, and R13 slip resistance ratings for commercial tile selection in wet and high-traffic areas.',
    category: 'Technical',
    date: '2024-01-25',
    readTime: '6 min',
    hasFAQs: true,
  },
  {
    slug: 'wall-tiles-vs-floor-tiles-key-differences',
    title: 'Wall Tiles vs Floor Tiles: Key Differences',
    description:
      'Understanding the technical and practical differences between wall tiles and floor tiles for commercial applications.',
    category: 'Technical',
    date: '2024-02-01',
    readTime: '7 min',
  },
  {
    slug: 'understanding-vitrified-vs-ceramic-vs-porcelain',
    title: 'Understanding Vitrified vs Ceramic vs Porcelain',
    description:
      'A comprehensive guide to tile types: vitrified, ceramic, and porcelain tiles, their properties, and when to use each.',
    category: 'Technical',
    date: '2024-02-05',
    readTime: '10 min',
    hasFAQs: true,
  },
  {
    slug: 'how-to-source-tiles-for-commercial-projects',
    title: 'How to Source Tiles for Commercial Projects (Without Headaches)',
    description:
      'Best practices for procurement managers and quantity surveyors on sourcing commercial tiles efficiently and avoiding common pitfalls.',
    category: 'Guide',
    date: '2024-02-10',
    readTime: '12 min',
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return articles.map((article) => article.slug)
}

