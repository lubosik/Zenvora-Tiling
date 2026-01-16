import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { internalLinks } from '@/lib/internal-links'

const steps = [
  {
    step: 1,
    title: 'Send Your BOQ',
    description: 'Submit your Bill of Quantities or project drawings for pricing',
    link: internalLinks.requestPricing.href,
  },
  {
    step: 2,
    title: 'Receive Quote',
    description: 'Get detailed pricing with specifications and lead times',
    link: internalLinks.services.href,
  },
  {
    step: 3,
    title: 'Approval Samples',
    description: 'Request physical samples for approval before ordering',
    link: internalLinks.services.href + '#samples',
  },
  {
    step: 4,
    title: 'Place Order',
    description: 'Confirm order with batch management and quality assurance',
    link: internalLinks.requestPricing.href,
  },
  {
    step: 5,
    title: 'Delivery & Handover',
    description: 'Coordinated logistics and on-time delivery to your project site',
    link: internalLinks.services.href + '#logistics',
  },
]

export function ProcessTimeline() {
  return (
    <Section spacing="lg" variant="darkElevated">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-strong)] mb-6 tracking-tight">
              The Process
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-[70ch] mx-auto">
              From BOQ submission to project handover, streamlined procurement with clear communication.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-[var(--border-dark)]" />

            {/* Steps */}
            <div className="grid grid-cols-5 gap-8 relative">
              {steps.map((item, index) => (
                <div key={item.step} className="relative">
                  {/* Dot */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--surface-2)]" />
                  </div>

                  {/* Content */}
                  <div className="pt-12 text-center">
                    <div className="text-xs text-[var(--accent)] font-medium mb-2 tracking-wider uppercase">
                      Step {item.step}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[var(--text-strong)] mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-12">
            {steps.map((item, index) => (
              <div key={item.step} className="relative pl-8">
                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-3 top-8 bottom-0 w-px bg-[var(--border-dark)]" />
                )}

                {/* Dot */}
                <div className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                </div>

                {/* Content */}
                <div>
                  <div className="text-xs text-[var(--accent)] font-medium mb-2 tracking-wider uppercase">
                    Step {item.step}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[var(--text-strong)] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

