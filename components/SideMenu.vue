<template>
  <aside
    class="flex flex-col w-32 p-3 rounded"
    :class="{
      'bg-black text-white': isDark,
      'bg-white text-black': !isDark
    }"
  >
    <h2 @action="onTitleClicked" class="mb-3 text-xl font-bold" :class="{
      'text-green-300': isDark,
      'text-green-800': !isDark
    }">
      {{ $t('sideOptions') }}
    </h2>

    {{ message }}

    <nuxt-link
      v-for="(item, index) of items"
      :key="index"
      :to="item.link"
    >
      {{ item.text }}
    </nuxt-link>
  </aside>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    isDark: false
  },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onTitleClicked () {
      this.message = 'Por favor, clique nas opções!'
    }
  }
}
</script>
