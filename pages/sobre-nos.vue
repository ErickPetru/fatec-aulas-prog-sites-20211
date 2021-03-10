<template>
  <div class="flex space-x-4 px-4">
    <SideMenu
      :items="[
        { link: '/historia', text: 'História' },
        { link: '/missao', text: 'Missão' },
        { link: '/visao', text: 'Visão' },
        { link: '/valores', text: 'Valores' },
      ]"
    />

    <div>
      <PageTitle>Sobre Nós</PageTitle>

      <p>Nós somos fodões.</p>

      <nuxt-link to="/" class="underline text-blue-500">
        Voltar para o início
      </nuxt-link>
    </div>
  </div>
</template>
