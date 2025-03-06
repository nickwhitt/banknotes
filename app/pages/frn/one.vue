<template>
  <UContainer class="mt-8 mb-20">
    <h1 class="my-8 text-3xl sm:text-4xl font-semibold tracking-tight">
      $1 Federal Reserve Notes
    </h1>

    <h2 class="my-6 text-xl sm:text-2xl font-semibold tracking-tight">
      Series of 2017-A
    </h2>

    <article class="grid md:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-2">
      <UCard v-for="bank in banks" :ui="{ body: 'ps-0 sm:ps-0' }">
        <template #header>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <h3 class="text-lg font-semibold tracking-tight">
                {{ bank.bank.city }}
              </h3>
              <p v-if="bank.owned" class="ml-0.5 text-xs text-(--ui-success)">√</p>
            </div>
            <p class="text-sm/6">{{ formatNumber(bank.printed) }}</p>
          </div>
        </template>

        <UTabs variant="pill" :items="bank.blocks" :ui="{ list: 'ms-4 sm:ms-6' }">
          <template #content="{ item }">
            <div class="ps-4 sm:ps-6 space-y-2">
              <div class="grid grid-cols-4 gap-2 items-end">
                <div class="col-span-3 flex items-end justify-between">
                  <div>
                    <div class="flex items-center">
                      <p class="text-sm/6">{{ item.dc?.catalog }}</p>
                      <p v-if="item.dc?.owned" class="ml-0.5 text-xs text-(--ui-success)">√</p>
                    </div>
                    <h4 class="font-semibold tracking-tight">Washington</h4>
                  </div>
                  <div class="text-right">
                    <div class="flex items-center justify-end">
                      <p v-if="item.fw?.owned" class="mr-0.5 text-xs text-(--ui-success)">√</p>
                      <p class="text-sm/6">{{ item.fw?.catalog }}</p>
                    </div>
                    <h4 class="font-semibold tracking-tight">Fort Worth</h4>
                  </div>
                </div>
                <h4 class="text-right font-semibold tracking-tight">Printed</h4>
              </div>
              <div class="grid grid-cols-4 gap-2 items-center text-sm/6">
                <div class="col-span-3">
                  <div class="flex items-center justify-between">
                    <p>{{ formatNumber(item.dc?.printed) }}</p>
                    <p>{{ formatNumber(item.fw?.printed) }}</p>
                  </div>
                  <UProgress color="info" size="sm" :model-value="item.dc?.pct || 0"
                    :ui="{ base: 'bg-(--ui-error)' }" />
                  <div class="flex items-center justify-between">
                    <p>{{ item.dc?.pct || 0 }}%</p>
                    <p>{{ item.fw?.pct || 0 }}%</p>
                  </div>
                </div>
                <p class="text-right">{{ formatNumber(item.printed) }}</p>
              </div>
            </div>
            <h4 class="my-4 ps-4 sm:ps-6 font-semibold tracking-tight">Blocks</h4>
            <UTabs orientation="vertical" variant="link" :items="item.runs" class="mt-4 items-start">
              <template #content="{ item }">
                <ol class="text-sm/6 divide-y divide-(--ui-border)">
                  <li v-for="run in item.runs" class="not-first:pt-2 not-last:pb-2 flex items-center justify-between">
                    <div>
                      <div class="flex items-center">
                        <p>{{ run.date }}</p>
                        <p v-if="run.owned" class="ml-0.5 text-xs text-(--ui-success)">√</p>
                      </div>
                      <p>{{ run.facility }}</p>
                    </div>
                    <div class="font-mono">
                      <p>{{ formatSerialNumber(run.start, item.block, bank.bank.letter) }}</p>
                      <p>{{ formatSerialNumber(run.end, item.block, bank.bank.letter) }}</p>
                    </div>
                    <p>{{ formatNumber(run.end - run.start + 1) }}</p>
                  </li>
                </ol>
              </template>
            </UTabs>
          </template>
        </UTabs>
      </UCard>
    </article>
  </UContainer>
</template>

<script setup lang="ts">
import formatNumber from '~~/utils/formatNumber';
import formatSerialNumber from '~~/utils/formatSerialNumber';
import type { TabsItem } from '@nuxt/ui';
import { boston, cleveland, newYork, philadelphia, type Bank } from '~~/types/Bank';

interface PrintRun {
  date: string
  facility: string
  start: number
  end: number
  owned?: boolean
}

interface BlockRun extends TabsItem {
  block: string
  runs: PrintRun[]
}

interface Catalog {
  printed: number
  pct: number
  catalog: string
  owned?: boolean
}

interface SeriesBlock extends TabsItem {
  printed: number
  dc?: Catalog
  fw?: Catalog
  runs: BlockRun[]
}

interface Series {
  bank: Bank
  printed: number
  owned?: boolean
  blocks: SeriesBlock[]
}

