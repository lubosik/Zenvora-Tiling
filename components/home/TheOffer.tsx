import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Button } from '@/components/ui/Button'
import { internalLinks } from '@/lib/internal-links'

const timelineSteps = [
  {
    step: 1,
    title: 'Send Your BOQ',
    description: 'Submit your Bill of Quantities or project drawings for pricing',
    link: internalLinks.requestPricing.href,
    linkText: 'Send BOQ',
  },
  {
    step: 2,
    title: 'Receive Quote',
    description: 'Get detailed pricing with specifications and lead times',
    link: internalLinks.services.href,
    linkText: 'View Services',
  },
  {
    step: 3,
    title: 'Approval Samples',
    description: 'Request physical samples for approval before ordering',
    link: internalLinks.services.href + '#samples',
    linkText: 'Request Samples',
  },
  {
    step: 4,
    title: 'Place Order',
    description: 'Confirm order with batch management and quality assurance',
    link: internalLinks.requestPricing.href,
    linkText: 'Place Order',
  },
  {
    step: 5,
    title: 'Delivery & Handover',
    description: 'Coordinated logistics and on-time delivery to your project site',
    link: internalLinks.services.href + '#logistics',
    linkText: 'Learn More',
  },
]

export function TheOffer() {
  return (
    <Section spacing="lg" variant="light">
      <Container>
        <Stack spacing="lg" align="center">
          <div className="text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] mb-4">
              The Offer
            </h2>
            <p className="text-lg sm:text-xl text-[var(--muted)]">
              From BOQ submission to project handover, we streamline the entire procurement
              process with clear communication, quality assurance, and reliable execution.
            </p>
          </div>

          {/* Timeline */}
          <div className="w-full max-w-5xl">
            <div className="relative">
              {/* Timeline line - hidden on mobile, visible on desktop */}
              <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-[var(--border)]" />

              {/* Timeline steps */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
                {timelineSteps.map((item, index) => (
                  <div
                    key={item.step}
                    className="relative"
                    role="listitem"
                    aria-label={`Step ${item.step}: ${item.title}`}
                  >
                    {/* Step number circle */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-[var(--accent)] text-[var(--bg)] font-bold text-xl shadow-lg">
                        {item.step}
                      </div>
                      {/* Connector line on mobile */}
                      {index < timelineSteps.length - 1 && (
                        <div className="lg:hidden absolute top-12 left-1/2 w-0.5 h-8 bg-[var(--border)] transform -translate-x-1/2" />
                      )}
                    </div>

                    {/* Step content */}
                    <div className="text-center lg:text-left">
                      <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[var(--muted)] mb-4">{item.description}</p>
                      <Link
                        href={item.link}
                        className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accentHover)] font-medium text-sm group"
                      >
                        {item.linkText}
                        <svg
                          className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button href={internalLinks.requestPricing.href} variant="primary" size="lg">
              {internalLinks.requestPricing.label}
            </Button>
            <Button href={internalLinks.services.href} variant="outline" size="lg">
              View All Services
            </Button>
          </div>
        </Stack>
      </Container>
    </Section>
  )
}

