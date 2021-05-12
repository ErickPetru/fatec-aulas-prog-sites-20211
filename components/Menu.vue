<template>
  <nav class="p-3">
    <Logo />

    <div class="flex items-center justify-center mt-8 space-x-4">
      <ul class="flex space-x-2">
        <li>
          <nuxt-link to="/" class="block p-3 transition-all bg-green-500 rounded hover:bg-blue-800">
            {{ $t('home') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/produtos" class="block p-3 transition-all bg-green-500 rounded hover:bg-blue-800">
            {{ $t('products') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/tarefas" class="block p-3 transition-all bg-green-500 rounded hover:bg-blue-800">
            {{ $t('tasks') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/sobre-nos" class="block p-3 transition-all bg-green-500 rounded hover:bg-blue-800">
            {{ $t('aboutUs') }}
          </nuxt-link>
        </li>
        <li v-if="!isLogged">
          <nuxt-link to="/login" class="block p-3 transition-all bg-green-500 rounded hover:bg-blue-800">
            {{ $t('login') }}
          </nuxt-link>
        </li>
        <li v-if="currentUser">
          <strong>{{ currentUser.email }}</strong>

          <a href="#" class="block p-3 transition-all bg-green-500 rounded hover:bg-blue-800" @click="logout">
            {{ $t('logout') }}
          </a>
        </li>
      </ul>

      <transition
        mode="out-in"
        enter-active-class="duration-100 ease-out transform"
        enter-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="duration-75 ease-in transform"
        leave-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <button key="flag-us" v-if="$i18n.locale === 'pt'" @click="setLocale('en')" class="w-10 h-10 overflow-hidden transition border border-gray-500 rounded-full outline-none focus:outline-none hover:border-gray-800 focus-visible:border-gray-800">
          <img src="~/assets/img/flag-us.svg" class="object-cover object-left w-full h-full" />
        </button>
        <button key="flag-br" v-else @click="setLocale('pt')" class="w-10 h-10 overflow-hidden transition border border-gray-500 rounded-full outline-none focus:outline-none hover:border-gray-800 focus-visible:border-gray-800">
          <img src="~/assets/img/flag-br.svg" class="object-cover w-full h-full" />
        </button>
      </transition>
    </div>
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
    },

    setLocale(code) {
      this.$i18n.setLocale(code)
    }
  }
}
</script>
