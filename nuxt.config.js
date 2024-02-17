// https://nuxt.com/docs/api/configuration/nuxt-config

const host = process.env.NUXT_PUBLIC_HOST;
const port = process.env.NUXT_PUBLIC_PORT;
const baseUrl = process.env.NODE_ENV === "development" ? `http://${host}:${port}` : ``;

const apiBase = "";
// process.env.NODE_ENV === "development"
//   ? `http://localhost:${process.env.PORT}${firstPath}/api-gete`
//   : `${host}${firstPath}`;

export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            htmlAttrs: { lang: "zh-TW" },
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
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
            // script: [
            //   {
            //     src: `${baseUrl}js/gtm.js`,
            //     tagPosition: "head",
            //   },
            // ],
            // noscript: [
            //   {
            //     children: `
            //       <img data-not-lazy src="" />
            //     `,
            //     tagPosition: "bodyOpen",
            //   },
            //   {
            //     children: `
            //     <iframe
            //       data-not-lazy
            //       src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
            //       height="0"
            //       width="0"
            //       style="display: none; visibility: hidden"
            //     ></iframe>
            //     `,
            //     tagPosition: "bodyOpen",
            //   },
            // ],
        },
        pageTransition: { name: "page", mode: "out-in" },
    },
    runtimeConfig: {
        //僅在server端
        //...

        //暴露給client端
        public: {
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
        // [
        //   "nuxt-lazy-load",
        //   {
        //     defaultImage:
        //       process.env.NODE_ENV === "development"
        //         ? "/images/udn_loading.png"
        //         : "/ndapp/udnimage/images/udn_loading.png",
        //   },
        // ],
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
    // vite: {
    //   css: {
    //     preprocessorOptions: {
    //       sass: {
    //         additionalData: `
    //           @import "@/assets/css/base.sass"
    //         `,
    //       },
    //     },
    //   },
    // },
    // nitro: {
    //   devProxy: {
    //     ...devProxyManager(),
    //   },
    // },
});
