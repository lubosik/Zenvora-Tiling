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
import { productCategories } from '@/content/products/categories'
import { internalLinks } from '@/lib/internal-links'

export const metadata = createMetadata({
  title: 'Commercial Tiles - Premium Tile Collections',
  description:
    'Browse our premium commercial tile collections including 3D Series, Abstract Series, Wall Tiles, Full-Body Tiles, Vitrified Tiles, and Large Format Slabs.',
  path: '/products',
})

export default function ProductsPage() {
  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs('/products'))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Section spacing="lg">
        <Container>
          <Stack spacing="lg">
            {/* Header */}
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 tracking-tight">
                Commercial Picks vs Catalog Dump
              </h1>
              <p className="text-xl text-[var(--muted)] leading-relaxed mb-4 max-w-[65ch]">
                We don&apos;t overwhelm you with thousands of options. Instead, we curate premium
                tile collections that have proven performance in high-ticket commercial and premium
                residential projects worldwide.
              </p>
              <p className="text-lg text-[var(--muted)] leading-relaxed max-w-[65ch]">
                Every tile in our selection meets strict criteria for durability, slip resistance,
                and aesthetic appeal in commercial environments. No catalog dumps—just
                commercial-grade tiles that work.
              </p>
            </div>

            {/* Category Grid */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text)] mb-8 tracking-tight">
                Browse Tiles by Category
              </h2>
              <Grid cols={3} gap="lg">
                {productCategories.map((category) => (
                  <Card key={category.id} hover padding="lg" className="h-full">
                    <Stack spacing="md" className="h-full">
                      {/* Placeholder for category image */}
                      <div className="aspect-video bg-neutral-200 rounded-lg flex items-center justify-center">
                        <span className="text-sm text-neutral-500">
                          Replace with {category.name} image
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-[var(--text)] mb-2 tracking-tight">
                          {category.name}
                        </h3>
                        <p className="text-[var(--muted)] mb-4">{category.shortDescription}</p>
                      </div>
                      <div className="mt-auto">
                        <Link
                          href={`/products/${category.slug}`}
                          className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accentHover)] font-medium group"
                        >
                          View {category.name}
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button href={internalLinks.downloads.href} variant="primary" size="lg">
                Download Full Catalog
              </Button>
              <Button href={internalLinks.requestPricing.href} variant="outline" size="lg">
                Request Custom Quote
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  )
}
