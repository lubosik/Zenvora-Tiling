import { z } from 'zod'

export const requestPricingSchema = z.object({
  projectName: z.string().min(1, 'Project name is required').max(200),
  companyName: z.string().min(1, 'Company name is required').max(200),
  location: z.string().min(1, 'Location is required').max(200),
  deadline: z.string().optional(),
  approxSQM: z.string().optional(),
  tileType: z.enum(['floor', 'wall', 'both']).optional(),
  requiredFinishes: z.string().optional(),
  email: z.string().email('Valid email is required').max(200),
  whatsapp: z.string().max(50).optional(),
  boqFile: z.string().optional(), // Base64 or URL
  drawingFile: z.string().optional(), // Base64 or URL
  honeypot: z.string().max(0, 'Spam detected'), // Honeypot field
})

export type RequestPricingFormData = z.infer<typeof requestPricingSchema>

