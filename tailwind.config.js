/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            minHeight: {
                "80vh": "80vh",
            },
            colors: {
                "Primary-50": "#F7F5FD",
                "Primary-200": "CCBFF6",
                "Primary-500-Primary": "#6B56CA",
                "Primary-600-Dark-Primary": "#513FAD",
                "Primary-400-Hover": "#917FDD",
                "Neutral-100": "#F8F8F8",
                "Neutral-900": "#1E2533",
                "Neutral-600-Dark-Primary": "#787C85",
                "Neutral-400-Hover": "#DDDEE0",
                "Neutral-800": "#29303D",
            },
            fontFamily: {
                noto: ["Noto Sans TC"],
            },
            boxShadow: {
                DEFAULT: "0 1px 12px 0 rgb(0 0 0 / 0.04)",
            },
        },
    },
    plugins: [],
};
