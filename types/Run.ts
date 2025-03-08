import type { Bank } from "./Bank"
import type { Facility } from "./Facility"

export type Run = {
    year: number
    month: number
    facility: Facility
    bank: Bank
    block: string
    start: number
    end: number
    owned?: boolean
}
