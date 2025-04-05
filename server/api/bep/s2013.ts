import type { Run } from "~~/types/Run"
import { banks } from "~~/types/Bank"
import { dc, fw } from "~~/types/Facility"
import { s2013 } from "~~/types/Series"

export default defineEventHandler(() => {
  return [
    { year: 2019, month: 8, facility: fw, denom: 2, series: s2013, bank: banks.c, block: 'A', start: 6400001, end: 12800000 },
  ] as Run[]
})
