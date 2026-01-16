import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  wide?: boolean
  narrow?: boolean
}

export function Container({ children, className, wide, narrow }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        wide ? 'max-w-container-wide' : narrow ? 'max-w-container-narrow' : 'max-w-container',
        className
      )}
    >
      {children}
    </div>
  )
}

