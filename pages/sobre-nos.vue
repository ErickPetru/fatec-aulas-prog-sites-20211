<template>
  <div class="flex justify-center px-4 py-8 space-x-8">
    <SideMenu
      :items="[
        { link: '/historia', text: $t('sideMenu.history') },
        { link: '/missao', text: $t('sideMenu.mission') },
        { link: '/visao', text: $t('sideMenu.vision') },
        { link: '/valores', text: $t('sideMenu.values') },
      ]"
    />

    <div>
      <PageTitle>{{ $t('aboutUs') }}</PageTitle>

      <p>{{ $t('moreAboutUs') }}</p>

      <nuxt-link to="/" class="text-blue-500 underline">
        {{ $t('goHome') }}
      </nuxt-link>
    </div>
  </div>
</template>
