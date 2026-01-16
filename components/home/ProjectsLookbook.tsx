import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { getFeaturedProjects } from '@/content/projects/projects'
import { internalLinks } from '@/lib/internal-links'

export function ProjectsLookbook() {
  const featuredProjects = getFeaturedProjects().slice(0, 6)

  return (
    <Section spacing="xl" variant="light">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-dark-strong)] mb-6 tracking-tight">
            Projects
          </h2>
          <p className="text-lg text-[var(--text-dark-muted)] max-w-[70ch] mx-auto">
            Premium tile installations across high-ticket commercial and residential projects worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block overflow-hidden rounded-lg bg-[var(--surface-light-1)] border border-[var(--border-light)] shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] relative bg-[var(--surface-light-2)] border-b border-[var(--border-light)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-[var(--text-dark-muted)]">Project Image</span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[var(--accent)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[var(--bg)] font-medium">View Project</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="text-xs text-[var(--accent)] font-medium mb-2 tracking-wider uppercase">
                  {project.type}
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--text-dark-strong)] mb-2 tracking-tight">
                  {project.title}
                </h3>
                {project.location && (
                  <p className="text-sm text-[var(--text-dark-muted)] mb-2">{project.location}</p>
                )}
                {project.volume && (
                  <p className="text-sm text-[var(--text-dark-muted)]">{project.volume} supplied</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button href={internalLinks.projects.href} variant="outline" size="lg" className="font-medium">
            View All Projects
          </Button>
        </div>
      </Container>
    </Section>
  )
}

