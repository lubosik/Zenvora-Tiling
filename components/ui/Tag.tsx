import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TagProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'accent' | 'neutral'
  size?: 'sm' | 'md'
}

const variantMap = {
  default: 'bg-[var(--bg2)] text-[var(--text)] border border-[var(--border)]',
  accent: 'bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)]/30',
  neutral: 'bg-[var(--bg2)] text-[var(--muted)] border border-[var(--border)]',
}

const sizeMap = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
}

export function Tag({ children, className, variant = 'default', size = 'md' }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md font-medium',
        variantMap[variant],
        sizeMap[size],
        className
      )}
    >
      {children}
    </span>
  )
}

