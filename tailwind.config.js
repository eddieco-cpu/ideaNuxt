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
                "Primary-100": "#E5DEFA",
                "Primary-200": "#CCBFF6",
                "Primary-400-Hover": "#917FDD",
                "Primary-100": "#E5DEFA",
                "Primary-200": "#CCBFF6",
                "Primary-500-Primary": "#6B56CA",
                "Primary-600-Dark-Primary": "#513FAD",
                "Neutral-100": "#F8F8F8",
                "Neutral-200": "#F4F4F4",
                "Neutral-400-Hover": "#DDDEE0",
                "Neutral-500-Primary": "#BBBEC2",
                "Neutral-600-Dark-Primary": "#787C85",
                "Neutral-700": "#4B515C",
                "Neutral-800": "#29303D",
                "Neutral-900": "#1E2533",
                "Secondary-200": "#9EDCFE",
                "Secondary-500-Primary": "#0F85FC",
                "Status-Color-Success-400-Hover": "#9CD76A",
                "Status-Color-Danger-500-Primary": "#EB5232",
                "Status-Color-Danger-600-Dark-Primary": "#C93926",
            },
            fontFamily: {
                noto: ["Noto Sans TC"],
                roboto: ["roboto"],
            },
            boxShadow: {
                DEFAULT: "0 1px 12px 0 rgb(0 0 0 / 0.04)",
                card: "0px 0px 5px 0px rgb(0 0 0 / 0.02)",
            },
        },
    },
    plugins: [],
};
