import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Grid } from '@/components/layout/Grid'
import { Card } from '@/components/ui/Card'
import { productCategories } from '@/content/products/categories'

export function WhatWeDeliver() {
  return (
    <Section spacing="lg" variant="dark">
      <Container>
        <Stack spacing="lg" align="center">
          <div className="text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] mb-4">
              What We Deliver
            </h2>
            <p className="text-lg sm:text-xl text-[var(--muted)]">
              Premium tile collections curated for high-ticket commercial and premium residential
              projects. Engineered for durability, aesthetics, and performance in demanding
              environments worldwide.
            </p>
          </div>

          <Grid cols={3} gap="lg" className="w-full">
            {productCategories.map((category) => (
              <Card key={category.id} hover padding="lg" className="h-full">
                <Stack spacing="md" className="h-full">
                  {/* Placeholder for category image */}
                  <div className="aspect-video bg-[var(--bg2)] border border-[var(--border)] rounded-lg flex items-center justify-center">
                    <span className="text-sm text-[var(--muted)]">Replace with {category.name} image</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                      {category.name}
                    </h3>
                    <p className="text-[var(--muted)] mb-4">{category.shortDescription}</p>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={`/products/${category.slug}`}
                      className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accentHover)] font-medium group"
                    >
                      {category.ctaText}
                      <svg
                        className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  )
}

