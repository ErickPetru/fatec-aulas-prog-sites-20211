<template>
  <form class="p-8 flex flex-col space-y-6" @submit.prevent="onSubmit">
    <input v-model="title" type="text" placeholder="Título">
    <input v-model="description" type="text" placeholder="Descrição">
    <input v-model="price" type="text" placeholder="Preço">
    <select v-model="image">
      <option value="">Imagem</option>
      <option value="weather-sunny.jpg">Ensolarado</option>
      <option value="weather-rainy.jpg">Chuvoso</option>
      <option value="weather-snowing.jpg">Nevando</option>
      <option value="weather-overcast.jpg">Nublado</option>
    </select>
    <button class="bg-blue-600 hover:bg-blue-800">Salvar</button>
  </form>
</template>

<script>
export default {
  name: 'NovoProduto',

  data () {
    return {
      title: '',
      description: '',
      price: '',
      image: ''
    }
  },

  methods: {
    onSubmit() {
      const id = Math.random() * 1000

      const product = {
        id: id,
        path: `/produtos/${id}`,
        title: this.title,
        description: this.description,
        price: this.price,
        image: require(`~/assets/img/${this.image}`)
      }

      this.$store.commit('products/addProduct', product)

      this.title = ''
      this.description = ''
      this.price = ''
      this.image = ''
    }
  }
}
</script>
