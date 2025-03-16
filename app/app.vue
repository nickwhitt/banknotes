<template>
  <UApp>
    <div :class="[
      'hidden', 'lg:flex', 'lg:flex-col', 'lg:fixed', 'lg:inset-y-0', 'lg:z-50',
      'lg:w-60', 'bg-(--ui-primary)', 'p-4'
    ]">
      <div class="grow">
        <UIcon name="i-heroicons-banknotes" class="size-12 text-(--ui-bg)" />
      </div>
      <ColorModeButton />
    </div>
    <div :class="[
      'bg-(--ui-bg)/50', 'backdrop-blur', 'sticky', 'top-0', 'z-40', 'h-16', 'flex',
      'lg:hidden', 'items-center', 'justify-between', 'px-4', 'sm:px-6', 'py-4', 'shadow-xs'
    ]">
      <USlideover side="left" :ui="{ content: 'divide-y-0 max-w-sm', overlay: 'bg-(--ui-bg-accented)/75' }">
        <UButton icon="i-heroicons-bars-3" color="neutral" variant="link" />
        <template #body>Menu</template>
        <template #footer>
          <ColorModeButton variant="link" color="neutral" />
        </template>
      </USlideover>
      <UIcon name="i-heroicons-banknotes" class="size-8" />
    </div>
    <div class="relative lg:pl-60 max-w-7xl">
      <NuxtPage />
    </div>
  </UApp>
</template>
