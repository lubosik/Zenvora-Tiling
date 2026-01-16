import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Grid } from '@/components/layout/Grid'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { testimonials, proofSnippets } from '@/content/social-proof'
import { internalLinks } from '@/lib/internal-links'

export function SocialProof() {
  return (
    <Section spacing="lg" variant="dark">
      <Container>
        <Stack spacing="xl" align="center">
          {/* Proof Snippets */}
          <div className="w-full">
            <Grid cols={4} gap="lg" className="w-full">
              {proofSnippets.map((snippet) => (
                <div key={snippet.label} className="text-center">
                  <div className="font-heading text-4xl sm:text-5xl font-normal text-[var(--accent)] mb-2 tracking-tight">
                    {snippet.metric}
                  </div>
                  <div className="text-lg font-medium text-[var(--text)] mb-1">
                    {snippet.label}
                  </div>
                  <div className="text-sm text-[var(--muted)]">{snippet.description}</div>
                </div>
              ))}
            </Grid>
          </div>

          {/* Testimonials */}
          <div className="w-full max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text)] mb-6 tracking-tight">
                Trusted by Industry Professionals
              </h2>
              <p className="text-lg text-[var(--muted)] max-w-[60ch] mx-auto">
                See what estimators, quantity surveyors, and procurement managers say about working
                with us.
              </p>
            </div>

            <Grid cols={3} gap="lg" className="w-full">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} hover padding="lg" className="h-full">
                  <Stack spacing="md" className="h-full">
                    {/* Quote */}
                    <div className="flex-1">
                      <svg
                        className="w-8 h-8 text-[var(--accent)] mb-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-[var(--muted)] italic mb-4 leading-relaxed max-w-[50ch]">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author */}
                    <div className="border-t border-[var(--border)] pt-4">
                      <div className="font-medium text-[var(--text)]">{testimonial.author}</div>
                      <div className="text-sm text-[var(--muted)]">
                        {testimonial.role}
                        {testimonial.company && `, ${testimonial.company}`}
                      </div>
                      {testimonial.project && (
                        <div className="text-xs text-[var(--muted)]/70 mt-1">{testimonial.project}</div>
                      )}
                    </div>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <Button href={internalLinks.projects.href} variant="outline" size="lg">
              View Our Projects
            </Button>
          </div>
        </Stack>
      </Container>
    </Section>
  )
}

