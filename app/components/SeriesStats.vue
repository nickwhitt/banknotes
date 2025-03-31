<template>
  <dl class="grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-4 text-center">
    <UCard v-for="stat in stats" variant="subtle" :ui="{ body: 'flex flex-col' }">
      <dt class="text-base/7">{{ stat.label }}</dt>
      <dd class="order-first text-3xl font-semibold tracking-tight py-4">
        {{ formatNumber(stat.runs.printed) }}
      </dd>
      <dd>
        <UProgress size="xs" :model-value="total.calcPercentage(stat.runs.printed)" />
      </dd>
      <dd class="text-sm/6 text-(--ui-text-dimmed)">
        {{ (stat.runs.printed / total.printed * 100).toFixed(2) }}%
      </dd>
    </UCard>
  </dl>
</template>

<script setup lang="ts">
import type { PrintRuns } from '~~/types/Run';
import formatNumber from '~~/utils/formatNumber'

const props = defineProps<{ total: PrintRuns, stats: { label: string, runs: PrintRuns }[] }>()
</script>
