<template>
  <div class="pb-8 text-center">
    <PageTitle>Produtos</PageTitle>

    <img :src="banner" height="200" class="object-cover w-full mt-4 mb-8 h-72">

    <div class="grid grid-flow-row gap-6 px-4 mx-auto md:grid-flow-col md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 xl:max-w-screen-xl">
      <ProductCard
        v-for="product of products"
        :key="product.id"
        :path="product.path"
        :title="product.title"
        :description="product.description"
        :price="product.price"
        :image="product.image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Produtos',

  data () {
    return {
      banner: require('~/assets/img/weather-snowing.jpg'),

      products: [
        { id: 1, path: '/produtos/1', title: 'Teste 1', description: 'Produto muito legal', price: '1,99', image: require('~/assets/img/weather-sunny.jpg') },
        { id: 2, path: '/produtos/2', title: 'Produto 3', description: 'Mais um muito legal', price: '130,75', image: require('~/assets/img/weather-snowing.jpg') },
        { id: 3, path: '/produtos/3', title: 'Teste 4', description: 'Produto muito legal', price: '1030,20', image: require('~/assets/img/weather-rainy.jpg') },
        { id: 4, path: '/produtos/4', title: 'Ameixa 5', description: 'Produto muito legal', price: '2,57', image: require('~/assets/img/weather-overcast.jpg') },
        { id: 5, path: '/produtos/5', title: 'Teste 2', description: 'Outro muito legal', price: '2,99', image: require('~/assets/img/weather-overcast.jpg') },
        { id: 6, path: '/produtos/6', title: 'Teste 6', description: 'Produto muito legal', price: '0,35', image: require('~/assets/img/weather-rainy.jpg') }
      ]
    }
  }
}
</script>
