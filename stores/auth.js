import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {


    const isLogin = ref(false);
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
      }

    return { isLogin, userInfo, token,setToken,getToken,clearToken };
});
