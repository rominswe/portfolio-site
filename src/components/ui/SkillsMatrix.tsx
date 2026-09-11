import { useState } from 'react'
import { skillsData } from '../../data/skills'
import { Search, Sparkles, Code2, Layers, Wrench } from 'lucide-react'

const categories = ['All', 'Data Science & AI', 'Full-Stack & Software', 'Tools & Technologies']

export function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Data Science & AI':
        return <Sparkles size={14} />
      case 'Full-Stack & Software':
        return <Code2 size={14} />
      case 'Tools & Technologies':
        return <Wrench size={14} />
      default:
        return <Layers size={14} />
    }
  }

  return (
    <div className="skills-matrix-wrapper">
      <div className="skills-controls-bar">
        <div className="skills-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`skills-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        <div className="skills-search-box">
          <Search size={15} className="skills-search-icon" />
          <input
            type="text"
            placeholder="Filter technologies & tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="skills-search-input"
          />
        </div>
      </div>

      <div className="skills-grid">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-card-header">
                <h4 className="skill-name">{skill.name}</h4>
              </div>
              <p className="skill-desc">{skill.description}</p>
              <div className="skill-category-tag">
                {getCategoryIcon(skill.category)}
                <span>{skill.category}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="skills-empty-state">
            <p>No technologies found matching &quot;{searchQuery}&quot;</p>
          </div>
        )}
      </div>
    </div>
  )
}
