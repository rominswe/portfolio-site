import { projects } from '../data/index'
import { ProjectCard } from '../components/projects/ProjectCard'
import { SectionHeader } from '../components/ui'

export function Projects() {
  return (
    <div className="page-projects shell">
      <SectionHeader
        kicker="02 / Selected Works"
        title="Featured Projects"
        subtitle="A showcase of three main projects spanning IoT telemetry, deep learning computer vision, and predictive healthcare machine learning."
        className="page-header"
      />

      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
