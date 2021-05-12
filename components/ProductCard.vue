<template>
  <nuxt-link :to="path" class="grid">
    <article class="bg-white border border-gray-300 rounded shadow-lg">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="block rounded-t"
      />

      <div class="p-3">
        <h2 class="text-lg font-bold text-blue-900">{{ title }}</h2>
        <p class="text-gray-700">{{ description }}</p>
        <strong class="mt-2 text-2xl text-green-700">
          {{ $n(parseFloat(price), 'currency') }}
        </strong>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProductCard',

  // TODO: Ideia preliminar para lidar com cotação.
  // Depende de uma API de cotação on-line real para funcionar.
  // data() {
  //   return {
  //     priceConverted: ''
  //   }
  // },

  // async fetch() {
  //   this.priceConverted = await this.$axios.$get(`https://api.binance.com/${this.price}?from=BRL&to=USD`)
  // },

  props: {
    path: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    description: {
      type: String,
      default: ''
    },

    price: {
      type: String,
      default: ''
    },

    image: {
      type: String,
      default: ''
    }
  }
}
</script>
