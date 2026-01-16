import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  href?: string
}

const variantMap = {
  primary:
    'bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] font-medium shadow-sm',
  secondary:
    'bg-[var(--surface-1)] text-[var(--text-strong)] hover:bg-[var(--surface-2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
  outline:
    'bg-transparent border border-[var(--border-dark)] text-[var(--text-strong)] hover:bg-[rgba(255,255,255,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
  ghost:
    'text-[var(--text-strong)] hover:bg-[rgba(255,255,255,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
}

const sizeMap = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-[14px] font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none',
    variantMap[variant],
    sizeMap[size],
    fullWidth && 'w-full',
    className
  )

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  )
}
