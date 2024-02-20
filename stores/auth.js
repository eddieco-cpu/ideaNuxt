import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
    const isLogin = ref(false);
    const userInfo = ref({});

    return { isLogin, userInfo };
});
