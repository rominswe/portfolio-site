import { useState, useMemo } from 'react'
import { Search, Filter, Layers } from 'lucide-react'
import { projects } from '../data/index'
import { ProjectCard } from '../components/projects/ProjectCard'
import { SectionHeader } from '../components/ui'

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)))
    return ['All', ...cats]
  }, [])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory

      const query = searchQuery.toLowerCase()
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query))

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="page-projects shell">
      <SectionHeader
        kicker="02 / Selected Works"
        title="Featured Projects"
        subtitle="Explore full-stack web applications, CPU-optimized deep learning models, and EEG time-series machine learning research."
        className="page-header"
      />

      <div className="projects-filter-bar">
        <div className="category-filter-chips">
          <Filter size={15} className="filter-icon" />
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-search-box">
          <Search size={15} className="search-icon" />
          <input
            type="text"
            placeholder="Search by title or tech stack (e.g. React, Python, Keras)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="projects-search-input"
          />
        </div>
      </div>

      <div className="projects-results-count">
        <Layers size={14} />
        <span>
          Showing {filteredProjects.length} of {projects.length} projects
        </span>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="projects-list">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <div className="no-projects-found">
          <h3>No projects match your search criteria</h3>
          <p>Try selecting another category or clearing your search term.</p>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setSelectedCategory('All')
              setSearchQuery('')
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  )
}
