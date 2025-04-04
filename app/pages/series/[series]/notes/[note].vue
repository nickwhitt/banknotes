<template>
  <div>
    <PageHeader :crumbs="[
      { label: 'Federal Reserve Notes' }, { label: series?.title }, { label: '$' + route.params.note }
    ]" />
    <UContainer class="mx-0 lg:px-2 xl:px-8">

      <header class="my-8 flex flex-col gap-y-2">
        <h1 class="text-3xl sm:text-4xl font-semibold tracking-tight">
          ${{ route.params.note }} Federal Reserve Notes
        </h1>
        <ul class="flex flex-wrap items-end gap-x-4">
          <li class="text-2xl sm:text-3xl tracking-tight">
            Series of {{ series?.title }}
          </li>
          <li class="text-xl sm:text-2xl tracking-tight">
            {{ series?.treasurer }} | {{ series?.secretary }}
          </li>
        </ul>
      </header>

      <h2 class="my-6 text-xl sm:text-2xl font-semibold tracking-tight">
        Stats
      </h2>

      <SeriesStats :total="new PrintRuns(runs)" :stats="stats" />

      <h2 class="my-6 text-xl sm:text-2xl font-semibold tracking-tight">
        Districts
      </h2>

      <article class="grid md:grid-cols-2 2xl:grid-cols-3 gap-y-4 gap-x-2 xl:gap-x-4">
        <BankBlocksCard v-for="bank in banks" :series="series" :bank="bank" :catalog="catalog"
          :runs="runs?.filter((item) => item.bank.letter === bank.letter) || []" />
      </article>

      <PageFooter />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { banks } from '~~/types/Bank'
import { isDc, isFw, isStar, notStar, PrintRuns } from '~~/types/Run'
import { allSeries } from '~~/types/Series'

const route = useRoute()

const { data: runsData } = await useFetch(`/api/bep/${route.params.series}`)
if (!runsData.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const series = allSeries.find((s) => s.slug === route.params.series as string)

const { data: catalogData } = await useFetch('/api/catalog')
const catalog = catalogData.value?.find((c) => c.denom === Number(route.params.note) && c.series.code === series?.code)

const runs = ref(runsData.value?.filter((item) => item.denom === Number(route.params.note)))
if (!runs.value.length) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

runs.value?.sort(
  (a, b) => a.block.localeCompare(b.block)
).sort(
  (a, b) => new Date(a.year, a.month).getTime() - new Date(b.year, b.month).getTime()
)

const stats = [
  { label: 'Regular Notes', runs: new PrintRuns(runs.value.filter(notStar)) },
  { label: 'Star Notes', runs: new PrintRuns(runs.value.filter(isStar)) },
  { label: 'Washington', runs: new PrintRuns(runs.value.filter(isDc)) },
  { label: 'Fort Worth', runs: new PrintRuns(runs.value.filter(isFw)) },
]
</script>
