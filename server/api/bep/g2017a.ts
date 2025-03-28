import type { Run } from "~~/types/Run"
import { banks } from "~~/types/Bank"
import { dc, fw } from "~~/types/Facility"
import { g2017a } from "~~/types/Series"

export default defineEventHandler(() => {
  return [
    { year: 2025, month: 1, facility: dc, denom: 20, series: g2017a, bank: banks.f, block: 'P', start: 76800001, end: 96000000 },
    { year: 2025, month: 1, facility: dc, denom: 20, series: g2017a, bank: banks.f, block: 'Q', start: 1, end: 64000000 },
    { year: 2025, month: 1, facility: fw, denom: 20, series: g2017a, bank: banks.e, block: 'L', start: 38400001, end: 76800000 },
    { year: 2024, month: 12, facility: fw, denom: 20, series: g2017a, bank: banks.e, block: 'K', start: 89600001, end: 96000000 },
    { year: 2024, month: 12, facility: fw, denom: 20, series: g2017a, bank: banks.e, block: 'L', start: 1, end: 38400000 },
    { year: 2024, month: 11, facility: fw, denom: 20, series: g2017a, bank: banks.d, block: 'E', start: 76800001, end: 96000000 },
    { year: 2024, month: 11, facility: fw, denom: 20, series: g2017a, bank: banks.e, block: 'K', start: 38400001, end: 89600000 },
    { year: 2024, month: 11, facility: fw, denom: 20, series: g2017a, bank: banks.d, block: 'F', start: 1, end: 25600000 },
    { year: 2024, month: 10, facility: dc, denom: 20, series: g2017a, bank: banks.f, block: 'P', start: 19200001, end: 76800000 },
    { year: 2024, month: 10, facility: dc, denom: 20, series: g2017a, bank: banks.f, block: '*', start: 22400001, end: 22880000, sheets: true },
    { year: 2024, month: 10, facility: fw, denom: 20, series: g2017a, bank: banks.c, block: 'F', start: 44800001, end: 64000000 },
    { year: 2024, month: 10, facility: fw, denom: 20, series: g2017a, bank: banks.d, block: 'E', start: 38400001, end: 76800000 },
    { year: 2024, month: 10, facility: fw, denom: 20, series: g2017a, bank: banks.e, block: 'K', start: 1, end: 38400000 },
    { year: 2024, month: 10, facility: fw, denom: 20, series: g2017a, bank: banks.e, block: 'J', start: 83200001, end: 96000000 },
    { year: 2024, month: 10, facility: fw, denom: 20, series: g2017a, bank: banks.b, block: 'I', start: 25600001, end: 64000000 },
    { year: 2024, month: 10, facility: fw, denom: 20, series: g2017a, bank: banks.d, block: '*', start: 6400001, end: 9600000 },
    { year: 2024, month: 9, facility: fw, denom: 20, series: g2017a, bank: banks.f, block: 'N', start: 57600001, end: 96000000 },
    { year: 2024, month: 9, facility: fw, denom: 20, series: g2017a, bank: banks.f, block: 'P', start: 1, end: 19200000 },
    { year: 2024, month: 9, facility: fw, denom: 20, series: g2017a, bank: banks.b, block: 'I', start: 1, end: 25600000 },
    { year: 2024, month: 9, facility: fw, denom: 20, series: g2017a, bank: banks.b, block: 'H', start: 89600001, end: 96000000 },
    { year: 2024, month: 9, facility: fw, denom: 20, series: g2017a, bank: banks.c, block: 'F', start: 12800001, end: 44800000 },
    { year: 2024, month: 9, facility: fw, denom: 20, series: g2017a, bank: banks.b, block: '*', start: 6400001, end: 7040000 },
    { year: 2024, month: 8, facility: dc, denom: 20, series: g2017a, bank: banks.e, block: 'B', start: 1, end: 6400000 },
    { year: 2024, month: 8, facility: dc, denom: 20, series: g2017a, bank: banks.g, block: 'H', start: 83200001, end: 96000000 },
    { year: 2024, month: 7, facility: dc, denom: 20, series: g2017a, bank: banks.g, block: 'H', start: 38400001, end: 83200000 },
    { year: 2024, month: 7, facility: fw, denom: 20, series: g2017a, bank: banks.b, block: '*', start: 1, end: 320000, sheets: true },
    { year: 2024, month: 7, facility: fw, denom: 20, series: g2017a, bank: banks.b, block: '*', start: 3200001, end: 4480000 },
    { year: 2024, month: 6, facility: dc, denom: 20, series: g2017a, bank: banks.h, block: 'C', start: 57600001, end: 89600000 },
    { year: 2024, month: 5, facility: dc, denom: 20, series: g2017a, bank: banks.i, block: 'B', start: 19200001, end: 51200000 },
    { year: 2024, month: 5, facility: dc, denom: 20, series: g2017a, bank: banks.h, block: 'C', start: 44800001, end: 57600000 },
    { year: 2024, month: 5, facility: dc, denom: 20, series: g2017a, bank: banks.h, block: '*', start: 1, end: 3200000 },
    { year: 2024, month: 5, facility: dc, denom: 20, series: g2017a, bank: banks.h, block: '*', start: 3200001, end: 3520000, sheets: true },
    { year: 2024, month: 4, facility: dc, denom: 10, series: g2017a, bank: banks.c, block: 'B', start: 44800001, end: 64000000 },
    { year: 2024, month: 4, facility: dc, denom: 10, series: g2017a, bank: banks.d, block: 'B', start: 12800001, end: 51200000 },
    { year: 2024, month: 4, facility: dc, denom: 10, series: g2017a, bank: banks.j, block: 'A', start: 57600001, end: 70400000 },
    { year: 2024, month: 4, facility: dc, denom: 20, series: g2017a, bank: banks.i, block: 'B', start: 6400001, end: 19200000 },
    { year: 2024, month: 4, facility: dc, denom: 20, series: g2017a, bank: banks.k, block: 'J', start: 70400001, end: 96000000 },
    { year: 2024, month: 4, facility: dc, denom: 20, series: g2017a, bank: banks.k, block: 'K', start: 1, end: 12800000 },
  ] as Run[]
})
