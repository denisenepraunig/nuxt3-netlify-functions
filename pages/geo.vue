<template>
  <div>
    <h1>Geo</h1>
    <div v-if="data">
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch('/api/geo')
console.log('data:', data.value)
</script>

<style></style>