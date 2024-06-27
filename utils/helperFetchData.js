import { useRuntimeConfig } from "#app";
import { useAuthStore } from "@/stores/auth";
import { cartStore } from "@/stores/cart";

export const POST = async (endpoint, payload, token='') => {
    const config   = useRuntimeConfig();
    const baseUrl  = config.public.apiBaseUrl;
    const url      = `${baseUrl}${endpoint}`
    const store    = useAuthStore();
    const cart     = cartStore();
    const cookie   = useCookie('jwt-token')
    const jwtToken = cookie.value;

    try {
        const data = await $fetch(url, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" ,
                'Authorization': `Bearer ${jwtToken}`,
            },
            body: payload,
        });

    return data;
  } catch (error) {
    console.log(error)
    const {
      _data: { message },
    } = error.response;

    if (error.statusCode == 401) {
      store.clearToken();
      cart.isHaveCartItem = false;
    }

    helperResponseHandle(error.statusCode, message);

    throw error;
  }
};

export const GET = async (url, test = "0") => {
  if (test == 1) {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBaseUrl;
    url = `${baseUrl}${url}`;
  }

  const cookie   = useCookie('jwt-token')
  const jwtToken = cookie.value;
  const store    = useAuthStore();
  const cart     = cartStore();

  try {
    const data = await $fetch(url, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    const {
        _data: { message },
    } = error.response;

    if (error.statusCode == 401) {
      store.clearToken();
      cart.isHaveCartItem = false;
    }

    helperResponseHandle(error.statusCode, message);
  }
};

export function usePost(endpoint, payload, token = "") {
  const config = useRuntimeConfig();
  const baseUrl = config.public.apiBaseUrl;
  const url = `${baseUrl}${endpoint}`;

  const { data, error, pending, refresh, abort } = useFetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  return { data, error, pending, refresh, abort };
}

// export function useCustomFetch(endpoint, payload, token = '') {

//     const config   = useRuntimeConfig();
//     const baseUrl  = config.public.apiBaseUrl;
//     const url      = `${baseUrl}${endpoint}`

//     try {
//         const { data, error, pending, refresh } = useFetch(url, {
//             method: 'POST',
//             body: JSON.stringify(payload),
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`,
//             }
//         });

//         console.log(error.value)

//         return { data, error, pending, refresh };

//     }catch (error) {
//         const {
//             _data: { message },
//         } = error.response;

//         helperResponseHandle(error.statusCode, message);
//     }
// }
