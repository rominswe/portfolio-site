import { ArrowUpRight } from 'lucide-react'
import { Project } from '../../data/projects'
import { GithubIcon, Badge, Button } from '../ui'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const formattedIndex = String(index + 1).padStart(2, '0')
  const isEven = index % 2 === 1

  return (
    <div className={`project-item ${isEven ? 'reverse' : ''}`}>
      {project.imageUrl && (
        <div className="project-item-visual">
          <img src={project.imageUrl} alt={project.title} className="project-image" />
        </div>
      )}

      <div className="project-item-info">
        <div className="project-meta-row">
          <span className="project-large-number">{formattedIndex}</span>
          <span className="project-category-meta">{project.category} • {project.year}</span>
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

          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              variant="outline"
              className="project-link"
              aria-label={`Live demo for ${project.title}`}
            >
              <span>Live Demo</span>
              <ArrowUpRight size={14} />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
