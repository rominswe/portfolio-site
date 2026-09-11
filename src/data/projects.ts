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
  highlights?: string[]
  architecture?: string
  keyFeatures?: string[]
  role?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Postgraduate Progress Tracking System',
    description:
      'A full-stack web application featuring role-based dashboards for Admins, Supervisors, and Students to manage authentication, progress tracking, and version-controlled document submission workflows.',
    category: 'Full-stack Web Application',
    role: 'Software Engineer',
    year: '2025',
    technologies: ['React', 'Express.js', 'Node.js', 'MySQL', 'JavaScript'],
    githubUrl: 'https://github.com/rominswe/pg-progress',
    featured: true,
    highlights: [
      'Assembled a modular React frontend supporting role-based dashboards for Admin, Supervisor, and Student views',
      'Engineered backend REST APIs using Express.js for authentication and version-controlled document workflows',
      'Structured and optimized MySQL database schema to handle multi-role access, supervision history, and status transitions'
    ],
    architecture: 'React Frontend -> Express.js REST API -> MySQL Database Schema',
    keyFeatures: ['Role-based dashboards', 'Document submission tracking', 'Multi-role access control']
  },
  {
    id: 2,
    title: 'Handwriting Writer Identification System',
    description:
      'A CPU-optimized CNN writer identification system built in Keras to classify handwritten document images into 70 writers with high accuracy on a GPU-free Windows deployment environment.',
    category: 'Deep Learning',
    role: 'Deep Learning Engineer',
    year: '2025',
    technologies: ['Python', 'Keras', 'TensorFlow', 'OpenCV', 'CNN'],
    githubUrl: 'https://github.com/rominswe/hand_writing_recognition',
    featured: true,
    highlights: [
      'Classified handwritten document images into 70 distinct writers with strong per-class F1 performance on CPU',
      'Implemented sliding-window image slicing with variance filtering, data augmentation, and label smoothing',
      'Validated multi-class performance using accuracy metrics, confusion matrix analysis, and F1-score evaluation'
    ],
    architecture: 'Document Image Slicing -> Variance Filtering & Augmentation -> Keras CNN Inference Pipeline',
    keyFeatures: ['70-writer classification', 'CPU-optimized deployment', 'Sliding-window image slicing']
  },
  {
    id: 3,
    title: 'Seizure Forecasting System Using EEG Signals',
    description:
      'A research machine learning system utilizing autoencoder-based anomaly detection combined with XGBoost classification on CHB-MIT EEG signals (~700k windows, 24 subjects) to forecast seizures.',
    category: 'Machine Learning & Research',
    role: 'Machine Learning Engineer',
    year: '2025',
    technologies: ['Python', 'Machine Learning', 'Autoencoders', 'XGBoost', 'Scikit-Learn', 'Pandas'],
    githubUrl: 'https://github.com/rominswe/seizure_forecasting',
    featured: true,
    highlights: [
      'Processed CHB-MIT EEG dataset comprising ~700,000 time-series windows across 24 subjects',
      'Combined autoencoder anomaly detection with XGBoost classification for severe class imbalance',
      'Achieved ~99% accuracy while evaluating sensitivity, false-alarm rates, and F1-scores'
    ],
    architecture: 'EEG Time-Series Signals -> Autoencoder Feature Extraction -> XGBoost Classifier -> Early Warning Alert',
    keyFeatures: ['EEG time-series analysis', 'Autoencoder anomaly detection', 'Imbalanced data handling']
  },
  {
    id: 4,
    title: 'Smart Greenhouse Monitoring System',
    description:
      'An academic IoT monitoring system designed in Wokwi with ESP32 microcontrollers to collect real-time environmental telemetry (DHT22, soil moisture, gas sensors) and trigger decision logic.',
    category: 'Academic Project',
    role: 'IoT Project',
    year: '2026',
    technologies: ['ESP32', 'C++', 'Wokwi', 'Sensors', 'MQTT'],
    githubUrl: 'https://github.com/rominswe/smart_agriculture-greenhouse_monitoring',
    featured: false,
    highlights: [
      'Simulated real-world greenhouse environmental control scenarios in Wokwi environment',
      'Integrated DHT22 temperature & humidity, soil moisture, and gas sensors for data collection',
      'Engineered threshold-driven decision logic triggering alert responses (LED and buzzer)'
    ],
    architecture: 'Wokwi ESP32 Simulation -> Sensor Telemetry -> Threshold Alert Logic -> Actuator Triggers',
    keyFeatures: ['Environmental sensing', 'Threshold-driven alert logic', 'Microcontroller simulation']
  },
]
