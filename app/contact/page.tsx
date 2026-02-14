import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { ContactForm } from '@/components/forms/ContactForm'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'
import { CONTACT_EMAIL } from '@/lib/web3forms'
import Link from 'next/link'

export const metadata = createMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with Zenvora Tiling. Send a message or email us directly for enquiries, samples, and pricing.',
  path: '/contact',
})

export default function ContactPage() {
  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs('/contact'))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Section spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text-strong)] mb-4 tracking-tight">
                Contact Us
              </h1>
              <p className="text-xl text-[var(--text-muted)]">
                Leave a message and we&apos;ll get back to you, or email us directly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card padding="md" className="text-center">
                <p className="text-sm text-[var(--text-muted)] mb-1">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-[var(--accent)] hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </Card>
              <Card padding="md" className="text-center md:col-span-2">
                <p className="text-sm text-[var(--text-muted)] mb-1">Quick links</p>
                <Link href="/request-pricing" className="text-[var(--accent)] hover:underline font-medium">
                  Request Pricing
                </Link>
                <span className="text-[var(--text-muted)] mx-2">·</span>
                <Link href="/resources/faqs" className="text-[var(--accent)] hover:underline font-medium">
                  FAQs
                </Link>
              </Card>
            </div>

            <Card padding="lg">
              <ContactForm />
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}
