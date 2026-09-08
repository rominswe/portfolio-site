import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface BaseProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

type ButtonAsButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
    to?: undefined
  }

type ButtonAsAnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    to?: undefined
    isExternal?: boolean
  }

type ButtonAsLinkProps = BaseProps & {
  to: string
  href?: undefined
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsLinkProps

export function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  to,
  ...props
}: ButtonProps) {
  const baseClass = `btn btn-${variant} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    )
  }

  if (href) {
    const isExternal = (props as ButtonAsAnchorProps).isExternal ?? href.startsWith('http')
    return (
      <a
        href={href}
        className={baseClass}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={baseClass} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
