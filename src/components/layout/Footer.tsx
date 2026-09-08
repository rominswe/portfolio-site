import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} {profile.name}. Crafted with focus & clarity.
        </p>

        <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
          Back to top <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  )
}
