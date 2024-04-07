<template>
  <div>
    <h1>IP</h1>
    <div v-if="data">
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch('/api/ip')
console.log('data:', data.value)
</script>

<style></style>