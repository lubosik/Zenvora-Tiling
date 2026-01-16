/**
 * Product categories data model
 */

export interface ProductCategory {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  ctaText: string
  image?: string
}

export const productCategories: ProductCategory[] = [
  {
    id: '3d-series',
    name: '3D Series',
    slug: '3d-series',
    description:
      'Three-dimensional tile designs that add depth and visual interest to commercial spaces.',
    shortDescription: 'Three-dimensional designs for modern commercial spaces',
    ctaText: 'View 3D Series',
    image: '/placeholders/products/3d-series.jpg',
  },
  {
    id: 'abstract-series',
    name: 'Abstract Series',
    slug: 'abstract-series',
    description:
      'Contemporary abstract patterns perfect for hotels, offices, and retail environments.',
    shortDescription: 'Contemporary abstract patterns for premium projects',
    ctaText: 'View Abstract Series',
    image: '/placeholders/products/abstract-series.jpg',
  },
  {
    id: 'wall-tiles',
    name: 'Wall Tiles',
    slug: 'wall-tiles',
    description:
      'Premium wall tiles designed for durability and aesthetic appeal in commercial applications.',
    shortDescription: 'Durable wall tiles for commercial applications',
    ctaText: 'View Wall Tiles',
    image: '/placeholders/products/wall-tiles.jpg',
  },
  {
    id: 'full-body-tiles',
    name: 'Full-Body Tiles',
    slug: 'full-body-tiles',
    description:
      'Full-body porcelain tiles with consistent color and pattern throughout the tile body.',
    shortDescription: 'Full-body porcelain with consistent color throughout',
    ctaText: 'View Full-Body Tiles',
    image: '/placeholders/products/full-body-tiles.jpg',
  },
  {
    id: 'vitrified-tiles',
    name: 'Vitrified Tiles',
    slug: 'vitrified-tiles',
    description:
      'High-strength vitrified tiles with low water absorption, ideal for high-traffic commercial areas.',
    shortDescription: 'High-strength tiles for high-traffic commercial areas',
    ctaText: 'View Vitrified Tiles',
    image: '/placeholders/products/vitrified-tiles.jpg',
  },
  {
    id: 'large-format-slabs',
    name: 'Large Format Slabs',
    slug: 'large-format-slabs',
    description:
      'Extra-large format slabs (800x3000mm) for seamless installations in premium commercial projects.',
    shortDescription: 'Extra-large format (800x3000mm) for seamless installations',
    ctaText: 'View Large Format Slabs',
    image: '/placeholders/products/large-format-slabs.jpg',
  },
]

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((category) => category.slug === slug)
}

/**
 * Get all category slugs
 */
export function getAllCategorySlugs(): string[] {
  return productCategories.map((category) => category.slug)
}

