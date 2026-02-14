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
            A sample from our catalogue
          </h2>
          <p className="text-lg text-[var(--text-dark-muted)] max-w-[70ch] mx-auto">
            Below is an example of what we offer. We have loads more designs, sizes and materials in our full catalogue. Get in touch to explore options or send us your custom design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/products/${collection.slug}`}
              className="group relative block overflow-hidden rounded-lg bg-[var(--surface-light-1)] border border-[var(--border-light)] shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="aspect-[4/3] relative bg-[var(--surface-light-2)] border-b border-[var(--border-light)] overflow-hidden">
                {collection.image && !collection.image.includes('placeholders') ? (
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-[var(--text-dark-muted)]">Image Coming Soon</span>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-5 py-2.5 rounded-full bg-[var(--accent)] text-[var(--bg)] font-medium shadow-md">
                    View Collection
                  </span>
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

