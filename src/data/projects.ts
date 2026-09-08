export interface Project {
  id: number
  title: string
  description: string
  category: string
  year: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  imageUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Agriculture Greenhouse Monitoring',
    description:
      'An IoT greenhouse environmental monitoring project built using ESP32 microcontrollers to stream sensor telemetry via MQTT to a ThingsBoard cloud dashboard.',
    category: 'IoT & Embedded Systems',
    year: '2025',
    technologies: ['ESP32', 'C++', 'MQTT', 'ThingsBoard', 'Sensors'],
    githubUrl: 'https://github.com/rominswe/smart_agriculture-greenhouse_monitoring',
    featured: true,
  },
  {
    id: 2,
    title: 'Handwriting Recognition Model',
    description:
      'A computer vision exploration using Convolutional Neural Networks and OpenCV image preprocessing to classify handwritten text and characters.',
    category: 'Deep Learning & CV',
    year: '2025',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'CNN', 'Deep Learning'],
    githubUrl: 'https://github.com/rominswe/hand_writing_recognition',
    featured: true,
  },
  {
    id: 3,
    title: 'Seizure Forecasting Prototype',
    description:
      'A predictive machine learning model prototype utilizing time-series analysis on physiological dataset features to explore seizure forecasting for healthcare data.',
    category: 'Predictive AI & Healthcare',
    year: '2025',
    technologies: ['Python', 'Machine Learning', 'Time-Series', 'Scikit-Learn', 'Pandas'],
    githubUrl: 'https://github.com/rominswe/seizure_forecasting',
    featured: true,
  },
]
