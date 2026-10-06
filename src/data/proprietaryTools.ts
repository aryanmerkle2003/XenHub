import iconMirror from '../assets/images/proprietary/mirror.svg'
import iconAiTarget from '../assets/images/proprietary/ai-target.svg'
import iconCompass from '../assets/images/proprietary/compass.svg'
import iconTrophy from '../assets/images/proprietary/trophy.svg'

export type ProprietaryTool = {
  title: string
  description: string
  icon: string
  figJamUrl: string
}

export const proprietaryTools: ProprietaryTool[] = [
  {
    title: 'Competitive Mirror',
    description:
      'See how competitors make people feel, where expectations form, and where your brand can create a sharper, more distinctive market position.',
    icon: iconMirror,
    figJamUrl: 'https://www.figma.com/new/template/2z5OXXu8apL3VUPkKSXIPD',
  },
  {
    title: 'AI Use Case Definition Canvas',
    description:
      'Turn a challenge into a focused AI use case by naming value, users, success measures, and what delivery needs to move from idea to action.',
    icon: iconAiTarget,
    figJamUrl: 'https://www.figma.com/new/template/ZpIlUhpvsN0IQycK4tRnII',
  },
  {
    title: 'North Star Canvas',
    description:
      'Define a clear ambition that guides teams, names the value to create, and sets success measures for every decision that follows.',
    icon: iconCompass,
    figJamUrl: 'https://www.figma.com/new/template/Tx3UvMjrm25tyfqrwejodI',
  },
  {
    title: 'Win With AI Canvas',
    description:
      'Translate the North Star into team priorities, winning beliefs, and clear initiatives that turn shared ambition into practical momentum.',
    icon: iconTrophy,
    figJamUrl: 'https://www.figma.com/new/template/yLQAGIkPIrhFk4vt2mEQnX',
  },
]
