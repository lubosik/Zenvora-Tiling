import { MetadataRoute } from 'next'
import { getAllCategorySlugs } from '@/content/products/categories'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zenvoratiling.com'

  const productSlugs = getAllCategorySlugs()
  const productRoutes = productSlugs.map((slug) => `/products/${slug}`)

  const routes = [
    '',
    '/products',
    ...productRoutes,
    '/services',
    '/contact',
    '/locations',
    '/locations/dubai',
    '/locations/abu-dhabi',
    '/locations/sharjah',
    '/locations/riyadh',
    '/locations/doha',
    '/locations/london',
    '/locations/nairobi',
    '/resources',
    '/request-pricing',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/products') ? 0.9 : 0.8,
  }))
}
