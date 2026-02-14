/**
 * Internal linking helpers with descriptive anchor text
 * SEO-friendly internal links. No industries (removed from site).
 */

export interface InternalLink {
  href: string
  label: string
  description?: string
}

export const internalLinks = {
  requestPricing: {
    href: '/request-pricing',
    label: 'Request Pricing',
    description: 'Submit your requirements for tile pricing',
  },
  browseProducts: {
    href: '/products',
    label: 'Browse Collections',
    description: 'Explore our premium tile collections',
  },

  products: {
    href: '/products',
    label: 'Collections',
    description: 'View all tile collections',
  },
  productCeramicBody: {
    href: '/products/ceramic-body-floor-tiles',
    label: 'Ceramic Body Floor Tiles',
    description: 'Ceramic body floor tile collection',
  },
  productDoubleDigital: {
    href: '/products/double-digital-floor-tiles',
    label: 'Double Digital Floor Tiles',
    description: 'Double digital print floor tiles',
  },
  productFullBody: {
    href: '/products/full-body-tiles',
    label: 'Full Body Tiles',
    description: 'Full-body porcelain tiles',
  },
  productGlazedVitrified: {
    href: '/products/glazed-vitrified-porcelain-floor-tiles',
    label: 'Glazed Vitrified Porcelain Floor Tiles',
    description: 'Glazed vitrified porcelain collection',
  },
  productLargeSlab: {
    href: '/products/large-porcelain-slab-tiles',
    label: 'Large Porcelain Slab Tiles',
    description: 'Large-format porcelain slabs',
  },
  productWall: {
    href: '/products/wall-tiles',
    label: 'Wall Tiles',
    description: 'Wall tile collection',
  },

  services: {
    href: '/services',
    label: 'Our Services',
    description: 'Tile procurement services',
  },
  boqPricing: {
    href: '/services#boq-pricing',
    label: 'Request Pricing',
    description: 'Get pricing for your project',
  },
  samples: {
    href: '/services#samples',
    label: 'Samples & Approvals',
    description: 'Request tile samples',
  },

  contact: {
    href: '/contact',
    label: 'Contact Us',
    description: 'Send a message or email us',
  },
  locations: {
    href: '/locations',
    label: 'Locations',
    description: 'Areas we serve',
  },
  locationDubai: {
    href: '/locations/dubai',
    label: 'Dubai',
    description: 'Tile supply in Dubai',
  },

  resources: {
    href: '/resources',
    label: 'Resources',
    description: 'Guides and resources',
  },
  faqs: {
    href: '/resources/faqs',
    label: 'FAQs',
    description: 'Frequently asked questions',
  },
  downloads: {
    href: '/resources/downloads',
    label: 'Downloads Library',
    description: 'Catalogs and specifications',
  },
  downloadCatalog: {
    href: '/resources/downloads',
    label: 'Download Full Catalog',
    description: 'Download the complete catalog',
  },
} as const

export function createInternalLink(key: keyof typeof internalLinks): InternalLink {
  return internalLinks[key]
}

export function getLinksByCategory(category: 'products' | 'services') {
  return Object.entries(internalLinks).filter(([key]) => key.startsWith(category))
}
