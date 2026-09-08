import { Mail, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/index'
import { Card, GithubIcon, Button } from '../components/ui'

export function Contact() {
  return (
    <div className="page-contact shell">
      <Card className="contact-card">
        <span className="kicker">03 / Contact</span>
        <h1 className="contact-slogan">
          LET’S BUILD <br />
          <span>SOMETHING MEANINGFUL.</span>
        </h1>

        <p className="contact-subtext">
          I’m open to entry-level software roles, internship opportunities, research collaborations, or discussing interesting project ideas.
        </p>

        <div className="contact-action-wrapper">
          <a
            href={`mailto:${profile.email}`}
            className="email-contact-btn"
            aria-label={`Send email to ${profile.email}`}
          >
            <Mail size={18} />
            <span className="email-address">{profile.email}</span>
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="contact-social-footer">
          <span className="social-label">Connect & explore:</span>
          <div className="contact-social-links">
            <Button href={profile.github} variant="outline" className="social-link-item">
              <GithubIcon size={15} />
              <span>GitHub</span>
            </Button>

            <Button href={profile.linkedin} variant="outline" className="social-link-item">
              <span>LinkedIn</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
