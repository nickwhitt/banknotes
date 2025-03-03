<template>
  <UContainer class="mt-8 mb-20">
    <h1 class="my-8 text-3xl sm:text-4xl font-semibold tracking-tight text-pretty">
      Federal Reserve Notes
    </h1>

    <div v-for="run in runs">
      <h2 class="my-6 text-xl sm:text-2xl font-semibold tracking-tight text-pretty">
        Series of {{ run.series }}
      </h2>

      <!-- <UTable :data="run.data" /> -->

      <div class="table w-full text-sm/6">
        <div class="table-row text-(--ui-text-highlighted) font-semibold">
          <div class="table-cell px-4 py-3.5">Catalog</div>
          <div class="table-cell px-4 py-3.5">Denom</div>
          <div class="table-cell px-4 py-3.5">Facility</div>
          <div class="hidden sm:table-cell px-4 py-3.5">Regular</div>
          <div class="hidden sm:table-cell px-4 py-3.5">Star</div>
        </div>
        <NuxtLink :to="`/series/${run.series}#${datum.denom}`" v-for="datum in run.data"
          class="table-row text-(--ui-text-muted)">
          <div class="relative table-cell p-4 border-b border-(--ui-border)">{{ datum.catalog }}</div>
          <div class="table-cell p-4 border-b border-(--ui-border)">{{ datum.denom }}</div>
          <div class="table-cell p-4 border-b border-(--ui-border)">{{ datum.facility }}</div>
          <div class="hidden sm:table-cell p-4 border-b border-(--ui-border)">{{ datum.regular }}</div>
          <div class="hidden sm:table-cell p-4 border-b border-(--ui-border)">{{ datum.star }}</div>
          <div class="hidden sm:table-cell p-4 border-b border-(--ui-border)">
            <UButton icon="i-lucide-chevron-right" variant="link" />
          </div>
        </NuxtLink>
      </div>

    </div>
  </UContainer>
</template>

