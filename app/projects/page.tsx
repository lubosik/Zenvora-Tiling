import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Button } from '@/components/ui/Button'
import { ProjectsGallery } from '@/components/projects/ProjectsGallery'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'
import { internalLinks } from '@/lib/internal-links'

export const metadata = createMetadata({
  title: 'Commercial Tile Projects Portfolio',
  description:
    'View our portfolio of completed commercial tile projects in Dubai and across the UAE. Hotels, offices, retail spaces, and more.',
  path: '/projects',
})

export default function ProjectsPage() {
  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs('/projects'))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Section spacing="lg">
        <Container>
          <Stack spacing="xl">
            {/* Header */}
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 tracking-tight">
                Our Projects
              </h1>
              <p className="text-xl text-[var(--muted)] leading-relaxed max-w-[65ch]">
                Explore our portfolio of completed commercial tile projects across Dubai and the
                UAE. From luxury hotels to corporate offices, see how we deliver premium tile
                solutions.
              </p>
            </div>

            <ProjectsGallery />

            {/* CTA */}
            <div className="text-center pt-8">
              <p className="text-lg text-[var(--muted)] mb-4">
                Ready to start your commercial tile project?
              </p>
              <Button href={internalLinks.requestPricing.href} variant="primary" size="lg">
                {internalLinks.sendBOQ.label}
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  )
}
