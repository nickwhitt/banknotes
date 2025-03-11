import type { Run } from "~~/types/Run"
import { banks } from "~~/types/Bank"
import { dc, fw } from "~~/types/Facility"
import { g2017a } from "~~/types/Series"

export default defineEventHandler(() => {
  return [
    { year: 2025, month: 1, facility: dc, denom: 20, series: g2017a, bank: banks.f, block: 'P', start: 76800001, end: 96000000 },
    { year: 2025, month: 1, facility: dc, denom: 20, series: g2017a, bank: banks.f, block: 'Q', start: 1, end: 64000000 },
    { year: 2025, month: 1, facility: fw, denom: 20, series: g2017a, bank: banks.e, block: 'L', start: 38400001, end: 76800000 },
  ] as Run[]
})
