<template>
  <UContainer class="mt-8 mb-20">
    <h1 class="my-8 text-3xl sm:text-4xl font-semibold tracking-tight text-pretty">
      $1 Federal Reserve Notes
    </h1>

    <h2 class="my-6 text-xl sm:text-2xl font-semibold tracking-tight text-pretty">
      Series of 2017-A
    </h2>

    <article class="grid md:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-2">
      <UCard v-for="bank in banks" :ui="{ body: 'ps-0 sm:ps-0' }">
        <template #header>
          <h3 class="text-lg font-semibold tracking-tight text-pretty">{{ bank.bank.city }}</h3>
        </template>

        <UTabs orientation="vertical" variant="link" :items="bank.blocks" class="items-start">
          <template #content="{ item }">
            <ol class="text-sm/6 divide-y divide-(--ui-border)">
              <li v-for="run in item.runs" class="not-first:pt-2 not-last:pb-2 flex items-center justify-between">
                <div>
                  <p>{{ run.date }}</p>
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

        <template #footer>
          <div class="space-y-2 text-sm/6">
            <div class="grid grid-cols-4 gap-2 font-semibold tracking-tight text-pretty">
              <div class="col-span-3 flex justify-between">
                <p>Washington</p>
                <p class="text-right">Fort Worth</p>
              </div>
              <p class="text-right">Printed</p>
            </div>
            <div class="grid grid-cols-4 gap-2 items-center">
              <div class="col-span-3">
                <div class="flex items-center justify-between">
                  <p>{{ formatNumber(bank.regular?.dc) }}</p>
                  <p>{{ formatNumber(bank.regular?.printed - bank.regular?.dc || undefined) }}</p>
                </div>
                <UProgress color="info" size="sm" :model-value="bank.regular?.dcPct || 0"
                  :ui="{ base: 'bg-(--ui-error)' }" />
                <div class="flex items-center justify-between">
                  <p>{{ bank.regular?.dcPct || '-' }}%</p>
                  <p>{{ 100 - bank.regular?.dcPct || '-' }}%</p>
                </div>
              </div>
              <p class="text-right">{{ formatNumber(bank.regular?.printed) }}</p>
            </div>

            <div class="grid grid-cols-4 gap-2 items-center">
              <div class="col-span-3">
                <div class="flex items-center justify-between">
                  <p>{{ formatNumber(bank.star?.dc) }}</p>
                  <p>{{ formatNumber(bank.star?.printed - bank.star?.dc) }}</p>
                </div>
                <UProgress color="info" size="sm" :model-value="bank.star?.dcPct || 0"
                  :ui="{ base: 'bg-(--ui-error)' }" />
                <div class="flex items-center justify-between">
                  <p>{{ bank.star?.dcPct || '-' }}%</p>
                  <p>{{ 100 - bank.star?.dcPct || '-' }}%</p>
                </div>
              </div>
              <p class="text-right">{{ formatNumber(bank.star?.printed) }}</p>
            </div>
          </div>
        </template>
      </UCard>
    </article>
  </UContainer>
</template>

<script setup lang="ts">
import formatNumber from '~~/utils/formatNumber';
import formatSerialNumber from '~~/utils/formatSerialNumber';

const banks = [
  {
    bank: { letter: 'A', city: 'Boston' },
    catalog: { dc: 'F-3006A', fw: 'F-3005A', dcStar: 'F-3006A*' },
    regular: { printed: 96640000, dc: 12800000, dcPct: 13 },
    star: { printed: 3450000, dc: 3450000, dcPct: 100 },
    blocks: [
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
          { date: 'Jan 2022', facility: 'Fort Worth', start: 1, end: 640000 },
        ]
      },
      {
        label: 'A*',
        block: '*',
        runs: [
          { date: 'Dec 2019', facility: 'Washington', start: 1, end: 3200000 },
          { date: 'Jan 2020', facility: 'Washington', start: 3200001, end: 3450000 },
        ]
      }
    ]
  },
  {
    bank: { letter: 'B', city: 'New York' },
    blocks: [{ label: 'BA' }, { label: 'BB' }, { label: 'BC' }, { label: 'BD' }, { label: 'B*' }]
  },
  { bank: { letter: 'D', city: 'Cleveland' } },
  {
    bank: { letter: 'F', city: 'Atlanta' },
    blocks: [{ label: 'FA' }, { label: 'FB' }, { label: 'FC' }, { label: 'FD' }, { label: 'FE' }, { label: 'FF' }, { label: 'FG' }, { label: 'FH' }, { label: 'FI' }, { label: 'F*' }]
  },
  { bank: { letter: 'L', city: 'San Francisco' } },
]
</script>
