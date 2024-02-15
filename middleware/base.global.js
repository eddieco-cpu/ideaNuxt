export default defineNuxtRouteMiddleware((to, from) => {
    if (to.name === "member") {
        return navigateTo("/member/information");
    }

    if (to.name === "category") {
        return navigateTo("/category/technology-ai");
    }
});
