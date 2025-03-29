<template>
  <UApp>
    <div :class="[
      'hidden', 'lg:flex', 'lg:flex-col', 'lg:fixed', 'lg:inset-y-0', 'lg:z-50',
      'lg:w-72', 'bg-(--ui-primary)', 'p-4', 'overflow-y-auto'
    ]">
      <div class="grow">
        <UButton to="/" icon="i-heroicons-banknotes" :ui="{ leadingIcon: 'size-12' }" />
        <UNavigationMenu orientation="vertical" color="neutral" class="py-4" highlight :items="frnNavItems" :ui="{
          label: 'text-sm text-(--ui-bg) border-b border-(--ui-border)',
          link: 'text-(--ui-bg)'
        }" />
        <UNavigationMenu orientation="vertical" color="neutral" class="py-4" highlight
          :items="[{ label: 'Legal Tender Notes', type: 'label' }]" :ui="{
            label: 'text-sm text-(--ui-bg) border-b border-(--ui-border)',
            link: 'text-(--ui-bg)'
          }" />
        <UNavigationMenu orientation="vertical" color="neutral" class="py-4" highlight
          :items="[{ label: 'Silver Certificates', type: 'label' }]" :ui="{
            label: 'text-sm text-(--ui-bg) border-b border-(--ui-border)',
            link: 'text-(--ui-bg)'
          }" />
        <UNavigationMenu orientation="vertical" color="neutral" class="py-4" highlight
          :items="[{ label: 'Gold Certificates', type: 'label' }]" :ui="{
            label: 'text-sm text-(--ui-bg) border-b border-(--ui-border)',
            link: 'text-(--ui-bg)'
          }" />
      </div>
      <ColorModeButton />
    </div>
    <div :class="[
      'bg-(--ui-bg)/50', 'backdrop-blur', 'sticky', 'top-0', 'z-40', 'h-16', 'flex', 'lg:hidden',
      'items-center', 'justify-between', 'p-4', 'sm:px-6', 'shadow-xs', 'border-b', 'border-(--ui-border)'
    ]">
      <USlideover v-model:open="menuOpen" title="Menu" side="left">
        <UButton icon="i-heroicons-bars-3" color="neutral" variant="link" />
        <template #body>
          <UNavigationMenu orientation="vertical" :items="frnNavItems" highlight :ui="{
            label: 'text-sm border-b border-(--ui-border)'
          }" />
        </template>
        <template #footer>
          <ColorModeButton variant="link" color="neutral" />
        </template>
      </USlideover>
      <UIcon name="i-heroicons-banknotes" class="size-8" />
    </div>
    <div class="relative lg:pl-72">
      <NuxtPage />
    </div>
  </UApp>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const menuOpen = ref(false)
watch(() => route.fullPath, () => {
  menuOpen.value = false
})

const frnNavItems = ref<NavigationMenuItem[]>([
  { label: 'Federal Reserve Notes', type: 'label' },
  {
    label: 'Series 2021',
    children: [
      { label: 'Summary', to: '/series/2021' },
      { label: 'One-Dollar Notes', to: '/series/s2021/notes/1' },
      { label: 'Five-Dollar Notes', to: '/series/g2021/notes/5' },
      { label: 'Ten-Dollar Notes', to: '/series/g2021/notes/10' },
      { label: 'Twenty-Dollar Notes', to: '/series/g2021/notes/20' },
      { label: 'Fifty-Dollar Notes', to: '/series/g2021/notes/50' },
      { label: 'One-Hundred-Dollar Notes', to: '/series/g2021/notes/100' },
    ]
  },
  {
    label: 'Series 2017-A',
    children: [
      { label: 'Summary' },
      { label: 'One-Dollar Notes', to: '/series/s2017a/notes/1' },
      { label: 'Two-Dollar Notes', to: '/series/s2017a/notes/2' },
      { label: 'Five-Dollar Notes', to: '/series/g2017a/notes/5' },
      { label: 'Ten-Dollar Notes', to: '/series/g2017a/notes/10' },
      { label: 'Twenty-Dollar Notes', to: '/series/g2017a/notes/20' },
      { label: 'Fifty-Dollar Notes', to: '/series/g2017a/notes/50' },
      { label: 'One-Hundred-Dollar Notes', to: '/series/g2017a/notes/100' },
    ]
  },
  {
    label: 'Series 2017',
    children: [
      { label: 'Summary' },
      { label: 'One-Dollar Notes' },
      { label: 'Ten-Dollar Notes' },
      { label: 'Twenty-Dollar Notes' },
    ]
  },
  {
    label: 'Series 2013',
    children: [
      { label: 'Summary' },
      { label: 'One-Dollar Notes' },
      { label: 'Two-Dollar Notes' },
      { label: 'Five-Dollar Notes' },
      { label: 'Ten-Dollar Notes' },
      { label: 'Twenty-Dollar Notes' },
      { label: 'Fifty-Dollar Notes' },
      { label: 'One-Hundred-Dollar Notes' },
    ]
  }
])
</script>
