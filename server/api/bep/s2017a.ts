import type { Run } from "~~/types/Run"
import { banks } from "~~/types/Bank"
import { dc, fw } from "~~/types/Facility"
import { s2017a } from "~~/types/Series"

export default defineEventHandler(() => {
  return [
    { year: 2025, month: 1, facility: fw, denom: 2, series: s2017a, bank: banks.l, block: 'C', start: 12800001, end: 38400000 },
    { year: 2024, month: 11, facility: fw, denom: 2, series: s2017a, bank: banks.l, block: 'C', start: 1, end: 12800000 },
    { year: 2024, month: 11, facility: fw, denom: 2, series: s2017a, bank: banks.l, block: 'B', start: 76800001, end: 96000000 },
    { year: 2024, month: 10, facility: fw, denom: 2, series: s2017a, bank: banks.i, block: 'A', start: 6400001, end: 32000000 },
    { year: 2024, month: 10, facility: fw, denom: 2, series: s2017a, bank: banks.k, block: 'A', start: 12800001, end: 38400000 },
    { year: 2024, month: 10, facility: fw, denom: 2, series: s2017a, bank: banks.i, block: '*', start: 1, end: 160000, sheets: true },
    { year: 2024, month: 9, facility: fw, denom: 2, series: s2017a, bank: banks.f, block: 'A', start: 1, end: 32000000 },
    { year: 2024, month: 9, facility: fw, denom: 2, series: s2017a, bank: banks.g, block: 'A', start: 76800001, end: 96000000 },
    { year: 2024, month: 9, facility: fw, denom: 2, series: s2017a, bank: banks.g, block: 'B', start: 1, end: 12800000 },
    { year: 2024, month: 8, facility: fw, denom: 2, series: s2017a, bank: banks.b, block: 'A', start: 64000001, end: 96000000 },
    { year: 2024, month: 8, facility: fw, denom: 2, series: s2017a, bank: banks.c, block: 'A', start: 6400001, end: 38400000 },
    { year: 2024, month: 7, facility: fw, denom: 2, series: s2017a, bank: banks.b, block: '*', start: 3200001, end: 3360000, sheets: true },
    { year: 2024, month: 7, facility: fw, denom: 2, series: s2017a, bank: banks.b, block: '*', start: 6400001, end: 9600000 },
    { year: 2023, month: 10, facility: fw, denom: 2, series: s2017a, bank: banks.l, block: '*', start: 9600001, end: 9664000, sheets: true },
    { year: 2023, month: 10, facility: fw, denom: 2, series: s2017a, bank: banks.l, block: '*', start: 12800001, end: 13440000 },
    { year: 2023, month: 8, facility: fw, denom: 2, series: s2017a, bank: banks.l, block: 'B', start: 1, end: 32000000 },

    { year: 2023, month: 7, facility: fw, denom: 2, series: s2017a, bank: banks.l, block: 'A', start: 64000001, end: 96000000 },

    { year: 2023, month: 6, facility: fw, denom: 2, series: s2017a, bank: banks.g, block: 'A', start: 44800001, end: 76800000 },
    { year: 2023, month: 6, facility: fw, denom: 2, series: s2017a, bank: banks.l, block: '*', start: 6400001, end: 6432000, sheets: true },
    { year: 2023, month: 5, facility: fw, denom: 2, series: s2017a, bank: banks.g, block: 'A', start: 12800001, end: 44800000 },
    { year: 2023, month: 5, facility: fw, denom: 2, series: s2017a, bank: banks.g, block: '*', start: 1, end: 640000, sheets: true },
    { year: 2023, month: 5, facility: fw, denom: 2, series: s2017a, bank: banks.g, block: '*', start: 3200001, end: 6400000 },
    { year: 2023, month: 3, facility: dc, denom: 1, series: s2017a, bank: banks.g, block: 'F', start: 38400001, end: 83200000 },
    { year: 2023, month: 2, facility: dc, denom: 1, series: s2017a, bank: banks.g, block: 'E', start: 70400001, end: 96000000 },
    { year: 2023, month: 2, facility: dc, denom: 1, series: s2017a, bank: banks.g, block: 'F', start: 1, end: 38400000 },
    { year: 2023, month: 2, facility: dc, denom: 1, series: s2017a, bank: banks.g, block: '*', start: 12800001, end: 14080000 },
    { year: 2023, month: 2, facility: dc, denom: 1, series: s2017a, bank: banks.g, block: '*', start: 16000001, end: 16300000, sheets: true },
  ] as Run[]
})
