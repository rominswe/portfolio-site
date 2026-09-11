export interface Interest {
  id: string
  title: string
  description: string
  icon: string
}

export const interests: Interest[] = [
  {
    id: 'deep-learning',
    title: 'Deep Learning & Computer Vision',
    description: 'Developing CNN models for writer identification, sliding-window feature extraction, and image processing pipelines.',
    icon: 'Sparkles',
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Web & Software Automation',
    description: 'Building modular React frontends, Express.js REST APIs, and MySQL schemas, alongside workflow automation tools developed during industrial training at ViTrox.',
    icon: 'Code2',
  },
  {
    id: 'ml-analytics',
    title: 'Machine Learning & Time-Series Anomaly Detection',
    description: 'Applying autoencoders and XGBoost classification on physiological dataset signals for seizure forecasting and predictive risk scoring.',
    icon: 'BriefcaseBusiness',
  },
]
