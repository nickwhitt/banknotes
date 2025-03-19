import type { Run } from "~~/types/Run"
import { banks } from "~~/types/Bank"
import { dc, fw } from "~~/types/Facility"
import { s2021 } from "~~/types/Series"

export default defineEventHandler(() => {
  return [
    { year: 2025, month: 2,  facility: dc, denom: 1, series: s2021, bank: banks.a, block: 'C', start: 1, end: 25600000 },
    { year: 2025, month: 2,  facility: dc, denom: 1, series: s2021, bank: banks.a, block: 'B', start: 83200001, end: 96000000 },
    { year: 2025, month: 2,  facility: dc, denom: 1, series: s2021, bank: banks.f, block: 'F', start: 1, end: 32000000 },
    { year: 2025, month: 2,  facility: dc, denom: 1, series: s2021, bank: banks.f, block: 'E', start: 89600001, end: 96000000 },
    { year: 2025, month: 2,  facility: fw, denom: 1, series: s2021, bank: banks.i, block: 'C', start: 32000001, end: 70400000 },
    { year: 2025, month: 2,  facility: fw, denom: 1, series: s2021, bank: banks.l, block: 'J', start: 1, end: 32000000 },
    { year: 2025, month: 1,  facility: dc, denom: 1, series: s2021, bank: banks.a, block: 'B', start: 32000001, end: 83200000 },
    { year: 2025, month: 1,  facility: dc, denom: 1, series: s2021, bank: banks.f, block: 'E', start: 38400001, end: 89600000 },
    { year: 2025, month: 1,  facility: dc, denom: 1, series: s2021, bank: banks.a, block: '*', start: 3200001, end: 6400000 },
    { year: 2025, month: 1,  facility: dc, denom: 1, series: s2021, bank: banks.a, block: '*', start: 6400001, end: 6900000, sheets: true },
    { year: 2025, month: 1,  facility: fw, denom: 1, series: s2021, bank: banks.i, block: 'C', start: 12800001, end: 32000000 },
    { year: 2025, month: 1,  facility: fw, denom: 1, series: s2021, bank: banks.l, block: 'I', start: 76800001, end: 96000000 },
    { year: 2024, month: 12, facility: fw, denom: 1, series: s2021, bank: banks.j, block: 'E', start: 1, end: 6400000 },
    { year: 2024, month: 12, facility: fw, denom: 1, series: s2021, bank: banks.j, block: 'D', start: 64000001, end: 96000000 },
    { year: 2024, month: 12, facility: fw, denom: 1, series: s2021, bank: banks.l, block: 'I', start: 51200001, end: 76800000 },
    { year: 2024, month: 11, facility: fw, denom: 1, series: s2021, bank: banks.j, block: 'D', start: 12800001, end: 64000000 },
    { year: 2024, month: 11, facility: fw, denom: 1, series: s2021, bank: banks.l, block: 'I', start: 1, end: 51200000 },
    { year: 2024, month: 11, facility: fw, denom: 1, series: s2021, bank: banks.l, block: 'H', start: 51200001, end: 96000000 },
    { year: 2024, month: 10, facility: fw, denom: 1, series: s2021, bank: banks.j, block: 'D', start: 1, end: 12800000 },
    { year: 2024, month: 10, facility: fw, denom: 1, series: s2021, bank: banks.j, block: 'C', start: 70400001, end: 96000000 },
    { year: 2024, month: 10, facility: fw, denom: 1, series: s2021, bank: banks.l, block: 'H', start: 1, end: 51200000 },
    { year: 2024, month: 10, facility: fw, denom: 1, series: s2021, bank: banks.l, block: 'G', start: 12800001, end: 96000000 },
    { year: 2024, month: 10, facility: fw, denom: 1, series: s2021, bank: banks.i, block: '*', start: 9600001, end: 9850000, sheets: true },
    { year: 2024, month: 9,  facility: dc, denom: 1, series: s2021, bank: banks.j, block: 'C', start: 51200001, end: 70400000 },
    { year: 2024, month: 9,  facility: fw, denom: 1, series: s2021, bank: banks.g, block: 'D', start: 51200001, end: 89600000 },
    { year: 2024, month: 9,  facility: fw, denom: 1, series: s2021, bank: banks.k, block: 'D', start: 1, end: 6400000 },
    { year: 2024, month: 9,  facility: fw, denom: 1, series: s2021, bank: banks.k, block: 'C', start: 51200001, end: 96000000 },
    { year: 2024, month: 9,  facility: fw, denom: 1, series: s2021, bank: banks.l, block: 'G', start: 1, end: 12800000 },
    { year: 2024, month: 9,  facility: fw, denom: 1, series: s2021, bank: banks.l, block: 'F', start: 32000001, end: 96000000 },
  ] as Run[]
})
