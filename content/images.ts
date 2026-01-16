/**
 * Image registry for easy asset swapping
 * Replace placeholder paths with actual image paths when assets are available
 */

export const images = {
  // Hero images
  hero: {
    main: '/placeholders/hero-main.jpg',
    dubai: '/placeholders/hero-dubai.jpg',
  },

  // Product category images
  products: {
    '3d-series': '/placeholders/products/3d-series.jpg',
    'abstract-series': '/placeholders/products/abstract-series.jpg',
    'wall-tiles': '/placeholders/products/wall-tiles.jpg',
    'full-body-tiles': '/placeholders/products/full-body-tiles.jpg',
    'vitrified-tiles': '/placeholders/products/vitrified-tiles.jpg',
    'large-format-slabs': '/placeholders/products/large-format-slabs.jpg',
  },

  // Industry images
  industries: {
    hotels: '/placeholders/industries/hotels.jpg',
    offices: '/placeholders/industries/offices.jpg',
    retail: '/placeholders/industries/retail.jpg',
    'food-beverage': '/placeholders/industries/food-beverage.jpg',
    'residential-towers': '/placeholders/industries/residential-towers.jpg',
    hospitals: '/placeholders/industries/hospitals.jpg',
    malls: '/placeholders/industries/malls.jpg',
    airports: '/placeholders/industries/airports.jpg',
  },

  // Project images
  projects: {
    featured: [
      '/placeholders/projects/featured-1.jpg',
      '/placeholders/projects/featured-2.jpg',
      '/placeholders/projects/featured-3.jpg',
      '/placeholders/projects/featured-4.jpg',
    ],
  },

  // General placeholders
  placeholders: {
    tile: '/placeholders/tile-placeholder.jpg',
    project: '/placeholders/project-placeholder.jpg',
  },
} as const

/**
 * Helper to get image path with fallback
 */
export function getImagePath(
  category: keyof typeof images,
  key?: string
): string {
  if (key && category in images) {
    const categoryImages = images[category] as Record<string, string>
    return categoryImages[key] || images.placeholders.tile
  }
  return images.placeholders.tile
}

