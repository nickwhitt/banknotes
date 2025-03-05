<template>
  <UContainer class="mt-8 mb-20">
    <h1 class="my-8 text-3xl sm:text-4xl font-semibold tracking-tight text-pretty">
      Federal Reserve Notes
    </h1>

    <div v-for="series in data">
      <h2 class="my-6 text-xl sm:text-2xl font-semibold tracking-tight text-pretty">
        Series of {{ series.title }}
      </h2>

      <div class="grid md:grid-cols-2 gap-4">
        <UCard v-for="run in series.runs" class="h-fit">
          <template #header>
            <h3>Printed in {{ run.facility.city }}</h3>
          </template>

          <ul class="divide-y divide-(--ui-border)">
            <li v-for="catalog in run.catalogs" class="flex hover:bg-(--ui-bg-elevated) py-3">
              <div class="grow grid grid-cols-4 gap-2 items-center">
                <h4>${{ catalog.denom }}</h4>
                <p>{{ catalog.number }}</p>
                <p class="text-right">{{ formatNumber(catalog.regular) }}</p>
                <p class="text-right">{{ formatNumber(catalog.star) }}</p>
              </div>
              <UButton class="flex-none" icon="i-lucide-chevron-right" variant="link" />
            </li>
          </ul>
        </UCard>
      </div>

    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { Series } from '~~/types/Series'
import formatNumber from '~~/utils/formatNumber'

