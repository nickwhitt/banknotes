import { type Series } from '~~/types/Series'

export type Catalog = {
  series: Series
  denom: 1 | 2 | 5 | 10 | 20 | 50 | 100
  dc?: string
  fw?: string
}
