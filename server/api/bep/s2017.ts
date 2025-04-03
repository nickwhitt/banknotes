import type { Run } from "~~/types/Run"
import { banks } from "~~/types/Bank"
import { dc, fw } from "~~/types/Facility"
import { s2017 } from "~~/types/Series"

export default defineEventHandler(() => {
  return [
    { year: 2019, month: 11, facility: dc, denom: 1, series: s2017, bank: banks.a, block: 'C', start: 6400001, end: 57600000 },
    { year: 2019, month: 11, facility: dc, denom: 1, series: s2017, bank: banks.a, block: '*', start: 6400001, end: 6425000, sheets: true },
    { year: 2019, month: 10, facility: dc, denom: 1, series: s2017, bank: banks.c, block: 'A', start: 12800001, end: 76800000 },
    { year: 2019, month: 10, facility: dc, denom: 1, series: s2017, bank: banks.a, block: '*', start: 3200001, end: 4000000 },
    { year: 2019, month: 10, facility: fw, denom: 1, series: s2017, bank: banks.l, block: 'F', start: 12800001, end: 64000000 },
    { year: 2019, month: 10, facility: fw, denom: 1, series: s2017, bank: banks.l, block: '*', start: 9600001, end: 11520000 },
  ] as Run[]
})
