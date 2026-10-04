import headset from '../assets/images/comms/headset.svg'
import calendarDot from '../assets/images/comms/calendar-dot.svg'
import bookOpenText from '../assets/images/comms/book-open-text.svg'
import hourglass from '../assets/images/comms/hourglass.svg'
import clipboard from '../assets/images/comms/clipboard.svg'
import handshake from '../assets/images/comms/handshake.svg'
import video from '../assets/images/comms/video.svg'
import newspaper from '../assets/images/comms/newspaper.svg'
import bookBookmark from '../assets/images/comms/book-bookmark.svg'
import trendUp from '../assets/images/comms/trend-up.svg'

export type CommsPhase = 'pre' | 'post'

export type CommsTemplate = {
  title: string
  format: string
  timing: string
  icon: string
  // Add a Figma link here to enable the card's redirect button and remove its "coming soon" tag.
  figmaUrl?: string
}

const FIGMA = 'https://www.figma.com/design/cSHdZDwpus8fkbM6z6Rdjb/XEN-Hub-Xen-Comms-Templates'

export const commsTemplates: Record<CommsPhase, CommsTemplate[]> = {
  pre: [
    {
      title: 'Pre-Workshop Connect',
      format: 'Email + Calendar blocker',
      timing: 'Kick-off meeting',
      icon: headset,
      figmaUrl: `${FIGMA}?node-id=325-6697`,
    },
    {
      title: 'Workshop Invite',
      format: 'Email + Calendar blocker',
      timing: '7–15 days before',
      icon: calendarDot,
      figmaUrl: `${FIGMA}?node-id=325-6696`,
    },
    {
      title: 'Workshop Primer',
      format: 'Email + Hyperlinked PPT',
      timing: '5–10 days before',
      icon: bookOpenText,
      figmaUrl: `${FIGMA}?node-id=355-17098`,
    },
    {
      title: 'Countdowns / Reminders',
      format: 'Email',
      timing: '2–5 days before',
      icon: hourglass,
      figmaUrl: `${FIGMA}?node-id=10-1091`,
    },
    {
      title: 'Agenda',
      format: 'Email + Virtual background',
      timing: '1 day before',
      icon: clipboard,
      figmaUrl: `${FIGMA}?node-id=33-2700`,
    },
  ],
  post: [
    {
      title: 'Thank you',
      format: 'Email',
      timing: '1 day after',
      icon: handshake,
      figmaUrl: `${FIGMA}?node-id=11-1310`,
    },
    {
      title: 'Workshop Video',
      format: 'Email + Hyperlinked Video',
      timing: '10–15 days after',
      icon: video,
    },
    {
      title: 'Summary Report',
      format: 'Email + PPT',
      timing: '20 days after',
      icon: newspaper,
    },
    {
      title: 'XENBook',
      format: 'Email + PDF Document',
      timing: '30 days after',
      icon: bookBookmark,
    },
    {
      title: 'Impact of Workshop',
      format: 'Email + PDF Report',
      timing: '90–120 days after',
      icon: trendUp,
    },
  ],
}
