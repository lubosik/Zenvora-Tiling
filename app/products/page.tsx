import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'
import { productCategories } from '@/content/products/categories'

export const metadata = createMetadata({
  title: 'Our Collections',
  description:
    'Premium porcelain tiles across six specialist categories: ceramic body, double digital, full body, glazed vitrified, large slabs, and wall tiles.',
  path: '/products',
})

export default function ProductsPage() {
  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs('/products'))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Section spacing="lg" variant="dark">
        <Container>
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text-strong)] mb-4 tracking-tight">
              Our Collections
            </h1>
            <p className="text-xl text-[var(--text-muted)] max-w-[65ch] mx-auto">
              Premium porcelain tiles across six specialist categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {productCategories.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.slug}`}
                className="group relative block overflow-hidden rounded-xl bg-[var(--surface-2)] border border-[var(--border-dark)] hover:border-[var(--accent)]/30 transition-all duration-200"
              >
                <div className="aspect-[4/3] relative bg-[var(--surface-3)] border-b border-[var(--border-dark)] overflow-hidden">
                  {category.image && !category.image.includes('placeholders') ? (
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-[var(--text-muted)]">Image Coming Soon</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-xl font-bold text-[var(--text-strong)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                    {category.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
