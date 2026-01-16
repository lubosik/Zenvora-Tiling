import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Card } from '@/components/ui/Card'
import { RequestPricingForm } from '@/components/forms/RequestPricingForm'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'

export const metadata = createMetadata({
  title: 'Request Pricing / Send BOQ',
  description:
    'Submit your Bill of Quantities (BOQ) for premium tile pricing. Get quotes for malls, hotels, offices, towers, fit-out, and premium residential projects worldwide.',
  path: '/request-pricing',
})

export default function RequestPricingPage() {
  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs('/request-pricing'))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Section spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Stack spacing="xl">
              {/* Header */}
              <div className="text-center">
                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4 tracking-tight">
                  Request Pricing / Send BOQ
                </h1>
                <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                  Submit your Bill of Quantities or project requirements, and we&apos;ll provide
                  detailed pricing and recommendations within 48 hours.
                </p>
              </div>

              {/* Form */}
              <Card padding="lg">
                <RequestPricingForm />
              </Card>

              {/* Additional Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card padding="md" className="text-center">
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">48hr</div>
                  <div className="text-sm text-[var(--muted)]">Response Time</div>
                </Card>
                <Card padding="md" className="text-center">
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">100%</div>
                  <div className="text-sm text-[var(--muted)]">Confidential</div>
                </Card>
                <Card padding="md" className="text-center">
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">Free</div>
                  <div className="text-sm text-[var(--muted)]">No Obligation</div>
                </Card>
              </div>

              {/* Trust Indicators */}
              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="font-heading text-lg font-bold text-[var(--text)] mb-3 tracking-tight">
                  What Happens Next?
                </h3>
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  <li className="flex items-start gap-2">
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
                    <span>We review your BOQ and project requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                    <span>Provide detailed pricing with specifications</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                    <span>Include lead times and batch information</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                    <span>Follow up with any questions or clarifications</span>
                  </li>
                </ul>
              </div>
            </Stack>
          </div>
        </Container>
      </Section>
    </>
  )
}
