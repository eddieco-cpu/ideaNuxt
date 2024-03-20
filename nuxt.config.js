// https://nuxt.com/docs/api/configuration/nuxt-config

const host = process.env.NUXT_PUBLIC_HOST;
const port = process.env.NUXT_PUBLIC_PORT;
const baseUrl = process.env.NODE_ENV === "development" ? `http://${host}:${port}` : ``;

export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            htmlAttrs: { lang: "zh-TW" },
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no",
            title: "idea2gether",
            meta: [
                { name: "og:type", content: "website" },
                {
                    name: "description",
                    content: "idea2gether",
                },
                { neme: "og:title", content: "idea2gether" },
                {
                    neme: "og:description",
                    content: "idea2gether",
                },
            ],
        },
        pageTransition: { name: "page", mode: "out-in" },
    },
    runtimeConfig: {
        //僅在server端
        //...

        //暴露給client端
        public: {
            apiBaseUrl: process.env.NUXT_PUBLIC_API_URL,
            baseUrl: baseUrl,
            host: host,
        },
    },
    build: {
        transpile: ["@vuepic/vue-datepicker", "vue-toastification"],
    },
    modules: [
        "@pinia/nuxt",
        "nuxt-swiper",
        "@nuxt/ui",
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    "Noto+Sans+TC": [400, 500, 600, 700],
                    Roboto: [400, 500, 600, 700],
                    download: true,
                    inject: true,
                },
            },
        ],
    ],
    swiper: {
        //modules: ["navigation", "pagination", "effect-creative"],
    },
    plugins: [],
    typescript: {
        typeCheck: false,
    },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    colorMode: {
        preference: "light",
    },
});
