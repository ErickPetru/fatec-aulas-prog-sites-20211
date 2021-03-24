<template>
  <div class="pb-8 text-center">
    <PageTitle>Produtos</PageTitle>

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
      <nuxt-link to="?page=1">1</nuxt-link>
      <nuxt-link to="?page=2">2</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Produtos',

  data () {
    return {
      banner: require('~/assets/img/weather-snowing.jpg'),

      currentPage: 1,

      products: [
        { id: 1, path: '/produtos/1', title: 'Teste 1', description: 'Produto muito legal', price: '1,99', image: require('~/assets/img/weather-sunny.jpg') },
        { id: 2, path: '/produtos/2', title: 'Produto 3', description: 'Mais um muito legal', price: '130,75', image: require('~/assets/img/weather-snowing.jpg') },
        { id: 3, path: '/produtos/3', title: 'Teste 4', description: 'Produto muito legal', price: '1030,20', image: require('~/assets/img/weather-rainy.jpg') },
        { id: 4, path: '/produtos/4', title: 'Ameixa 5', description: 'Produto muito legal', price: '2,57', image: require('~/assets/img/weather-overcast.jpg') },
        { id: 5, path: '/produtos/5', title: 'Teste 2', description: 'Outro muito legal', price: '2,99', image: require('~/assets/img/weather-overcast.jpg') },
        { id: 6, path: '/produtos/6', title: 'Teste 6', description: 'Produto muito legal', price: '0,35', image: require('~/assets/img/weather-rainy.jpg') },
        { id: 7, path: '/produtos/7', title: 'Exemplo', description: 'Mais um muito legal', price: '110,75', image: require('~/assets/img/weather-snowing.jpg') },
        { id: 8, path: '/produtos/8', title: 'Mais 1', description: 'Produto muito legal', price: '31,99', image: require('~/assets/img/weather-sunny.jpg') },
        { id: 9, path: '/produtos/9', title: 'Legal', description: 'Produto muito legal', price: '870,35', image: require('~/assets/img/weather-rainy.jpg') },
        { id: 10, path: '/produtos/10', title: 'Bonito', description: 'Produto muito legal', price: '27,20', image: require('~/assets/img/weather-overcast.jpg') },
        { id: 11, path: '/produtos/11', title: 'Viva', description: 'Produto muito legal', price: '10,20', image: require('~/assets/img/weather-rainy.jpg') },
        { id: 12, path: '/produtos/12', title: 'Horrível', description: 'Outro muito legal', price: '12,99', image: require('~/assets/img/weather-overcast.jpg') }
      ]
    }
  },

  computed: {
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
        this.currentPage = query.page
      }
    }
  }
}
</script>
