export default defineEventHandler(async (event) => {
  // ... Do whatever you want here
  const whatever = await $fetch('./.netlify/functions/hello')
  console.log("🐥", whatever)
  return whatever
})