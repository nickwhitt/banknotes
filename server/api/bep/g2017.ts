import type { Run } from "~~/types/Run"
import { banks } from "~~/types/Bank"
import { dc, fw } from "~~/types/Facility"
import { g2017 } from "~~/types/Series"

export default defineEventHandler(() => {
  return [
    { year: 2019, month: 7, facility: dc, denom: 20, series: g2017, bank: banks.f, block: '*', start: 6400001, end: 12800000 },
    { year: 2019, month: 7, facility: fw, denom: 10, series: g2017, bank: banks.l, block: 'A', start: 51200001, end: 83200000 },
    { year: 2019, month: 6, facility: dc, denom: 20, series: g2017, bank: banks.f, block: '*', start: 3200001, end: 3520000, sheets: true },
    { year: 2019, month: 6, facility: fw, denom: 10, series: g2017, bank: banks.h, block: 'A', start: 19200001, end: 32000000 },
    { year: 2019, month: 6, facility: fw, denom: 10, series: g2017, bank: banks.i, block: 'A', start: 6400001, end: 12800000 },
    { year: 2019, month: 6, facility: fw, denom: 10, series: g2017, bank: banks.j, block: 'A', start: 19200001, end: 32000000 },
    { year: 2019, month: 6, facility: fw, denom: 10, series: g2017, bank: banks.k, block: 'A', start: 1, end: 25600000 },
    { year: 2019, month: 5, facility: fw, denom: 10, series: g2017, bank: banks.f, block: 'A', start: 32000001, end: 57600000 },
    { year: 2019, month: 5, facility: fw, denom: 10, series: g2017, bank: banks.g, block: 'A', start: 1, end: 32000000 },
  ] as Run[]
})
