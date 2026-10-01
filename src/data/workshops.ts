export type WorkshopPhase = {
  title: string
  description: string
}

export type Workshop = {
  id: string
  number: string
  title: string
  heading: string
  overview: string
  phases: WorkshopPhase[]
  briefUrl: string
}

const rawWorkshops: Omit<Workshop, 'id' | 'number'>[] = [
  {
    title: 'Vision Alignment',
    heading: 'Vision Alignment & Roadmapping Workshop',
    overview:
      'Align stakeholders around a shared vision, prioritize strategic initiatives, and create a phased roadmap that turns ambition into actionable next steps.',
    briefUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQDLuthx2b1iRL8PNFoeTFJ4AaR28dbuZiM2Dm9bRow7x44?e=iEDh98&download=1',
    phases: [
      {
        title: 'Evaluate',
        description:
          'Assess customer experience, processes, technology, and organizational readiness to identify key gaps and opportunities.',
      },
      {
        title: 'Define',
        description:
          'Co-create a future-state vision, prioritize initiatives, and build a phased roadmap.',
      },
      {
        title: 'Measure',
        description:
          'Define success criteria and metrics to track progress and guide ongoing refinement.',
      },
    ],
  },
  {
    title: 'Discovery & Definition',
    heading: 'Discovery & Definition Workshop',
    overview:
      "Gain clarity on business needs, user challenges, and experience gaps to ensure you're solving the right problem and prioritizing the most valuable opportunities.",
    briefUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQBGgkyZ07piT7PYhOV1N6-3AZxeI8boby1gUbEaqTqsRWw?e=S4fcmt&download=1',
    phases: [
      {
        title: 'Discover',
        description: 'Understand business goals, user needs, and key pain points.',
      },
      {
        title: 'Evaluate',
        description: 'Assess the current experience and identify opportunities for improvement.',
      },
      {
        title: 'Define',
        description: 'Prioritize enhancements and create a roadmap focused on delivering value.',
      },
    ],
  },
  {
    title: 'Business AI',
    heading: 'Business AI Workshop',
    overview:
      'Identify where AI can deliver the greatest business value, prioritize practical use cases, and create a roadmap for successful adoption to drive meaningful transformation across an organisation.',
    briefUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQBZcnZpe19CRbUAs0lqfGYcAQfsLxEZEdvXVagSktOKlrk?e=ofIsla&download=1',
    phases: [
      {
        title: 'Discover',
        description:
          'Explore business priorities, data, and transformation goals to uncover AI opportunities.',
      },
      {
        title: 'Define',
        description: 'Evaluate and prioritize AI use cases based on impact and feasibility.',
      },
      {
        title: 'Plan',
        description: 'Build a strategic roadmap and prepare for implementation and adoption.',
      },
    ],
  },
  {
    title: 'Process Design',
    heading: 'Process Design Workshop',
    overview:
      'Design efficient, user-centered processes by identifying inefficiencies, uncovering automation opportunities, and creating a scalable path forward.',
    briefUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQArRUPC4jp7S4v5X14eXEORAehUTQ3rFgS4gzLWFuKLxJk?e=vnSZTL&download=1',
    phases: [
      {
        title: 'Discover',
        description:
          'Map existing workflows and identify friction points, manual effort, and unnecessary handoffs.',
      },
      {
        title: 'Evaluate',
        description: 'Assess current processes against business expectations and industry best practices.',
      },
      {
        title: 'Define',
        description: 'Redesign processes to better align user needs, business goals, and future growth.',
      },
    ],
  },
  {
    title: 'Experience Trends',
    heading: 'Experience Trends Alignment Workshop',
    overview:
      'Assess how well your digital experiences align with evolving user expectations and identify opportunities to future-ready your transformation efforts.',
    briefUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQDUdRb6ERwBSanKD9lyK4aNAbk77A93RUuJcY-hNWUhgJU?e=rIpAd7&download=1',
    phases: [
      {
        title: 'Determine',
        description: 'Identify the trends that matter most based on business priorities.',
      },
      {
        title: 'Recognize',
        description: 'Uncover gaps within the current digital ecosystem.',
      },
      {
        title: 'Identify',
        description: 'Pinpoint opportunities to better align experiences with evolving trends.',
      },
      {
        title: 'Verify',
        description: 'Validate ideas and assess their potential impact.',
      },
      {
        title: 'Explore',
        description: 'Examine business priorities and customer needs to refine opportunities.',
      },
      {
        title: 'Refine',
        description: 'Prioritize initiatives and shape a roadmap for action.',
      },
    ],
  },
  {
    title: 'Product Adoption',
    heading: 'Product Adoption & Retention Workshop',
    overview:
      "Uncover what's limiting adoption and engagement, then co-create solutions that improve user experience, retention, and long-term value.",
    briefUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQAECMsgblIOR5FHL6ZeeG8dAWl3AdUxj1dlZixCWKXEYLA?e=jNviGH&download=1',
    phases: [
      {
        title: 'Pre-Discovery',
        description: 'Gather data, user feedback, and business context.',
      },
      {
        title: 'Insight Immersion & Discussion',
        description: 'Identify adoption barriers, friction points, and growth opportunities.',
      },
      {
        title: 'Outcome Mapping & Roadmap',
        description: 'Prioritize solutions and create a clear action plan for measurable outcomes.',
      },
    ],
  },
  {
    title: 'Service Design',
    heading: 'Service Design Workshop',
    overview:
      'Identify service gaps and design scalable, human-centered experiences that create seamless connections across people, processes, and platforms.',
    briefUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQDi8tlkrZcmSrKSViI4PACgAUB9tzkK9E6xr59e6Ju02-A?e=22NyIS&download=1',
    phases: [
      {
        title: 'Identify',
        description: 'Analyze current customer journeys, stakeholder perspectives, and user needs.',
      },
      {
        title: 'Inspect',
        description:
          'Evaluate experience and technology gaps, benchmark against industry standards, and uncover improvement opportunities.',
      },
      {
        title: 'Ideate & Iterate',
        description: 'Co-create future-state service experiences, blueprints, and implementation roadmaps.',
      },
    ],
  },
  {
    title: 'Solution Rollout',
    heading: 'Solution Rollout Strategy Workshop',
    overview:
      'Develop a structured rollout strategy that aligns teams, addresses adoption barriers, and supports successful implementation and long-term adoption.',
    briefUrl:
      'https://globalappsportal.sharepoint.com/:b:/s/XENTeam/IQD_LxbEpJNpRqGWfcXR5pjQASMZAUQ2_5RZZcsXAmAQZCc?e=Wddrgj&download=1',
    phases: [
      {
        title: 'Planning',
        description:
          'Identify journey changes, uncover friction points, and prioritize areas that need attention.',
      },
      {
        title: 'Solution Activation',
        description: 'Define actions, ownership, dependencies, and contingencies for rollout success.',
      },
      {
        title: 'Post Launch',
        description: 'Monitor adoption, track outcomes, and refine the strategy for sustained impact.',
      },
    ],
  },
]

export const workshops: Workshop[] = rawWorkshops.map((workshop, i) => ({
  ...workshop,
  id: workshop.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  number: String(i + 1).padStart(2, '0'),
}))
