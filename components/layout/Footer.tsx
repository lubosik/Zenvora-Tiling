import Link from 'next/link'
import { Container } from './Container'
import { Button } from '@/components/ui/Button'
import { Stack } from './Stack'
import { Grid } from './Grid'

const footerLinks = {
  products: [
    { href: '/products/3d-series', label: '3D Series' },
    { href: '/products/abstract-series', label: 'Abstract Series' },
    { href: '/products/wall-tiles', label: 'Wall Tiles' },
    { href: '/products/full-body-tiles', label: 'Full-Body Tiles' },
    { href: '/products/vitrified-tiles', label: 'Vitrified Tiles' },
    { href: '/products/large-format-slabs', label: 'Large Format Slabs' },
  ],
  industries: [
    { href: '/industries/hotels', label: 'Hotels' },
    { href: '/industries/offices', label: 'Offices' },
    { href: '/industries/retail', label: 'Retail' },
    { href: '/industries/food-beverage', label: 'Food & Beverage' },
  ],
  company: [
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/locations', label: 'Locations' },
    { href: '/resources', label: 'Resources' },
  ],
  support: [
    { href: '/request-pricing', label: 'Request Pricing' },
    { href: '/resources', label: 'Resources' },
    { href: '/resources/faqs', label: 'FAQs' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[var(--bg2)] text-[var(--muted)] border-t border-[var(--border)]">
      <Container>
        <div className="py-12 lg:py-16">
          <Grid cols={4} gap="lg" responsive={false} className="lg:grid-cols-4">
            {/* Contact CTA */}
            <div className="lg:col-span-1">
              <Stack spacing="md">
                <h3 className="font-heading text-lg font-normal text-[var(--text)] tracking-tight">Get Started</h3>
                <p className="text-sm text-[var(--muted)] max-w-[50ch]">
                  Ready to source premium tiles for your high-ticket commercial or residential project?
                </p>
                <Button href="/request-pricing" variant="primary" size="md" className="font-medium">
                  Send Your BOQ
                </Button>
              </Stack>
            </div>

            {/* Products */}
            <div>
              <Stack spacing="sm">
                <h3 className="text-[var(--text)] text-sm font-medium uppercase tracking-wider">
                  Products
                </h3>
                <nav aria-label="Footer products navigation">
                  <Stack spacing="xs">
                    {footerLinks.products.map((link) => (
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

            {/* Industries */}
            <div>
              <Stack spacing="sm">
                <h3 className="text-[var(--text)] text-sm font-medium uppercase tracking-wider">
                  Industries
                </h3>
                <nav aria-label="Footer industries navigation">
                  <Stack spacing="xs">
                    {footerLinks.industries.map((link) => (
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

