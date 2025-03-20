<template>
  <div>
    <h4 class="my-4 ps-4 sm:ps-6 font-semibold tracking-tight">Blocks</h4>
    <UTabs orientation="vertical" variant="link" :items="items" class="mt-4 items-start">
      <template #content="{ item }">
        <ol class="table w-full text-sm/6">
          <li v-for="run in item.runs" class="table-row group">
            <div class="table-cell py-2 not-group-last:border-b not-group-last:border-(--ui-border)">
              <div class="flex items-center">
                <p v-if="run.owned" class="-ml-3.5 me-1 text-sm text-(--ui-success)">√</p>
                <p>
                  {{ new Date(run.year, run.month - 1).toLocaleString('en-us', {
                    year: 'numeric', month: 'short'
                  }) }}
                </p>
              </div>
              <p>{{ run.facility.city }}</p>
            </div>
            <div class="table-cell py-2 not-group-last:border-b not-group-last:border-(--ui-border) font-mono">
              <p>{{ formatSerialNumber(run.start, item.block, bank.letter, run.series.letter) }}</p>
              <p>{{ formatSerialNumber(run.end, item.block, bank.letter, run.series.letter) }}</p>
            </div>
            <p
              class="table-cell py-2 not-group-last:border-b not-group-last:border-(--ui-border) text-right align-middle">
              {{ formatNumber(run.end - run.start + 1) }}
            </p>
          </li>
        </ol>
      </template>
    </UTabs>
  </div>
</template>

<script setup lang="ts">
import type { Bank } from '~~/types/Bank';
import type { Run } from '~~/types/Run';
import type { Series } from '~~/types/Series';
import formatNumber from '~~/utils/formatNumber'
import formatSerialNumber from '~~/utils/formatSerialNumber'

const props = defineProps<{ series?: Series, bank: Bank, runs: Run[] }>()

const blockSet = new Set<string>()
props.runs.forEach((run) => blockSet.add(run.block))

const items = Array.from(blockSet).map((block) => ({
  label: (props.series?.letter || '') + props.bank.letter + block,
  block: block,
  runs: props.runs.filter((run) => run.block === block),
}))
</script>
