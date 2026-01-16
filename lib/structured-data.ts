export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  logo?: string
  contactPoint?: {
    '@type': string
    contactType: string
    email?: string
    telephone?: string
  }
  address?: {
    '@type': string
    addressCountry: string
    addressLocality: string
    addressRegion?: string
  }
  sameAs?: string[]
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export interface BreadcrumbSchema {
  '@context': string
  '@type': string
  itemListElement: Array<{
    '@type': string
    position: number
    name: string
    item: string
  }>
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zenvora Tiling',
    url: 'https://zenvoratiling.com', // Update with actual domain
    logo: 'https://zenvoratiling.com/logo.png', // Update with actual logo
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      // email and telephone to be added when available
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AE',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
    },
    sameAs: [
      // Add social media profiles when available
    ],
  }
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateBreadcrumbs(path: string): BreadcrumbItem[] {
  const segments = path.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: 'https://zenvoratiling.com' },
  ]

  let currentPath = ''
  segments.forEach((segment) => {
    currentPath += `/${segment}`
    const name = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    breadcrumbs.push({
      name,
      url: `https://zenvoratiling.com${currentPath}`,
    })
  })

  return breadcrumbs
}

