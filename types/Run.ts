import type { Bank } from './Bank'
import type { Facility } from './Facility'
import type { Series } from './Series'

export type Run = {
  year: number
  month: number
  facility: Facility
  denom: 1 | 2 | 5 | 10 | 20 | 50 | 100
  series: Series
  bank: Bank
  block: string
  start: number
  end: number
  sheets?: boolean
  owned?: boolean
}
