import { useRuntimeConfig } from '#app'

export const POST = async (endpoint, payload) => {
    const config   = useRuntimeConfig();
    const baseUrl  = config.public.apiBaseUrl;
    const url      = `${baseUrl}${endpoint}`
    console.log(url)
    try {
        const data = await $fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: payload,
        });

        return data;
    } catch (error) {
        const {
            _data: { message },
        } = error.response;

        helperResponseHandle(error.statusCode, message);
    }
};

export const GET = async (url,test="0") => {
    if(test == 1) {
        const config   = useRuntimeConfig();
        const baseUrl  = config.public.apiBaseUrl;
        url      = `${baseUrl}${url}`
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
        console.log(error)
        // const {
        //     _data: { message },
        // } = error.response;

        // helperResponseHandle(error.statusCode, message);
    }
};
