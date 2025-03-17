<template>
  <UApp>
    <div :class="[
      'hidden', 'lg:flex', 'lg:flex-col', 'lg:fixed', 'lg:inset-y-0', 'lg:z-50',
      'lg:w-72', 'bg-(--ui-primary)', 'p-4'
    ]">
      <div class="grow">
        <UIcon name="i-heroicons-banknotes" class="size-12 text-(--ui-bg)" />
      </div>
      <ColorModeButton />
    </div>
    <div :class="[
      'bg-(--ui-bg)/50', 'backdrop-blur', 'sticky', 'top-0', 'z-40', 'h-16', 'flex', 'lg:hidden',
      'items-center', 'justify-between', 'p-4', 'sm:px-6', 'shadow-xs', 'border-b', 'border-(--ui-border)'
    ]">
      <USlideover title="Menu" side="left">
        <UButton icon="i-heroicons-bars-3" color="neutral" variant="link" />
        <template #body>
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
