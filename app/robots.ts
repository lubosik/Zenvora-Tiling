import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://zenvoratiling.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_dev/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

