export type Facility = {
  code: string
  city: string
}

interface Facilities {
  dc: Facility
  fw: Facility
}

export const dc: Facility = { code: 'dc', city: 'Washington' }
export const fw: Facility = { code: 'fw', city: 'Fort Worth' }

export const facilities: Facilities = {
  dc: dc,
  fw: fw,
}
