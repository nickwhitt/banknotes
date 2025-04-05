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
export const g2017: Series = { slug: 'g2017', title: '2017', code: '2017G', letter: 'N', treasurer: 'Carranza', secretary: 'Mnuchin' }
export const s2017: Series = { slug: 's2017', title: '2017', code: '2017S', treasurer: 'Carranza', secretary: 'Mnuchin' }
export const g2013: Series = { slug: 'g2013', title: '2013', code: '2013G', letter: 'M', treasurer: 'Rios', secretary: 'Lew' }
export const s2013: Series = { slug: 's2013', title: '2013', code: '2013S', treasurer: 'Rios', secretary: 'Lew' }

export const allSeries = [s2021, g2021, s2017a, g2017a, s2017, g2017, g2013, s2013]
