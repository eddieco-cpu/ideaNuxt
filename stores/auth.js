import { defineStore, skipHydrate } from "pinia";

export const useAuthStore = defineStore("auth", () => {


    const isLogin = ref(null);
    const userInfo = ref({});
    const token = ref(null);
    const cookie = useCookie('jwt-token')


    function setToken(newToken) {
        cookie.value = newToken 
        token.value = newToken 
      }
    
      function getToken() {
        return cookie.value 
      }
    
      function clearToken() {
        cookie.value = null 
        token.value = null 
        isLogin.value = null 
      }

    return { 
        isLogin, 
        userInfo, 
        token,
        setToken,
        getToken,
        clearToken
     };
  },
  {
    persist: process.client ? true : false,
  }
);
