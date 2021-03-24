export const state = () => ({
  items: [
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
})

export const mutations = {
  addProduct(state, product) {
    state.items.push(product)
  }
}
