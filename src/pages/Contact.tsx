import { useState } from 'react'
import { Mail, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react'
import { profile } from '../data/index'
import { Card, GithubIcon, Button } from '../components/ui'

const quickTopics = [
  'Software Engineer Opportunity',
  'Full-Stack Web Project',
  'Deep Learning & AI Research',
  'General Inquiry',
]

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const mailtoSubject = selectedTopic
    ? encodeURIComponent(`Portfolio Inquiry: ${selectedTopic}`)
    : encodeURIComponent('Portfolio Contact')

  return (
    <div className="page-contact shell">
      <Card className="contact-card">
        <span className="kicker">03 / Contact</span>
        <h1 className="contact-slogan">
          LET’S BUILD <br />
          <span>SOMETHING MEANINGFUL.</span>
        </h1>

        <p className="contact-subtext">
          I’m open to entry-level software engineering roles, full-stack development opportunities, deep learning research collaborations, or discussing software project ideas.
        </p>

        <div className="contact-topic-selector">
          <span className="topic-prompt">Select an inquiry topic to start:</span>
          <div className="topic-pills">
            {quickTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                className={`topic-pill ${selectedTopic === topic ? 'active' : ''}`}
                onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
              >
                <MessageSquare size={13} />
                <span>{topic}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="contact-action-wrapper">
          <a
            href={`mailto:${profile.email}?subject=${mailtoSubject}`}
            className="email-contact-btn"
            aria-label={`Send email to ${profile.email}`}
          >
            <Mail size={18} />
            <span className="email-address">{profile.email}</span>
            <ArrowUpRight size={18} />
          </a>

          <button
            type="button"
            className="copy-email-btn"
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
          >
            {copied ? <Check size={16} className="copied-icon" /> : <Copy size={16} />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
          </button>
        </div>

        <div className="contact-social-footer">
          <span className="social-label">Connect & explore profiles:</span>
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
