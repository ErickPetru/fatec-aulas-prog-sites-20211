<template>
  <nav class="p-3">
    <Logo />

    <ul class="flex mt-4 space-x-2">
      <li>
        <nuxt-link to="/" class="block p-3 transition-all bg-blue-500 rounded hover:bg-blue-800">
          Início
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/produtos" class="block p-3 transition-all bg-blue-500 rounded hover:bg-blue-800">
          Produtos
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/tarefas" class="block p-3 transition-all bg-blue-500 rounded hover:bg-blue-800">
          Tarefas
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/sobre-nos" class="block p-3 transition-all bg-blue-500 rounded hover:bg-blue-800">
          Sobre nós
        </nuxt-link>
      </li>
      <li v-if="!isLogged">
        <nuxt-link to="/login" class="block p-3 transition-all bg-blue-500 rounded hover:bg-blue-800">
          Login
        </nuxt-link>
      </li>
      <li v-if="currentUser">
        <strong>{{ currentUser.email }}</strong>

        <a href="#" class="block p-3 transition-all bg-blue-500 rounded hover:bg-blue-800" @click="logout">
          Logout
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentUser: null
    }
  },

  computed: {
    isLogged() {
      return this.currentUser !== null
    }
  },

  async fetch() {
    try {
      this.$axios.setHeader('Authorization', `Bearer ${localStorage.getItem('token')}`)
      const result = await this.$axios.$get('http://localhost:8080/users/current')
      this.currentUser = result
    } catch {
      this.currentUser = null
    }
  },

  methods: {
    logout() {
      localStorage.setItem('token', undefined)
      this.currentUser = null
    }
  }
}
</script>
