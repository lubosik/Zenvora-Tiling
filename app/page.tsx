import { Hero } from '@/components/home/Hero'
import { BuiltFor } from '@/components/home/BuiltFor'
import { CollectionsGallery } from '@/components/home/CollectionsGallery'
import { ProcessTimeline } from '@/components/home/ProcessTimeline'
import { SEOTextBlock } from '@/components/home/SEOTextBlock'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'

export const metadata = createMetadata({
  title: 'Premium Porcelain Tiles for Projects That Demand More',
  description:
    'Premium porcelain tiles for commercial and residential projects. From enquiry to vessel loading in ~60 days. Physical samples, quality-checked production, worldwide delivery. UAE-based support.',
  path: '/',
})

export default function Home() {
  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs('/'))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Hero />
      <BuiltFor />
      <CollectionsGallery />
      <ProcessTimeline />
      <SEOTextBlock />
    </>
  )
}
