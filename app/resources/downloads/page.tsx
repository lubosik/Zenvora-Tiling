import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'
import { internalLinks } from '@/lib/internal-links'

export const metadata = createMetadata({
  title: 'Downloads Library - Catalogs & Specifications',
  description:
    'Download our full commercial tile catalog, product specifications, technical data sheets, and installation guides for your projects.',
  path: '/resources/downloads',
})

const downloads = [
  {
    id: 'catalog-full',
    title: 'Full Commercial Tile Catalog',
    description: 'Complete catalog with all product categories, specifications, and pricing',
    fileType: 'PDF',
    size: '15.2 MB',
    category: 'Catalog',
  },
  {
    id: 'specs-technical',
    title: 'Technical Specifications Guide',
    description: 'Detailed technical specifications for all tile categories',
    fileType: 'PDF',
    size: '3.8 MB',
    category: 'Specifications',
  },
  {
    id: 'installation-guide',
    title: 'Installation Guidelines',
    description: 'Best practices for commercial tile installation',
    fileType: 'PDF',
    size: '2.1 MB',
    category: 'Guides',
  },
]

export default function DownloadsPage() {
  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs('/resources/downloads'))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Section spacing="lg">
        <Container>
          <Stack spacing="lg">
            {/* Header */}
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4 tracking-tight">
                Downloads Library
              </h1>
              <p className="text-xl text-[var(--muted)] max-w-[65ch]">
                Access our complete catalog, technical specifications, and installation guides for
                your commercial tile projects.
              </p>
            </div>

            {/* Downloads Grid */}
            <div>
              <Stack spacing="md">
                {downloads.map((download) => (
                  <Card key={download.id} hover padding="lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-heading text-xl font-bold text-[var(--text)] tracking-tight">
                            {download.title}
                          </h3>
                          <span className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded">
                            {download.category}
                          </span>
                        </div>
                        <p className="text-neutral-600 mb-2">{download.description}</p>
                        <div className="flex items-center gap-4 text-sm text-neutral-500">
                          <span>{download.fileType}</span>
                          <span>•</span>
                          <span>{download.size}</span>
                        </div>
                      </div>
                      <div>
                        <Button
                          href="#"
                          variant="outline"
                          size="md"
                          className="w-full sm:w-auto"
                          disabled
                        >
                          Download (Coming Soon)
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </Stack>
            </div>

            {/* CTA */}
            <div className="bg-[var(--accent)]/10 rounded-xl p-6 text-center">
              <p className="text-[var(--text)] mb-4">
                Need immediate access to product information? Request a custom quote with detailed
                specifications.
              </p>
              <Button href={internalLinks.requestPricing.href} variant="primary" size="lg">
                Request Custom Quote
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  )
}

