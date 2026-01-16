import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Grid } from '@/components/layout/Grid'
import { Card } from '@/components/ui/Card'
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
      title: 'Product Category Not Found',
      description: 'The requested product category could not be found.',
      path: `/products/${category}`,
    })
  }

  return createMetadata({
    title: `${categoryData.name} - Commercial Tiles`,
    description: categoryData.description,
    path: `/products/${category}`,
  })
}

// Placeholder product data - to be replaced with actual product data
const placeholderProducts = [
  {
    id: 'product-1',
    name: 'Sample Product 1',
    finish: 'Polished',
    size: '600x600mm',
    surface: 'Smooth',
  },
  {
    id: 'product-2',
    name: 'Sample Product 2',
    finish: 'Matt',
    size: '800x800mm',
    surface: 'Textured',
  },
  {
    id: 'product-3',
    name: 'Sample Product 3',
    finish: 'Satin',
    size: '600x1200mm',
    surface: 'Smooth',
  },
]

export default async function ProductCategoryPage({ params }: ProductCategoryPageProps) {
  const { category } = await params
  const categoryData = getCategoryBySlug(category)

  if (!categoryData) {
    notFound()
  }

  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs(`/products/${category}`))

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <Section spacing="lg">
        <Container>
          <Stack spacing="lg">
            {/* Header */}
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4 tracking-tight">
                {categoryData.name}
              </h1>
              <p className="text-xl text-[var(--muted)] max-w-[65ch]">{categoryData.description}</p>
            </div>

            {/* Product Gallery */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 tracking-tight">
                Available Products
              </h2>
              <Grid cols={3} gap="lg">
                {placeholderProducts.map((product) => (
                  <Card key={product.id} hover padding="lg">
                    <Stack spacing="md">
                      {/* Product Image Placeholder */}
                      <div className="aspect-square bg-neutral-200 rounded-lg flex items-center justify-center">
                        <span className="text-sm text-neutral-500">Product Image</span>
                      </div>

                      {/* Product Name */}
                      <h3 className="font-heading text-lg font-bold text-[var(--text)] tracking-tight">{product.name}</h3>

                      {/* Spec Table */}
                      <div className="border-t border-neutral-200 pt-4">
                        <table className="w-full text-sm">
                          <tbody>
                            <tr>
                              <td className="py-2 text-neutral-600 font-medium">Finish:</td>
                              <td className="py-2 text-neutral-900">{product.finish}</td>
                            </tr>
                            <tr>
                              <td className="py-2 text-neutral-600 font-medium">Size:</td>
                              <td className="py-2 text-neutral-900">{product.size}</td>
                            </tr>
                            <tr>
                              <td className="py-2 text-neutral-600 font-medium">Surface:</td>
                              <td className="py-2 text-neutral-900">{product.surface}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* CTA */}
                      <Button
                        href={internalLinks.requestPricing.href}
                        variant="primary"
                        size="md"
                        fullWidth
                      >
                        Add to Quote / Request Pricing
                      </Button>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </div>

            {/* Additional Info */}
            <div className="bg-neutral-50 rounded-xl p-6">
              <p className="text-[var(--muted)]">
                Need custom specifications or bulk pricing?{' '}
                <Link
                  href={internalLinks.requestPricing.href}
                  className="text-[var(--accent)] hover:text-[var(--accentHover)] font-medium underline"
                >
                  Contact us
                </Link>{' '}
                with your requirements for a detailed quote.
              </p>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  )
}
