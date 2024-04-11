export function useCustomFetch(endpoint, payload, token) {
    const config = useRuntimeConfig()
    const url = `${config.public.apiBaseUrl}${endpoint}`
  
    // const { data, error, pending, refresh } = useFetch(url, {
    //   method: 'POST',    
    //   body: JSON.stringify(payload),
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`,
    //   },
    // })

    // console.log(error.value)
  
    // // 错误处理
    // // if (error.value) {
    // //   // 使用 Nuxt 3 的方式显示错误页面或执行其他错误处理逻辑
    // //   // 注意：这里的 `$nuxt.error` 是 Nuxt 2 的方式，在 Nuxt 3 中可能需要调整
    // //   // 在 Nuxt 3 中，推荐使用 `useError` 或直接跳转到错误页面
    // //   useNuxtApp().$nuxt.error({ statusCode: 404, message: 'Page not found' })
    // // }
  
    // return { data, error, pending, refresh }


    return useFetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        $fetch: useNuxtApp().$customFetch,
      })
  }