import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  id?: string
}

const paddingMap = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({
  children,
  className,
  hover = false,
  padding = 'md',
  id,
}: CardProps) {
  return (
    <div
      id={id}
      className={cn(
        'rounded-xl bg-[var(--bg2)] border border-[var(--border)]',
        paddingMap[padding],
        hover && 'transition-all duration-200 hover:border-[var(--accent)]/30 hover:bg-[var(--bg2)]/80',
        className
      )}
    >
      {children}
    </div>
  )
}

