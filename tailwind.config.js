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
                "fuchsia-blue": {
                    DEFAULT: "#6B56CA",
                    50: "#E5E2F6",
                    100: "#D8D2F1",
                    200: "#BDB3E7",
                    300: "#A194DD",
                    400: "#8675D4",
                    500: "#6B56CA",
                    600: "#4D37B1",
                    700: "#3B2A86",
                    800: "#281D5B",
                    900: "#150F30",
                    950: "#0C081B",
                },
                "Primary-50": "#F7F5FD",
                "Primary-100": "#E5DEFA",
                "Primary-200": "#CCBFF6",
                "Primary-400-Hover": "#917FDD",
                "Primary-500-Primary": "#6B56CA",
                "Primary-600-Dark-Primary": "#513FAD",
                "Neutral-50": "#FAFAFA",
                "Neutral-100": "#F8F8F8",
                "Neutral-200": "#F4F4F4",
                "Neutral-300": "#E8E9E8",
                "Neutral-bg": "#F7F8FC",
                "Neutral-400-Hover": "#DDDEE0",
                "Neutral-500-Primary": "#BBBEC2",
                "Neutral-600-Dark-Primary": "#787C85",
                "Neutral-700": "#4B515C",
                "Neutral-800": "#29303D",
                "Neutral-900": "#1E2533",
                "neutral-third-hint": "#999",
                "Secondary-50": "#EBF6FE",
                "Secondary-200": "#9EDCFE",
                "Secondary-400-Hover": "#4AACFD",
                "Secondary-500-Primary": "#0F85FC",
                "Status-Color-Success-50": "#F6FAF0",
                "Status-Color-Success-400-Hover": "#9CD76A",
                "Status-Color-Success-500-Primary": "#75BF46",
                "Status-Color-Danger-50": "#FFF8F2",
                "Status-Color-Danger-500-Primary": "#EB5232",
                "Status-Color-Danger-600-Dark-Primary": "#C93926",
                "Status-Color-Danger-400-Hover": "#EE845E",
                "Dust-Red-1": "#FFF1F0",
                "Dust-Red-5": "#FF4D4F",
                "Dust-Red-6": "#F5222D",
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
