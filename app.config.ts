export default defineAppConfig({
    ui: {
        primary: "fuchsia-blue",
        formGroup: {
            help: "text-xs mt-1 mb-[2px] text-black/[0.45]",
            label: { required: `before:content-['*'] before:mx-0.5 before:text-red-500 after:content-['']` },
            error: "mt-0 text-Status-Color-Danger-500-Primary",
        },
        checkbox: { help: "text-xs mt-2 text-black/[0.45]" },
        input: {
            base: "disabled:bg-Neutral-200",
            color: {
                white: {
                    outline: "shadow-none bg-white   ring-Neutral-400-Hover  focus:ring-Primary-400-Hover ",
                },
            },
            default: {
                size: "lg",
            },
        },
    },
});
