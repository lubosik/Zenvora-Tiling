'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Stack } from '@/components/layout/Stack'
import { internalLinks } from '@/lib/internal-links'

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      // Show CTA after scrolling past 50% of viewport
      setIsVisible(scrollPosition > windowHeight * 0.5)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
      <Card padding="lg" className="shadow-2xl max-w-sm">
        <Stack spacing="md">
          <h3 className="font-heading text-lg font-bold text-[var(--text-strong)] tracking-tight">Ready to Get Started?</h3>
          <p className="text-sm text-[var(--text-muted)]">
            Submit your BOQ or project requirements for detailed pricing and recommendations.
          </p>
          <Button href={internalLinks.requestPricing.href} variant="primary" size="md" fullWidth>
            {internalLinks.sendBOQ.label}
          </Button>
        </Stack>
      </Card>
    </div>
  )
}

