'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Stack } from '@/components/layout/Stack'
import { submitToWeb3Forms, CONTACT_EMAIL } from '@/lib/web3forms'

interface FormErrors {
  [key: string]: string
}

export function RequestPricingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    projectName: '',
    companyName: '',
    location: '',
    deadline: '',
    approxSQM: '',
    tileType: 'both' as 'floor' | 'wall' | 'both',
    requiredFinishes: '',
    email: '',
    whatsapp: '',
    boqFile: null as File | null,
    drawingFile: null as File | null,
    honeypot: '', // Honeypot field
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, [name]: file }))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.projectName.trim()) {
      newErrors.projectName = 'Project name is required'
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Check honeypot
    if (formData.honeypot) {
      return // Silent fail for bots
    }

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const messageParts = [
        `Project: ${formData.projectName}`,
        `Company: ${formData.companyName}`,
        `Location: ${formData.location}`,
        formData.deadline ? `Deadline: ${formData.deadline}` : '',
        formData.approxSQM ? `Approx SQM: ${formData.approxSQM}` : '',
        `Floor vs Wall: ${formData.tileType}`,
        formData.requiredFinishes ? `Required Finishes:\n${formData.requiredFinishes}` : '',
        formData.whatsapp ? `WhatsApp: ${formData.whatsapp}` : '',
        formData.boqFile ? `BOQ file attached: ${formData.boqFile.name}` : '',
        formData.drawingFile ? `Drawing/plan attached: ${formData.drawingFile.name}` : '',
      ].filter(Boolean)

      const result = await submitToWeb3Forms({
        subject: `Request Pricing: ${formData.projectName}`,
        from_name: formData.companyName,
        email: formData.email,
        message: messageParts.join('\n'),
      })

      if (result.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          projectName: '',
          companyName: '',
          location: '',
          deadline: '',
          approxSQM: '',
          tileType: 'both',
          requiredFinishes: '',
          email: '',
          whatsapp: '',
          boqFile: null,
          drawingFile: null,
          honeypot: '',
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.message || 'An error occurred. Please try again.')
      }
    } catch {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <Card padding="lg" className="bg-[var(--accent)]/10 border-[var(--accent)]/30">
        <Stack spacing="md" align="center" className="text-center">
          <div className="w-16 h-16 rounded-full bg-[var(--accent)] flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold text-[var(--text-strong)] mb-2 tracking-tight">Request Submitted Successfully!</h3>
            <p className="text-[var(--text)] mb-4">
              Thank you for your interest. We have received your BOQ and will respond within{' '}
              <strong>1–2 business days</strong> to begin the design matching process.
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              You will receive a confirmation email shortly. If you have urgent questions, please
              contact us directly.
            </p>
          </div>
        </Stack>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ position: 'absolute', left: '-9999px' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Project Information */}
      <div>
        <h3 className="font-heading text-lg font-bold text-[var(--text-strong)] mb-4 tracking-tight">Project Information</h3>
        <Stack spacing="md">
          <div>
            <label htmlFor="projectName" className="block text-sm font-medium text-[var(--text)] mb-2">
              Project Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                errors.projectName ? 'border-red-500' : 'border-neutral-300'
              }`}
            />
            {errors.projectName && (
              <p className="mt-1 text-sm text-red-600">{errors.projectName}</p>
            )}
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-[var(--text)] mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                errors.companyName ? 'border-red-500' : 'border-neutral-300'
              }`}
            />
            {errors.companyName && (
              <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
            )}
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-[var(--text)] mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="e.g., Dubai, UAE"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                errors.location ? 'border-red-500' : 'border-neutral-300'
              }`}
            />
            {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-[var(--text)] mb-2">
                Deadline / Handover Date
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
            </div>

            <div>
              <label htmlFor="approxSQM" className="block text-sm font-medium text-[var(--text)] mb-2">
                Approximate SQM
              </label>
              <input
                type="text"
                id="approxSQM"
                name="approxSQM"
                value={formData.approxSQM}
                onChange={handleChange}
                placeholder="e.g., 5,000 sqm"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="tileType" className="block text-sm font-medium text-[var(--text)] mb-2">
              Floor vs Wall
            </label>
            <select
              id="tileType"
              name="tileType"
              value={formData.tileType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
            >
              <option value="both">Both Floor and Wall</option>
              <option value="floor">Floor Only</option>
              <option value="wall">Wall Only</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="requiredFinishes"
              className="block text-sm font-medium text-[var(--text)] mb-2"
            >
              Required Finishes
            </label>
            <textarea
              id="requiredFinishes"
              name="requiredFinishes"
              value={formData.requiredFinishes}
              onChange={handleChange}
              rows={3}
              placeholder="e.g., Polished, Matt, Textured"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
          </div>
        </Stack>
      </div>

      {/* File Uploads */}
      <div>
        <h3 className="font-heading text-lg font-bold text-[var(--text)] mb-4 tracking-tight">Upload Documents</h3>
        <Stack spacing="md">
          <div>
            <label htmlFor="boqFile" className="block text-sm font-medium text-[var(--text)] mb-2">
              Upload BOQ / Bill of Quantities
            </label>
            <input
              type="file"
              id="boqFile"
              name="boqFile"
              onChange={handleFileChange}
              accept=".pdf,.xlsx,.xls,.doc,.docx"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              Accepted formats: PDF, Excel, Word (Max 5MB)
            </p>
          </div>

          <div>
            <label htmlFor="drawingFile" className="block text-sm font-medium text-[var(--text)] mb-2">
              Upload Drawings / Plans
            </label>
            <input
              type="file"
              id="drawingFile"
              name="drawingFile"
              onChange={handleFileChange}
              accept=".pdf,.dwg,.dxf,.jpg,.png"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              Accepted formats: PDF, DWG, DXF, Images (Max 5MB)
            </p>
          </div>
        </Stack>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="font-heading text-lg font-bold text-[var(--text)] mb-4 tracking-tight">Contact Information</h3>
        <Stack spacing="md">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                errors.email ? 'border-red-500' : 'border-neutral-300'
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-[var(--text)] mb-2">
              WhatsApp (Optional)
            </label>
            <input
              type="text"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="e.g., +971 50 123 4567"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
          </div>
        </Stack>
      </div>

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-800">{errorMessage}</p>
          <p className="text-xs text-red-600 mt-2">
            If the problem persists, please contact us directly at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Request Pricing'}
      </Button>

      <p className="text-xs text-[var(--text-muted)] text-center">
        By submitting this form, you agree to our privacy policy. We will respond within 1–2 business days.
      </p>
    </form>
  )
}

