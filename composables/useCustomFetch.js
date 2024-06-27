
export function useCustomFetch(endpoint, payload, token) {

    const config    = useRuntimeConfig();
    const url       = `${config.public.apiBaseUrl}${endpoint}`;
    const cookie    = useCookie('jwt-token')
    const jwtToken  = cookie.value;
    const authStore = useAuthStore();
    const cart      = cartStore();

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
                cart.isHaveCartItem = false;
                return navigateTo('/')
            }
        }
    };

    const { data, error, pending, refresh } = useFetch(url, fetchOptions);
    
    return { data, error, pending, refresh }
  }

export function useCustomGetFetch(endpoint) {
    
    const config    = useRuntimeConfig();
    const url       = `${config.public.apiBaseUrl}${endpoint}`;
    const cookie    = useCookie('jwt-token')
    const jwtToken  = cookie.value;
    const authStore = useAuthStore();
    const cart      = cartStore();
    

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
                cart.isHaveCartItem = false;
                return navigateTo('/')
            }
        }
    };

    const { data, error, pending, refresh } = useFetch(url, fetchOptions);
    
    return { data, error, pending, refresh }
}