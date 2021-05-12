<template>
  <div class="pb-8 mt-8 text-center">
    <PageTitle>{{ $t('products') }}</PageTitle>

    <img :src="banner" height="200" class="object-cover w-full mt-4 mb-8 h-72">

    <div class="grid grid-flow-row gap-6 px-4 mx-auto md:grid-flow-col md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 xl:max-w-screen-xl">
      <ProductCard
        v-for="product of currentProducts"
        :key="product.id"
        :path="product.path"
        :title="product.title"
        :description="product.description"
        :price="product.price"
        :image="product.image"
      />
    </div>

    <nav>
      <nuxt-link v-for="n in totalPages" :key="n" :to="`?page=${n}`">
        {{ n }}
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Produtos',

  data () {
    return {
      banner: require('~/assets/img/weather-snowing.jpg'),
      currentPage: 1
    }
  },

  computed: {
    ...mapState({
      products: state => state.products.items
    }),

    totalPages() {
      return Math.ceil(this.products.length / 6)
    },

    currentProducts() {
      return this.products.slice(
        (this.currentPage - 1) * 6,
        (this.currentPage - 1) * 6 + 6
      )
    }
  },

  watch: {
    '$route.query': {
      immediate: true,
      handler (query) {
        this.currentPage = query.page || 1
      }
    }
  }
}
</script>
