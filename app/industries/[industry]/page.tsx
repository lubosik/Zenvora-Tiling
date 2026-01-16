import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'
import { getIndustryBySlug, getAllIndustrySlugs } from '@/content/industries/industries'
import { internalLinks } from '@/lib/internal-links'

interface IndustryPageProps {
  params: Promise<{ industry: string }>
}

export async function generateStaticParams() {
  const slugs = getAllIndustrySlugs()
  return slugs.map((slug) => ({
    industry: slug,
  }))
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { industry } = await params
  const industryData = getIndustryBySlug(industry)

  if (!industryData) {
    return createMetadata({
      title: 'Industry Not Found',
      description: 'The requested industry page could not be found.',
      path: `/industries/${industry}`,
    })
  }

  return createMetadata({
    title: `${industryData.name} Tile Solutions - Commercial Tiles`,
    description: industryData.description,
    path: `/industries/${industry}`,
  })
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { industry } = await params
  const industryData = getIndustryBySlug(industry)

  if (!industryData) {
    notFound()
  }

  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs(`/industries/${industry}`))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Section spacing="lg">
        <Container>
          <Stack spacing="xl">
            {/* Header */}
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4 tracking-tight">
                {industryData.name} Tile Solutions
              </h1>
              <p className="text-xl text-[var(--muted)] leading-relaxed max-w-[65ch]">
                {industryData.description}
              </p>
            </div>

            {/* Use Cases */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 tracking-tight">
                Common Applications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {industryData.useCases.map((useCase, index) => (
                  <Card key={index} padding="md">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center text-sm font-semibold mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-neutral-700">{useCase}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Relevant Specifications */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 tracking-tight">
                Key Specifications
              </h2>
              <div className="bg-neutral-50 rounded-xl p-6">
                <ul className="space-y-3">
                  {industryData.relevantSpecs.map((spec, index) => (
                    <li key={index} className="flex items-start gap-3">
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
                      <span className="text-neutral-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Suggested Categories */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 tracking-tight">
                Recommended Tile Categories
              </h2>
              <div className="flex flex-wrap gap-3">
                {industryData.suggestedCategories.map((category) => {
                  // Map category names to slugs
                  const categorySlug = category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')
                  const categoryMap: Record<string, string> = {
                    '3d-series': '3d-series',
                    'abstract-series': 'abstract-series',
                    'wall-tiles': 'wall-tiles',
                    'full-body-tiles': 'full-body-tiles',
                    'vitrified-tiles': 'vitrified-tiles',
                    'large-format-slabs': 'large-format-slabs',
                  }
                  const slug = categoryMap[categorySlug] || categorySlug

                  return (
                    <Link key={category} href={`/products/${slug}`}>
                      <Tag variant="accent" size="md" className="cursor-pointer hover:bg-accent-200 transition-colors">
                        {category}
                      </Tag>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Case Study Snippet */}
            {industryData.caseStudySnippet && (
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 tracking-tight">
                  Project Example
                </h2>
                <Card padding="lg" className="bg-[var(--accent)]/10 border-[var(--accent)]/30">
                  <Stack spacing="sm">
                    <h3 className="font-heading text-xl font-bold text-[var(--text)] tracking-tight">
                      {industryData.caseStudySnippet.title}
                    </h3>
                    <p className="text-[var(--muted)]">{industryData.caseStudySnippet.description}</p>
                    <p className="text-sm text-[var(--muted)]">{industryData.caseStudySnippet.location}</p>
                    <div className="pt-2">
                      <Link
                        href={internalLinks.projects.href}
                        className="text-[var(--accent)] hover:text-[var(--accentHover)] font-medium text-sm"
                      >
                        View More Projects →
                      </Link>
                    </div>
                  </Stack>
                </Card>
              </div>
            )}

            {/* CTA */}
            <div className="bg-neutral-900 rounded-xl p-8 text-center">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Ready to Source Tiles for Your {industryData.name} Project?
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto">
                Submit your BOQ or project requirements, and we&apos;ll provide detailed pricing
                and recommendations tailored to your {industryData.name.toLowerCase()} project.
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

