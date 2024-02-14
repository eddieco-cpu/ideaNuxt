export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === "/member") {
        return navigateTo("/member/information");
    }
});
