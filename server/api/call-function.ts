export default defineEventHandler(async (event) => {
  // ... Do whatever you want here
  const whatever = await $fetch('https://nuxt3-netlify-functions.netlify.app/.netlify/functions/hello')
  console.log("🐥🐥", whatever)
  return whatever
})