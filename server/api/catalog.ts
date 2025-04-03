import { type Catalog } from '~~/types/Catalog'
import { g2013, g2017a, g2021, s2017, s2017a, s2021 } from '~~/types/Series'

export default defineEventHandler(() => {
  return [
    { series: s2017, denom: 1, fw: 'F-3003', dc: 'F-3004' },
    { series: s2017a, denom: 1, fw: 'F-3005', dc: 'F-3006' },
    { series: s2021, denom: 1, fw: 'F-3007', dc: 'F-3008' },

    { series: s2017a, denom: 2, fw: 'F-1941' },

    { series: g2017a, denom: 5, fw: 'F-1998' },
    { series: g2021, denom: 5, fw: 'F-1999' },

    { series: g2017a, denom: 10, dc: 'F-2045' },
    { series: g2021, denom: 10, dc: 'F-2046' },

    { series: g2017a, denom: 20, dc: 'F-7001', fw: 'F-7002' },
    { series: g2021, denom: 20, dc: 'F-7003', fw: 'F-7004' },

    { series: g2013, denom: 50, fw: 'F-2132' },
    { series: g2017a, denom: 50, fw: 'F-2133' },
    { series: g2021, denom: 50, fw: 'F-2134' },

    { series: g2017a, denom: 100, fw: 'F-2189', dc: 'F-2190' },
    { series: g2021, denom: 100, fw: 'F-2191', dc: 'F-2192' },
  ] as Catalog[]
})
