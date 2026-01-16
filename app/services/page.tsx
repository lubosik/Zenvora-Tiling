import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StickyCTA } from '@/components/services/StickyCTA'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'
import { internalLinks } from '@/lib/internal-links'

export const metadata = createMetadata({
  title: 'Commercial Tile Procurement Services',
  description:
    'Comprehensive commercial tile procurement services including BOQ pricing, samples & approvals, lead time management, logistics coordination, and documentation.',
  path: '/services',
})

const services = [
  {
    id: 'boq-pricing',
    title: 'BOQ Pricing',
    description:
      'Get accurate, detailed pricing for your Bill of Quantities within 48 hours. We provide comprehensive quotes with specifications, lead times, and batch information—no surprises.',
    benefits: [
      'Fast turnaround (48-hour response time)',
      'Detailed specifications included',
      'Transparent pricing with no hidden costs',
      'Batch consistency information',
      'Lead time estimates for planning',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: 'samples',
    title: 'Samples & Approvals',
    description:
      'Request physical samples for approval before ordering. We coordinate sample delivery and manage the approval process to ensure you get exactly what you need.',
    benefits: [
      'Physical samples delivered to your office',
      'Fast sample turnaround',
      'Approval process management',
      'Color and finish verification',
      'Batch matching to approved samples',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 'lead-time',
    title: 'Lead Time & Batch Management',
    description:
      'We manage lead times and batch consistency to ensure uniform appearance across your project. No color variations or batch mismatches that delay handover.',
    benefits: [
      'Accurate lead time estimates',
      'Batch consistency management',
      'Production scheduling coordination',
      'Quality control for uniform appearance',
      'Risk reduction for project timelines',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 'logistics',
    title: 'Logistics Coordination',
    description:
      'End-to-end logistics coordination from factory to your project site. We handle customs, shipping, and delivery scheduling to ensure on-time arrival.',
    benefits: [
      'International shipping coordination',
      'Customs clearance support',
      'Delivery scheduling to project timeline',
      'On-site delivery coordination',
      'Damage protection and insurance',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    id: 'submittals',
    title: 'Submittals & Documentation',
    description:
      'Complete documentation package including technical data sheets, installation guidelines, and compliance certificates. Everything you need for project submittals.',
    benefits: [
      'Technical data sheets (TDS)',
      'Material safety data sheets (MSDS)',
      'Installation guidelines',
      'Compliance certificates',
      'Project-specific documentation',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
]

export default function ServicesPage() {
  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs('/services'))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <StickyCTA />
      <Section spacing="lg">
        <Container>
          <Stack spacing="xl">
            {/* Header */}
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text)] mb-6 tracking-tight">
                Commercial Tile Procurement Services
              </h1>
              <p className="text-xl text-[var(--muted)] leading-relaxed mb-4 max-w-[65ch]">
                We don&apos;t just supply tiles—we reduce risk and ensure execution certainty for
                your commercial projects. From BOQ pricing to final delivery, we handle every
                detail.
              </p>
              <p className="text-lg text-[var(--muted)] leading-relaxed max-w-[65ch]">
                Our comprehensive service approach eliminates the headaches of commercial tile
                procurement, giving you confidence in quality, timelines, and budget.
              </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-8">
              {services.map((service, index) => (
                <Card
                  key={service.id}
                  id={service.id}
                  hover
                  padding="lg"
                  className="scroll-mt-24"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Icon */}
                    <div className="lg:col-span-1 flex items-start justify-center lg:justify-start">
                      <div className="text-[var(--accent)]">{service.icon}</div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-11">
                      <Stack spacing="md">
                        <div>
                          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text)] mb-3 tracking-tight">
                            {service.title}
                          </h2>
                          <p className="text-lg text-[var(--muted)] leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h3 className="text-sm font-semibold text-[var(--text)] uppercase tracking-wide mb-3">
                            Key Benefits
                          </h3>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start gap-3">
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
                                <span className="text-[var(--muted)]">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Stack>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Risk Reduction Section */}
            <div className="bg-neutral-900 rounded-xl p-8 lg:p-12 text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Risk Reduction & Execution Certainty
              </h2>
              <p className="text-xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
                Every service we provide is designed to reduce risk and ensure your project stays
                on time and on budget. No surprises, no delays, no quality issues.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">98%</div>
                  <div className="text-[var(--muted)]">On-Time Delivery</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">100%</div>
                  <div className="text-[var(--muted)]">Batch Consistency</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">48hr</div>
                  <div className="text-[var(--muted)]">Quote Response Time</div>
                </div>
              </div>
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
