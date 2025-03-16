<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';
const colorMode = useColorMode()
const props = defineProps<ButtonProps>()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" :variant="props.variant" :color="props.color"
      @click="isDark = !isDark" />
    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
