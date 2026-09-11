import { ArrowRight, Code2, Sparkles, BriefcaseBusiness, ArrowUpRight, GraduationCap, Building2 } from 'lucide-react'
import { profile, interests } from '../data/index'
import { Button, Card, SectionHeader, GithubIcon, SkillsMatrix } from '../components/ui'

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
            <div className="hero-badge-tag">
              <span className="pulsing-dot" />
              <span>Available for Software & AI Roles</span>
            </div>
            <h1 className="hero-name">{profile.name}</h1>
            <h2 className="hero-role">Software & Machine Learning Engineer</h2>

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

          <div className="hero-profile-card">
            <div className="profile-card-header">
              <span className="profile-card-status">Education & Industry</span>
            </div>
            <div className="profile-card-body">
              <div className="profile-card-item">
                <div className="profile-card-icon">
                  <Building2 size={18} />
                </div>
                <div>
                  <h4 className="profile-card-title">
                    <a
                      href="https://vitrox.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="profile-external-link"
                    >
                      <span>Vitrox</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </h4>
                  <p className="profile-card-sub">Mar 2026 – Sep 2026</p>
                  <p className="profile-card-desc">Workflow automation for Vision Inspection team (-80% manual processing time)</p>
                </div>
              </div>

              <div className="profile-card-item">
                <div className="profile-card-icon">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h4 className="profile-card-title">
                    <a
                      href="https://aiu.edu.my"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="profile-external-link"
                    >
                      <span>Albukhary International University</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </h4>
                  <p className="profile-card-sub">B.Sc. Computer Science • Expected Nov 2026</p>
                  <p className="profile-card-desc">Data Science, Deep Learning & NLP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-summary-section shell">
        <SectionHeader
          kicker="01 / Background & Focus"
          title="Engineering & Academic Focus"
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

      <section className="skills-section shell">
        <SectionHeader
          kicker="02 / Technical Stack"
          title="Technologies & Tools"
          subtitle="A breakdown of the programming languages, frameworks, databases, and tools I have worked with across my projects and coursework."
        />
        <SkillsMatrix />
      </section>
    </div>
  )
}
