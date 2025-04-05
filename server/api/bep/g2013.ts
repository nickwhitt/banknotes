import type { Run } from "~~/types/Run"
import { banks } from "~~/types/Bank"
import { dc, fw } from "~~/types/Facility"
import { g2013 } from "~~/types/Series"

export default defineEventHandler(() => {
  return [
    { year: 2019, month: 10, facility: fw, denom: 50, series: g2013, bank: banks.b, block: 'D', start: 38400001, end: 54400000 },
    { year: 2019, month: 10, facility: fw, denom: 50, series: g2013, bank: banks.e, block: 'B', start: 12800001, end: 19200000 },
    { year: 2019, month: 10, facility: fw, denom: 50, series: g2013, bank: banks.f, block: 'B', start: 73600001, end: 80000000 },
    { year: 2019, month: 10, facility: fw, denom: 50, series: g2013, bank: banks.g, block: 'B', start: 64000001, end: 70400000 },
    { year: 2019, month: 10, facility: fw, denom: 50, series: g2013, bank: banks.h, block: 'A', start: 35200001, end: 38400000 },
    { year: 2019, month: 10, facility: fw, denom: 50, series: g2013, bank: banks.i, block: 'A', start: 41600001, end: 44800000 },
    { year: 2019, month: 10, facility: fw, denom: 50, series: g2013, bank: banks.j, block: 'A', start: 64000001, end: 67200000 },
    { year: 2019, month: 10, facility: fw, denom: 50, series: g2013, bank: banks.k, block: 'B', start: 16000001, end: 19200000 },
    { year: 2019, month: 10, facility: fw, denom: 50, series: g2013, bank: banks.l, block: 'C', start: 1, end: 16000000 },
    { year: 2019, month: 9, facility: dc, denom: 5, series: g2013, bank: banks.g, block: 'E', start: 64000001, end: 70400000 },
    { year: 2019, month: 8, facility: dc, denom: 5, series: g2013, bank: banks.l, block: 'M', start: 25600001, end: 51200000 },
    { year: 2019, month: 8, facility: fw, denom: 50, series: g2013, bank: banks.a, block: 'A', start: 57600001, end: 67200000 },
    { year: 2019, month: 8, facility: fw, denom: 50, series: g2013, bank: banks.c, block: 'A', start: 38400001, end: 44800000 },
    { year: 2019, month: 8, facility: fw, denom: 50, series: g2013, bank: banks.a, block: '*', start: 3200001, end: 4736000 },
    { year: 2019, month: 7, facility: dc, denom: 5, series: g2013, bank: banks.g, block: 'E', start: 25600001, end: 64000000 },
    { year: 2019, month: 7, facility: dc, denom: 5, series: g2013, bank: banks.l, block: 'L', start: 89600001, end: 96000000 },
    { year: 2019, month: 7, facility: dc, denom: 5, series: g2013, bank: banks.l, block: 'M', start: 1, end: 25600000 },
    { year: 2019, month: 7, facility: fw, denom: 100, series: g2013, bank: banks.b, block: 'S', start: 35200001, end: 99200000 },
    { year: 2019, month: 7, facility: fw, denom: 100, series: g2013, bank: banks.b, block: 'T', start: 1, end: 19200000 },
    { year: 2019, month: 7, facility: fw, denom: 100, series: g2013, bank: banks.f, block: 'F', start: 67200001, end: 99200000 },
    { year: 2019, month: 7, facility: fw, denom: 100, series: g2013, bank: banks.f, block: 'G', start: 1, end: 25600000 },
    { year: 2019, month: 6, facility: dc, denom: 5, series: g2013, bank: banks.l, block: 'L', start: 1, end: 89600000 },
    { year: 2019, month: 6, facility: fw, denom: 100, series: g2013, bank: banks.b, block: 'R', start: 54400001, end: 99200000 },
    { year: 2019, month: 6, facility: fw, denom: 100, series: g2013, bank: banks.b, block: 'S', start: 1, end: 35200000 },
    { year: 2019, month: 6, facility: fw, denom: 100, series: g2013, bank: banks.f, block: 'F', start: 9600001, end: 67200000 },
    { year: 2019, month: 5, facility: dc, denom: 5, series: g2013, bank: banks.j, block: 'B', start: 76800001, end: 96000000 },
    { year: 2019, month: 5, facility: dc, denom: 5, series: g2013, bank: banks.j, block: 'C', start: 1, end: 6400000 },
    { year: 2019, month: 5, facility: dc, denom: 5, series: g2013, bank: banks.l, block: 'K', start: 76800001, end: 96000000 },
    { year: 2019, month: 5, facility: fw, denom: 100, series: g2013, bank: banks.a, block: 'A', start: 41600001, end: 73600000 },
    { year: 2019, month: 5, facility: fw, denom: 100, series: g2013, bank: banks.b, block: 'R', start: 12800001, end: 54400000 },
    { year: 2019, month: 5, facility: fw, denom: 100, series: g2013, bank: banks.f, block: 'E', start: 48000001, end: 99200000 },
    { year: 2019, month: 5, facility: fw, denom: 100, series: g2013, bank: banks.f, block: 'F', start: 1, end: 9600000 },
    { year: 2019, month: 5, facility: fw, denom: 100, series: g2013, bank: banks.f, block: '*', start: 1, end: 128000, sheets: true },
  ] as Run[]
})
