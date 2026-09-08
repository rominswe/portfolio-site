interface SectionHeaderProps {
  kicker?: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ kicker, title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <header className={`section-header ${className}`.trim()}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  )
}
