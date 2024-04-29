import { useAuthStore } from "@/stores/auth";

// 定義需要登入的路由列表
// const protectedRoutes = ["member", "proposal-submission", "cart-cart-fundraise"]; // 這裡添加需要保護的路由名稱
// const loginRoute = "/login"; // 登入頁面路由

export default defineNuxtRouteMiddleware((to, from) => {
  // const store = useAuthStore();

  // if (process.client) {
  //   // 確保代碼只在客戶端運行
  //   console.log(to.name);
  //   if (!store.isLogin && protectedRoutes.includes(to.name)) {
  //     // 在 sessionStorage 中記錄原本想要訪問的 URL
  //     sessionStorage.setItem("redirectAfterLogin", to.fullPath);
  //     // 導向至登入頁面
  //     return navigateTo(loginRoute);
  //   }
  // }
});
