import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GridProps {
  children: ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  responsive?: boolean
}

const colsMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  12: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6',
}

const gapMap = {
  none: 'gap-0',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
}

export function Grid({
  children,
  className,
  cols = 3,
  gap = 'md',
  responsive = true,
}: GridProps) {
  return (
    <div
      className={cn(
        'grid',
        responsive ? colsMap[cols] : `grid-cols-${cols}`,
        gapMap[gap],
        className
      )}
    >
      {children}
    </div>
  )
}

