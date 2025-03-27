<template>
  <div>
    <PageHeader :crumbs="[{ label: 'Federal Reserve Note' }, { label: '2021' }]" />
    <UContainer class="mx-0 lg:px-2 xl:px-8">
      <h1 class="my-8 text-3xl sm:text-4xl font-semibold tracking-tight">
        Series of 2021
      </h1>

      <UCard>
        <UTabs :items="[{ label: 'Denominations', slot: 'note' }, { label: 'Banks', slot: 'bank' }]">
          <template #note="{ item }">
            <Bar :options="{ scales: { x: { stacked: true }, y: { stacked: true } } }" :data="{
              labels: ['$1', '$2', '$5', '$10', '$20', '$50', '$100'],
              datasets: [
                { label: 'Washington', data: [12, 0, 4, 10, 8, 6, 5] },
                { label: 'Fort Worth', data: [5, 6, 8, 10, 4, 0, 12] },
              ],
            }" />
          </template>

          <template #bank="{ item }">
            <Bar :options="{ scales: { x: { stacked: true }, y: { stacked: true } } }" :data="{
              labels: Object.values(banks).map((b) => b.city),
              datasets: [
                { label: 'Washington', data: [12, 0, 4, 10, 8, 6, 5, 12, 0, 4, 10, 8] },
                { label: 'Fort Worth', data: [8, 10, 4, 0, 12, 5, 6, 8, 10, 4, 0, 12] },
              ],
            }" />
          </template>
        </UTabs>
      </UCard>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { banks } from '~~/types/Bank'
</script>
