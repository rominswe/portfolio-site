import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Mail } from 'lucide-react'
import { NAV_ITEMS } from '../../config/navigation'
import { profile } from '../../data/profile'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="site-header">
      <div className="navbar shell">
        <Link to="/" className="nav-brand" onClick={closeMobileMenu}>
          <span className="brand-name">{profile.name}</span>
          <span className="brand-dot">.</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <a href={`mailto:${profile.email}`} className="nav-email-btn" aria-label="Email me">
            <Mail size={16} />
            <span className="email-text">{profile.email}</span>
          </a>

          <button
            className="mobile-toggle"
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-nav-panel">
          <div className="mobile-nav-links">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
                onClick={closeMobileMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <a href={`mailto:${profile.email}`} className="mobile-email-link" onClick={closeMobileMenu}>
            <Mail size={18} />
            <span>{profile.email}</span>
          </a>
        </div>
      )}
    </header>
  )
}
