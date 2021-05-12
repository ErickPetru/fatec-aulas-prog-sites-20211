<template>
  <div id="page" class="flex justify-center px-4 py-8 space-x-8">
    <SideMenu
      :items="[
        { link: '/artigos', text: $t('sideMenu.articles') },
        { link: '/livros', text: $t('sideMenu.books') },
        { link: '/receitas', text: $t('sideMenu.recipes') },
      ]"
      :isDark="clickCount % 2 === 0"
    />

    <div class="pb-4">
      <PageTitle>{{ $t('home') }}</PageTitle>

      <p>{{ $t('helloWorld') }}</p>

      <img :src="weatherImage" alt="Dia ensolarado" class="object-cover w-56 my-10">

      <div class="my-2">
        <button
          @click="increment"
          class="px-6 py-1 bg-gray-500 rounded"
        >
          {{ $t('clickMe') }}
        </button>
      </div>

      <div class="py-6">
        <input type="text" v-model="name" :placeholder="$t('whatsYourName')">
        <nuxt-link to="/sobre-nos" :class="linkClasses">
          {{ $t('knowMoreAboutUs') }}
        </nuxt-link>
      </div>
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
      alert(this.$t('helloPerson', { name: this.name || this.$t('unknown') }))
    }
  }
}
</script>
