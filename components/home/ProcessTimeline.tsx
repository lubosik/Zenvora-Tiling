'use client'

import { Section } from '@/components/layout/Section'

const steps = [
  {
    number: 1,
    title: 'Share Your Requirements',
    description:
      'Tell us what you need — tile type, quantity, dimensions, and any design references.',
  },
  {
    number: 2,
    title: 'Design Matching',
    timeline: '1–2 days',
    description:
      "We match your design reference from our extensive catalogue. If your exact design isn't readily available, we'll source the closest match and share photos and videos for your review.",
  },
  {
    number: 3,
    title: 'Custom Sampling',
    timeline: '7–10 days, if needed',
    description:
      'Need an exact match? We can produce a custom sample tile tailored to your specification.',
  },
  {
    number: 4,
    title: 'Design Approval',
    timeline: '4–5 days',
    description:
      'Review the photos and videos we send. Once you confirm the design, we move forward — nothing proceeds without your approval.',
  },
  {
    number: 5,
    title: 'Physical Sample',
    timeline: '7–10 days',
    description:
      'We send you a physical tile sample (~20×20 cm) so you can verify the true colour and finish in person.',
  },
  {
    number: 6,
    title: 'Order Confirmation & Production',
    timeline: '15–20 days',
    description:
      'Once you approve the physical sample and confirm payment terms, production begins.',
  },
  {
    number: 7,
    title: 'Quality Check',
    description:
      'After production, we share quality control photos and videos of your finished tiles for final review before shipping.',
  },
  {
    number: 8,
    title: 'Shipping & Delivery',
    description:
      'Your tiles are loaded, and we provide all shipping documents. Sea transit from India is typically 45–60 days depending on destination, with an additional 10–15 days from port to your warehouse.',
  },
]

const timelines = [
  { value: '~60 days', label: 'Enquiry to vessel loading' },
  { value: '45–60 days', label: 'Sea transit to destination port' },
  { value: '10–15 days', label: 'Port to your warehouse' },
]

export function ProcessTimeline() {
  return (
    <Section variant="light" spacing="xl">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)] mb-3">
            Our Process
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--text-dark-strong)] mb-4">
            From Enquiry to Delivery
          </h2>
          <p className="text-[var(--text-dark-muted)] text-lg">
            A transparent, step-by-step journey — with you in control at every stage.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line — simple CSS, NOT an SVG */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-[var(--accent)]"
            style={{ opacity: 0.2 }}
          />

          <div className="flex flex-col gap-12">
            {steps.map((step) => (
              <div key={step.number} className="relative flex items-start gap-6">
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>

                {/* Content */}
                <div className="pt-1 flex-1 min-w-0">
                  <h3 className="font-heading text-lg font-bold text-[var(--text-dark-strong)] mb-1">
                    {step.title}
                  </h3>
                  {step.timeline && (
                    <span className="inline-block text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full mb-2">
                      {step.timeline}
                    </span>
                  )}
                  <p className="text-[var(--text-dark-muted)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overall Timelines */}
        <div className="mt-20 text-center">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-[var(--text-dark-strong)] mb-8">
            Overall Timelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timelines.map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-xl border border-[var(--border-light)] bg-white/60"
              >
                <p className="text-[var(--accent)] font-heading text-2xl font-bold">
                  {item.value}
                </p>
                <p className="text-[var(--text-dark-muted)] text-sm mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
