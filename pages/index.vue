<template>
  <div id="page" class="flex px-4 space-x-4">
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

      <img :src="weatherImage" alt="Dia ensolarado">

      <div class="my-2">
        <button
          @click="increment"
          class="px-6 py-1 bg-gray-500 rounded"
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
    },

    weatherImage() {
      if (this.name) {
        return require('~/assets/img/weather-sunny.jpg')
      } else {
        return require('~/assets/img/weather-rainy.jpg')
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
