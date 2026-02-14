import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { internalLinks } from '@/lib/internal-links'

export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image - Desktop & Mobile */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <div className="hidden lg:block absolute inset-0">
          <Image
            src="/hero-desktop.jpeg"
            alt="Premium tiles for high-ticket commercial projects"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Mobile Image */}
        <div className="lg:hidden absolute inset-0">
          <Image
            src="/hero-mobile.jpeg"
            alt="Premium tiles for high-ticket commercial projects"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Material Cue Overlay - Tile slab edge/texture on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 lg:w-1/4 z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-l from-[var(--bg)] to-transparent" />
        {/* Subtle tile texture pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }} />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 bg-[var(--bg)]/50" />

      {/* Content - Editorial Layout */}
      <Container className="relative z-20">
        <div className="max-w-2xl py-24 lg:py-32">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--text-strong)] mb-8 leading-[1.1] tracking-tight">
            Premium Porcelain Tiles for Projects That Demand More
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text)] mb-12 leading-relaxed max-w-[70ch]">
            From enquiry to vessel loading in approximately 60 days. Physical samples, quality-checked
            production, and worldwide delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href={internalLinks.requestPricing.href}
              variant="primary"
              size="lg"
              className="font-medium"
            >
              Request Pricing
            </Button>
            <Button
              href={internalLinks.browseProducts.href}
              variant="outline"
              size="lg"
              className="font-medium"
            >
              Browse Collections
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

