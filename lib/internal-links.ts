/**
 * Internal linking helpers with descriptive anchor text
 * Ensures consistent, SEO-friendly internal links throughout the site
 */

export interface InternalLink {
  href: string
  label: string
  description?: string
}

export const internalLinks = {
  // Primary CTAs
  requestPricing: {
    href: '/request-pricing',
    label: 'Request Pricing / Send BOQ',
    description: 'Submit your BOQ for a commercial tile quote',
  },
  sendBOQ: {
    href: '/request-pricing',
    label: 'Send Your BOQ',
    description: 'Upload your Bill of Quantities for pricing',
  },
  browseProducts: {
    href: '/products',
    label: 'Browse Picks',
    description: 'Explore our premium tile collections',
  },

  // Products
  products: {
    href: '/products',
    label: 'Commercial Tiles',
    description: 'View all commercial tile products',
  },
  product3D: {
    href: '/products/3d-series',
    label: '3D Series Tiles',
    description: 'Three-dimensional tile designs',
  },
  productAbstract: {
    href: '/products/abstract-series',
    label: 'Abstract Series Tiles',
    description: 'Abstract pattern tile collections',
  },
  productWall: {
    href: '/products/wall-tiles',
    label: 'Wall Tiles',
    description: 'Premium wall tile options',
  },
  productFullBody: {
    href: '/products/full-body-tiles',
    label: 'Full-Body Tiles',
    description: 'Full-body porcelain tiles',
  },
  productVitrified: {
    href: '/products/vitrified-tiles',
    label: 'Vitrified Tiles',
    description: 'Vitrified tile collections',
  },
  productLargeFormat: {
    href: '/products/large-format-slabs',
    label: 'Large Format Slabs (800x3000mm)',
    description: 'Extra-large format tile slabs',
  },

  // Industries
  industries: {
    href: '/industries',
    label: 'Industries We Serve',
    description: 'Commercial tile solutions by industry',
  },
  industryHotels: {
    href: '/industries/hotels',
    label: 'Hotel Tile Solutions',
    description: 'Tiles for hotel projects',
  },
  industryOffices: {
    href: '/industries/offices',
    label: 'Office Tile Solutions',
    description: 'Tiles for office buildings',
  },
  industryRetail: {
    href: '/industries/retail',
    label: 'Retail Tile Solutions',
    description: 'Tiles for retail spaces',
  },
  industryFandB: {
    href: '/industries/food-beverage',
    label: 'Food & Beverage Tile Solutions',
    description: 'Tiles for F&B establishments',
  },

  // Services
  services: {
    href: '/services',
    label: 'Our Services',
    description: 'Commercial tile procurement services',
  },
  boqPricing: {
    href: '/services#boq-pricing',
    label: 'BOQ Pricing Service',
    description: 'Get pricing for your Bill of Quantities',
  },
  samples: {
    href: '/services#samples',
    label: 'Samples & Approvals',
    description: 'Request tile samples for approval',
  },

  // Projects
  projects: {
    href: '/projects',
    label: 'Our Projects',
    description: 'View completed commercial tile projects',
  },

  // Locations
  locations: {
    href: '/locations',
    label: 'Locations',
    description: 'Areas we serve',
  },
  locationDubai: {
    href: '/locations/dubai',
    label: 'Dubai Commercial Tiles',
    description: 'Tile supply in Dubai',
  },

  // Resources
  resources: {
    href: '/resources',
    label: 'Resources',
    description: 'Tile guides and resources',
  },
  faqs: {
    href: '/resources/faqs',
    label: 'FAQs',
    description: 'Frequently asked questions',
  },
  downloads: {
    href: '/resources/downloads',
    label: 'Downloads Library',
    description: 'Download catalogs and specifications',
  },
  downloadCatalog: {
    href: '/resources/downloads',
    label: 'Download Full Catalog',
    description: 'Download the complete commercial tile catalog',
  },
} as const

/**
 * Helper function to create an internal link with consistent structure
 */
export function createInternalLink(key: keyof typeof internalLinks): InternalLink {
  return internalLinks[key]
}

/**
 * Get all links for a specific category
 */
export function getLinksByCategory(category: 'products' | 'industries' | 'services') {
  return Object.entries(internalLinks).filter(([key]) => key.startsWith(category))
}

