
export function useCustomFetch(endpoint, payload, token) {

<<<<<<< HEAD
    const config   = useRuntimeConfig();
    const url      = `${config.public.apiBaseUrl}${endpoint}`;
    const cookie   = useCookie('jwt-token')
    const jwtToken = cookie.value;
=======
    const config    = useRuntimeConfig();
    const url       = `${config.public.apiBaseUrl}${endpoint}`;
    const cookie    = useCookie('jwt-token')
    const jwtToken  = cookie.value;
    const authStore = useAuthStore();
>>>>>>> 1cdb0af (0427)

    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtToken}`,
        },
        onResponse({ request, response, options }) {
        },
        onResponseError({ request, response, options }) {
             if (response.status === 401) {
                authStore.clearToken();
                return navigateTo('/')
            }
        }
    };

    const { data, error, pending, refresh } = useFetch(url, fetchOptions);
    
    return { data, error, pending, refresh }
  }

export function useCustomGetFetch(endpoint) {
<<<<<<< HEAD
    const config   = useRuntimeConfig();
    const url      = `${config.public.apiBaseUrl}${endpoint}`;
    const cookie   = useCookie('jwt-token')
    const jwtToken = cookie.value;
=======
    
    const config    = useRuntimeConfig();
    const url       = `${config.public.apiBaseUrl}${endpoint}`;
    const cookie    = useCookie('jwt-token')
    const jwtToken  = cookie.value;
    const authStore = useAuthStore();
    
>>>>>>> 1cdb0af (0427)

    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtToken}`,
        },
        onResponse({ request, response, options }) {

        },
        onResponseError({ request, response, options }) {
             if (response.status === 401) {
                authStore.clearToken();
                return navigateTo('/')
            }
        }
    };

    const { data, error, pending, refresh } = useFetch(url, fetchOptions);
<<<<<<< HEAD
    
=======
    console.log(data)
    console.log(error)
>>>>>>> 1cdb0af (0427)
    return { data, error, pending, refresh }
}