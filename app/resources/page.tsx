import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Grid } from '@/components/layout/Grid'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'
import { articles } from '@/content/resources/articles'
import { internalLinks } from '@/lib/internal-links'

export const metadata = createMetadata({
  title: 'Tile Resources & Guides',
  description:
    'Resources for commercial tile procurement including BOQ guides, tile selection tips, slip resistance ratings, and FAQs for estimators and quantity surveyors.',
  path: '/resources',
})

export default function ResourcesPage() {
  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs('/resources'))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Section spacing="lg">
        <Container>
          <Stack spacing="xl">
            {/* Header */}
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 tracking-tight">
                Resources
              </h1>
              <p className="text-xl text-[var(--muted)] leading-relaxed max-w-[65ch]">
                Guides, technical information, and FAQs to help estimators, quantity surveyors, and
                procurement managers source commercial tiles effectively.
              </p>
            </div>

            {/* Articles Grid */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 tracking-tight">Articles</h2>
              <Grid cols={3} gap="lg">
                {articles.map((article) => (
                  <Card key={article.slug} hover padding="lg" className="h-full">
                    <Stack spacing="md" className="h-full">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Tag variant="accent" size="sm">
                            {article.category}
                          </Tag>
                          <span className="text-xs text-neutral-500">{article.readTime}</span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-[var(--text)] mb-2 tracking-tight">
                          {article.title}
                        </h3>
                        <p className="text-[var(--muted)] text-sm mb-4">{article.description}</p>
                      </div>
                      <div className="mt-auto">
                        <Link
                          href={`/resources/${article.slug}`}
                          className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accentHover)] font-medium text-sm group"
                        >
                          Read Article
                          <svg
                            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card padding="lg" className="bg-neutral-50">
                <Stack spacing="sm">
                  <h3 className="font-heading text-lg font-bold text-[var(--text)] tracking-tight">FAQs</h3>
                  <p className="text-sm text-[var(--muted)]">
                    Find answers to common questions about commercial tile procurement.
                  </p>
                  <Link
                    href="/resources/faqs"
                    className="text-[var(--accent)] hover:text-[var(--accentHover)] font-medium text-sm"
                  >
                    View FAQs →
                  </Link>
                </Stack>
              </Card>
              <Card padding="lg" className="bg-neutral-50">
                <Stack spacing="sm">
                  <h3 className="font-heading text-lg font-bold text-[var(--text)] tracking-tight">Downloads</h3>
                  <p className="text-sm text-[var(--muted)]">
                    Access catalogs, specifications, and technical documentation.
                  </p>
                  <Link
                    href={internalLinks.downloads.href}
                    className="text-[var(--accent)] hover:text-[var(--accentHover)] font-medium text-sm"
                  >
                    View Downloads →
                  </Link>
                </Stack>
              </Card>
              <Card padding="lg" className="bg-neutral-50">
                <Stack spacing="sm">
                  <h3 className="font-heading text-lg font-bold text-[var(--text)] tracking-tight">Get Help</h3>
                  <p className="text-sm text-[var(--muted)]">
                    Need assistance? Submit your BOQ or contact us for support.
                  </p>
                  <Link
                    href={internalLinks.requestPricing.href}
                    className="text-[var(--accent)] hover:text-[var(--accentHover)] font-medium text-sm"
                  >
                    Request Pricing →
                  </Link>
                </Stack>
              </Card>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  )
}
