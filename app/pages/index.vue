<template>
  <div>
    <PageHeader :crumbs="[{ label: 'One Dollar' }, { label: 'Federal Reserve Note' }, { label: '2017SA' }]" />
    <UContainer class="mx-0 lg:px-2 2xl:px-8">

      <h1 class="my-8 text-3xl sm:text-4xl font-semibold tracking-tight">
        Series of 2017-A $1
      </h1>

      <article class="my-6 grid md:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-2 2xl:gap-x-4">
        <BankBlocksCard v-for="bank in banks" :bank="bank"
          :runs="runs?.filter((item) => item.bank.letter === bank.letter) || []" />
      </article>

      <PageFooter />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { banks } from '~~/types/Bank'

const { data: series } = await useFetch('/api/bep/s2017a')
const runs = ref(series.value?.filter((item) => item.denom === 1))
runs.value?.sort((a, b) => new Date(a.year, a.month).getTime() - new Date(b.year, b.month).getTime())
</script>
