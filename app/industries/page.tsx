import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Grid } from '@/components/layout/Grid'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'
import { industries } from '@/content/industries/industries'
import { internalLinks } from '@/lib/internal-links'

export const metadata = createMetadata({
  title: 'Commercial Tile Solutions by Industry',
  description:
    'Premium tile solutions for hotels, offices, retail, food & beverage, residential towers, hospitals, malls, and airports in Dubai and across the UAE.',
  path: '/industries',
})

export default function IndustriesPage() {
  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs('/industries'))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Section spacing="lg">
        <Container>
          <Stack spacing="lg">
            {/* Header */}
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 tracking-tight">
                Commercial Tile Solutions by Industry
              </h1>
              <p className="text-xl text-[var(--muted)] leading-relaxed max-w-[65ch]">
                Every industry has unique requirements. We provide specialized tile solutions
                tailored to the specific needs of malls, hotels, offices, towers, fit-out projects,
                and premium residential developments worldwide.
              </p>
            </div>

            {/* Industries Grid */}
            <div>
              <Grid cols={3} gap="lg">
                {industries.map((industry) => (
                  <Card key={industry.id} hover padding="lg" className="h-full">
                    <Stack spacing="md" className="h-full">
                      {/* Placeholder for industry image */}
                      <div className="aspect-video bg-neutral-200 rounded-lg flex items-center justify-center">
                        <span className="text-sm text-neutral-500">
                          Replace with {industry.name} image
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-[var(--text)] mb-2 tracking-tight">
                          {industry.name}
                        </h3>
                        <p className="text-[var(--muted)] text-sm mb-4 line-clamp-3">
                          {industry.description}
                        </p>
                      </div>
                      <div className="mt-auto">
                        <Link
                          href={`/industries/${industry.slug}`}
                          className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accentHover)] font-medium group"
                        >
                          View {industry.name} Solutions
                          <svg
                            className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button href={internalLinks.requestPricing.href} variant="primary" size="lg">
                {internalLinks.sendBOQ.label}
              </Button>
              <Button href={internalLinks.products.href} variant="outline" size="lg">
                Browse All Products
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  )
}
