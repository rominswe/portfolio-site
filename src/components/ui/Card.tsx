import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
}

export function Card({ children, className = '', hoverable = false }: CardProps) {
  const classes = `card ${hoverable ? 'card-hover' : ''} ${className}`.trim()
  return <div className={classes}>{children}</div>
}
