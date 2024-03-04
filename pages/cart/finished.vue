<template>
    <div>
        <!-- <div class="w-full mt-[96px]">
            <CartProcessing :progress="progress" />
        </div> -->
        <div class="flex flex-col gap-y-6 items-center w-full">
            <div class="flex flex-col gap-y-6 items-center">
                <img src="~assets/images/cart/check-circle.svg" alt="check" class="size-[80px]" />
                <div class="text-center">
                    <h1 class="text-xl font-medium text-black/85">訂單已成立</h1>
                    <p class="text-sm text-black/45">訂單成立信件已同時寄送至您的 email 信箱。</p>
                </div>

                <div class="flex gap-x-2">
                    <button
                        class="text-sm rounded-lg px-4 py-2 text-white bg-Primary-500-Primary shadow-[0px_1px_10px_rgba(0,0,0,0.02)]"
                    >
                        前往訂單詳情
                    </button>
                    <button
                        class="text-sm rounded-lg px-4 py-2 text-Primary-400-Hover border border-Neutral-300 shadow-[0px_1px_10px_rgba(0,0,0,0.04)]"
                    >
                        來去逛逛
                    </button>
                </div>
            </div>

            <div class="flex flex-col gap-y-6 items-center">
                <img src="~assets/images/cart/close-circle.svg" alt="failed" class="size-[80px]" />
                <h1 class="text-xl font-medium text-black/85">訂單已取消</h1>
                <div class="bg-white py-6 px-10 flex flex-col gap-y-3">
                    <h1 class="text-sm font-bold text-black/85">您的訂單操作取消原因可能因為:</h1>
                    <p class="text-sm text-black/45 flex items-center">
                        <UIcon name="i-heroicons-x-circle" class="block size-[14px]" />刷卡可能錯誤，請再嘗試其他卡片。
                    </p>
                    <p class="text-sm text-black/45 flex items-center">
                        <UIcon name="i-heroicons-x-circle" class="block size-[14px]" />結帳途中出現網路不穩，請再嘗試。
                    </p>
                </div>

                <div class="flex gap-x-2">
                    <button
                        class="text-sm rounded-lg px-4 py-2 text-white bg-Primary-500-Primary shadow-[0px_1px_10px_rgba(0,0,0,0.02)]"
                    >
                        再次下單
                    </button>
                    <button
                        class="text-sm rounded-lg px-4 py-2 text-Primary-400-Hover border border-Neutral-300 shadow-[0px_1px_10px_rgba(0,0,0,0.04)]"
                    >
                        來去逛逛
                    </button>
                </div>
            </div>

            <div class="flex flex-col gap-y-6 items-center">
                <img src="~assets/images/cart/check-circle.svg" alt="check" class="size-[80px]" />
                <h1 class="text-xl font-medium text-black/85">訂單已成立，請進行 ATM 轉帳</h1>
                <div class="pl-[40px] text-sm text-black/45">
                    <p>匯款銀行： 國泰世華銀行（代號：013）</p>
                    <p>虛擬帳號： 2749021413218855 (共16碼)</p>
                    <p>轉帳金額： $2,460</p>
                    <p>截止時間： 2024-02-14 23:59</p>
                    <p class="mt-6">提醒您：如期限內未完成付款，帳號將自動失效。</p>
                </div>

                <div class="flex gap-x-2">
                    <button
                        class="text-sm rounded-lg px-4 py-2 text-white bg-Primary-500-Primary shadow-[0px_1px_10px_rgba(0,0,0,0.02)]"
                    >
                        再次下單
                    </button>
                    <button
                        class="text-sm rounded-lg px-4 py-2 text-Primary-400-Hover border border-Neutral-300 shadow-[0px_1px_10px_rgba(0,0,0,0.04)]"
                    >
                        來去逛逛
                    </button>
                </div>
            </div>

            <div class="w-[76%] flex flex-wrap gap-3">
                <CardOrderInformation class="w-full md:w-[40%]" />
                <CardProductInformation class="w-full md:flex-1" />
                <CardBuyerInformation class="w-full md:w-[calc(50%_-_6px)]" />
                <CardReceiverInformation class="w-full md:w-[calc(50%_-_6px)]" />
            </div>
        </div>
    </div>
</template>

<script setup>
const progress = ref(0);
</script>

<style scoped></style>
