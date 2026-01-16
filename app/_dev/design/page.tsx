import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Grid } from '@/components/layout/Grid'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'
import { Card } from '@/components/ui/Card'

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Section spacing="lg" background="neutral">
        <Container>
          <Stack spacing="xl">
            <div>
              <h1 className="text-5xl font-bold text-neutral-900 mb-4">
                Design System
              </h1>
              <p className="text-xl text-neutral-600">
                Layout primitives and UI components for the luxury commercial tile supplier website.
              </p>
            </div>

            {/* Container Examples */}
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Container</h2>
              <div className="space-y-4">
                <Container className="bg-white p-4 border border-neutral-200 rounded">
                  <p>Default container (max-w-container: 1280px)</p>
                </Container>
                <Container wide className="bg-white p-4 border border-neutral-200 rounded">
                  <p>Wide container (max-w-container-wide: 1440px)</p>
                </Container>
                <Container narrow className="bg-white p-4 border border-neutral-200 rounded">
                  <p>Narrow container (max-w-container-narrow: 1024px)</p>
                </Container>
              </div>
            </div>

            {/* Section Examples */}
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Section</h2>
              <div className="space-y-4">
                <Section spacing="sm" background="default" className="border border-neutral-200 rounded">
                  <Container>
                    <p>Section with sm spacing, default background</p>
                  </Container>
                </Section>
                <Section spacing="md" background="neutral" className="border border-neutral-200 rounded">
                  <Container>
                    <p>Section with md spacing, neutral background</p>
                  </Container>
                </Section>
                <Section spacing="lg" background="accent" className="border border-neutral-200 rounded">
                  <Container>
                    <p>Section with lg spacing, accent background</p>
                  </Container>
                </Section>
              </div>
            </div>

            {/* Stack Examples */}
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Stack</h2>
              <Grid cols={3} gap="md">
                <Stack spacing="sm" className="bg-white p-4 border border-neutral-200 rounded">
                  <div className="h-12 bg-neutral-200 rounded"></div>
                  <div className="h-12 bg-neutral-200 rounded"></div>
                  <div className="h-12 bg-neutral-200 rounded"></div>
                </Stack>
                <Stack spacing="md" className="bg-white p-4 border border-neutral-200 rounded">
                  <div className="h-12 bg-neutral-200 rounded"></div>
                  <div className="h-12 bg-neutral-200 rounded"></div>
                  <div className="h-12 bg-neutral-200 rounded"></div>
                </Stack>
                <Stack spacing="lg" className="bg-white p-4 border border-neutral-200 rounded">
                  <div className="h-12 bg-neutral-200 rounded"></div>
                  <div className="h-12 bg-neutral-200 rounded"></div>
                  <div className="h-12 bg-neutral-200 rounded"></div>
                </Stack>
              </Grid>
            </div>

            {/* Grid Examples */}
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Grid</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-4">2 columns</h3>
                  <Grid cols={2} gap="md">
                    {[1, 2].map((i) => (
                      <div key={i} className="h-24 bg-neutral-200 rounded"></div>
                    ))}
                  </Grid>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">3 columns</h3>
                  <Grid cols={3} gap="md">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-24 bg-neutral-200 rounded"></div>
                    ))}
                  </Grid>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">6 columns</h3>
                  <Grid cols={6} gap="sm">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="h-16 bg-neutral-200 rounded"></div>
                    ))}
                  </Grid>
                </div>
              </div>
            </div>

            {/* Button Examples */}
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Button</h2>
              <Stack spacing="md">
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="sm">Primary Small</Button>
                  <Button variant="primary" size="md">Primary Medium</Button>
                  <Button variant="primary" size="lg">Primary Large</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
                <Button variant="primary" fullWidth>Full Width Button</Button>
              </Stack>
            </div>

            {/* Tag Examples */}
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Tag</h2>
              <div className="flex flex-wrap gap-4">
                <Tag variant="default" size="sm">Default Small</Tag>
                <Tag variant="default" size="md">Default Medium</Tag>
                <Tag variant="accent">Accent</Tag>
                <Tag variant="neutral">Neutral</Tag>
              </div>
            </div>

            {/* Card Examples */}
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Card</h2>
              <Grid cols={3} gap="md">
                <Card padding="sm" hover>
                  <h3 className="font-semibold mb-2">Card with sm padding</h3>
                  <p className="text-sm text-neutral-600">Hover enabled</p>
                </Card>
                <Card padding="md" hover>
                  <h3 className="font-semibold mb-2">Card with md padding</h3>
                  <p className="text-sm text-neutral-600">Hover enabled</p>
                </Card>
                <Card padding="lg" hover>
                  <h3 className="font-semibold mb-2">Card with lg padding</h3>
                  <p className="text-sm text-neutral-600">Hover enabled</p>
                </Card>
              </Grid>
            </div>

            {/* Typography Scale */}
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Typography Scale</h2>
              <Stack spacing="md" className="bg-white p-6 border border-neutral-200 rounded">
                <div className="text-xs">Text XS - 0.75rem</div>
                <div className="text-sm">Text SM - 0.875rem</div>
                <div className="text-base">Text Base - 1rem</div>
                <div className="text-lg">Text LG - 1.125rem</div>
                <div className="text-xl">Text XL - 1.25rem</div>
                <div className="text-2xl">Text 2XL - 1.5rem</div>
                <div className="text-3xl">Text 3XL - 1.875rem</div>
                <div className="text-4xl">Text 4XL - 2.25rem</div>
                <div className="text-5xl">Text 5XL - 3rem</div>
                <div className="text-6xl">Text 6XL - 3.75rem</div>
              </Stack>
            </div>

            {/* Color Palette */}
            <div>
              <h2 className="text-3xl font-semibold text-neutral-900 mb-6">Color Palette</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-4">Neutral Colors</h3>
                  <Grid cols={6} gap="sm">
                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                      <div key={shade} className="text-center">
                        <div className={`h-16 bg-neutral-${shade} rounded mb-2 border border-neutral-200`}></div>
                        <div className="text-xs text-neutral-600">{shade}</div>
                      </div>
                    ))}
                  </Grid>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">Accent Colors</h3>
                  <Grid cols={6} gap="sm">
                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                      <div key={shade} className="text-center">
                        <div className={`h-16 bg-accent-${shade} rounded mb-2 border border-neutral-200`}></div>
                        <div className="text-xs text-neutral-600">{shade}</div>
                      </div>
                    ))}
                  </Grid>
                </div>
              </div>
            </div>
          </Stack>
        </Container>
      </Section>
    </div>
  )
}

