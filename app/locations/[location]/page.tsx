import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { Button } from '@/components/ui/Button'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'
import { getLocationBySlug, getAllLocationSlugs } from '@/content/locations/locations'
import { internalLinks } from '@/lib/internal-links'

interface LocationPageProps {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs()
  return slugs.map((slug) => ({
    location: slug,
  }))
}

export async function generateMetadata({ params }: LocationPageProps) {
  const { location } = await params
  const locationData = getLocationBySlug(location)

  if (!locationData) {
    return createMetadata({
      title: 'Location Not Found',
      description: 'The requested location page could not be found.',
      path: `/locations/${location}`,
    })
  }

  return createMetadata({
    title: `Commercial Tile Supply in ${locationData.name} - ${locationData.country}`,
    description: locationData.description,
    path: `/locations/${location}`,
  })
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { location } = await params
  const locationData = getLocationBySlug(location)

  if (!locationData) {
    notFound()
  }

  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs(`/locations/${location}`))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Section spacing="lg">
        <Container>
          <Stack spacing="xl">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Tag variant="default" size="md">
                  {locationData.country}
                </Tag>
                {locationData.region && (
                  <span className="text-sm text-neutral-600">{locationData.region}</span>
                )}
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text-strong)] mb-4 tracking-tight">
                Commercial Tile Supply in {locationData.name}
              </h1>
              <p className="text-xl text-[var(--text)] leading-relaxed max-w-[70ch]">
                {locationData.description}
              </p>
            </div>

            {/* Key Points - Light Section */}
            <Section variant="light" spacing="lg">
              <Container>
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-dark-strong)] mb-6 tracking-tight">
                    Why Choose Us for {locationData.name} Projects
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {locationData.keyPoints.map((point, index) => (
                      <Card key={index} padding="md" className="bg-[var(--surface-light-1)] border-[var(--border-light)]">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center text-sm font-semibold mt-0.5">
                            {index + 1}
                          </div>
                          <p className="text-[var(--text-dark)]">{point}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </Container>
            </Section>

            {/* Industries Served */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-strong)] mb-6 tracking-tight">
                Industries We Serve in {locationData.name}
              </h2>
              <div className="flex flex-wrap gap-3">
                {locationData.industries.map((industry) => {
                  const industrySlug = industry.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')
                  const industryMap: Record<string, string> = {
                    'food-&-beverage': 'food-beverage',
                    'residential-towers': 'residential-towers',
                  }
                  const slug = industryMap[industrySlug] || industrySlug

                  return (
                    <Link key={industry} href={`/industries/${slug}`}>
                      <Tag variant="accent" size="md" className="cursor-pointer hover:bg-accent-200 transition-colors">
                        {industry}
                      </Tag>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Related Projects (if available) */}
            {locationData.relatedProjects && locationData.relatedProjects.length > 0 && (
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-strong)] mb-6 tracking-tight">
                  Recent Projects in {locationData.name}
                </h2>
                <div className="bg-[var(--surface-1)] rounded-xl p-6 border border-[var(--border-dark)]">
                  <p className="text-[var(--text)] mb-4">
                    We&apos;ve completed several commercial tile projects in {locationData.name}.
                    View our{' '}
                    <Link
                      href={internalLinks.projects.href}
                      className="text-accent-600 hover:text-accent-700 font-medium underline"
                    >
                      projects portfolio
                    </Link>{' '}
                    to see examples of our work in this location.
                  </p>
                </div>
              </div>
            )}

            {/* Services Link */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-strong)] mb-6 tracking-tight">
                Our Services for {locationData.name} Projects
              </h2>
              <Card padding="lg" className="bg-[var(--surface-1)] border-[var(--border-dark)]">
                <Stack spacing="md">
                  <p className="text-[var(--text)]">
                    We provide comprehensive commercial tile procurement services for{' '}
                    {locationData.name} projects, including:
                  </p>
                  <ul className="space-y-2 text-[var(--text)]">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>BOQ pricing with location-specific considerations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Logistics coordination for {locationData.name} delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Local expertise and contractor relationships</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href={internalLinks.services.href}
                      className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium"
                    >
                      View all services →
                    </Link>
                  </div>
                </Stack>
              </Card>
            </div>

            {/* CTA */}
            <div className="bg-neutral-900 rounded-xl p-8 text-center">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Ready to Source Tiles for Your {locationData.name} Project?
              </h2>
              <p className="text-[var(--text)] mb-6 max-w-2xl mx-auto">
                Submit your BOQ or project requirements, and we&apos;ll provide detailed pricing
                and logistics information specific to {locationData.name}.
              </p>
              <Button href={internalLinks.requestPricing.href} variant="secondary" size="lg">
                {internalLinks.sendBOQ.label}
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  )
}

