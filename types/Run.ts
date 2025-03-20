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

export function isFw(run: Run) {
  return run.facility.code === 'fw'
}

export function isDc(run: Run) {
  return run.facility.code === 'dc'
}

export function isStar(run: Run) {
  return run.block === '*'
}

export function notStar(run:Run) {
  return !isStar(run)
}

export function isOwned(run: Run) {
  return run.owned === true
}
