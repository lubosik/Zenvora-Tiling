import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Card } from '@/components/ui/Card'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'
import { articleFAQs } from '@/content/resources/faqs'

export const metadata = createMetadata({
  title: 'FAQs - Commercial Tile Procurement',
  description:
    'Frequently asked questions about commercial tile procurement, BOQ preparation, tile specifications, and sourcing for estimators and quantity surveyors.',
  path: '/resources/faqs',
})

// Combine all FAQs from articles
const allFAQs = Object.values(articleFAQs).flat()

export default function FAQsPage() {
  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs('/resources/faqs'))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <FAQSchema faqs={allFAQs} />
      <Section spacing="lg">
        <Container>
          <Stack spacing="xl">
            {/* Header */}
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 tracking-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-[var(--muted)] leading-relaxed max-w-[65ch]">
                Common questions about commercial tile procurement, specifications, and sourcing for
                estimators, quantity surveyors, and procurement managers.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <Stack spacing="md">
                {allFAQs.map((faq, index) => (
                  <Card key={index} padding="lg">
                    <Stack spacing="sm">
                      <h3 className="font-heading text-lg font-bold text-[var(--text)] tracking-tight">{faq.question}</h3>
                      <p className="text-[var(--muted)] leading-relaxed">{faq.answer}</p>
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </div>

            {/* CTA */}
            <div className="bg-neutral-900 rounded-xl p-8 text-center">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Still Have Questions?
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto">
                Can&apos;t find what you&apos;re looking for? Submit your BOQ or contact us for
                personalized assistance with your commercial tile project.
              </p>
              <a
                href="/request-pricing"
                className="inline-block px-6 py-3 bg-[var(--accent)] text-[var(--bg)] rounded-lg font-medium hover:bg-[var(--accentHover)] transition-colors"
              >
                Request Pricing / Send BOQ
              </a>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  )
}

