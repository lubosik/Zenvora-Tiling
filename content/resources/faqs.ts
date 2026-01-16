/**
 * FAQ content for articles
 */

export interface FAQ {
  question: string
  answer: string
}

export const articleFAQs: Record<string, FAQ[]> = {
  'what-is-boq-in-construction': [
    {
      question: 'What does BOQ stand for?',
      answer:
        'BOQ stands for Bill of Quantities. It is a detailed document that lists all materials, labor, and services required for a construction project, along with their quantities and specifications.',
    },
    {
      question: 'Why is a BOQ important for tile projects?',
      answer:
        'A BOQ helps ensure accurate pricing, proper material ordering, and project planning. For tile projects, it specifies tile types, quantities, sizes, finishes, and installation requirements.',
    },
    {
      question: 'Who typically prepares a BOQ?',
      answer:
        'BOQs are usually prepared by quantity surveyors, estimators, or project managers. They work from architectural drawings and specifications to calculate material quantities.',
    },
  ],
  'slip-resistance-ratings-explained': [
    {
      question: 'What is the minimum slip resistance rating for commercial bathrooms?',
      answer:
        'For commercial bathrooms and wet areas, R11 is typically the minimum requirement. However, R12 or R13 may be required for areas with heavy water exposure or specific safety regulations.',
    },
    {
      question: 'What is the difference between R11 and R13?',
      answer:
        'R11 provides good slip resistance for wet areas, while R13 offers maximum slip resistance for very wet or hazardous environments. R13 tiles have a more textured surface for enhanced grip.',
    },
    {
      question: 'Can I use R9 tiles in commercial kitchens?',
      answer:
        'R9 tiles are suitable for dry areas but not recommended for commercial kitchens where spills are common. R10 or R11 is typically required for kitchen floors.',
    },
  ],
  'understanding-vitrified-vs-ceramic-vs-porcelain': [
    {
      question: 'What is the main difference between vitrified and ceramic tiles?',
      answer:
        'Vitrified tiles are made by vitrification, which creates a glass-like surface with very low water absorption (less than 0.5%). Ceramic tiles have higher water absorption and are generally less durable.',
    },
    {
      question: 'Are porcelain tiles the same as vitrified tiles?',
      answer:
        'Porcelain tiles are a type of vitrified tile. All porcelain tiles are vitrified, but not all vitrified tiles are porcelain. Porcelain has the lowest water absorption rate.',
    },
    {
      question: 'Which tile type is best for high-traffic commercial areas?',
      answer:
        'Vitrified or porcelain tiles are best for high-traffic commercial areas due to their durability, low water absorption, and resistance to wear and staining.',
    },
  ],
}

export function getFAQsForArticle(slug: string): FAQ[] {
  return articleFAQs[slug] || []
}

