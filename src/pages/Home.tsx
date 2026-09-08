import { ArrowRight, Code2, Sparkles, BriefcaseBusiness, ArrowUpRight, Cpu } from 'lucide-react'
import { profile, interests } from '../data/index'
import { Button, Card, SectionHeader, GithubIcon } from '../components/ui'

function getIcon(iconName: string) {
  switch (iconName) {
    case 'Code2':
      return <Code2 size={18} />
    case 'Sparkles':
      return <Sparkles size={18} />
    default:
      return <BriefcaseBusiness size={18} />
  }
}

export function Home() {
  return (
    <div className="page-home">
      <section className="hero-section shell">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-meta">{profile.role}</div>
            <h1 className="hero-name">{profile.name}</h1>
            <h2 className="hero-role">Data & AI Developer</h2>

            <p className="hero-intro">{profile.intro}</p>

            <hr className="hero-divider" />

            <div className="hero-actions">
              <Button to="/projects" variant="primary">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </Button>

              <div className="social-links-inline">
                <Button href={profile.github} variant="outline" className="social-btn">
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} />
                </Button>

                <Button href={profile.linkedin} variant="outline" className="social-btn">
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </Button>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <Cpu className="hero-illustration" strokeWidth={1.2} size={140} />
          </div>
        </div>
      </section>

      <section className="about-summary-section shell">
        <SectionHeader
          kicker="01 / Background"
          title="Building & Learning"
          subtitle={profile.bio}
        />

        <div className="interests-grid">
          {interests.map((item) => (
            <Card key={item.id} hoverable className="interest-card">
              <div className="interest-icon-wrapper">{getIcon(item.icon)}</div>
              <h3 className="interest-title">{item.title}</h3>
              <p className="interest-desc">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
