export interface Tool {
  id: string
  name: string
  description: string
  category: string
  duration: string
  teamSize: string
  categoryColor: string
  useCases: string[]
  figJamLink?: string
  downloadLink?: string
  iconClass?: string
}

export interface BlankOption {
  value: string
  label: string
}

export interface Blank {
  id: string
  placeholder: string
  options: BlankOption[]
}

export interface Question {
  id: string
  sentenceParts: string[]
  blanks: Blank[]
  hint: string
}
