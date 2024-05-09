<template>
    <CartOrderContainer status="failed" title="訂單已取消">
        <template #detail>
            <div class="bg-white py-6 px-10 flex flex-col gap-y-3">
                <h1 class="text-sm font-bold text-black/85">您的訂單操作取消原因可能因為:</h1>
                <p class="text-sm text-black/45 flex items-center">
                    <UIcon name="i-heroicons-x-circle" class="block size-[14px]" />刷卡可能錯誤，請再嘗試其他卡片。
                </p>
                <p class="text-sm text-black/45 flex items-center">
                    <UIcon name="i-heroicons-x-circle" class="block size-[14px]" />結帳途中出現網路不穩，請再嘗試。
                </p>
            </div>
        </template>

        <template #button>
            <div class="flex gap-x-2">
                <NuxtLink to="/cart">
                    <button
                        class="text-sm rounded-lg px-4 py-2 text-white bg-Primary-500-Primary shadow-[0px_1px_10px_rgba(0,0,0,0.02)]"
                    >
                        再次下單
                    </button>
                </NuxtLink>

                <NuxtLink to="/category/technology-ai?type=groupbuying">
                    <button
                        class="text-sm rounded-lg px-4 py-2 text-Primary-400-Hover border border-Neutral-300 shadow-[0px_1px_10px_rgba(0,0,0,0.04)]"
                    >
                        來去逛逛
                    </button>
                </NuxtLink>
            </div>
        </template>
    </CartOrderContainer>
</template>
