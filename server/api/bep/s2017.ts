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
    { year: 2019, month: 8, facility: dc, denom: 1, series: s2017, bank: banks.c, block: 'A', start: 1, end: 12800000 },
    { year: 2019, month: 8, facility: dc, denom: 1, series: s2017, bank: banks.l, block: 'E', start: 57600001, end: 96000000 },
    { year: 2019, month: 8, facility: dc, denom: 1, series: s2017, bank: banks.l, block: 'F', start: 1, end: 12800000 },
    { year: 2019, month: 8, facility: dc, denom: 1, series: s2017, bank: banks.i, block: 'A', start: 38400001, end: 76800000 },
    { year: 2019, month: 7, facility: fw, denom: 1, series: s2017, bank: banks.l, block: 'D', start: 70400001, end: 96000000 },
    { year: 2019, month: 7, facility: fw, denom: 1, series: s2017, bank: banks.l, block: 'E', start: 1, end: 57600000 },
    { year: 2019, month: 7, facility: fw, denom: 1, series: s2017, bank: banks.l, block: '*', start: 6400001, end: 9600000 },
    { year: 2019, month: 6, facility: dc, denom: 1, series: s2017, bank: banks.f, block: 'E', start: 76800001, end: 96000000 },
    { year: 2019, month: 6, facility: dc, denom: 1, series: s2017, bank: banks.f, block: 'F', start: 1, end: 19200000 },
    { year: 2019, month: 6, facility: dc, denom: 1, series: s2017, bank: banks.f, block: '*', start: 9600001, end: 12800000 },
    { year: 2019, month: 6, facility: fw, denom: 1, series: s2017, bank: banks.l, block: 'C', start: 89600001, end: 96000000 },
    { year: 2019, month: 6, facility: fw, denom: 1, series: s2017, bank: banks.l, block: 'D', start: 1, end: 70400000 },
    { year: 2019, month: 5, facility: dc, denom: 1, series: s2017, bank: banks.f, block: 'E', start: 6400001, end: 76800000 },
    { year: 2019, month: 5, facility: fw, denom: 1, series: s2017, bank: banks.d, block: 'C', start: 76800001, end: 96000000 },
    { year: 2019, month: 5, facility: fw, denom: 1, series: s2017, bank: banks.d, block: 'D', start: 1, end: 51200000 },
    { year: 2019, month: 5, facility: fw, denom: 1, series: s2017, bank: banks.l, block: 'C', start: 19200001, end: 89600000 },
    { year: 2019, month: 5, facility: fw, denom: 1, series: s2017, bank: banks.l, block: '*', start: 3200001, end: 3700000, sheets: true },
  ] as Run[]
})
