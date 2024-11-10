// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: `Netflix Clone`,
      meta: [
        {name: 'description', content: `clone of Netflix Site`}
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        },
        {
          rel: `stylesheet`,
          href: `https://fonts.googleapis.com/css2?family=Antic+Didone&family=Forum&family=Michroma&family=Thasadith:ital,wght@0,400;0,700;1,400;1,700&family=Trirong:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        },
        {
          src:"https://kit.fontawesome.com/918e15e8c2.js" ,
          crossorigin:"anonymous",
          tagPosition: 'bodyClose'
        },
        {
          src:"/public/js/profiles.js" ,
          tagPosition: 'bodyClose'
        },
        {
          src:"/public/js/project-data.js" ,
          tagPosition: 'bodyClose'
        },
      ]
    }
  },
  css: ['@/assets/scss/main.scss']

})
