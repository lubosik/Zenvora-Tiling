import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'
import { getCategoryBySlug, getAllCategorySlugs } from '@/content/products/categories'
import { internalLinks } from '@/lib/internal-links'

interface ProductCategoryPageProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCategorySlugs()
  return slugs.map((slug) => ({
    category: slug,
  }))
}

export async function generateMetadata({ params }: ProductCategoryPageProps) {
  const { category } = await params
  const categoryData = getCategoryBySlug(category)

  if (!categoryData) {
    return createMetadata({
      title: 'Collection Not Found',
      description: 'The requested collection could not be found.',
      path: `/products/${category}`,
    })
  }

  return createMetadata({
    title: `${categoryData.name} - Collections`,
    description: categoryData.description,
    path: `/products/${category}`,
  })
}

export default async function ProductCategoryPage({ params }: ProductCategoryPageProps) {
  const { category } = await params
  const categoryData = getCategoryBySlug(category)

  if (!categoryData) {
    notFound()
  }

  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs(`/products/${category}`))
  const showcaseItems = categoryData.showcaseItems ?? []

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Section spacing="lg" variant="dark">
        <Container>
          <div className="mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text-strong)] mb-4 tracking-tight">
              {categoryData.name}
            </h1>
            <p className="text-xl text-[var(--text-muted)] max-w-[65ch]">{categoryData.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="font-heading text-2xl font-semibold text-[var(--text-strong)] mb-2">
              Explore some of our projects
            </h2>
            <p className="text-[var(--text)] max-w-[65ch]">
              The examples below are a small selection from our catalogue. We have many more designs and finishes available. Reach out to learn more, request samples or send us your custom design and we&apos;ll match it where possible.
            </p>
          </div>

          {/* 3 showcase tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcaseItems.map((item) => (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden bg-[var(--surface-2)] border border-[var(--border-dark)]"
              >
                <div className="aspect-square relative bg-[var(--surface-3)] overflow-hidden">
                  {item.image && !item.image.includes('placeholders') ? (
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-[var(--text-muted)]">Image Coming Soon</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm text-[var(--text-muted)] mb-2">{item.specs}</p>
                  {item.description && (
                    <p className="text-sm text-[var(--text)] mb-4 leading-relaxed">{item.description}</p>
                  )}
                  <Button href={internalLinks.requestPricing.href} variant="primary" size="md" fullWidth>
                    Request Pricing
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA block - dark section so text is visible */}
          <div className="mt-12 rounded-xl bg-[var(--surface-2)] border border-[var(--border-dark)] p-6">
            <p className="text-[var(--text)]">
              We have loads more designs in our catalogue. Need custom specifications, bulk pricing or want to send us a design?{' '}
              <Link
                href={internalLinks.requestPricing.href}
                className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium underline"
              >
                Get in touch
              </Link>{' '}
              We&apos;ll discuss options and begin the design matching process within 1 to 2 business days.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
