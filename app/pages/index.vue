<template>
  <UContainer class="mt-8 mb-20">
    <h1 class="my-8 text-3xl sm:text-4xl font-semibold tracking-tight text-pretty">
      $5 Federal Reserve Note
    </h1>

    <h2 class="my-6 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty">
      Series 2021
    </h2>

    <div v-for="bank in data" class="mb-8">
      <div class="my-4 flex items-center justify-between">
        <h3 class="text-xl sm:text-2xl font-semibold tracking-tight text-pretty">
          {{ bank.bank.city }}
        </h3>
        <div class="flex gap-4 text-center">
          <div>
            <p class="text-nowrap">{{ bank.fNumber }}</p>
            <p>{{ formatNumber(bank.regularNotes) }}</p>
          </div>
          <div>
            <p class="text-nowrap">{{ bank.fNumber }}*</p>
            <p>{{ formatNumber(bank.starNotes) }}</p>
          </div>
        </div>
      </div>

      <ol class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <li v-for="block in bank.blocks">
          <UCard :ui="{ body: 'p-0 sm:p-0', root: 'h-fit' }">
            <template #header>
              <h4 class="font-semibold">
                {{ bank.series + bank.bank.letter + block.block }} Block
              </h4>
            </template>
            <UTable :columns="columns" :data="block.dates" :ui="{ thead: '[&>tr]:after:h-0' }">
              <template #serials-cell="{ row }">
                <ul class="font-mono">
                  <li>{{ formatSerialNumber(row.original.start, bank.bank, bank.series) }}</li>
                  <li>{{ formatSerialNumber(row.original.end, bank.bank, bank.series) }}</li>
                </ul>
              </template>
              <template #printed-cell="{ row }">
                <ul class="text-right">
                  <li>{{ formatNumber(row.original.end.serial - row.original.start.serial + 1) }}</li>
                  <li>{{ row.original.printed }}</li>
                </ul>
              </template>
            </UTable>
          </UCard>
        </li>
      </ol>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

type FederalReserveBank = {
  letter: string
  city: string
}

type SerialBlock = {
  serial: number
  block: string
}

type PrintRun = {
  date: string
  printed: string
  start: SerialBlock
  end: SerialBlock
}

type Block = {
  block: string
  dates: PrintRun[]
}

function formatNumber(value: number): string {
  if (value === null || isNaN(value)) {
    return '-'
  }

  let options = {}
  if (value >= 100000) {
    options = { notation: "compact", maximumSignificantDigits: 3 }
  }

  return Intl.NumberFormat("en-US", options).format(value)
}

function formatSerialNumber(serialBlock: SerialBlock, bank: FederalReserveBank, seriesLetter: string | undefined): string {
  let serialNumber = serialBlock.serial.toString().padStart(8, "0")

  return `${seriesLetter}${bank.letter} ${serialNumber.substring(0, 4)} ${serialNumber.substring(4)} ${serialBlock.block}`
}

const columns: TableColumn<PrintRun>[] = [
  { accessorKey: 'date', header: 'Date' },
  { id: 'serials', header: 'Serials' },
  { accessorKey: 'printed', header: 'Printed', meta: { class: { th: 'text-right' } } },
]

const data = [
  {
    series: 'Q',
    bank: { letter: 'A', city: 'Boston' },
    fNumber: 'F-1999A',
    regularNotes: 57600000,
    starNotes: 500000 + 4800000 - 3200001 + 1,
    blocks: [
      {
        block: 'A',
        dates: [
          {
            date: 'Nov 2022',
            printed: 'Fort Worth',
            start: { serial: 1, block: 'A' },
            end: { serial: 32000000, block: 'A' }
          },
          {
            date: 'Dec 2022',
            printed: 'Fort Worth',
            start: { serial: 32000001, block: 'A' },
            end: { serial: 57600000, block: 'A' },
          },
        ],
      },
      {
        block: '*',
        dates: [
          {
            date: 'Nov 2022',
            printed: 'Fort Worth',
            start: { serial: 1, block: '*' },
            end: { serial: 500000, block: '*' }
          },
          {
            date: 'Nov 2022',
            printed: 'Fort Worth',
            start: { serial: 3200000, block: '*' },
            end: { serial: 4800000, block: '*' },
          },
        ],
      },
    ],
  },
  {
    series: 'Q',
    bank: { letter: 'L', city: 'San Francisco' },
    fNumber: 'F-1999L',
    blocks: [
      {
        block: 'A',
        dates: [
          {
            date: 'Nov 2022',
            printed: 'Fort Worth',
            start: { serial: 1, block: 'A' },
            end: { serial: 32000000, block: 'A' }
          },
          {
            date: 'Dec 2022',
            printed: 'Fort Worth',
            start: { serial: 32000001, block: 'A' },
            end: { serial: 89600000, block: 'A' },
          },
        ],
      },
    ],
  },
]
</script>
