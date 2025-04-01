export type Series = {
  slug: string
  title: string
  code: string
  letter?: string
  treasurer: string
  secretary: string
}

export const g2021: Series = { slug: 'g2021', title: '2021', code: '2021G', letter: 'Q', treasurer: 'Malerba', secretary: 'Yellen' }
export const s2021: Series = { slug: 's2021', title: '2021', code: '2021S', treasurer: 'Malerba', secretary: 'Yellen' }
export const g2017a: Series = { slug: 'g2017a', title: '2017-A', code: '2017GA', letter: 'P', treasurer: 'Carranza', secretary: 'Mnuchin' }
export const s2017a: Series = { slug: 's2017a', title: '2017-A', code: '2017SA', treasurer: 'Carranza', secretary: 'Mnuchin' }

export const allSeries = [s2021, g2021, s2017a, g2017a]
