import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Stack } from '@/components/layout/Stack'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { createMetadata } from '@/lib/metadata'
import { StructuredData } from '@/components/seo/StructuredData'
import { FAQSchema } from '@/components/seo/FAQSchema'
import { generateBreadcrumbSchema, generateBreadcrumbs } from '@/lib/structured-data'
import { getArticleBySlug, getAllArticleSlugs } from '@/content/resources/articles'
import { getFAQsForArticle } from '@/content/resources/faqs'
import { readFile } from 'fs/promises'
import { join } from 'path'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return createMetadata({
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
      path: `/resources/${slug}`,
    })
  }

  return createMetadata({
    title: `${article.title} - Commercial Tile Resources`,
    description: article.description,
    path: `/resources/${slug}`,
  })
}

async function getArticleContent(slug: string): Promise<string> {
  try {
    const filePath = join(process.cwd(), 'content', 'resources', 'mdx', `${slug}.mdx`)
    const content = await readFile(filePath, 'utf-8')
    return content
  } catch (error) {
    // Return placeholder content if MDX file doesn't exist yet
    return `# ${getArticleBySlug(slug)?.title || 'Article'}\n\nArticle content coming soon...`
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const breadcrumbs = generateBreadcrumbSchema(generateBreadcrumbs(`/resources/${slug}`))
  const faqs = getFAQsForArticle(slug)
  const content = await getArticleContent(slug)

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      <Section spacing="lg">
        <Container>
          <Stack spacing="xl">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Tag variant="accent" size="md">
                  {article.category}
                </Tag>
                <span className="text-sm text-neutral-600">{article.readTime} read</span>
                <span className="text-sm text-neutral-600">•</span>
                <span className="text-sm text-neutral-600">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text)] mb-4 tracking-tight">
                {article.title}
              </h1>
              <p className="text-xl text-[var(--muted)] max-w-[65ch]">{article.description}</p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div
                className="article-content"
                dangerouslySetInnerHTML={{
                  __html: content
                    .replace(/#{1,6}\s(.+)/g, '<h2 class="font-heading text-2xl font-bold text-[var(--text)] mb-4 mt-8 tracking-tight">$1</h2>')
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n\n/g, '</p><p class="text-[var(--muted)] leading-relaxed mb-4">')
                    .replace(/^/, '<p class="text-[var(--muted)] leading-relaxed mb-4">')
                    .replace(/$/, '</p>'),
                }}
              />
            </div>

            {/* FAQs Section */}
            {faqs.length > 0 && (
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 tracking-tight">
                  Frequently Asked Questions
                </h2>
                <Stack spacing="md">
                  {faqs.map((faq, index) => (
                    <Card key={index} padding="lg">
                      <Stack spacing="sm">
                        <h3 className="font-heading text-lg font-bold text-[var(--text)] tracking-tight">{faq.question}</h3>
                        <p className="text-[var(--muted)]">{faq.answer}</p>
                      </Stack>
                    </Card>
                  ))}
                </Stack>
              </div>
            )}

            {/* Related Resources */}
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-[var(--text)] mb-4 tracking-tight">Related Resources</h3>
              <p className="text-[var(--muted)] mb-4">
                Need more information? Explore our other resources or submit your BOQ for
                personalized assistance.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/resources"
                  className="text-[var(--accent)] hover:text-[var(--accentHover)] font-medium text-sm"
                >
                  View All Resources →
                </Link>
                <span className="text-neutral-400">•</span>
                <Link
                  href="/request-pricing"
                  className="text-[var(--accent)] hover:text-[var(--accentHover)] font-medium text-sm"
                >
                  Request Pricing →
                </Link>
              </div>
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  )
}

