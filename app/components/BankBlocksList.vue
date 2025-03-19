<template>
  <div>
    <h4 class="my-4 ps-4 sm:ps-6 font-semibold tracking-tight">Blocks</h4>
    <UTabs orientation="vertical" variant="link" :items="items" class="mt-4 items-start">
      <template #content="{ item }">
        <ol class="text-sm/6 divide-y divide-(--ui-border)">
          <li v-for="run in item.runs" class="not-first:pt-2 not-last:pb-2 flex items-center justify-between">
            <div>
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
            <div class="font-mono">
              <p>{{ formatSerialNumber(run.start, item.block, bank.letter) }}</p>
              <p>{{ formatSerialNumber(run.end, item.block, bank.letter) }}</p>
            </div>
            <p>{{ formatNumber(run.end - run.start + 1) }}</p>
          </li>
        </ol>
      </template>
    </UTabs>
  </div>
</template>

<script setup lang="ts">
import type { Bank } from '~~/types/Bank';
import type { Run } from '~~/types/Run';
import formatNumber from '~~/utils/formatNumber'
import formatSerialNumber from '~~/utils/formatSerialNumber'

const props = defineProps<{ bank: Bank, runs: Run[] }>()

const blockSet = new Set<string>()
props.runs.forEach((run) => blockSet.add(run.block))

const items = Array.from(blockSet).map((block) => ({
  label: props.bank.letter + block,
  block: block,
  runs: props.runs.filter((run) => run.block === block),
}))
</script>
