export type FocusArea = {
  id: string
  label: string
  color: string
  inset: string
}

export const focusAreas: FocusArea[] = [
  {
    id: 'understanding',
    label: 'Understanding the problem',
    color: 'rgba(90,82,237,0.88)',
    inset: 'inset-[15.67%_34.59%_15.36%_33.43%]',
  },
  {
    id: 'people',
    label: 'Learning about people',
    color: 'rgba(3,40,209,0.82)',
    inset: 'inset-[0_63.08%_34.17%_6.4%]',
  },
  {
    id: 'business',
    label: 'Getting to know the business',
    color: 'rgba(83,143,228,0.8)',
    inset: 'inset-[0_12.79%_37.3%_58.14%]',
  },
  {
    id: 'solutions',
    label: 'Exploring solutions',
    color: 'rgba(93,58,191,0.85)',
    inset: 'inset-[45.14%_57.56%_0_17.01%]',
  },
  {
    id: 'validation',
    label: 'Validating concepts',
    color: 'rgba(226,84,84,0.82)',
    inset: 'inset-[42.01%_12.79%_0_60.32%]',
  },
]

export type ToolCard = {
  id: string
  title: string
  eyebrow: string
  color: string
  rotate: number
  centerX: number
  centerY: number
}

export const toolCards: ToolCard[] = [
  {
    id: 'empathy-map',
    title: 'Empathy Map',
    eyebrow: 'Learn about people',
    color: '#5d3abf',
    rotate: -11,
    centerX: 19.4,
    centerY: 28.6,
  },
  {
    id: 'how-might-we',
    title: 'How Might We',
    eyebrow: 'Explore solutions',
    color: '#538fe4',
    rotate: 0,
    centerX: 50.1,
    centerY: 25.5,
  },
  {
    id: 'customer-journey',
    title: 'Customer Journey',
    eyebrow: 'Understand the problem',
    color: '#e25454',
    rotate: 11,
    centerX: 80.6,
    centerY: 28.5,
  },
  {
    id: 'persona',
    title: 'Persona',
    eyebrow: 'Know the business',
    color: '#2041ce',
    rotate: -7,
    centerX: 35.8,
    centerY: 71.9,
  },
  {
    id: 'card-sorting',
    title: 'Card Sorting',
    eyebrow: 'Know the business',
    color: '#2041ce',
    rotate: 7,
    centerX: 65.5,
    centerY: 72.5,
  },
]

export const dotMatrixOpacities = [
  0.55, 0.15, 0.15, 0.3, 0.15, 0.15, 0.3, 0.55, 0.15, 0.3, 0.15, 0.15, 0.3,
  0.15, 0.55, 0.3, 0.15, 0.15, 0.3, 0.15,
]
