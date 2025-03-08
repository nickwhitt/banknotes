import { Run } from "~~/types/Run"
import { banks } from "~~/types/Bank"
import { dc, fw } from "~~/types/Facility"

export default defineEventHandler(() => {
  return [
    { year: 2019, month: 11, facility: dc, bank: banks.a, block: 'A', start: 1, end: 12800000 },
    { year: 2019, month: 11, facility: dc, bank: banks.b, block: 'A', start: 1, end: 25600000 },
    { year: 2020, month: 0, facility: dc, bank: banks.b, block: 'A', start: 25600001, end: 89600000 },
    { year: 2020, month: 1, facility: dc, bank: banks.b, block: 'A', start: 89600001, end: 96000000 },
    { year: 2020, month: 1, facility: dc, bank: banks.b, block: 'B', start: 1, end: 57600000 },
    { year: 2020, month: 2, facility: dc, bank: banks.d, block: 'A', start: 1, end: 64000000 },
    { year: 2020, month: 3, facility: dc, bank: banks.d, block: 'A', start: 64000001, end: 96000000 },
    { year: 2020, month: 3, facility: dc, bank: banks.d, block: 'B', start: 1, end: 38400000 },
    { year: 2020, month: 4, facility: dc, bank: banks.b, block: 'B', start: 57600001, end: 83200000 },
    { year: 2021, month: 4, facility: fw, bank: banks.d, block: 'B', start: 38400001, end: 76800000 },
    { year: 2021, month: 11, facility: fw, bank: banks.a, block: 'A', start: 12800001, end: 51200000 },
    { year: 2022, month: 0, facility: fw, bank: banks.a, block: 'A', start: 51200001, end: 96000000 },
    { year: 2022, month: 0, facility: fw, bank: banks.a, block: 'B', start: 1, end: 640000, owned: true },
    { year: 2022, month: 0, facility: fw, bank: banks.b, block: 'B', start: 83200001, end: 96000000 },
    { year: 2022, month: 0, facility: fw, bank: banks.b, block: 'C', start: 1, end: 1920000 },
    { year: 2022, month: 1, facility: fw, bank: banks.b, block: 'C', start: 1920001, end: 32000000 },
    { year: 2022, month: 2, facility: fw, bank: banks.b, block: 'C', start: 32000001, end: 89600000 },
    { year: 2022, month: 3, facility: fw, bank: banks.b, block: 'C', start: 89600001, end: 96000000 },
    { year: 2022, month: 3, facility: fw, bank: banks.b, block: 'D', start: 1, end: 70400000, owned: true },
    { year: 2022, month: 4, facility: fw, bank: banks.c, block: 'A', start: 1, end: 83200000 },
    { year: 2022, month: 5, facility: fw, bank: banks.c, block: 'A', start: 83200001, end: 96000000 },
    { year: 2022, month: 5, facility: fw, bank: banks.d, block: 'B', start: 76800001, end: 96000000 },
    { year: 2022, month: 5, facility: fw, bank: banks.d, block: 'C', start: 1, end: 44800000 },
    { year: 2022, month: 6, facility: fw, bank: banks.d, block: 'C', start: 44800001, end: 96000000 },
    { year: 2022, month: 6, facility: fw, bank: banks.d, block: 'D', start: 1, end: 25600000 },
    { year: 2022, month: 7, facility: fw, bank: banks.d, block: 'D', start: 25600001, end: 57600000, owned: true },
    { year: 2020, month: 6, facility: dc, bank: banks.e, block: 'A', start: 1, end: 12800000 },
    { year: 2020, month: 7, facility: dc, bank: banks.e, block: 'A', start: 12800001, end: 76800000 },
    { year: 2020, month: 8, facility: dc, bank: banks.e, block: 'A', start: 76800001, end: 96000000 },
    { year: 2020, month: 8, facility: dc, bank: banks.e, block: 'B', start: 1, end: 57600000 },
    { year: 2021, month: 3, facility: fw, bank: banks.e, block: 'B', start: 57600001, end: 96000000 },
    { year: 2021, month: 3, facility: fw, bank: banks.e, block: 'C', start: 1, end: 44800000 },
    { year: 2022, month: 7, facility: fw, bank: banks.e, block: 'C', start: 44800001, end: 83200000 },
    { year: 2022, month: 8, facility: fw, bank: banks.e, block: 'C', start: 83200001, end: 96000000 },
    { year: 2022, month: 8, facility: fw, bank: banks.e, block: 'D', start: 1, end: 44800000 },

    { year: 2019, month: 10, facility: fw, bank: banks.l, block: '*', start: 1, end: 3200000 },
    { year: 2019, month: 11, facility: dc, bank: banks.a, block: '*', start: 1, end: 3200000 },
    { year: 2019, month: 11, facility: fw, bank: banks.l, block: '*', start: 3200001, end: 3840000 },
    { year: 2020, month: 0, facility: dc, bank: banks.a, block: '*', start: 3200001, end: 3450000 },
    { year: 2020, month: 1, facility: dc, bank: banks.b, block: '*', start: 1, end: 3200000 },
    { year: 2020, month: 4, facility: fw, bank: banks.f, block: '*', start: 1, end: 3200000 },
    { year: 2020, month: 4, facility: dc, bank: banks.g, block: '*', start: 1, end: 3200000 },
    { year: 2020, month: 5, facility: fw, bank: banks.f, block: '*', start: 3200001, end: 3840000 },
    { year: 2021, month: 1, facility: fw, bank: banks.g, block: '*', start: 3200001, end: 6400000 },
    { year: 2021, month: 3, facility: fw, bank: banks.e, block: '*', start: 1, end: 250000 },
    { year: 2021, month: 10, facility: fw, bank: banks.l, block: '*', start: 6400001, end: 6900000 },
    { year: 2022, month: 3, facility: fw, bank: banks.b, block: '*', start: 3200001, end: 3840000 },
    { year: 2022, month: 3, facility: fw, bank: banks.b, block: '*', start: 6400001, end: 9600000 },
    { year: 2022, month: 6, facility: fw, bank: banks.d, block: '*', start: 1, end: 500000 },
    { year: 2022, month: 8, facility: fw, bank: banks.e, block: '*', start: 3200001, end: 3450000 },
    { year: 2022, month: 8, facility: fw, bank: banks.f, block: '*', start: 6400001, end: 6900000 },
    { year: 2022, month: 8, facility: fw, bank: banks.f, block: '*', start: 9600001, end: 12800000 },
    { year: 2022, month: 9, facility: dc, bank: banks.g, block: '*', start: 6400001, end: 6900000 },
    { year: 2022, month: 10, facility: dc, bank: banks.g, block: '*', start: 9600001, end: 10880000 },
    { year: 2022, month: 10, facility: fw, bank: banks.f, block: '*', start: 12800001, end: 16000000 },
    { year: 2022, month: 11, facility: fw, bank: banks.f, block: '*', start: 16000001, end: 16250000 },
    { year: 2023, month: 1, facility: dc, bank: banks.g, block: '*', start: 12800001, end: 14080000 },
    { year: 2023, month: 1, facility: dc, bank: banks.g, block: '*', start: 16000001, end: 16300000 },
  ] as Run[]
})
