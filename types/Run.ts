import type { Catalog } from "./Catalog"
import type { Facility } from "./Facility"

export type Run = {
  facility: Facility
  catalogs: Catalog[]
}
