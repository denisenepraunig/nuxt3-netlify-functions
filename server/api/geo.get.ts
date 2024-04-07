export default defineEventHandler(async (event) => {
  const geoinformation = await $fetch('https://nuxt3-netlify-functions.netlify.app/.netlify/functions/geo')
  return geoinformation
})