const banks: Series[] = [
  {
    bank: boston,
    printed: 100090000,
    owned: true,
    blocks: [
      {
        label: 'Regular',
        printed: 96640000,
        dc: { printed: 12800000, pct: 13, catalog: 'F-3006A', owned: true },
        fw: { printed: 83840000, pct: 87, catalog: 'F-3005A' },
        runs: [
          {
            label: 'AA',
            block: 'A',
            runs: [
              { date: 'Dec 2019', facility: 'Washington', start: 1, end: 12800000 },
              { date: 'Dec 2021', facility: 'Fort Worth', start: 12800001, end: 51200000 },
              { date: 'Jan 2022', facility: 'Fort Worth', start: 51200001, end: 96000000 },
            ]
          },
          {
            label: 'AB',
            block: 'B',
            runs: [
              { date: 'Jan 2022', facility: 'Fort Worth', start: 1, end: 640000, owned: true },
            ]
          },
        ]
      },
      {
        label: 'Star',
        printed: 3450000,
        dc: { printed: 3450000, pct: 100, catalog: 'F-3006A*' },
        runs: [
          {
            label: 'A*',
            block: '*',
            runs: [
              { date: 'Dec 2019', facility: 'Washington', start: 1, end: 3200000 },
              { date: 'Jan 2020', facility: 'Washington', start: 3200001, end: 3450000 },
            ]
          }
        ]
      }
    ]
  },
  {
    bank: newYork,
    printed: 365040000,
    owned: true,
    blocks: [
      {
        label: 'Regular',
        printed: 358400000,
        dc: { printed: 179200000, pct: 50, catalog: 'F-3006B' },
        fw: { printed: 179200000, pct: 50, catalog: 'F-3005B', owned: true },
        runs: [
          {
            label: 'BA',
            block: 'A',
            runs: [
              { date: 'Dec 2019', facility: 'Washington', start: 1, end: 25600000 },
              { date: 'Jan 2020', facility: 'Washington', start: 25600001, end: 89600000 },
              { date: 'Feb 2020', facility: 'Washington', start: 89600001, end: 96000000 },
            ]
          },
          {
            label: 'BB',
            block: 'B',
            runs: [
              { date: 'Feb 2020', facility: 'Washington', start: 1, end: 57600000 },
              { date: 'May 2020', facility: 'Washington', start: 57600001, end: 83200000 },
              { date: 'Jan 2022', facility: 'Fort Worth', start: 83200001, end: 96000000 },
            ]
          },
          {
            label: 'BC',
            block: 'C',
            runs: [
              { date: 'Jan 2022', facility: 'Fort Worth', start: 1, end: 1920000 },
              { date: 'Feb 2022', facility: 'Fort Worth', start: 1920001, end: 32000000 },
              { date: 'Mar 2022', facility: 'Fort Worth', start: 32000001, end: 89600000 },
              { date: 'Apr 2022', facility: 'Fort Worth', start: 89600001, end: 96000000 },
            ]
          },
          {
            label: 'BD',
            block: 'D',
            runs: [
              { date: 'Apr 2022', facility: 'Fort Worth', start: 1, end: 70400000, owned: true },
            ]
          }
        ]
      },
      {
        label: 'Star',
        printed: 7040000,
        dc: { printed: 3200000, pct: 45, catalog: 'F-3006B*' },
        fw: { printed: 3840000, pct: 55, catalog: 'F-3005B*' },
        runs: [
          {
            label: 'B*',
            block: '*',
            runs: [
              { date: 'Feb 2020', facility: 'Washington', start: 1, end: 3200000 },
              { date: 'Apr 2022', facility: 'Fort Worth', start: 3200001, end: 3840000 },
              { date: 'Apr 2022', facility: 'Fort Worth', start: 6400001, end: 9600000 },
            ]
          }
        ]
      },
    ]
  },
  {
    bank: philadelphia,
    printed: 96000000,
    blocks: [
      {
        label: 'Regular',
        printed: 96000000,
        fw: { printed: 96000000, pct: 100, catalog: 'F-3005C' },
        runs: [
          {
            label: 'CA',
            block: 'A',
            runs: [
              { date: 'May 2022', facility: 'Fort Worth', start: 1, end: 83200000 },
              { date: 'Jun 2022', facility: 'Fort Worth', start: 83200001, end: 96000000 },
            ]
          }
        ]
      }
    ]
  },
  {
    bank: cleveland,
    printed: 346100000,
    owned: true,
    blocks: [
      {
        label: 'Regular',
        printed: 345600000,
        dc: { printed: 134400000, pct: 39, catalog: 'F-3006D' },
        fw: { printed: 211200000, pct: 61, catalog: 'F-3005D', owned: true },
        runs: [
          {
            label: 'DA',
            block: 'A',
            runs: [
              { date: 'Mar 2020', facility: 'Washington', start: 1, end: 64000000 },
              { date: 'Apr 2020', facility: 'Washington', start: 64000001, end: 96000000 },
            ]
          },
          {
            label: 'DB',
            block: 'B',
            runs: [
              { date: 'Apr 2020', facility: 'Washington', start: 1, end: 38400000 },
              { date: 'May 2021', facility: 'Fort Worth', start: 38400001, end: 76800000 },
              { date: 'Jun 2022', facility: 'Fort Worth', start: 76800001, end: 96000000 },
            ]
          },
          {
            label: 'DC',
            block: 'C',
            runs: [
              { date: 'Jun 2022', facility: 'Fort Worth', start: 1, end: 44800000 },
              { date: 'Jul 2022', facility: 'Fort Worth', start: 44800001, end: 96000000 },
            ]
          },
          {
            label: 'DD',
            block: 'D',
            runs: [
              { date: 'Jul 2022', facility: 'Fort Worth', start: 1, end: 25600000 },
              { date: 'Aug 2022', facility: 'Fort Worth', start: 25600001, end: 57600000, owned: true },
            ]
          }
        ]
      },
      {
        label: 'Star',
        printed: 500000,
        fw: { printed: 500000, pct: 100, catalog: 'F-3005D*' },
        runs: [
          {
            label: 'D*',
            block: '*',
            runs: [
              { date: 'Jul 2022', facility: 'Fort Worth', start: 1, end: 500000 },
            ]
          }
        ]
      }
    ]
  },
]
</script>
