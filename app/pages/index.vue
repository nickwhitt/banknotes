<template>
  <UContainer class="mx-0 xl:px-2">
    <div class="bg-(--ui-bg)/50 backdrop-blur sticky top-16 lg:top-0 h-10 lg:h-16 flex items-center">
      <div class="sm:max-md:hidden">
        <USlideover side="left" :ui="{ content: 'divide-y-0 max-w-sm', overlay: 'bg-(--ui-bg-accented)/75' }">
          <UButton icon="i-heroicons-list-bullet" color="neutral" variant="link" size="sm" />
          <template #body>Table of Contents</template>
        </USlideover>
      </div>
      <UBreadcrumb :items="[{ label: 'One Dollar' }, { label: 'Federal Reserve Note' }, { label: '2017SA' }]" />
    </div>

    <h1 class="mb-8 text-3xl sm:text-4xl font-semibold tracking-tight">
      Series of 2017-A $1
    </h1>

    <article class="my-6 grid md:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-2 sm:max-md:pr-60">
      <UCard v-for="bank in data" :ui="{ body: 'ps-0 sm:ps-0', header: 'py-2' }">
        <template #header>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <p v-if="bank.owned" class="-ml-3.5 me-1 text-sm text-(--ui-success)">√</p>
              <h3 class="text-lg font-semibold tracking-tight">{{ bank.bank.city }}</h3>
            </div>
            <p>{{ formatNumber(bank.printed) }}</p>
            <div class="flex items-center h-12 overflow-hidden">
              <NuxtImg :src="bank.bank.seal" sizes="98px" class="-mt-4" />
            </div>
          </div>
        </template>

        <UTabs variant="pill" :items="bank.blocks" :ui="{ list: 'ms-4 sm:ms-6' }">
          <template #content="{ item }">
            <div class="ps-4 sm:ps-6 space-y-2">
              <div class="grid grid-cols-4 gap-2 items-end">
                <div class="col-span-3 flex items-end justify-between">
                  <div>
                    <div class="flex items-center">
                      <p v-if="item.dc?.owned" class="-ml-3.5 me-1 text-sm text-(--ui-success)">√</p>
                      <p class="text-sm/6">{{ item.dc?.catalog }}</p>
                    </div>
                    <h4 class="font-semibold tracking-tight">{{ dc.city }}</h4>
                  </div>
                  <div class="text-right">
                    <div class="flex items-center justify-end">
                      <p class="text-sm/6">{{ item.fw?.catalog }}</p>
                      <p v-if="item.fw?.owned" class="-me-3.5 ms-1 text-sm text-(--ui-success)">√</p>
                    </div>
                    <h4 class="font-semibold tracking-tight">{{ fw.city }}</h4>
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
                        <p v-if="run.owned" class="-ml-3.5 me-1 text-sm text-(--ui-success)">√</p>
                        <p>
                          {{ new Date(run.year, run.month - 1).toLocaleString('en-us', {
                            year: 'numeric', month: 'short'
                          }) }}
                        </p>
                      </div>
                      <p>{{ run.facility.city }}</p>
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
import { banks, type Bank } from '~~/types/Bank';
import { dc, fw } from '~~/types/Facility';
import type { Run } from '~~/types/Run';

