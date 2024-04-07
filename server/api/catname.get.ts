export default defineEventHandler(async (event) => {
  // const geoinformation = await $fetch('http://localhost:8888/.netlify/functions/cat-name-get')
  const catname = await $fetch('https://nuxt3-netlify-functions.netlify.app/.netlify/functions/cat-name-get')
  // console.log("🐥🐥", catname)
  return catname
})
