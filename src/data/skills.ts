export interface SkillItem {
  name: string
  description: string
  category: string
}

export const skillsData: SkillItem[] = [
  { name: 'Python & Data Ecosystem', description: 'Data processing, PyTorch, Keras, Scikit-Learn, Pandas, OpenCV', category: 'Data Science & AI' },
  { name: 'Deep Learning & Neural Networks', description: 'CNN modeling, image classification, sliding-window feature extraction', category: 'Data Science & AI' },
  { name: 'Machine Learning & Time-Series', description: 'Autoencoders, XGBoost classification, feature engineering on EEG data', category: 'Data Science & AI' },
  { name: 'React & Web Development', description: 'Building modular component interfaces, role-based dashboards, and responsive layouts', category: 'Full-Stack & Software' },
  { name: 'Node.js & Express.js', description: 'Creating backend REST APIs, authentication endpoints, and submission workflows', category: 'Full-Stack & Software' },
  { name: 'SQL & MySQL Databases', description: 'Relational database schema design, querying, and multi-role data access', category: 'Full-Stack & Software' },
  { name: 'Workflow Automation', description: 'Internal desktop/CLI software tools for vision inspection workflows developed at ViTrox', category: 'Full-Stack & Software' },
  { name: 'Linux & Version Control', description: 'Linux (Ubuntu) environment, Git version control, Windows, Jupyter Notebooks', category: 'Tools & Technologies' },
  { name: 'Analytics & Developer Tools', description: 'Power BI data visualization, Azure basics, LucidChart architecture diagrams', category: 'Tools & Technologies' },
]
