<template>
  <div class="flex space-x-4 px-4">
    <SideMenu
      :items="[
        { link: '/artigos', text: 'Artigos' },
        { link: '/livros', text: 'Livros' },
        { link: '/receitas', text: 'Receitas' },
      ]"
      :isDark="clickCount % 2 === 0"
    />

    <div>
      <PageTitle>Início</PageTitle>

      <p>Olá mundo!</p>

      <div class="my-2">
        <button
          @click="increment"
          class="bg-gray-500 px-6 py-1 rounded"
        >
          Clique-me
        </button>
      </div>

      <input type="text" v-model="name" placeholder="Qual seu nome?">

      <nuxt-link to="/sobre-nos" :class="linkClasses">
        Saiba mais sobre nós
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      clickCount: 0
    }
  },
  computed: {
    linkClasses () {
      if (this.name) {
        return 'underline text-blue-500'
      } else {
        return 'underline text-red-500'
      }
    }
  },
  methods: {
    increment () {
      this.clickCount++
    }
  }
}
</script>

<style>
</style>
