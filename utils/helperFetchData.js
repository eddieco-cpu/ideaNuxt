export const POST = async (url, payload) => {
    try {
        const data = await $fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: "Bearer /* YOUR_TOKEN_HERE */" },
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

export const GET = async (url) => {
    try {
        const data = await $fetch(url, {
            method: "GET",
            headers: {
                Authorization: "Bearer /* YOUR_TOKEN_HERE */",
            },
        });

        return data;
    } catch (error) {
        const {
            _data: { message },
        } = error.response;

        helperResponseHandle(error.statusCode, message);
    }
};
