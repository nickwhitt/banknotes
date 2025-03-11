export type Facility = {
  code: string
  city: string
}

export const dc: Facility = { code: 'dc', city: 'Washington' }
export const fw: Facility = { code: 'fw', city: 'Fort Worth' }

export const facilities = {
  dc: dc,
  fw: fw,
}
