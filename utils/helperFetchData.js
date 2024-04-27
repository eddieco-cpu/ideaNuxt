import { useRuntimeConfig } from "#app";
import { useAuthStore } from "@/stores/auth";

export const POST = async (endpoint, payload, token='') => {
    const config   = useRuntimeConfig();
    const baseUrl  = config.public.apiBaseUrl;
    const url      = `${baseUrl}${endpoint}`
    const store    = useAuthStore();
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
    const {
      _data: { message },
    } = error.response;

    if (error.statusCode == 401) {
      store.clearToken();
    }

    helperResponseHandle(error.statusCode, message);
  }
};

export const GET = async (url, test = "0") => {
  if (test == 1) {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBaseUrl;
    url = `${baseUrl}${url}`;
  }

  try {
    const data = await $fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer /* YOUR_TOKEN_HERE */",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    // const {
    //     _data: { message },
    // } = error.response;

    // helperResponseHandle(error.statusCode, message);
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
