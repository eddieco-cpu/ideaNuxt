<template>
    <div>
        <CartHeader :step="1" />
        <!-- 商品資訊 -->
        <div class="flex flex-col gap-y-6 mx-auto w-full max-w-[324px] md:max-w-[786px]">
            <CartCardContainer title="訂單明細">
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
            </CartCardContainer>

            <CartCardContainer title="結帳商品">
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

                <CardCheckOutProduct v-for="(item, index) in 5" :key="index" />
            </CartCardContainer>
        </div>

        <!-- 總計 -->
        <div class="flex-1 md:sticky md:top-[98px]">
            <CartTotal />
        </div>
    </div>
</template>

<script setup>
const productList = ref(Array.from({ length: 15 }, (num, i) => i));

function goPage(route) {
    navigateTo(route);
}
</script>
