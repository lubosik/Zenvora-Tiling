import { Hero } from '@/components/home/Hero'
import { BuiltFor } from '@/components/home/BuiltFor'
import { CollectionsGallery } from '@/components/home/CollectionsGallery'
import { ProcessTimeline } from '@/components/home/ProcessTimeline'
import { ProjectsLookbook } from '@/components/home/ProjectsLookbook'
import { SEOTextBlock } from '@/components/home/SEOTextBlock'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'

export const metadata = createMetadata({
  title: 'Premium Tiles for High-Ticket Commercial Projects Worldwide',
  description:
    'Premium tiles for high-ticket commercial projects worldwide. BOQ-based pricing for malls, hotels, offices, towers, and fit-out projects. UAE-based support with worldwide delivery.',
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
      <ProjectsLookbook />
      <SEOTextBlock />
    </>
  )
}
