<template>
  <aside
    class="flex flex-col p-3 rounded"
    :class="{
      'bg-black text-white': isDark,
      'bg-white text-black': !isDark
    }"
  >
    <PageTitle @action="onTitleClicked">Menu</PageTitle>

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
