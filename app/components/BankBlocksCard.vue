<template>
  <UCard v-if="runs.length" :ui="{ body: 'ps-0 sm:ps-0', header: 'py-2' }">
    <template #header>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <p v-if="fwOwned || dcOwned" class="-ml-3.5 me-1 text-sm text-(--ui-success)">√</p>
          <h3 class="text-lg font-semibold tracking-tight">{{ bank.city }}</h3>
        </div>
        <p>{{ formatNumber(totalRuns.printed) }}</p>
        <div class="flex items-center h-12 overflow-hidden">
          <NuxtImg :src="bank.seal" sizes="98px" class="-mt-4" />
        </div>
      </div>
    </template>

    <UTabs variant="pill" :ui="{ list: 'ms-4 sm:ms-6' }" :items="[
      ...(regular.length ? [{ label: 'Regular', runs: regular }] : []),
      ...(star.length ? [{ label: 'Star', runs: star }] : []),
    ]">
      <template #content="{ item }">
        <PrintRunsStats :runs="new PrintRuns(item.runs)" fw-catalog="F-4321A" dc-catalog="F-1234A" :fw-owned="fwOwned"
          :dc-owned="dcOwned" />
        <BankBlocksList :bank="bank" :runs="item.runs" />
      </template>
    </UTabs>

  </UCard>
</template>

<script setup lang="ts">
import formatNumber from '~~/utils/formatNumber'
import type { Bank } from '~~/types/Bank'
import type { Run } from '~~/types/Run'
import { PrintRuns } from './PrintRunsStats.vue'

const props = defineProps<{ bank: Bank, runs: Run[] }>()
const totalRuns = new PrintRuns(props.runs)

const regular = props.runs.filter((run) => run.block !== '*')
const star = props.runs.filter((run) => run.block === '*')

const fwOwned = props.runs.filter((run) => run.facility.code === 'fw').some((run) => run.owned)
const dcOwned = props.runs.filter((run) => run.facility.code === 'dc').some((run) => run.owned)
</script>
