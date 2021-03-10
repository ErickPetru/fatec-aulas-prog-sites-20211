<template>
  <nav class="p-3">
    <Logo />

    <ul class="flex space-x-2 mt-4">
      <li>
        <nuxt-link to="/" class="block p-3 rounded bg-blue-500 hover:bg-blue-800 transition-all">
          Início
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/produtos" class="block p-3 rounded bg-blue-500 hover:bg-blue-800 transition-all">
          Produtos
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/sobre-nos" class="block p-3 rounded bg-blue-500 hover:bg-blue-800 transition-all">
          Sobre nós
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
