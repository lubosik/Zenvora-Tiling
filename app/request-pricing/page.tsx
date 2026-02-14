import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Card } from '@/components/ui/Card'
import { RequestPricingForm } from '@/components/forms/RequestPricingForm'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'

export const metadata = createMetadata({
  title: 'Request Pricing',
  description:
    'Share your tile requirements for premium porcelain pricing. We begin design matching within 1–2 business days. Worldwide delivery.',
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
                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text-strong)] mb-4 tracking-tight">
                  Request Pricing
                </h1>
                <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
                  Share your requirements and we&apos;ll begin the design matching process within 1–2 business days.
                </p>
              </div>

              {/* Form */}
              <Card padding="lg">
                <RequestPricingForm />
              </Card>

              {/* Additional Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card padding="md" className="text-center">
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">1–2 days</div>
                  <div className="text-sm text-[var(--muted)]">Initial Response</div>
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
              <div className="bg-[var(--surface-2)] rounded-xl p-6 border border-[var(--border-dark)]">
                <h3 className="font-heading text-lg font-bold text-[var(--text-strong)] mb-3 tracking-tight">
                  What Happens Next?
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
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
                    <span>We match your design from our catalogue or source the closest match</span>
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
                    <span>Share photos and videos for your approval</span>
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
                    <span>Send physical sample (~20×20 cm) if needed</span>
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
                    <span>After your approval, production and quality check, then shipping</span>
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
