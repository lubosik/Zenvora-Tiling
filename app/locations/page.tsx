import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Grid } from '@/components/layout/Grid'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { Button } from '@/components/ui/Button'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'
import { locations, getLocationsByRegion } from '@/content/locations/locations'
import { internalLinks } from '@/lib/internal-links'

export const metadata = createMetadata({
  title: 'Commercial Tile Supply Locations',
  description:
    'Commercial tile supply in Dubai, Abu Dhabi, Sharjah, Riyadh, Doha, London, and Nairobi. Premium tile delivery across the UAE and internationally.',
  path: '/locations',
})

export default function LocationsPage() {
  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs('/locations'))
  const middleEastLocations = getLocationsByRegion('Middle East')
  const otherLocations = locations.filter((loc) => loc.region !== 'Middle East')

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Section spacing="lg">
        <Container>
          <Stack spacing="xl">
            {/* Header */}
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 tracking-tight">
                Locations We Serve
              </h1>
              <p className="text-xl text-[var(--text-muted)] leading-relaxed max-w-[65ch]">
                Worldwide delivery with a focus on Dubai and the UAE as our primary market. Sea
                transit is typically 45–60 days depending on destination, with an additional
                10–15 days from port to your warehouse.
              </p>
            </div>

            {/* Primary Location - Dubai */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 tracking-tight">
                Primary Market
              </h2>
              <Card hover padding="lg" className="border-2 border-[var(--accent)]/30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Tag variant="accent" size="md">Primary Market</Tag>
                      <span className="text-sm text-neutral-600">UAE</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[var(--text)] mb-3 tracking-tight">Dubai</h3>
                    <p className="text-[var(--muted)] mb-4">
                      Our home base and primary market. Deep expertise in Dubai&apos;s construction
                      landscape with local logistics and strong contractor relationships.
                    </p>
                    <Link
                      href="/locations/dubai"
                      className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accentHover)] font-medium"
                    >
                      Learn more about Dubai →
                    </Link>
                  </div>
                  <div className="aspect-video bg-neutral-200 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-neutral-500">Dubai Location Image</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Other UAE Locations */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 tracking-tight">
                Other UAE Locations
              </h2>
              <Grid cols={2} gap="lg">
                {middleEastLocations
                  .filter((loc) => loc.slug !== 'dubai')
                  .map((location) => (
                    <Card key={location.id} hover padding="lg">
                      <Stack spacing="sm">
                        <div className="flex items-center gap-2">
                          <h3 className="font-heading text-xl font-bold text-[var(--text)] tracking-tight">
                            {location.name}
                          </h3>
                          <Tag variant="default" size="sm">{location.country}</Tag>
                        </div>
                        <p className="text-neutral-600 text-sm line-clamp-3">
                          {location.description}
                        </p>
                        <Link
                          href={`/locations/${location.slug}`}
                          className="text-[var(--accent)] hover:text-[var(--accentHover)] font-medium text-sm"
                        >
                          View {location.name} details →
                        </Link>
                      </Stack>
                    </Card>
                  ))}
              </Grid>
            </div>

            {/* International Locations */}
            {otherLocations.length > 0 && (
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 tracking-tight">
                  International Locations
                </h2>
                <Grid cols={3} gap="lg">
                  {otherLocations.map((location) => (
                    <Card key={location.id} hover padding="lg">
                      <Stack spacing="sm">
                        <div className="flex items-center gap-2">
                          <h3 className="font-heading text-xl font-bold text-[var(--text)] tracking-tight">
                            {location.name}
                          </h3>
                          <Tag variant="default" size="sm">{location.country}</Tag>
                        </div>
                        <p className="text-neutral-600 text-sm line-clamp-3">
                          {location.description}
                        </p>
                        <Link
                          href={`/locations/${location.slug}`}
                          className="text-[var(--accent)] hover:text-[var(--accentHover)] font-medium text-sm"
                        >
                          View {location.name} details →
                        </Link>
                      </Stack>
                    </Card>
                  ))}
                </Grid>
              </div>
            )}

            {/* CTA */}
            <div className="bg-neutral-900 rounded-xl p-8 text-center">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Need Tiles for Your Location?
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto">
                Whether you&apos;re in Dubai or another location, we can coordinate tile supply for
                your commercial project. Submit your BOQ for location-specific pricing and logistics
                information.
              </p>
              <Button href={internalLinks.requestPricing.href} variant="secondary" size="lg">
                {internalLinks.requestPricing.label}
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  )
}