<script setup lang="ts">
const runs = [
  {
    series: '2021',
    data: [
      { catalog: 'F-3007', denom: '$1', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-3008', denom: '$1', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1999', denom: '$5', facility: 'Fort Worth', regular: '-', star: '-' },
    ]
  },
  {
    series: '2017-A',
    data: [
      { catalog: 'F-3005', denom: '$1', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-3006', denom: '$1', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1941', denom: '$2', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-1998', denom: '$5', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2045', denom: '$10', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-7001', denom: '$20', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-7002', denom: '$20', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2133', denom: '$50', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2189', denom: '$100', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2190', denom: '$100', facility: 'Washington', regular: '-', star: '-' },
    ]
  },
  {
    series: '2017',
    data: [
      { catalog: 'F-3003', denom: '$1', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-3004', denom: '$1', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2043', denom: '$10', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2044', denom: '$10', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2099', denom: '$20', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-7000', denom: '$20', facility: 'Fort Worth', regular: '-', star: '-' },
    ]
  },
  {
    series: '2013',
    data: [
      { catalog: 'F-3001', denom: '$1', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-3002', denom: '$1', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1940', denom: '$2', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-1996', denom: '$5', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1997', denom: '$5', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2042', denom: '$10', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2097', denom: '$20', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2098', denom: '$20', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2132', denom: '$50', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2188', denom: '$100', facility: 'Washington', regular: '-', star: '-' },
    ]
  },
  {
    series: '2009-A',
    data: [
      { catalog: 'F-2186', denom: '$100', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2187', denom: '$100', facility: 'Fort Worth', regular: '-', star: '-' },
    ]
  },
  {
    series: '2009',
    data: [
      { catalog: 'F-1934', denom: '$1', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-3000', denom: '$1', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1939', denom: '$2', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-1994', denom: '$5', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-1995', denom: '$5', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2041', denom: '$10', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2095', denom: '$20', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2096', denom: '$20', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2131', denom: '$50', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2184', denom: '$100', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2185', denom: '$100', facility: 'Fort Worth', regular: '-', star: '-' },
    ]
  },
  {
    series: '2006-A',
    data: [
      { catalog: 'F-2182', denom: '$100', facility: 'Washington', regular: '-', star: '-' },
    ]
  },
  {
    series: '2006',
    data: [
      { catalog: 'F-1933', denom: '$1', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-1932', denom: '$1', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1992', denom: '$5', facility: 'FW (no color)', regular: '-', star: '-' },
      { catalog: 'F-1993', denom: '$5', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2040', denom: '$10', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2093', denom: '$20', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2094', denom: '$20', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2130', denom: '$50', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2180', denom: '$100', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2181', denom: '$100', facility: 'Fort Worth', regular: '-', star: '-' },
    ]
  },
  {
    series: '2004-A',
    data: [
      { catalog: 'F-2039', denom: '$10', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2091', denom: '$20', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2092', denom: '$20', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2129', denom: '$50', facility: 'Fort Worth', regular: '-', star: '-' },
    ]
  },
  {
    series: '2004',
    data: [
      { catalog: 'F-2089', denom: '$20', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2090', denom: '$20', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2128', denom: '$50', facility: 'Fort Worth', regular: '-', star: '-' },
    ]
  },
  {
    series: '2003-A',
    data: [
      { catalog: 'F-1930', denom: '$1', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1931', denom: '$1', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-1938', denom: '$2', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-1991', denom: '$5', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2179', denom: '$100', facility: 'Washington', regular: '-', star: '-' },
    ]
  },
  {
    series: '2003',
    data: [
      { catalog: 'F-1928', denom: '$1', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1929', denom: '$1', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-1937', denom: '$2', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-1989', denom: '$5', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1990', denom: '$5', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2037', denom: '$10', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2038', denom: '$10', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2178', denom: '$100', facility: 'Washington', regular: '-', star: '-' },
    ]
  },
  {
    series: '2001',
    data: [
      { catalog: 'F-1926', denom: '$1', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1927', denom: '$1', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-1988', denom: '$5', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2035', denom: '$10', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2036', denom: '$10', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2087', denom: '$20', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2088', denom: '$20', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2127', denom: '$50', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2177', denom: '$100', facility: 'Washington', regular: '-', star: '-' },
    ]
  },
  {
    series: '1999',
    data: [
      { catalog: 'F-1924', denom: '$1', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1925', denom: '$1', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-1986', denom: '$5', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1987', denom: '$5', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2033', denom: '$10', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2034', denom: '$10', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2085', denom: '$20', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2086', denom: '$20', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2176', denom: '$100', facility: 'Washington', regular: '-', star: '-' },
    ]
  },
  {
    series: '1996',
    data: [
      { catalog: 'F-2083', denom: '$20', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2084', denom: '$20', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2126', denom: '$50', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2175', denom: '$100', facility: 'Washington', regular: '-', star: '-' },
    ]
  },
  {
    series: '1995',
    data: [
      { catalog: 'F-1921', denom: '$1', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1922', denom: '$1', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-1923', denom: '$1', facility: 'DC (web-fed)', regular: '-', star: '-' },
      { catalog: 'F-1936', denom: '$2', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1984', denom: '$5', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1985', denom: '$5', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2031', denom: '$10', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2032', denom: '$10', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2081', denom: '$20', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2082', denom: '$20', facility: 'Fort Worth', regular: '-', star: '-' },
    ]
  },
  {
    series: '1993',
    data: [
      { catalog: 'F-1918', denom: '$1', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1919', denom: '$1', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-1920', denom: '$1', facility: 'DC (web-fed)', regular: '-', star: '-' },
      { catalog: 'F-1982', denom: '$5', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1983', denom: '$5', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2030', denom: '$10', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2079', denom: '$20', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2080', denom: '$20', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2125', denom: '$50', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2174', denom: '$100', facility: 'Washington', regular: '-', star: '-' },
    ]
  },
  {
    series: '1990',
    data: [
      { catalog: 'F-2029', denom: '$10', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2077', denom: '$20', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2078', denom: '$20', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2124', denom: '$50', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2173', denom: '$100', facility: 'Washington', regular: '-', star: '-' },
    ]
  },
  {
    series: '1988-A',
    data: [
      { catalog: 'F-1915', denom: '$1', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1916', denom: '$1', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-1917', denom: '$1', facility: 'DC (web-fed)', regular: '-', star: '-' },
      { catalog: 'F-1980', denom: '$5', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-1981', denom: '$5', facility: 'Fort Worth', regular: '-', star: '-' },
      { catalog: 'F-2028', denom: '$10', facility: 'Washington', regular: '-', star: '-' },
      { catalog: 'F-2076', denom: '$20', facility: 'Washington', regular: '-', star: '-' },
    ]
  }
]
</script>
