export default defineEventHandler(async (event) => {
  // const geoinformation = await $fetch('http://localhost:8888/.netlify/functions/ip')
  const geoinformation = await $fetch('https://nuxt3-netlify-functions.netlify.app/.netlify/functions/ip')
  // console.log("🐥🐥", ip information)
  return geoinformation
})
