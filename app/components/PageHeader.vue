<template>
  <div
    class="bg-(--ui-bg)/50 backdrop-blur sticky top-16 lg:top-0 px-4 sm:px-6 lg:px-2 2xl:px-8 h-10 lg:h-16 z-30 flex items-center shadow-xs border-b border-(--ui-border)">
    <div>
      <USlideover title="On This Page" side="left">
        <UButton icon="i-heroicons-list-bullet" color="neutral" variant="link" size="sm" />
        <template #body>
          <slot />
        </template>
      </USlideover>
    </div>
    <UBreadcrumb :items="props.crumbs" />
  </div>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui';

const props = defineProps<{ crumbs: BreadcrumbItem[] }>()
</script>
