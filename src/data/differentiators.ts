import stage1 from '../assets/images/diff/stage-1.jpg'
import stage2 from '../assets/images/diff/stage-2.jpg'
import stage3 from '../assets/images/diff/stage-3.jpg'
import stage4 from '../assets/images/diff/stage-4.jpg'
import stage5 from '../assets/images/diff/stage-5.jpg'
import stage6 from '../assets/images/diff/stage-6.jpg'
import stage7 from '../assets/images/diff/stage-7.jpg'
import stage8 from '../assets/images/diff/stage-8.jpg'
import stage9 from '../assets/images/diff/stage-9.jpg'
import stage10 from '../assets/images/diff/stage-10.jpg'
import surprise1 from '../assets/images/diff/surprise-1.jpg'
import surprise2 from '../assets/images/diff/surprise-2.jpg'
import surprise3 from '../assets/images/diff/surprise-3.jpg'
import surprise4 from '../assets/images/diff/surprise-4.jpg'
import surprise5 from '../assets/images/diff/surprise-5.jpg'
import surprise6 from '../assets/images/diff/surprise-6.jpg'
import surprise7 from '../assets/images/diff/surprise-7.jpg'
import surprise8 from '../assets/images/diff/surprise-8.jpg'
import surprise9 from '../assets/images/diff/surprise-9.jpg'
import engage1 from '../assets/images/diff/engage-1.jpg'
import engage2 from '../assets/images/diff/engage-2.jpg'
import engage3 from '../assets/images/diff/engage-3.jpg'
import engage4 from '../assets/images/diff/engage-4.jpg'
import engage5 from '../assets/images/diff/engage-5.jpg'
import engage6 from '../assets/images/diff/engage-6.jpg'
import engage7 from '../assets/images/diff/engage-7.jpg'
import engage8 from '../assets/images/diff/engage-8.jpg'

export type DifferentiatorSlide = {
  src: string
  caption: string
  crop?: { left: string; width: string }
}

export type DifferentiatorGroup = {
  highlight: string
  slides: DifferentiatorSlide[]
}

export type DifferentiatorTab = {
  key: string
  label: string
  layout: 'quad' | 'stacked'
  /** quad: two columns of two groups. stacked: three columns, each a stack of slide rows. */
  columns: DifferentiatorGroup[][]
  /** stacked layout only: slide counts per row for each column */
  rows?: number[][]
}

export const differentiatorTabs: DifferentiatorTab[] = [
  {
    key: 'stage',
    label: 'We set the stage',
    layout: 'quad',
    columns: [
      [
        {
          highlight: 'Local',
          slides: [
            { src: stage1, caption: 'Snacks' },
            { src: stage2, caption: 'Props' },
            { src: stage3, caption: 'Mementos' },
          ],
        },
        {
          highlight: 'Uncomfortable',
          slides: [
            { src: stage4, caption: 'No-shoe zone' },
            { src: stage5, caption: 'No laptop/phone usage' },
          ],
        },
      ],
      [
        {
          highlight: 'Comprehensive',
          slides: [
            { src: stage6, caption: 'Workshop primer' },
            { src: stage7, caption: 'In-depth research' },
            { src: stage8, caption: 'Multi-functional teams' },
          ],
        },
        {
          highlight: 'Informal',
          slides: [
            { src: stage9, caption: 'Casual clothing' },
            { src: stage10, caption: 'Unlimited munches' },
          ],
        },
      ],
    ],
  },
  {
    key: 'surprise',
    label: 'We design for surprise',
    layout: 'quad',
    columns: [
      [
        {
          highlight: 'Engaging',
          slides: [
            { src: surprise1, caption: 'Whiteboarding' },
            { src: surprise2, caption: 'Role-playing', crop: { left: '-71.44%', width: '242.88%' } },
            { src: surprise3, caption: 'Gamified experiences' },
          ],
        },
        {
          highlight: 'Competitive',
          slides: [
            { src: surprise4, caption: 'Stress-test solutions' },
            { src: surprise5, caption: 'Encourage competing viewpoints' },
          ],
        },
      ],
      [
        {
          highlight: 'Urgent',
          slides: [
            { src: surprise6, caption: 'Large bank of ideas' },
            { src: surprise7, caption: 'Time-bound activities' },
          ],
        },
        {
          highlight: 'Fun',
          slides: [
            { src: surprise8, caption: 'Icebreakers/games' },
            { src: surprise9, caption: 'Music, Drum circles, Karaoke' },
          ],
        },
      ],
    ],
  },
  {
    key: 'participants',
    label: 'We engage participants',
    layout: 'stacked',
    rows: [[1, 1], [1, 2], [1, 2]],
    columns: [
      [
        {
          highlight: 'Unpredictable',
          slides: [
            { src: engage1, caption: 'Set up the rooms for surprises' },
            { src: engage3, caption: 'AI-integrated activities' },
          ],
        },
      ],
      [
        {
          highlight: 'Memorable',
          slides: [
            { src: engage2, caption: 'XENBooks' },
            { src: engage4, caption: 'Personalized badges' },
            { src: engage5, caption: 'Sketch notes' },
          ],
        },
      ],
      [
        {
          highlight: 'AI-everywhere',
          slides: [
            { src: engage6, caption: 'AI as an orchestrator' },
            { src: engage7, caption: 'AI-enabled demos' },
            { src: engage8, caption: 'AI avatar participants', crop: { left: '-56.49%', width: '156.77%' } },
          ],
        },
      ],
    ],
  },
]
