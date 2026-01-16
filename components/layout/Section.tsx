import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant?: 'dark' | 'light' | 'darkElevated'
}

const spacingMap = {
  none: 'py-0',
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-20 lg:py-24',
  lg: 'py-20 sm:py-24 lg:py-30',
  xl: 'py-24 sm:py-30 lg:py-38',
  '2xl': 'py-30 sm:py-38 lg:py-46',
}

const variantMap = {
  dark: 'bg-[var(--bg)] text-[var(--text)]',
  light: 'bg-[var(--bg-light)] text-[var(--text-dark)] section-light',
  darkElevated: 'bg-[var(--surface-2)] text-[var(--text)] section-dark-elevated',
}

export function Section({
  children,
  className,
  spacing = 'md',
  variant = 'dark',
}: SectionProps) {
  return (
    <section
      className={cn(
        spacingMap[spacing],
        variantMap[variant],
        className
      )}
    >
      {children}
    </section>
  )
}

