export default defineAppConfig({
    ui: {
        primary: "fuchsia-blue",
        formGroup: {
            help: "text-xs mt-0 text-black/[0.45]",
            label: { required: `before:content-['*'] before:mx-0.5 before:text-red-500 after:content-['']` },
        },
        checkbox: { help: "text-xs mt-2 text-black/[0.45]" },
    },
});
