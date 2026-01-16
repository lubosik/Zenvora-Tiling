import { generateOrganizationSchema } from '@/lib/structured-data'
import type { OrganizationSchema, BreadcrumbSchema } from '@/lib/structured-data'

interface StructuredDataProps {
  organization?: boolean
  breadcrumbs?: BreadcrumbSchema
}

export function StructuredData({ organization = true, breadcrumbs }: StructuredDataProps) {
  const scripts: Array<OrganizationSchema | BreadcrumbSchema> = []

  if (organization) {
    scripts.push(generateOrganizationSchema())
  }

  if (breadcrumbs) {
    scripts.push(breadcrumbs)
  }

  return (
    <>
      {scripts.map((script, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(script) }}
        />
      ))}
    </>
  )
}

