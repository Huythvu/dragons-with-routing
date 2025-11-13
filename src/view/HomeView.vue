<script setup>
const { dragons } = defineProps({
  dragons: {
    type: Array
  }
});
</script>

<template>
  <section>
    <article v-for="dragon in dragons" :key="dragon.id">
      <h2>{{ dragon.name }}</h2>
      <img :src="dragon.img_url" :alt="dragon.name">
    </article>
  </section>
</template>

<style>
img{
    width: 100%;
}
</style>
