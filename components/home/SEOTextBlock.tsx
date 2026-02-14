import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { internalLinks } from '@/lib/internal-links'

export function SEOTextBlock() {
  return (
    <Section spacing="lg" variant="dark">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-strong)] mb-8 tracking-tight">
            Premium Tile Supply for Global Commercial Projects
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6 max-w-[70ch] text-[var(--text)]">
              As a leading tile supplier, we serve high-ticket commercial projects worldwide, from
              malls and hotels to offices, towers, and fit-out projects. Our curated selection of{' '}
              <Link
                href={internalLinks.products.href}
                className="text-[var(--accent)] hover:text-[var(--accentHover)] font-medium underline"
              >
                premium tiles
              </Link>{' '}
              spans luxury hospitality, corporate spaces, retail environments, and large-scale
              developments. We welcome premium residential clients and international buyers, with
              UAE-based support and worldwide delivery capabilities.
            </p>
            <p className="text-lg leading-relaxed mb-6 max-w-[70ch] text-[var(--text)]">
              Whether you&apos;re sourcing tiles for a project in{' '}
              <Link
                href={internalLinks.locationDubai.href}
                className="text-[var(--accent)] hover:text-[var(--accentHover)] font-medium underline"
              >
                Dubai
              </Link>{' '}
              or coordinating supply across multiple{' '}
              <Link
                href={internalLinks.locations.href}
                className="text-[var(--accent)] hover:text-[var(--accentHover)] font-medium underline"
              >
                locations
              </Link>
              , we provide end-to-end procurement support from design matching through delivery. Our
              team understands commercial construction timelines, batch consistency, and the value of
              clear process steps, from initial enquiry (around 60 days to vessel loading) through
              quality-checked production and worldwide shipping.
            </p>
            <p className="text-lg leading-relaxed max-w-[70ch] text-[var(--text)]">
              With a focus on quality, reliability, and transparent communication, we&apos;ve become
              the trusted partner for estimators, quantity surveyors, and procurement managers
              working on ambitious commercial and premium residential projects worldwide.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

