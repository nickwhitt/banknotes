<template>
  <UContainer>
    <h1 class="my-8 text-3xl sm:text-4xl font-semibold tracking-tight text-pretty">
      $5 Federal Reserve Note
    </h1>

    <h2 class="my-6 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty">
      Series 2021
    </h2>

    <h3 class="my-4 text-xl sm:text-2xl font-semibold tracking-tight text-pretty">
      Boston
    </h3>

    <ol class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <li>
        <UCard :ui="{ body: 'p-0 sm:p-0' }">
          <template #header>
            <div class="flex justify-between">
              <p class="font-semibold text-pretty">Regular Notes</p>
              <p>{{ formatNumber(57600000 - 1 + 1) }}</p>
            </div>
          </template>

          <UTable :data="data" :ui="{ thead: '[&>tr]:after:h-0' }">
            <template #serials-cell="{ row }">
              <ul class="font-mono">
                <li>{{ formatSerialNumber(row.original.serials.start, { letter: 'A', city: 'Boston' }, 'Q') }}</li>
                <li>{{ formatSerialNumber(row.original.serials.end, { letter: 'A', city: 'Boston' }, 'Q') }}</li>
              </ul>
            </template>
            <template #printed-cell="{ row }">
              <ul class="text-right">
                <li>{{ formatNumber(row.original.serials.end.serial - row.original.serials.start.serial + 1) }}</li>
                <li>{{ row.original.printed }}</li>
              </ul>
            </template>
          </UTable>
        </UCard>
      </li>
    </ol>
  </UContainer>
</template>

<script setup lang="ts">
type FederalReserveBank = {
  letter: string
  city: string
}

type SerialBlock = {
  serial: number
  block: string
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

const data = [
  { date: 'Nov 2022', serials: { start: { serial: 1, block: 'A' }, end: { serial: 32000000, block: 'A' } }, printed: 'Fort Worth' },
  { date: 'Dec 2022', serials: { start: { serial: 32000001, block: 'A' }, end: { serial: 57600000, block: 'A' } }, printed: 'Fort Worth' },
]
</script>
