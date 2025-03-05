<template>
  <UContainer class="mt-8 mb-20">
    <div class="my-8 text-3xl tracking-tight text-pretty">
      <h1 class="sm:text-4xl font-semibold ">
        $5 Federal Reserve Notes
      </h1>
      <p>Series of 2013</p>
      <p class="text-xl">Rios | Lew</p>
    </div>

    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      <div v-for="bank in data">
        <header class="flex items-center gap-4">
          <h2 class="grow text-xl sm:text-2xl font-semibold tracking-tight text-pretty">
            {{ bank.city }}
          </h2>
          <div class="text-center">
            <p>{{ bank.regular?.catalog }}</p>
            <p>{{ formatNumber(bank.regular?.printed) }}</p>
          </div>
          <div class="text-center">
            <p>{{ bank.star?.catalog }}</p>
            <p>{{ formatNumber(bank.star?.printed) }}</p>
          </div>
        </header>

        <UCard v-for="print in bank.prints" class="my-4">
          <template #header>
            <h4>M{{ bank.letter + print.block }} Block</h4>
          </template>

          <ul class="divide-y divide-(--ui-border) text-sm/6">
            <li v-for="run in print.runs" class="py-4 hover:bg-(--ui-bg-elevated)">
              <div class="flex items-center justify-between">
                <div>{{ run.date }}</div>
                <div class="font-mono">
                  <p>{{ formatSerialNumber(run.start, print.block, bank.letter, 'M') }}</p>
                  <p>{{ formatSerialNumber(run.end, print.block, bank.letter, 'M') }}</p>
                </div>
                <div class="text-right">
                  <p>{{ formatNumber(run.end - run.start + 1) }}</p>
                  <p>{{ run.facility }}</p>
                </div>
              </div>
            </li>
          </ul>
        </UCard>
      </div>
    </div>

  </UContainer>
</template>

<script setup lang="ts">
import formatNumber from '~~/utils/formatNumber'
import formatSerialNumber from '~~/utils/formatSerialNumber'

const data = [
  {
    city: 'Boston',
    letter: 'A',
    regular: { catalog: 'F-1996A', printed: 185600000 },
    star: { catalog: 'F-1996A*', printed: 3200000 },
    prints: [
      {
        block: 'A',
        runs: [
          { date: 'Oct 2013', start: 1, end: 19200000, facility: 'DC' },
          { date: 'Feb 2014', start: 19200001, end: 25600000, facility: 'DC' },
          { date: 'Nov 2014', start: 25600001, end: 51200000, facility: 'DC' },
          { date: 'Dec 2014', start: 51200001, end: 57600000, facility: 'DC' },
          { date: 'Nov 2015', start: 57600001, end: 76800000, facility: 'DC' },
          { date: 'Dec 2015', start: 76800001, end: 89600000, facility: 'DC' },
          { date: 'Oct 2016', start: 89600001, end: 96000000, facility: 'DC' },
        ]
      },
      {
        block: 'B',
        runs: [
          { date: 'Oct 2016', start: 1, end: 32000000, facility: 'DC' },
          { date: 'Oct 2017', start: 32000001, end: 64000000, facility: 'DC' },
          { date: 'Oct 2018', start: 64000001, end: 89600000, facility: 'DC' },
        ]
      },
      {
        block: '*',
        runs: [
          { date: 'Mar 2014', start: 1, end: 3200000, facility: 'DC' },
        ]
      },
    ]
  },
  {
    city: 'New York',
    letter: 'B',
    regular: { catalog: 'F-1996B', printed: 435200000 },
    star: { catalog: 'F-1996B*', printed: 6400000 },
    prints: [
      { block: 'B', runs: [{ date: 'Oct 2016', start: 38400001, end: 96000000, facility: 'DC' }] },
      { block: 'C', runs: [{ date: 'Oct 2016', start: 1, end: 12800000, facility: 'DC' }] }
    ]
  }
]
</script>
