import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://commercialtiling.com' // Update with actual domain

  const routes = [
    '',
    '/products',
    '/products/3d-series',
    '/products/abstract-series',
    '/products/wall-tiles',
    '/products/full-body-tiles',
    '/products/vitrified-tiles',
    '/products/large-format-slabs',
    '/industries',
    '/industries/hotels',
    '/industries/offices',
    '/industries/retail',
    '/industries/food-beverage',
    '/industries/residential-towers',
    '/industries/hospitals',
    '/industries/malls',
    '/industries/airports',
    '/services',
    '/projects',
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
    priority: route === '' ? 1.0 : route.startsWith('/products') || route.startsWith('/industries') ? 0.9 : 0.8,
  }))
}

