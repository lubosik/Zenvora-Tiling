'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { submitToWeb3Forms, CONTACT_EMAIL } from '@/lib/web3forms'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')
    setErrorMessage('')

    try {
      const result = await submitToWeb3Forms({
        subject: `Contact: ${formData.firstName} ${formData.lastName}`,
        from_name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        message: [
          formData.phone ? `Phone: ${formData.phone}` : '',
          '',
          formData.message,
        ]
          .filter(Boolean)
          .join('\n'),
      })

      if (result.success) {
        setStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        })
      } else {
        setStatus('error')
        setErrorMessage(result.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-8 text-center">
        <h3 className="font-heading text-xl font-bold text-[var(--text-strong)] mb-2">
          Message sent
        </h3>
        <p className="text-[var(--text)]">
          Thanks for getting in touch. We&apos;ll reply as soon as we can.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-[var(--text)] mb-2">
            First name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[var(--border-dark)] rounded-lg bg-[var(--surface-1)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-[var(--text)] mb-2">
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[var(--border-dark)] rounded-lg bg-[var(--surface-1)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>
      </div>

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
          className="w-full px-4 py-2 border border-[var(--border-dark)] rounded-lg bg-[var(--surface-1)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[var(--text)] mb-2">
          Phone <span className="text-[var(--text-muted)]">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-[var(--border-dark)] rounded-lg bg-[var(--surface-1)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-[var(--border-dark)] rounded-lg bg-[var(--surface-1)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />
      </div>

      {status === 'error' && (
        <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-4">
          <p className="text-sm text-red-200">{errorMessage}</p>
          <p className="text-xs text-[var(--text-muted)] mt-2">
            Or email us directly at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline text-[var(--accent)]">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send message'}
      </Button>
    </form>
  )
}
