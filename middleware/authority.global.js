import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
    const store = useAuthStore();

    // 未登入不能去的路由
    if (!store.isLogin && to.name === "member") {
        return navigateTo("/");
    }
});
