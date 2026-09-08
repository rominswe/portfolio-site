export interface Interest {
  id: string
  title: string
  description: string
  icon: string
}

export const interests: Interest[] = [
  {
    id: 'ai-ml',
    title: 'Deep Learning & Computer Vision',
    description: 'Developing neural network models for pattern recognition, image classification, and handwriting analysis.',
    icon: 'Sparkles',
  },
  {
    id: 'iot-embedded',
    title: 'IoT & Telemetry Systems',
    description: 'Building micro-controller telemetry platforms with ESP32, MQTT protocol, and cloud dashboards for real-time sensing.',
    icon: 'Code2',
  },
  {
    id: 'data-science',
    title: 'Predictive Modeling & Healthcare AI',
    description: 'Applying time-series analysis and machine learning algorithms for predictive healthcare forecasting and data analysis.',
    icon: 'BriefcaseBusiness',
  },
]
