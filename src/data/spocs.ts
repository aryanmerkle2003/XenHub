import avatarSaranic from '../assets/images/team/saranic-banerjee.jpg'
import avatarKapil from '../assets/images/team/kapil-dwivedi.jpg'
import avatarMelinda from '../assets/images/team/melinda-rodrigues.jpg'
import avatarKhushi from '../assets/images/team/khushi-kavathekar.jpg'
import avatarSaadeen from '../assets/images/team/saadeen-anwar.jpg'

export type Spoc = {
  name: string
  role: string
  avatar: string
}

export const spocs: Spoc[] = [
  {
    name: 'Saranic Banerjee',
    role: 'Experience Strategy Lead',
    avatar: avatarSaranic,
  },
  {
    name: 'Kapil Dwivedi',
    role: 'Content Strategist',
    avatar: avatarKapil,
  },
  {
    name: 'Khushi Kavathekar',
    role: 'Senior Strategist',
    avatar: avatarKhushi,
  },
  {
    name: 'Melinda Rodrigues',
    role: 'Lead Strategy Analyst',
    avatar: avatarMelinda,
  },
  {
    name: 'Saadeen Anwar',
    role: 'Experience Strategist',
    avatar: avatarSaadeen,
  },
]
