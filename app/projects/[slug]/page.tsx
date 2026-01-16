import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { Button } from '@/components/ui/Button'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'
import { getProjectBySlug, getAllProjectSlugs } from '@/content/projects/projects'
import { internalLinks } from '@/lib/internal-links'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return createMetadata({
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
      path: `/projects/${slug}`,
    })
  }

  return createMetadata({
    title: `${project.title} - Commercial Tile Project`,
    description: project.description,
    path: `/projects/${slug}`,
  })
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs(`/projects/${slug}`))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Section spacing="lg">
        <Container>
          <Stack spacing="xl">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Tag variant="default" size="md">
                  {project.type}
                </Tag>
                {project.clientConfidential && (
                  <Tag variant="neutral" size="md">Client Confidential</Tag>
                )}
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4 tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl text-[var(--muted)]">{project.location}</p>
            </div>

            {/* Project Image */}
            <div className="aspect-video bg-neutral-200 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-neutral-500">Project Image Placeholder</span>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Stack spacing="lg">
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text)] mb-4 tracking-tight">
                      Project Overview
                    </h2>
                    <p className="text-lg text-[var(--muted)] leading-relaxed max-w-[65ch]">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text)] mb-4 tracking-tight">
                      Outcome
                    </h2>
                    <Card padding="lg" className="bg-[var(--accent)]/10 border-[var(--accent)]/30">
                      <p className="text-neutral-900 leading-relaxed">{project.outcome}</p>
                    </Card>
                  </div>
                </Stack>
              </div>

              {/* Sidebar */}
              <div>
                <Card padding="lg">
                  <Stack spacing="md">
                    <h3 className="font-heading text-lg font-bold text-[var(--text)] tracking-tight">Project Details</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-neutral-600 mb-1">Type</p>
                        <p className="text-neutral-900">{project.type}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-600 mb-1">Location</p>
                        <p className="text-neutral-900">{project.location}</p>
                      </div>
                      {project.volume && (
                        <div>
                          <p className="text-sm font-medium text-neutral-600 mb-1">Volume</p>
                          <p className="text-neutral-900">{project.volume}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium text-neutral-600 mb-2">Tile Types</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tileTypes.map((type, index) => (
                            <Tag key={index} variant="accent" size="sm">
                              {type}
                            </Tag>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Stack>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-neutral-900 rounded-xl p-8 text-center">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Start Your Project
              </h2>
              <p className="text-[var(--muted)] mb-6 max-w-2xl mx-auto">
                Ready to source premium tiles for your commercial project? Submit your BOQ for
                detailed pricing and recommendations.
              </p>
              <Button href={internalLinks.requestPricing.href} variant="secondary" size="lg">
                {internalLinks.sendBOQ.label}
              </Button>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  )
}

