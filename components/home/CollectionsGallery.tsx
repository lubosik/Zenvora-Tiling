import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { productCategories } from '@/content/products/categories'

export function CollectionsGallery() {
  // Use first 6 categories for the gallery
  const collections = productCategories.slice(0, 6)

  return (
    <Section spacing="xl" variant="light">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-dark-strong)] mb-6 tracking-tight">
            Collections
          </h2>
          <p className="text-lg text-[var(--text-dark-muted)] max-w-[70ch] mx-auto">
            Curated tile collections for high-ticket commercial and premium residential projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/products/${collection.slug}`}
              className="group relative block overflow-hidden rounded-lg bg-[var(--surface-light-1)] border border-[var(--border-light)] shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] relative bg-[var(--surface-light-2)] border-b border-[var(--border-light)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-[var(--text-dark-muted)]">Collection Image</span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[var(--accent)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[var(--bg)] font-medium">View Collection</span>
                </div>
              </div>

              {/* Label and Metadata */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-[var(--text-dark-strong)] mb-2 tracking-tight">
                  {collection.name}
                </h3>
                <p className="text-sm text-[var(--text-dark-muted)] line-clamp-2">
                  {collection.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}

