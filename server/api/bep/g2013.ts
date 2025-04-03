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
    ] as Run[]
})