interface BlockRun extends TabsItem {
  block: string
  runs: Run[]
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

const { data: series } = await useFetch('/api/bep/s2017a')
const runs = ref(series.value?.filter((item) => item.denom === 1))
runs.value?.sort((a, b) => new Date(a.year, a.month).getTime() - new Date(b.year, b.month).getTime())

const data: Series[] = [
  {
    bank: banks.a,
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
            runs: runs.value?.filter((item) => item.bank.letter === banks.a.letter && item.block === 'A') || []
          },
          {
            label: 'AB',
            block: 'B',
            runs: runs.value?.filter((item) => item.bank.letter === banks.a.letter && item.block === 'B') || []
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
            runs: runs.value?.filter((item) => item.bank.letter === banks.a.letter && item.block === '*') || []
          }
        ]
      }
    ]
  },
  {
    bank: banks.b,
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
            runs: runs.value?.filter((item) => item.bank.letter === banks.b.letter && item.block === 'A') || []
          },
          {
            label: 'BB',
            block: 'B',
            runs: runs.value?.filter((item) => item.bank.letter === banks.b.letter && item.block === 'B') || []
          },
          {
            label: 'BC',
            block: 'C',
            runs: runs.value?.filter((item) => item.bank.letter === banks.b.letter && item.block === 'C') || []
          },
          {
            label: 'BD',
            block: 'D',
            runs: runs.value?.filter((item) => item.bank.letter === banks.b.letter && item.block === 'D') || []
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
            runs: runs.value?.filter((item) => item.bank.letter === banks.b.letter && item.block === '*') || []
          }
        ]
      },
    ]
  },
  {
    bank: banks.c,
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
            runs: runs.value?.filter((item) => item.bank.letter === banks.c.letter && item.block === 'A') || []
          }
        ]
      }
    ]
  },
  {
    bank: banks.d,
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
            runs: runs.value?.filter((item) => item.bank.letter === banks.d.letter && item.block === 'A') || []
          },
          {
            label: 'DB',
            block: 'B',
            runs: runs.value?.filter((item) => item.bank.letter === banks.d.letter && item.block === 'B') || []
          },
          {
            label: 'DC',
            block: 'C',
            runs: runs.value?.filter((item) => item.bank.letter === banks.d.letter && item.block === 'C') || []
          },
          {
            label: 'DD',
            block: 'D',
            runs: runs.value?.filter((item) => item.bank.letter === banks.d.letter && item.block === 'D') || []
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
            runs: runs.value?.filter((item) => item.bank.letter === banks.d.letter && item.block === '*') || []
          }
        ]
      }
    ]
  },
  {
    bank: banks.e,
    printed: 0,
    blocks: [
      {
        label: 'Regular',
        printed: 332800000,
        dc: { printed: 153600000, pct: 46, catalog: 'F-3006E' },
        fw: { printed: 179200000, pct: 54, catalog: 'F-3005E' },
        runs: [
          { label: 'EA', block: 'A', runs: runs.value?.filter((item) => item.bank.letter === banks.e.letter && item.block === 'A') || [] },
          { label: 'EB', block: 'B', runs: runs.value?.filter((item) => item.bank.letter === banks.e.letter && item.block === 'B') || [] },
          { label: 'EC', block: 'C', runs: runs.value?.filter((item) => item.bank.letter === banks.e.letter && item.block === 'C') || [] },
          { label: 'ED', block: 'D', runs: runs.value?.filter((item) => item.bank.letter === banks.e.letter && item.block === 'D') || [] },
        ]
      },
      {
        label: 'Star',
        printed: 500000,
        fw: { printed: 500000, pct: 100, catalog: 'F-3005E*' },
        runs: [
          { label: 'E*', block: '*', runs: runs.value?.filter((item) => item.bank.letter === banks.e.letter && item.block === '*') || [] },
        ]
      },
    ]
  },
  {
    bank: banks.f,
    printed: 0,
    blocks: [
      {
        label: 'Regular', printed: 0, runs: [
          { label: 'FA', block: 'A', runs: runs.value?.filter((item) => item.bank.letter === banks.f.letter && item.block === 'A') || [] },
          { label: 'FB', block: 'B', runs: runs.value?.filter((item) => item.bank.letter === banks.f.letter && item.block === 'B') || [] },
          { label: 'FC', block: 'C', runs: runs.value?.filter((item) => item.bank.letter === banks.f.letter && item.block === 'C') || [] },
          { label: 'FD', block: 'D', runs: runs.value?.filter((item) => item.bank.letter === banks.f.letter && item.block === 'D') || [] },
          { label: 'FE', block: 'E', runs: runs.value?.filter((item) => item.bank.letter === banks.f.letter && item.block === 'E') || [] },
          { label: 'FF', block: 'F', runs: runs.value?.filter((item) => item.bank.letter === banks.f.letter && item.block === 'F') || [] },
          { label: 'FG', block: 'G', runs: runs.value?.filter((item) => item.bank.letter === banks.f.letter && item.block === 'G') || [] },
          { label: 'FH', block: 'H', runs: runs.value?.filter((item) => item.bank.letter === banks.f.letter && item.block === 'H') || [] },
          { label: 'FI', block: 'I', runs: runs.value?.filter((item) => item.bank.letter === banks.f.letter && item.block === 'I') || [] },
        ]
      },
      {
        label: 'Star',
        printed: 10990000,
        fw: { printed: 10990000, pct: 100, catalog: 'F-3005F*' },
        runs: [
          { label: 'F*', block: '*', runs: runs.value?.filter((item) => item.bank.letter === banks.f.letter && item.block === '*') || [] },
        ]
      },
    ]
  },
  {
    bank: banks.g,
    printed: 0,
    blocks: [
      {
        label: 'Regular', printed: 0, runs: [
          { label: 'GA', block: 'A', runs: runs.value?.filter((item) => item.bank.letter === banks.g.letter && item.block === 'A') || [] },
          { label: 'GB', block: 'B', runs: runs.value?.filter((item) => item.bank.letter === banks.g.letter && item.block === 'B') || [] },
          { label: 'GC', block: 'C', runs: runs.value?.filter((item) => item.bank.letter === banks.g.letter && item.block === 'C') || [] },
          { label: 'GD', block: 'D', runs: runs.value?.filter((item) => item.bank.letter === banks.g.letter && item.block === 'D') || [] },
          { label: 'GE', block: 'E', runs: runs.value?.filter((item) => item.bank.letter === banks.g.letter && item.block === 'E') || [] },
          { label: 'GF', block: 'F', runs: runs.value?.filter((item) => item.bank.letter === banks.g.letter && item.block === 'F') || [] },
        ]
      },
      {
        label: 'Star',
        printed: 9760000,
        dc: { printed: 6560000, pct: 67, catalog: 'F-3006G*' },
        fw: { printed: 3200000, pct: 33, catalog: 'F-3005G*' },
        runs: [
          { label: 'G*', block: '*', runs: runs.value?.filter((item) => item.bank.letter === banks.g.letter && item.block === '*') || [] },
        ]
      },
    ]
  },
  {
    bank: banks.h,
    printed: 0,
    blocks: [
      {
        label: 'Regular', printed: 0, runs: [
          { label: 'HA', block: 'A', runs: runs.value?.filter((item) => item.bank.letter === banks.h.letter && item.block === 'A') || [] },
        ]
      },
    ]
  },
  {
    bank: banks.i,
    printed: 0,
    blocks: [
      {
        label: 'Regular', printed: 0, runs: [
          { label: 'IA', block: 'A', runs: runs.value?.filter((item) => item.bank.letter === banks.i.letter && item.block === 'A') || [] },
        ]
      },
    ]
  },
  {
    bank: banks.j,
    printed: 0,
    blocks: [
      {
        label: 'Regular', printed: 0, runs: [
          { label: 'JA', block: 'A', runs: runs.value?.filter((item) => item.bank.letter === banks.j.letter && item.block === 'A') || [] },
        ]
      },
    ]
  },
  {
    bank: banks.k,
    printed: 0,
    blocks: [
      {
        label: 'Regular', printed: 0, runs: [
          { label: 'KA', block: 'A', runs: runs.value?.filter((item) => item.bank.letter === banks.k.letter && item.block === 'A') || [] },
          { label: 'KB', block: 'B', runs: runs.value?.filter((item) => item.bank.letter === banks.k.letter && item.block === 'B') || [] },
          { label: 'KC', block: 'C', runs: runs.value?.filter((item) => item.bank.letter === banks.k.letter && item.block === 'C') || [] },
        ]
      },
    ]
  },
  {
    bank: banks.l,
    printed: 0,
    blocks: [
      {
        label: 'Regular', printed: 0, runs: [
          { label: 'LA', block: 'A', runs: runs.value?.filter((item) => item.bank.letter === banks.l.letter && item.block === 'A') || [] },
          { label: 'LB', block: 'B', runs: runs.value?.filter((item) => item.bank.letter === banks.l.letter && item.block === 'B') || [] },
          { label: 'LC', block: 'C', runs: runs.value?.filter((item) => item.bank.letter === banks.l.letter && item.block === 'C') || [] },
          { label: 'LD', block: 'D', runs: runs.value?.filter((item) => item.bank.letter === banks.l.letter && item.block === 'D') || [] },
          { label: 'LE', block: 'E', runs: runs.value?.filter((item) => item.bank.letter === banks.l.letter && item.block === 'E') || [] },
          { label: 'LF', block: 'F', runs: runs.value?.filter((item) => item.bank.letter === banks.l.letter && item.block === 'F') || [] },
          { label: 'LG', block: 'G', runs: runs.value?.filter((item) => item.bank.letter === banks.l.letter && item.block === 'G') || [] },
        ]
      },
      {
        label: 'Star',
        printed: 4340000,
        fw: { printed: 4340000, pct: 100, catalog: 'F-3005L*' },
        runs: [
          { label: 'L*', block: '*', runs: runs.value?.filter((item) => item.bank.letter === banks.l.letter && item.block === '*') || [] },
        ]
      },
    ]
  }
]
</script>
