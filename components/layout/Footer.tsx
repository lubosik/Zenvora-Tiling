import Link from 'next/link'
import { Container } from './Container'
import { Button } from '@/components/ui/Button'
import { Stack } from './Stack'
import { Grid } from './Grid'
import { CONTACT_EMAIL } from '@/lib/web3forms'

const footerLinks = {
  collections: [
    { href: '/products/ceramic-body-floor-tiles', label: 'Ceramic Body Floor Tiles' },
    { href: '/products/double-digital-floor-tiles', label: 'Double Digital Floor Tiles' },
    { href: '/products/full-body-tiles', label: 'Full Body Tiles' },
    { href: '/products/glazed-vitrified-porcelain-floor-tiles', label: 'Glazed Vitrified Porcelain' },
    { href: '/products/large-porcelain-slab-tiles', label: 'Large Porcelain Slab Tiles' },
    { href: '/products/wall-tiles', label: 'Wall Tiles' },
  ],
  company: [
    { href: '/services', label: 'Services' },
    { href: '/locations', label: 'Locations' },
    { href: '/contact', label: 'Contact' },
  ],
  support: [
    { href: '/request-pricing', label: 'Request Pricing' },
    { href: '/contact', label: 'Contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[var(--bg2)] text-[var(--muted)] border-t border-[var(--border)]">
      <Container>
        <div className="py-12 lg:py-16">
          <Grid cols={3} gap="lg" responsive={false} className="lg:grid-cols-3">
            {/* Contact CTA */}
            <div className="lg:col-span-1">
              <Stack spacing="md">
                <h3 className="font-heading text-lg font-normal text-[var(--text)] tracking-tight">Get Started</h3>
                <p className="text-sm text-[var(--muted)] max-w-[50ch]">
                  Ready to source premium tiles for your high-ticket commercial or residential project?
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-[var(--accent)] hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                <Button href="/request-pricing" variant="primary" size="md" className="font-medium">
                  Request Pricing
                </Button>
              </Stack>
            </div>

            {/* Collections */}
            <div>
              <Stack spacing="sm">
                <h3 className="text-[var(--text)] text-sm font-medium uppercase tracking-wider">
                  Collections
                </h3>
                <nav aria-label="Footer collections navigation">
                  <Stack spacing="xs">
                    {footerLinks.collections.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Stack>
                </nav>
              </Stack>
            </div>

            {/* Company & Support */}
            <div>
              <Stack spacing="sm">
                <h3 className="text-[var(--text)] text-sm font-medium uppercase tracking-wider">
                  Company
                </h3>
                <nav aria-label="Footer company navigation">
                  <Stack spacing="xs">
                    {footerLinks.company.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Stack>
                </nav>
                <div className="pt-4">
                  <Stack spacing="xs">
                    {footerLinks.support.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Stack>
                </div>
              </Stack>
            </div>
          </Grid>
        </div>

        {/* Trust Cues & Copyright */}
        <div className="border-t border-[var(--border)] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-[var(--muted)]">
              <p>&copy; {new Date().getFullYear()} Zenvora Tiling. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <span className="text-[var(--muted)]">UAE-Based Support</span>
              <span className="text-[var(--muted)]">Worldwide Delivery</span>
              <span className="text-[var(--muted)]">Premium Quality</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

