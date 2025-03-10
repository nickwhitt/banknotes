<template>
  <UContainer class="mt-8 mb-20">
    <ColorModeButton />
    <UTable class="hidden lg:block" :columns="columns" :data="data" />

    <UTable class="lg:hidden" :data="bySeries">
      <template #denominations-cell="{ row }">
        <ul class="flex flex-wrap gap-2">
          <li v-for="denom in row.getValue('denominations')">
            <UButton size="sm" :to="denom.slug || ''" :variant="denom.slug ? 'solid' : 'soft'">
              ${{ denom.value }}
            </UButton>
          </li>
        </ul>
      </template>
    </UTable>
  </UContainer>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import { h, resolveComponent } from 'vue'

const UButtonGroup = resolveComponent('UButtonGroup')
const UButton = resolveComponent('UButton')
const UBadge = resolveComponent('UBadge')

interface Series {
  series: string
  dc?: boolean
  fw?: boolean
  slug?: string
}

interface Run {
  date: string
  one: Series[]
  two: Series[]
  five: Series[]
  ten: Series[]
  twenty: Series[]
  fifty: Series[]
  hundred: Series[]
}

function buttonGroupList(list: Series[]) {
  return h(
    'ul',
    { class: 'space-y-2' },
    list.map((series) => h(
      'li',
      {},
      h(
        UButtonGroup,
        { size: 'sm' },
        [
          series.dc ? h(UBadge, { variant: 'solid', color: 'info' }, 'DC') : '',
          h(UButton, { to: series.slug || '', variant: series.slug ? 'solid' : 'subtle' }, series.series),
          series.fw ? h(UBadge, { variant: 'solid', color: 'error' }, 'FW') : '',
        ]
      )
    ))
  )
}

const columns: TableColumn<Run>[] = [
  { accessorKey: 'date', header: 'Date' },
  {
    accessorKey: 'one',
    header: '$1',
    cell: ({ row }) => h('div', {}, buttonGroupList(row.getValue('one')))
  },
  {
    accessorKey: 'two',
    header: '$2',
    cell: ({ row }) => h('div', {}, buttonGroupList(row.getValue('two')))
  },
  {
    accessorKey: 'five',
    header: '$5',
    cell: ({ row }) => h('div', {}, buttonGroupList(row.getValue('five')))
  },
  {
    accessorKey: 'ten',
    header: '$10',
    cell: ({ row }) => h('div', {}, buttonGroupList(row.getValue('ten')))
  },
  {
    accessorKey: 'twenty',
    header: '$20',
    cell: ({ row }) => h('div', {}, buttonGroupList(row.getValue('twenty')))
  },
  {
    accessorKey: 'fifty',
    header: '$50',
    cell: ({ row }) => h('div', {}, buttonGroupList(row.getValue('fifty')))
  },
  {
    accessorKey: 'hundred',
    header: '$100',
    cell: ({ row }) => h('div', {}, buttonGroupList(row.getValue('hundred')))
  },
]

const data = ref<Run[]>([
  {
    date: 'Jan 2025',
    one: [{ series: '2021', fw: true }],
    two: [{ series: '2017-A', fw: true }],
    five: [{ series: '2021', fw: true }],
    ten: [{ series: '2017-A', dc: true }],
    twenty: [{ series: '2017-A', dc: true }],
    fifty: [{ series: '2017-A', fw: true }],
    hundred: [{ series: '2021', dc: true }, { series: '2017-A', fw: true }],
  },
  {
    date: 'Mar 2023',
    one: [{ series: '2021', dc: true, fw: true }, { series: '2017-A', dc: true, slug: '/frn/one' }],
    two: [],
    five: [],
    ten: [{ series: '2017-A', dc: true }],
    twenty: [{ series: '2017-A', fw: true }],
    fifty: [],
    hundred: [{ series: '2017-A', dc: true, fw: true }],
  }
])

interface Denomination {
  value: number
  slug?: string
}

interface SeriesList {
  series: string
  denominations: Denomination[]
}

const bySeries = ref<SeriesList[]>([
  {
    series: '2021', denominations: [
      { value: 1 }, { value: 5 }, { value: 10 }, { value: 100 }
    ]
  },
  {
    series: '2017-A', denominations: [
      { value: 1, slug: '/frn/one' },
      { value: 2 },
      { value: 5 },
      { value: 10 },
      { value: 20 },
      { value: 50 },
      { value: 100 },
    ]
  },
  {
    series: '2017', denominations: [
      { value: 1 }, { value: 10 }, { value: 20 }
    ]
  },
  {
    series: '2013', denominations: [
      { value: 1 },
      { value: 2 },
      { value: 5 },
      { value: 10 },
      { value: 20 },
      { value: 50 },
      { value: 100 },
    ]
  },
  { series: '2009-A', denominations: [{ value: 100 }] },
  {
    series: '2009', denominations: [
      { value: 1 },
      { value: 2 },
      { value: 5 },
      { value: 10 },
      { value: 20 },
      { value: 50 },
      { value: 100 },
    ]
  },
])
</script>
