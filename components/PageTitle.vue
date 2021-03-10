<template>
  <h1
    class="text-4xl font-bold text-green-800 mb-2"
    @click="$emit('action')"
  >
    <slot />
  </h1>
</template>
