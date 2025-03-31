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

export function notStar(run: Run) {
  return !isStar(run)
}

export function isOwned(run: Run) {
  return run.owned === true
}

export class PrintRuns {
  printed: number = 0
  dc: number = 0
  fw: number = 0

  constructor(runs: Run[]) {
    this.printed = runs.reduce((printed, run) => printed + run.end - run.start + 1, 0)
    this.dc = runs.filter(isDc).reduce((printed, run) => printed + run.end - run.start + 1, 0)
    this.fw = this.printed - this.dc
  }

  getPercentageDC(): number {
    return this.calcPercentage(this.dc)
  }

  getPercentageFW(): number {
    return 100 - this.calcPercentage(this.dc)
  }

  calcPercentage(numerator: number): number {
    return Math.floor(numerator / this.printed * 100) || 0
  }
}
