<template>
  <UCard v-if="runs.length" :ui="{ body: 'ps-0 sm:ps-0', header: 'py-2' }">
    <template #header>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <p v-if="runs.some(isOwned)" class="-ml-3.5 me-1 text-sm text-(--ui-success)">√</p>
          <h3 class="text-lg font-semibold tracking-tight">{{ bank.city }}</h3>
        </div>
        <p>{{ formatNumber(totalRuns.printed) }}</p>
        <div class="flex items-center h-12 overflow-hidden">
          <NuxtImg :src="bank.seal" sizes="98px" class="-mt-4" />
        </div>
      </div>
    </template>

    <UTabs variant="pill" :ui="{ list: 'ms-4 sm:ms-6' }" :items="[
      ...(regular.length ? [{
        label: 'Regular',
        runs: regular,
        fw: regular.some(isFw) ? catalog?.fw + bank.letter : '',
        dc: regular.some(isDc) ? catalog?.dc + bank.letter : '',
      }] : []),
      ...(star.length ? [{
        label: 'Star',
        runs: star,
        fw: star.some(isFw) ? catalog?.fw + bank.letter + '*' : '',
        dc: star.some(isDc) ? catalog?.fw + bank.letter + '*' : '',
      }] : []),
    ]">
      <template #content="{ item }">
        <PrintRunsStats :runs="new PrintRuns(item.runs)" :fw-catalog="item.fw" :dc-catalog="item.dc"
          :fw-owned="item.runs.filter(isFw).some(isOwned)" :dc-owned="item.runs.filter(isDc).some(isOwned)" />
        <BankBlocksList :series="series" :bank="bank" :runs="item.runs" />
      </template>
    </UTabs>

  </UCard>
</template>

<script setup lang="ts">
import formatNumber from '~~/utils/formatNumber'
import type { Bank } from '~~/types/Bank'
import { type Run, isDc, isFw, isOwned, isStar, notStar } from '~~/types/Run'
import { PrintRuns } from './PrintRunsStats.vue'
import type { Series } from '~~/types/Series'
import type { Catalog } from '~~/types/Catalog'

const props = defineProps<{ series?: Series, bank: Bank, catalog?: Catalog, runs: Run[] }>()
const totalRuns = new PrintRuns(props.runs)

const regular = props.runs.filter(notStar)
const star = props.runs.filter(isStar)
</script>
