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
        <strong class="mt-2 text-2xl text-green-700">R$ {{ price }}</strong>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProductCard',

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
