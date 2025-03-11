<template>
  <UContainer class="mt-8 mb-20">
    <ColorModeButton />
    <UTable class="hidden lg:block" :columns="columns" :data="data" />

    <UTable class="lg:hidden" :data="[
      { denom: 1, series: ['2021', '2017-A', '2017', '2013', '2009'] },
      { denom: 2, series: ['2017-A', '2013', '2009'] },
      { denom: 5, series: ['2021', '2017-A', '2013', '2009'] },
      { denom: 10, series: ['2021', '2017-A', '2017', '2013', '2009'] },
      { denom: 20, series: ['2017-A', '2017', '2013', '2009'] },
      { denom: 50, series: ['2017-A', '2013', '2009'] },
      { denom: 100, series: ['2021', '2017-A', '2013', '2009-A', '2009'] },
    ]">
      <template #denom-cell="{ row }">${{ row.getValue('denom') }}</template>
      <template #series-cell="{ row }">
        <ul class="flex flex-wrap gap-2">
          <li v-for="title in row.getValue('series')">
            <UButton size="sm" variant="soft">
              {{ title }}
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
          series.dc ? h(UBadge, { variant: 'subtle', color: 'info' }, 'DC') : '',
          h(UButton, { to: series.slug || '', variant: series.slug ? 'solid' : 'subtle' }, series.series),
          series.fw ? h(UBadge, { variant: 'subtle', color: 'error' }, 'FW') : '',
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
</script>
