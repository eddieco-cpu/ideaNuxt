import Toast from "vue-toastification";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast, {
        position: "top-center",
        timeout: 3000,
        closeOnClick: false,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        draggable: false,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: false,
        icon: false,
        rtl: false,
        maxToasts: 5,
        transition: "Vue-Toastification__fade",
    });
});
