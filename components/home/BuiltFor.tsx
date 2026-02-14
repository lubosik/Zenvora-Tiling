import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { internalLinks } from '@/lib/internal-links'

const roles = [
  {
    label: 'Procurement',
    description: 'Streamlined sourcing with risk reduction and execution certainty.',
  },
  {
    label: 'Quantity Surveyors',
    description: 'Accurate BOQ pricing with detailed specifications and lead times.',
  },
  {
    label: 'Designers',
    description: 'Premium material collections curated for high-ticket projects.',
  },
]

export function BuiltFor() {
  return (
    <Section spacing="lg" variant="darkElevated">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-strong)] mb-6 tracking-tight">
              Built for Procurement, QS & Designers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
            {roles.map((role, index) => (
              <div key={index} className="text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold text-[var(--text-strong)] mb-3 tracking-tight">
                  {role.label}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed max-w-[50ch]">
                  {role.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href={internalLinks.requestPricing.href} variant="primary" size="lg" className="font-medium">
              Request Pricing
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

