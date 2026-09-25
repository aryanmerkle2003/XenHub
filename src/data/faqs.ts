export type Faq = {
  question: string
  answer: string
}

export type FaqSection = {
  id: string
  topic: string
  faqs: Faq[]
}

export const faqSections: FaqSection[] = [
  {
    id: 'about-xen',
    topic: 'About XEN',
    faqs: [
      {
        question: 'What is XEN?',
        answer:
          'XEN is a mindset and methodology for problem-solving, brought to life through research-driven, design-doing workshops that turn ambiguity into actionable roadmaps.',
      },
      {
        question: 'How are XEN workshops different?',
        answer:
          'Most workshops run on slides and sticky notes; ours run on snacks, Lego, and AI avatars. We set the stage by making the space local, comprehensive, uncomfortable, and informal. We engage participants by making it engaging, competitive, urgent, and fun. And we design for surprise by making it unpredictable, memorable, and AI-everywhere.',
      },
      {
        question: "What's the difference between XEN LAB, XEN-in-a-Box, and XEN Unwired?",
        answer:
          'XEN LAB is the full in-person experience at a dedicated space in Pune or Bangalore. XEN-in-a-Box takes that experience on the road in a portable format, so teams can recreate it anywhere. XEN Unwired brings the same spirit online for fully remote sessions.',
      },
    ],
  },
  {
    id: 'pitching-engagements',
    topic: 'Pitching & Engagements',
    faqs: [
      {
        question: 'When can we pitch XEN?',
        answer:
          "Anytime you spot an opportunity for structured problem-solving — a client kickoff, a mid-engagement pivot, or a standalone strategy ask. Use the Presentation Decks under Pitch to introduce XEN and confidently position the right workshop for the client's need.",
      },
      {
        question: 'What does a typical XEN engagement look like?',
        answer:
          'It follows a design-doing journey — usually Discover, Define, Evaluate, and Align & Activate — bringing together multifunctional teams to solve a real business challenge. Along the way, XENTools guide ideation and problem-solving, and the engagement is documented in a XENBook so the client walks away with a lasting, tangible record of the experience.',
      },
      {
        question: "What's the typical engagement length?",
        answer:
          'It depends on the workshop offering — engagements can range from a few days for a focused Discovery & Definition session to several weeks for a full Vision Alignment & Roadmapping or Solution Rollout Strategy engagement. Check the specific Workshop Overview page for phase-by-phase timelines.',
      },
      {
        question: "What's the typical ROI or outcome clients see from a XEN engagement?",
        answer:
          'Outcomes vary by workshop, but engagements are designed to end in a concrete deliverable — a roadmap, a set of validated use cases, or an activation plan — jointly owned by the client. Specific ROI examples will be available in the upcoming Case Studies section.',
      },
      {
        question: 'Do we have case studies or client testimonials I can share?',
        answer:
          'Case Studies are coming soon on the XEN Hub — in the meantime, use the Presentation Decks for client-ready storytelling.',
      },
    ],
  },
  {
    id: 'workshop-offerings',
    topic: 'Workshop Offerings',
    faqs: [
      {
        question: 'Which of the 8 workshop offerings should I pick for my client?',
        answer:
          'It depends on where the client is in their journey — Vision Alignment & Roadmapping for early-stage direction-setting, Discovery & Definition for understanding the current state, Business AI or Process Design for specific functional needs, and Product Adoption & Retention, Service Design, or Solution Rollout Strategy for later-stage execution. Browse the Workshop Overview page to match the right one.',
      },
      {
        question: 'Can we combine multiple workshop offerings into one engagement?',
        answer:
          'Yes — many engagements string together more than one offering (for example, Discovery & Definition followed by Vision Alignment & Roadmapping) to move a client from insight to action.',
      },
    ],
  },
  {
    id: 'tools-resources',
    topic: 'Tools & Resources',
    faqs: [
      {
        question:
          'What are XENTools and when should I use the Recommender vs. browsing manually?',
        answer:
          'XENTools are our curated design-doing frameworks, organized into five focus areas (Learning About People, Understanding the Problem, Exploring Solutions, Validating Concepts, Getting to Know the Business). Use the XENTools Recommender when you know your focus and desired outcome and want a quick match; browse manually when you want to explore the full library.',
      },
      {
        question: 'How do I propose a new XENTool or XEN Skill?',
        answer:
          'Use the "Propose a new XENTool" or "Propose a new XEN Skill" prompts on their respective pages — submissions are reviewed and added to the library if they strengthen the collection.',
      },
      {
        question:
          'Where do I find pre-approved comms templates for client outreach before/after a workshop?',
        answer:
          'Under Communication Templates, organized by Pre-Workshop and Post-Workshop phases — covering kickoff meetings, workshop invites, primers, countdowns, and agendas.',
      },
      {
        question: 'Can I use XEN logos/media in an external-facing pitch deck?',
        answer:
          'Yes — XEN Media has approved logos, workshop images, virtual backgrounds, and videos specifically for use across pitches, case studies, and internal communications.',
      },
    ],
  },
  {
    id: 'getting-started',
    topic: 'Getting Started',
    faqs: [
      {
        question: "I've never run a XEN workshop — where do I start?",
        answer:
          'Start with Explore XEN and Workshop Overview under Learn to understand the methodology, then review the Workshop Offerings to find the right fit for your situation.',
      },
      {
        question: 'Who do I contact if I have a question not covered here?',
        answer:
          'Reach out via Connect with Us — the XEN team (Saranic Banerjee, Kapil Dwivedi, Melinda Rodrigues, Khushi Kavathekar, Saadeen Anwar) is there to help, or email xen.core@merkle.com.',
      },
    ],
  },
]
