import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface StackProps {
  children: ReactNode
  className?: string
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end' | 'stretch'
}

const spacingMap = {
  none: 'space-y-0',
  xs: 'space-y-2',
  sm: 'space-y-4',
  md: 'space-y-6',
  lg: 'space-y-8',
  xl: 'space-y-12',
}

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}

export function Stack({ children, className, spacing = 'md', align = 'stretch' }: StackProps) {
  return (
    <div className={cn('flex flex-col', spacingMap[spacing], alignMap[align], className)}>
      {children}
    </div>
  )
}

