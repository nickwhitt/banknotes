<template>
  <div>
    <PageHeader :crumbs="[
      { label: 'Federal Reserve Note' }, { label: series?.code }, { label: '$' + route.params.note }
    ]" />
    <UContainer class="mx-0 lg:px-2 xl:px-8">

      <h1 class="my-8 text-3xl sm:text-4xl font-semibold tracking-tight">
        Series of {{ series?.title }} ${{ route.params.note }}
      </h1>

      <article class="my-6 grid md:grid-cols-2 2xl:grid-cols-3 gap-y-4 gap-x-2 xl:gap-x-4">
        <BankBlocksCard v-for="bank in banks" :series="series" :bank="bank" :catalog="catalog"
          :runs="runs?.filter((item) => item.bank.letter === bank.letter) || []" />
      </article>

      <PageFooter />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { banks } from '~~/types/Bank'
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
</script>
