import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Grid } from '@/components/layout/Grid'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { internalLinks } from '@/lib/internal-links'

const personas = [
  {
    name: 'Estimator',
    description: 'Get accurate pricing for your BOQ quickly',
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
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
    name: 'Quantity Surveyor',
    description: 'Source premium tiles with full specifications',
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    name: 'Procurement Manager',
    description: 'Streamlined procurement with risk reduction',
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
]

export function WhoWeServe() {
  return (
    <Section spacing="lg" variant="light">
      <Container>
        <Stack spacing="lg" align="center">
          <div className="text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] mb-4">
              Who We Serve
            </h2>
            <p className="text-lg sm:text-xl text-[var(--muted)]">
              We work directly with estimators, quantity surveyors, and procurement managers on
              high-ticket commercial projects worldwide. From malls and hotels to offices, towers,
              and fit-out projects, we deliver premium tile solutions that meet your BOQ
              specifications and project deadlines.
            </p>
          </div>

          <Grid cols={3} gap="lg" className="w-full">
            {personas.map((persona) => (
              <Card key={persona.name} hover padding="lg" className="text-center">
                <Stack spacing="md" align="center">
                  <div className="text-[var(--accent)]">{persona.icon}</div>
                  <h3 className="text-xl font-semibold text-[var(--text)]">{persona.name}</h3>
                  <p className="text-[var(--muted)]">{persona.description}</p>
                </Stack>
              </Card>
            ))}
          </Grid>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button href={internalLinks.requestPricing.href} variant="primary" size="lg">
              {internalLinks.requestPricing.label}
            </Button>
            <Button href={internalLinks.industries.href} variant="outline" size="lg">
              Browse by Industry
            </Button>
          </div>
        </Stack>
      </Container>
    </Section>
  )
}

