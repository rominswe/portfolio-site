export interface Profile {
  name: string
  role: string
  intro: string
  bio: string
  email: string
  github: string
  linkedin: string
  education: string
  university: string
  experience: string
}

export const profile: Profile = {
  name: 'Ro Min Swe',
  role: 'Software & Machine Learning Engineer',
  intro:
    'Computer Science student who completed an industrial training at ViTrox, passionate about building full-stack web applications, deep learning computer vision systems, and workflow automation solutions.',
  bio:
    'I am a Computer Science student at Albukhary International University (concentrating in Data Science, Deep Learning, and NLP) who completed industrial training at ViTrox. My experience spans full-stack web development (React, Express.js, MySQL), computer vision & CNN models, machine learning time-series forecasting, and software process automation.',
  email: 'rominswe@gmail.com',
  github: 'https://github.com/rominswe',
  linkedin: 'https://www.linkedin.com/in/ro-swe/',
  education: 'Bachelor of Computer Science (Data Science, Deep Learning, NLP)',
  university: 'Albukhary International University',
  experience: 'Completed Industrial Training at ViTrox',
}
