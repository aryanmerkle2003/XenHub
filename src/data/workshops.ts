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
}

const rawWorkshops: Omit<Workshop, 'id' | 'number'>[] = [
  {
    title: 'Vision Alignment',
    heading: 'Vision Alignment & Roadmapping Workshop',
    overview:
      'Align stakeholders around a shared vision, prioritize strategic initiatives, and create a phased roadmap that turns ambition into actionable next steps.',
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
