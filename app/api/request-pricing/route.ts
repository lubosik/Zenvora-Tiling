import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { requestPricingSchema } from '@/lib/validations'

// Initialize Resend only if API key is available (for build-time)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Simple rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 15 * 60 * 1000 }) // 15 minutes
    return true
  }

  if (limit.count >= 5) {
    // Max 5 submissions per 15 minutes
    return false
  }

  limit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Validate form data
    const validationResult = requestPricingSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Check honeypot
    if (data.honeypot && typeof data.honeypot === 'string' && data.honeypot.length > 0) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 })
    }

    // Prepare email content
    const emailContent = `
New BOQ / Pricing Request

Project Details:
- Project Name: ${data.projectName}
- Company Name: ${data.companyName}
- Location: ${data.location}
${data.deadline ? `- Deadline/Handover: ${data.deadline}` : ''}
${data.approxSQM ? `- Approximate SQM: ${data.approxSQM}` : ''}
${data.tileType ? `- Tile Type: ${data.tileType}` : ''}
${data.requiredFinishes ? `- Required Finishes: ${data.requiredFinishes}` : ''}

Contact Information:
- Email: ${data.email}
${data.whatsapp ? `- WhatsApp: ${data.whatsapp}` : ''}

${data.boqFile ? 'BOQ file attached' : ''}
${data.drawingFile ? 'Drawing file attached' : ''}
    `.trim()

    // Send email
    const emailTo = process.env.CONTACT_EMAIL || 'info@commercialtiling.com'
    const emailFrom = process.env.EMAIL_FROM || 'noreply@commercialtiling.com'

    if (!resend) {
      // During build or if API key is missing, log and return success
      console.warn('Resend API key not configured. Email not sent.')
      return NextResponse.json(
        {
          success: true,
          message: 'Your request has been received. We will respond within 48 hours.',
        },
        { status: 200 }
      )
    }

    try {
      await resend.emails.send({
        from: emailFrom,
        to: emailTo,
        subject: `New BOQ Request: ${data.projectName}`,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>'),
        // Note: File attachments would need to be handled differently
        // For now, we'll note that files were uploaded
        // In production, you'd upload files to S3 and include links
      })

      return NextResponse.json(
        {
          success: true,
          message: 'Your request has been submitted successfully. We will respond within 48 hours.',
        },
        { status: 200 }
      )
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      return NextResponse.json(
        {
          error: 'Failed to send email. Please try again or contact us directly.',
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Request processing error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}

