import { useToast } from "vue-toastification";

export default defineNuxtPlugin(() => {

    const config = useRuntimeConfig()
    const authStore = useAuthStore();
    // const token     = authStore.token;
    
    // const url = `${config.public.apiBaseUrl}${endpoint}`

    const $customFetch = $fetch.create({
    //   baseURL: config.public.apiBaseUrl,
      onRequest({ request, options, error }) {
        console.log(request)
        // if (token) {
        //   // Add Authorization header
        //   options.headers = options.headers || {}
        //   options.headers.Authorization = `Bearer ${token}`
        // }
      },
      onResponse ({ response }) {
        // response._data = new myBusinessResponse(response._data)
      },
      onResponseError({ response }) {
        console.log(response)
        // if (response.status === 401) {
        //   authStore.clearToken();
        //   return navigateTo('/')
        // }
      }
    })
    // Expose to useNuxtApp().$customFetch
    return {
      provide: {
        customFetch: $customFetch
      }
    }
  })