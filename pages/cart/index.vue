<template>
    <div class="pt-6 md:flex md:items-start md:gap-6 md:max-w-[1082px] mx-auto">
        <div class="flex flex-col gap-y-6 mx-auto w-full max-w-[324px] md:max-w-[786px]">
            <div class="w-full bg-white p-3 rounded-lg">
                <h1 class="pb-3 border-b border-b-neutral-200">購物車</h1>
                <div class="pt-3">
                    <div v-if="true">
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
                    <div class="pt-3 flex flex-col items-center gap-y-6 min-h-[556px]" v-if="false">
                        <img src="~assets/images/status/emptyDataCart.svg" alt="no-data" />
                        <p class="text-Neutral-600-Dark-Primary">尚無資料</p>
                        <button class="bg-Primary-500-Primary px-4 py-2 rounded-lg text-white text-sm">
                            來去逛逛！
                        </button>
                    </div>
                </div>
            </div>

            <div class="w-full ] bg-white p-3 rounded-lg">
                <h1 class="pb-3">結帳商品</h1>
                <div class="flex flex-col gap-y-1 pb-3 border-b border-b-neutral-200">
                    <div class="flex items-center gap-x-1">
                        <Tag :tag="{ name: '限時團購', color: 'primary', type: 'text' }" />
                        <p class="text-Primary-500-Primary text-sm font-medium truncate flex-1">
                            金秘書 x 藍海饌 美味就像現煮❤️常溫料理包直接買嵌入式通訊系統，危機中的最佳音樂夥伴
                        </p>
                    </div>
                    <div class="flex gap-x-1">
                        <img src="~assets/images/icon/shopping-icon.svg" alt="shopping" class="size-[14px]" />
                        <p class="text-xs text-Neutral-800">現貨 3-5個工作天，預購 1/29日 開始依訂單順序出貨</p>
                    </div>
                    <div class="flex gap-x-1">
                        <img src="~assets/images/icon/car-icon.svg" alt="car" class="size-[14px]" />
                        <p class="text-xs text-Neutral-800">$100 元 (滿 $1,000 元免運)，限台灣本島配送</p>
                    </div>
                </div>

                <div class="pt-3 flex flex-col gap-y-8">
                    <CardCheckOutProduct v-for="(item, index) in 5" :key="index" />
                </div>
            </div>
        </div>

        <div class="flex-1 bg-white rounded-lg p-[20px] md:sticky md:top-[98px]">
            <h1 class="text-black/85 font-medium pb-3">總計</h1>
            <div class="flex flex-col gap-y-3 py-3 border-y border-y-Neutral-200">
                <div class="flex justify-between text-Neutral-700, text-sm">
                    <p>2件商品</p>
                    <p>NT$3,240</p>
                </div>
                <div class="flex justify-between text-Neutral-700, text-sm">
                    <p>運費</p>
                    <p>NT$240</p>
                </div>
            </div>
            <div>
                <p class="text-xl text-Primary-500-Primary font-roboto font-medium text-right py-3">NT$1,620</p>
            </div>
            <button class="px-4 py-2 bg-Primary-500-Primary text-center rounded-lg w-full text-white">
                去結帳 ({{ productList.length }})
            </button>
        </div>
    </div>
</template>

<script setup>
const productList = ref(Array.from({ length: 15 }, (num, i) => i));
</script>
