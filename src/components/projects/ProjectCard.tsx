import { useState } from 'react'
import { ArrowUpRight, Info, X, CheckCircle2, Layers } from 'lucide-react'
import { Project } from '../../data/projects'
import { GithubIcon, Badge, Button } from '../ui'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false)
  const formattedIndex = String(index + 1).padStart(2, '0')
  const isEven = index % 2 === 1

  return (
    <>
      <div className={`project-item ${isEven ? 'reverse' : ''}`}>
        {project.imageUrl && (
          <div className="project-item-visual">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
          </div>
        )}

        <div className="project-item-info">
          <div className="project-meta-row">
            <span className="project-large-number">{formattedIndex}</span>
            <span className="project-category-meta">
              {project.category} • {project.year}
            </span>
          </div>

          <h3 className="project-item-title">{project.title}</h3>
          <p className="project-item-desc">{project.description}</p>

          <div className="project-tech-row">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default" className="tech-tag">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="project-actions-row">
            <Button
              href={project.githubUrl}
              variant="primary"
              className="project-link"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GithubIcon size={15} />
              <span>GitHub Repository</span>
              <ArrowUpRight size={14} />
            </Button>

            <button
              type="button"
              className="btn btn-outline project-link"
              onClick={() => setShowModal(true)}
            >
              <Info size={15} />
              <span>Details & Pipeline</span>
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="project-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="project-modal-header">
              <div>
                <span className="project-category-meta">{project.category}</span>
                <h2 className="project-modal-title">{project.title}</h2>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="project-modal-body">
              <p className="modal-description">{project.description}</p>

              {project.architecture && (
                <div className="modal-section">
                  <h4 className="modal-section-title">
                    <Layers size={16} />
                    <span>System Architecture Pipeline</span>
                  </h4>
                  <div className="architecture-box">{project.architecture}</div>
                </div>
              )}

              {project.highlights && (
                <div className="modal-section">
                  <h4 className="modal-section-title">
                    <CheckCircle2 size={16} />
                    <span>Key Engineering Highlights</span>
                  </h4>
                  <ul className="modal-highlights-list">
                    {project.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-section">
                <h4 className="modal-section-title">Technologies Used</h4>
                <div className="project-tech-row">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-modal-footer">
              <Button href={project.githubUrl} variant="primary">
                <GithubIcon size={16} />
                <span>View Source Code on GitHub</span>
                <ArrowUpRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
