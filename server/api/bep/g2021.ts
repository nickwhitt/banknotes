import type { Run } from "~~/types/Run"
import { banks } from "~~/types/Bank"
import { dc, fw } from "~~/types/Facility"
import { g2021 } from "~~/types/Series"

export default defineEventHandler(() => {
  return [
    { year: 2025, month: 2, facility: dc, denom: 100, series: g2021, bank: banks.k, block: 'B', start: 44800001, end: 73600000 },
    { year: 2025, month: 2, facility: dc, denom: 100, series: g2021, bank: banks.c, block: 'A', start: 51200001, end: 60800000 },
    { year: 2025, month: 2, facility: dc, denom: 100, series: g2021, bank: banks.d, block: 'A', start: 48000001, end: 57600000 },
    { year: 2025, month: 2, facility: dc, denom: 100, series: g2021, bank: banks.f, block: 'A', start: 38400001, end: 54400000 },
    { year: 2025, month: 2, facility: dc, denom: 10,  series: g2021, bank: banks.l, block: 'A', start: 1, end: 19200000 },
    { year: 2025, month: 2, facility: dc, denom: 10,  series: g2021, bank: banks.h, block: 'A', start: 1, end: 25600000 },
    { year: 2025, month: 2, facility: dc, denom: 10,  series: g2021, bank: banks.h, block: '*', start: 1, end: 320000, sheets: true },
    { year: 2025, month: 2, facility: fw, denom: 20,  series: g2021, bank: banks.c, block: 'A', start: 1, end: 51200000 },
    { year: 2025, month: 2, facility: fw, denom: 20,  series: g2021, bank: banks.a, block: 'A', start: 38400001, end: 44800000 },
    { year: 2025, month: 2, facility: fw, denom: 5,   series: g2021, bank: banks.b, block: 'C', start: 1, end: 51200000 },
    { year: 2025, month: 1, facility: dc, denom: 10,  series: g2021, bank: banks.f, block: 'B', start: 25600001, end: 51200000 },
    { year: 2025, month: 1, facility: dc, denom: 10,  series: g2021, bank: banks.g, block: 'A', start: 1, end: 19200000 },
    { year: 2025, month: 1, facility: dc, denom: 100, series: g2021, bank: banks.j, block: 'A', start: 76800001, end: 99200000 },
    { year: 2025, month: 1, facility: dc, denom: 100, series: g2021, bank: banks.c, block: 'A', start: 28800001, end: 51200000 },
    { year: 2025, month: 1, facility: dc, denom: 100, series: g2021, bank: banks.j, block: 'B', start: 1, end: 3200000 },
    { year: 2025, month: 1, facility: fw, denom: 20,  series: g2021, bank: banks.a, block: 'A', start: 1, end: 38400000 },
    { year: 2025, month: 1, facility: fw, denom: 5,   series: g2021, bank: banks.a, block: 'A', start: 57600001, end: 96000000 },
    { year: 2025, month: 1, facility: fw, denom: 5,   series: g2021, bank: banks.g, block: 'B', start: 32000001, end: 96000000 },
    { year: 2025, month: 1, facility: fw, denom: 5,   series: g2021, bank: banks.a, block: 'B', start: 1, end: 12800000 },
  ] as Run[]
})
