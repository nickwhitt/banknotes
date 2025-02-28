<template>
  <UContainer>
    <h1 class="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
      $5 Federal Reserve Note
    </h1>

    <p class="mt-6 text-lg/8">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum officia iure maxime repudiandae delectus ea, quis
      nam pariatur, at repellat accusamus? Harum deserunt doloribus quia architecto nulla suscipit. Repellat,
      praesentium.
    </p>

    <h2 class="text-2xl font-semibold tracking-tight text-pretty sm:text-3xl">
      Series {{ series.series }}
    </h2>

    <ul role="list" class="grid gap-4 md:grid-cols-2 xl:grid-cols-3 my-8">
      <li v-for="run in series.runs">
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-base/7 font-semibold tracking-tight uppercase">{{ run.bank.city }}</h3>
              <div class="space-x-2">
                <UBadge v-if="run.dc" label="DC" variant="outline" color="success" />
                <UBadge v-if="run.fw" label="FW" variant="outline" color="error" />
              </div>
            </div>
          </template>

          <div class="flex flex-wrap justify-evenly gap-x-6 gap-y-4 text-nowrap">
            <ul>
              <li class="text-center tracking-tight text-pretty">
                {{ formatNumber(run.regular.count) }} Regular
              </li>
              <li class="font-mono">{{ formatSerialNumber(run.regular.low, run.bank, series.letter) }}</li>
              <li class="font-mono">{{ formatSerialNumber(run.regular.high, run.bank, series.letter) }}</li>
            </ul>
            <ul v-if="run.star">
              <li class="text-center tracking-tight text-pretty">
                {{ formatNumber(run.star.count) }} Star
              </li>
              <li class="font-mono">{{ formatSerialNumber(run.star.low, run.bank, series.letter) }}</li>
              <li class="font-mono">{{ formatSerialNumber(run.star.high, run.bank, series.letter) }}</li>
            </ul>
          </div>
        </UCard>
      </li>
    </ul>
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

type SerialRange = {
  count: number
  low: SerialBlock
  high: SerialBlock
}

type PrintRun = {
  bank: FederalReserveBank
  regular: SerialRange
  star?: SerialRange
  dc?: boolean
  fw?: boolean
}

type Series = {
  series: string
  denomination: number
  letter: string
  runs: PrintRun[]
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

const series: Series = {
  series: '2021',
  denomination: 5,
  letter: 'Q',
  runs: [
    {
      bank: { letter: 'A', city: 'Boston' },
      regular: { count: 5760000, low: { serial: 1, block: 'A' }, high: { serial: 57600000, block: 'A' } },
      star: { count: 480000, low: { serial: 1, block: '*' }, high: { serial: 480000, block: '*' } },
      fw: true,
    },
    {
      bank: { letter: 'B', city: 'New York' },
      regular: { count: 192000000, low: { serial: 1, block: 'A' }, high: { serial: 96000000, block: 'B' } },
      star: { count: 640000, low: { serial: 1, block: '*' }, high: { serial: 640000, block: '*' } },
      fw: true,
    },
    {
      bank: { letter: 'C', city: 'Philadelphia' },
      regular: { count: 51200000, low: { serial: 1, block: 'A' }, high: { serial: 51200000, block: 'A' } },
      fw: true,
    },
    {
      bank: { letter: 'D', city: 'Cleveland' },
      regular: { count: 179200000, low: { serial: 1, block: 'A' }, high: { serial: 83200000, block: 'B' } },
      fw: true,
    },
    {
      bank: { letter: 'E', city: 'Richmond' },
      regular: { count: 262400000, low: { serial: 1, block: 'A' }, high: { serial: 70400000, block: 'C' } },
      fw: true,
    },
    {
      bank: { letter: 'F', city: 'Atlanta' },
      regular: { count: 243200000, low: { serial: 1, block: 'A' }, high: { serial: 51200000, block: 'C' } },
      star: { count: 640000, low: { serial: 1, block: '*' }, high: { serial: 640000, block: '*' } },
      fw: true,
    },
    {
      bank: { letter: 'G', city: 'Chicago' },
      regular: { count: 224000000, low: { serial: 1, block: 'A' }, high: { serial: 32000000, block: 'B' } },
      fw: true,
    },
    {
      bank: { letter: 'H', city: 'St. Louis' },
      regular: { count: 83200000, low: { serial: 1, block: 'A' }, high: { serial: 83200000, block: 'A' } },
      star: { count: 640000, low: { serial: 1, block: '*' }, high: { serial: 640000, block: '*' } },
      fw: true,
    },
    {
      bank: { letter: 'I', city: 'Minneapolis' },
      regular: { count: 32000000, low: { serial: 1, block: 'A' }, high: { serial: 32000000, block: 'A' } },
      star: { count: 3200000, low: { serial: 1, block: '*' }, high: { serial: 3200000, block: '*' } },
      fw: true,
    },
    {
      bank: { letter: 'J', city: 'Kansas City' },
      regular: { count: 25600000, low: { serial: 1, block: 'A' }, high: { serial: 25600000, block: 'A' } },
      star: { count: 3200000, low: { serial: 1, block: '*' }, high: { serial: 3200000, block: '*' } },
      fw: true,
    },
    {
      bank: { letter: 'K', city: 'Dallas' },
      regular: { count: 153600000, low: { serial: 1, block: 'A' }, high: { serial: 57600000, block: 'B' } },
      fw: true,
    },
    {
      bank: { letter: 'L', city: 'San Francisco' },
      regular: { count: 249600000, low: { serial: 1, block: 'A' }, high: { serial: 57600000, block: 'C' } },
      fw: true,
    },
  ],
}
</script>
