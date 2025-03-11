import type { Run } from "~~/types/Run"
import { banks } from "~~/types/Bank"
import { dc, fw } from "~~/types/Facility"
import { s2021 } from "~~/types/Series"

export default defineEventHandler(() => {
  return [
    { year: 2025, month: 2, facility: dc, denom: 1, series: s2021, bank: banks.a, block: 'C', start: 1, end: 25600000 },
    { year: 2025, month: 2, facility: dc, denom: 1, series: s2021, bank: banks.a, block: 'B', start: 83200001, end: 96000000 },
    { year: 2025, month: 2, facility: dc, denom: 1, series: s2021, bank: banks.f, block: 'F', start: 1, end: 32000000 },
    { year: 2025, month: 2, facility: dc, denom: 1, series: s2021, bank: banks.f, block: 'E', start: 89600001, end: 96000000 },
    { year: 2025, month: 2, facility: fw, denom: 1, series: s2021, bank: banks.i, block: 'C', start: 32000001, end: 70400000 },
    { year: 2025, month: 2, facility: fw, denom: 1, series: s2021, bank: banks.l, block: 'J', start: 1, end: 32000000 },
    { year: 2025, month: 1, facility: dc, denom: 1, series: s2021, bank: banks.a, block: 'B', start: 32000001, end: 83200000 },
    { year: 2025, month: 1, facility: dc, denom: 1, series: s2021, bank: banks.f, block: 'E', start: 38400001, end: 89600000 },
    { year: 2025, month: 1, facility: dc, denom: 1, series: s2021, bank: banks.a, block: '*', start: 3200001, end: 6400000 },
    { year: 2025, month: 1, facility: dc, denom: 1, series: s2021, bank: banks.a, block: '*', start: 6400001, end: 6900000, sheets: true },
    { year: 2025, month: 1, facility: fw, denom: 1, series: s2021, bank: banks.i, block: 'C', start: 12800001, end: 32000000 },
    { year: 2025, month: 1, facility: fw, denom: 1, series: s2021, bank: banks.l, block: 'I', start: 76800001, end: 96000000 },
  ] as Run[]
})