const data: Series[] = [
  {
    title: '2021',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [{ denom: 1, number: 'F-3008' }]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [{ denom: 1, number: 'F-3007' }, { denom: 5, number: 'F-1999' }]
      }
    ]
  },
  {
    title: '2017-A',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [
          { number: 'F-3006', denom: 1 },
          { number: 'F-2045', denom: 10 },
          { number: 'F-7001', denom: 20 },
          { number: 'F-2190', denom: 100 },
        ]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [
          { number: 'F-3005', denom: 1 },
          { number: 'F-1941', denom: 2 },
          { number: 'F-1998', denom: 5 },
          { number: 'F-7002', denom: 20 },
          { number: 'F-2133', denom: 50 },
          { number: 'F-2189', denom: 100 },
        ]
      }
    ]
  },
  {
    title: '2017',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [
          { number: 'F-3003', denom: 1 },
          { number: 'F-2043', denom: 10 },
          { number: 'F-2099', denom: 20 },
        ]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [
          { number: 'F-3004', denom: 1 },
          { number: 'F-2044', denom: 10 },
          { number: 'F-7000', denom: 20 },
        ]
      }
    ]
  },
  {
    title: '2013',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [
          { number: 'F-3002', denom: 1 },
          { number: 'F-1996', denom: 5, regular: 4876800000, star: 43520000 },
          { number: 'F-2097', denom: 20 },
          { number: 'F-2188', denom: 100 },
        ]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [
          { number: 'F-3001', denom: 1 },
          { number: 'F-1940', denom: 2 },
          { number: 'F-1997', denom: 5, regular: 9600000 },
          { number: 'F-2042', denom: 10 },
          { number: 'F-2098', denom: 20 },
          { number: 'F-2132', denom: 50 },
        ]
      }
    ]
  },
  {
    title: '2009-A',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [{ number: 'F-2186', denom: 100 }]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [{ number: 'F-2187', denom: 100 }]
      },
    ]
  },
  {
    title: '2009',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [
          { number: 'F-3000', denom: 1 },
          { number: 'F-1995', denom: 5 },
          { number: 'F-2095', denom: 20 },
          { number: 'F-2184', denom: 100 },
        ]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [
          { number: 'F-1934', denom: 1 },
          { number: 'F-1939', denom: 2 },
          { number: 'F-1994', denom: 5 },
          { number: 'F-2041', denom: 10 },
          { number: 'F-2096', denom: 20 },
          { number: 'F-2131', denom: 50 },
          { number: 'F-2185', denom: 100 },
        ]
      }
    ]
  },
  {
    title: '2006-A',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [{ number: 'F-2182', denom: 100 }]
      }
    ]
  },
  {
    title: '2006',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [
          { number: 'F-1932', denom: 1 },
          { number: 'F-2093', denom: 20 },
          { number: 'F-2180', denom: 100 },
        ]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [
          { number: 'F-1933', denom: 1 },
          { number: 'F-1992', denom: 5 },
          { number: 'F-1993', denom: 5 },
          { number: 'F-2040', denom: 10 },
          { number: 'F-2094', denom: 20 },
          { number: 'F-2130', denom: 50 },
          { number: 'F-2181', denom: 100 },
        ]
      }
    ]
  },
  {
    title: '2004-A',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [{ number: 'F-2091', denom: 20 }]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [
          { number: 'F-2039', denom: 10 },
          { number: 'F-2092', denom: 20 },
          { number: 'F-2129', denom: 50 },
        ]
      }
    ]
  },
  {
    title: '2004',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [{ number: 'F-2089', denom: 20 }]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [{ number: 'F-2090', denom: 20 }, { number: 'F-2128', denom: 50 }]
      }
    ]
  },
  {
    title: '2003-A',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [{ number: 'F-1930', denom: 1 }, { number: 'F-2179', denom: 100 }]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [
          { number: 'F-1931', denom: 1 },
          { number: 'F-1938', denom: 2 },
          { number: 'F-1991', denom: 5 },
        ]
      }
    ]
  },
  {
    title: '2003',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [
          { number: 'F-1928', denom: 1 },
          { number: 'F-1989', denom: 5 },
          { number: 'F-2037', denom: 10 },
          { number: 'F-2178', denom: 100 },
        ]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [
          { number: 'F-1929', denom: 1 },
          { number: 'F-1937', denom: 2 },
          { number: 'F-1990', denom: 5 },
          { number: 'F-2038', denom: 10 },
        ]
      }
    ]
  },
  {
    title: '2001',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [
          { number: 'F-1926', denom: 1 },
          { number: 'F-2035', denom: 10 },
          { number: 'F-2087', denom: 20 },
          { number: 'F-2127', denom: 50 },
          { number: 'F-2177', denom: 100 },
        ]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [
          { number: 'F-1927', denom: 1 },
          { number: 'F-1988', denom: 5 },
          { number: 'F-2036', denom: 10 },
          { number: 'F-2088', denom: 20 },
        ]
      }
    ]
  },
  {
    title: '1999',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [
          { number: 'F-1924', denom: 1 },
          { number: 'F-1986', denom: 5 },
          { number: 'F-2033', denom: 10 },
          { number: 'F-2085', denom: 20 },
          { number: 'F-2176', denom: 100 },
        ]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [
          { number: 'F-1925', denom: 1 },
          { number: 'F-1987', denom: 5 },
          { number: 'F-2034', denom: 10 },
          { number: 'F-2086', denom: 20 },
        ]
      }
    ]
  },
  {
    title: '1996',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [
          { number: 'F-2083', denom: 20 },
          { number: 'F-2126', denom: 50 },
          { number: 'F-2175', denom: 100 },
        ]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [{ number: 'F-2084', denom: 20 }]
      }
    ]
  },
  {
    title: '1995',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [
          { number: 'F-1921', denom: 1 },
          { number: 'F-1923', denom: 1 },
          { number: 'F-1936', denom: 2 },
          { number: 'F-1984', denom: 5 },
          { number: 'F-2031', denom: 10 },
          { number: 'F-2081', denom: 20 },
        ]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [
          { number: 'F-1922', denom: 1 },
          { number: 'F-1985', denom: 5 },
          { number: 'F-2032', denom: 10 },
          { number: 'F-2082', denom: 20 },
        ]
      }
    ]
  },
  {
    title: '1993',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [
          { number: 'F-1918', denom: 1 },
          { number: 'F-1920', denom: 1 },
          { number: 'F-1982', denom: 5 },
          { number: 'F-2030', denom: 10 },
          { number: 'F-2079', denom: 20 },
          { number: 'F-2125', denom: 50 },
          { number: 'F-2174', denom: 100 },
        ]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [
          { number: 'F-1919', denom: 1 },
          { number: 'F-1983', denom: 5 },
          { number: 'F-2080', denom: 20 },
        ]
      }
    ]
  },
  {
    title: '1990',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [
          { number: 'F-2029', denom: 10 },
          { number: 'F-2077', denom: 20 },
          { number: 'F-2124', denom: 50 },
          { number: 'F-2173', denom: 100 },
        ]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [{ number: 'F-2078', denom: 20 }]
      }
    ]
  },
  {
    title: '1988-A',
    runs: [
      {
        facility: { code: 'DC', city: 'Washington' },
        catalogs: [
          { number: 'F-1915', denom: 1 },
          { number: 'F-1917', denom: 1 },
          { number: 'F-1980', denom: 5 },
          { number: 'F-2028', denom: 10 },
          { number: 'F-2076', denom: 20 },
        ]
      },
      {
        facility: { code: 'FW', city: 'Fort Worth' },
        catalogs: [{ number: 'F-1916', denom: 1 }, { number: 'F-1981', denom: 5 }]
      }
    ]
  },
]
</script>
