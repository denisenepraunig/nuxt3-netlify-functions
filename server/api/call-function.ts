export default defineEventHandler(async (event) => {
  
  // QUESTION - how to call this without the full URL?
  // ❌ this does NOT work locally
  // const whatever = await $fetch('/.netlify/functions/hello')

  // when running `netfliy dev` this will work if I use this full URL
  // http://localhost:8888/.netlify/functions/hello

  // how is this supposed to work in production? Do I something like BASE_URL?

  /* ANSWER FROM SUPPORT:
  Yes, that’s the ideal way. But if you absolutely want to make it dynamic, you can use:

  process.env.URL
  OR you can use getRequestURL(event).origin
  */
  
  // this works
  const whatever = await $fetch('https://nuxt3-netlify-functions.netlify.app/.netlify/functions/hello')
  console.log("🐥🐥", whatever)
  return whatever
})