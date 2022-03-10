import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

    modules: [
        // Doc: https://nuxt-socket-io.netlify.app/
        'nuxt-socket-io',
    ],
    io: {
        sockets: [{
            name: 'main',
            url: 'http://10.155.106.245:3000'
        }],
        server: {
            cors: {
                credentials: true,
                origin: ['http://10.155.106.245:3000']
            }
        }
    }
})

