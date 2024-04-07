export default defineEventHandler(async (event) => {
  // const geoinformation = await $fetch('http://localhost:8888/.netlify/functions/geo')
  const geoinformation = await $fetch('https://nuxt3-netlify-functions.netlify.app/.netlify/functions/geo')
  // console.log("🐥🐥", geoinformation)
  return geoinformation
})
