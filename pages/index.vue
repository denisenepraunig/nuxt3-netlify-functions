<template>
  <div class="centered">
    <h1>Meow!</h1>
    <img src="/original-cat/purple-cat.png" alt="Purple cat logo" width="256" />
    <p>Data:
      <code>{{ data }}</code>
    </p>
    <p>Data2:
      <code>{{ data2 }}</code>
    </p>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch('/api/hello')
console.log('data:', data)


const { data: data2 } = await useFetch('/api/call-function')
console.log('data2:', data2)

// call the nuxt server api with the fetch function for /api/hello


</script>

<style scoped>
.centered {
  margin: 20px;
  margin-right: 20px;
  text-align: center;
}
</style>