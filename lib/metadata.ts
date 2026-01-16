import type { Metadata } from 'next'

const siteConfig = {
  name: 'Zenvora Tiling',
  description:
    'Premium tiles for high-ticket commercial projects worldwide. BOQ-based pricing for malls, hotels, offices, towers, and fit-out projects. UAE-based support with worldwide delivery.',
  url: 'https://zenvoratiling.com', // Update with actual domain
  ogImage: '/og-image.jpg', // To be added
  twitterHandle: '@zenvoratiling', // Update if available
}

export function createMetadata({
  title,
  description,
  path = '',
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  noIndex?: boolean
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`
  const canonical = `${siteConfig.url}${path}`

  return {
    title: fullTitle,
    description,
    icons: {
      icon: '/favicon.png',
      apple: '/favicon.png',
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export const defaultMetadata: Metadata = createMetadata({
  title: 'Premium Tiles for High-Ticket Commercial Projects Worldwide',
  description: siteConfig.description,
  path: '/',
})

