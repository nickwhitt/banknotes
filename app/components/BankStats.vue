<template>
  <div class="ps-4 sm:ps-6 space-y-2">

    <div class="grid grid-cols-4 gap-2 items-end">
      <div class="col-span-3 flex items-end justify-between">
        <div>
          <div class="flex items-center">
            <p v-if="dcOwned" class="-ml-3.5 me-1 text-sm text-(--ui-success)">√</p>
            <p class="text-sm/6">{{ dcCatalog }}</p>
          </div>
          <h4 class="font-semibold tracking-tight">{{ facilities.dc.city }}</h4>
        </div>
        <div class="text-right">
          <div class="flex items-center justify-end">
            <p class="text-sm/6">{{ fwCatalog }}</p>
            <p v-if="fwOwned" class="-me-3.5 ms-1 text-sm text-(--ui-success)">√</p>
          </div>
          <h4 class="font-semibold tracking-tight">{{ facilities.fw.city }}</h4>
        </div>
      </div>
      <h4 class="text-right font-semibold tracking-tight">Printed</h4>
    </div>

    <div class="grid grid-cols-4 gap-2 items-center text-sm/6">
      <div class="col-span-3">
        <div class="flex items-center justify-between">
          <p>{{ formatNumber(runs.dc) }}</p>
          <p>{{ formatNumber(runs.fw) }}</p>
        </div>
        <UProgress color="info" size="sm" :model-value="runs.getPercentageDC()" :ui="{ base: 'bg-(--ui-error)' }" />
        <div class="flex items-center justify-between">
          <p>{{ runs.getPercentageDC() }}%</p>
          <p>{{ runs.getPercentageFW() }}%</p>
        </div>
      </div>
      <p class="text-right">{{ formatNumber(runs.printed) }}</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import formatNumber from '~~/utils/formatNumber'
import { facilities } from '~~/types/Facility'
import type { PrintRuns } from '~~/types/Run';

interface Props {
  runs: PrintRuns,
  dcCatalog: string,
  fwCatalog: string,
  dcOwned?: boolean,
  fwOwned?: boolean
}
const props = defineProps<Props>()
</script>
