<template>
  <form @submit.prevent="login">
    <input v-model="email" type="email">
    <input v-model="password" type="password">
    <button>Entrar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async login() {
      try {
        const loginData = {
          email: this.email,
          password: this.password
        }

        const result = await this.$axios.$post('http://localhost:8080/users/login', loginData)

        localStorage.setItem('token', result.token)
        this.$router.push('/')
      } catch {
        alert('Login inválido!')
      }
    }
  }
}
</script>
