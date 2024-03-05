<template>
    <div>
        <CartHeader :step="1" />
        <!-- 商品資訊 -->
        <div class="flex flex-col gap-y-6 mx-auto w-full max-w-[324px] md:max-w-[786px]">
            <CardContainer title="訂單明細">
                <template #body>
                    <div>
                        <UCarousel
                            v-slot="{ item, index }"
                            :items="productList"
                            :ui="{
                                item: 'snap-start basis-[128px]',
                                container: 'gap-x-3',
                            }"
                            class="max-w-[1200px]"
                        >
                            <img :src="helperPicture()" alt="product" class="rounded-lg w-full h-[81px] object-cover" />
                        </UCarousel>
                    </div>
                </template>
            </CardContainer>

            <CardContainer title="結帳商品">
                <template #tip>
                    <div class="flex flex-col gap-y-1 pb-3">
                        <div class="flex items-center gap-x-1">
                            <Tag :tag="{ name: '限時團購', color: 'primary', type: 'text' }" />
                            <p class="text-Primary-500-Primary text-sm font-medium truncate flex-1">
                                金秘書 x 藍海饌 美味就像現煮❤️常溫料理包直接買嵌入式通訊系統，危機中的最佳音樂夥伴
                            </p>
                        </div>
                        <div class="md:flex md:gap-x-6">
                            <div class="flex items-center gap-x-1">
                                <img src="~assets/images/icon/shopping-icon.svg" alt="shopping" class="size-[14px]" />
                                <p class="text-xs text-Neutral-800">現貨 3-5個工作天，預購 1/29日 開始依訂單順序出貨</p>
                            </div>
                            <div class="flex items-center gap-x-1">
                                <img src="~assets/images/icon/car-icon.svg" alt="car" class="size-[14px]" />
                                <p class="text-xs text-Neutral-800">$100 元 (滿 $1,000 元免運)，限台灣本島配送</p>
                            </div>
                        </div>
                    </div>
                </template>

                <template #body>
                    <CardCheckOutProduct v-for="(item, index) in 5" :key="index" />
                </template>
            </CardContainer>
        </div>

        <!-- 總計 -->
        <div class="flex-1 md:sticky md:top-[98px]">
            <CardContainer title="總計">
                <template #body>
                    <div class="flex justify-between text-Neutral-700, text-sm">
                        <p>2件商品</p>
                        <p>NT$3,240</p>
                    </div>
                    <div class="flex justify-between text-Neutral-700, text-sm">
                        <p>運費</p>
                        <p>NT$240</p>
                    </div>
                </template>

                <template #footer>
                    <div class="border-t border-t-Neutral-200">
                        <p class="text-xl text-Primary-500-Primary font-roboto font-medium text-right py-3">NT$1,620</p>

                        <button
                            class="px-4 py-2 bg-Primary-500-Primary text-center rounded-lg w-full text-white"
                            @click="goCheckoutPage"
                        >
                            去結帳 ({{ 3 }})
                        </button>
                    </div>
                </template>
            </CardContainer>
        </div>
    </div>
</template>

<script setup>
const productList = ref(Array.from({ length: 15 }, (num, i) => i));

function goCheckoutPage() {
    navigateTo("/cart/checkout");
}
</script>
