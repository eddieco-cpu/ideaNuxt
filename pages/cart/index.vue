<template>
    <div class="max-w-[324px] md:max-w-[1082px] 3xl:max-w-[1300px] mx-auto mt-8">
        <CartHeader :step="1" v-if="cart.cartList.length !== 0" />
        <div class="pt-6 grid grid-cols-1 md:grid-cols-[76%_auto] items-start gap-6" v-if="cart.cartList.length !== 0">
            <!-- 商品資訊 -->
            <div class="flex flex-col gap-6">
                <CardContainer title="選擇團購">
                    <template #body>
                        <div>
                            <UCarousel
                                v-slot="{ item, index }"
                                :items="cart.cartList"
                                :ui="{
                                    item: 'snap-start basis-[128px]',
                                    container: 'gap-x-3',
                                }"
                                class="max-w-[1200px]"
                            >
                                <div class="cursor-pointer" @click="selectProduct(item)">
                                    <img
                                        :src="helperPicture()"
                                        alt="product"
                                        class="rounded-lg w-[126px] flex-1 h-[81px] object-cover"
                                        :class="{
                                            'border-Primary-50 border-2': isProductBeSelected(item.id),
                                            'contrast-[.25]': !isProductBeSelected(item.id),
                                        }"
                                    />
                                </div>
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
                                    <img
                                        src="~assets/images/icon/shopping-icon.svg"
                                        alt="shopping"
                                        class="size-[14px]"
                                    />
                                    <p class="text-xs text-Neutral-800">
                                        現貨 3-5個工作天，預購 1/29日 開始依訂單順序出貨
                                    </p>
                                </div>
                                <div class="flex items-center gap-x-1">
                                    <img src="~assets/images/icon/car-icon.svg" alt="car" class="size-[14px]" />
                                    <p class="text-xs text-Neutral-800">$100 元 (滿 $1,000 元免運)，限台灣本島配送</p>
                                </div>
                            </div>
                        </div>
                    </template>

                    <template #body>
                        <CardCheckOutProduct
                            v-for="(item, index) in cart.selectGroupBuyProducts"
                            :key="index"
                            v-bind="item"
                        />
                    </template>
                </CardContainer>
            </div>

            <!-- 總計 -->
            <div
                class="flex-1 fixed w-full bottom-0 left-0 md:sticky md:top-[98px] shadow-[0_-2px_20px_0px_rgba(0,0,0,0.06)]"
            >
                <CardContainer class="rounded-none md:rounded-lg">
                    <template #body>
                        <div
                            class="flex flex-col gap-y-3 fixed w-screen -bottom-[150px] left-0 p-3 md:p-0 rounded-t-lg bg-white md:static md:w-full transition-[bottom] duration-300"
                            :class="{ 'bottom-[87px]': showTotalDetail }"
                        >
                            <h1 class="pb-3 text-black/85 font-medium border-b border-b-Neutral-200">總計</h1>
                            <div class="flex justify-between text-Neutral-700 text-sm">
                                <p>{{ cart.selectGroupBuyProducts.length }}件商品</p>
                                <p>NT${{ helperMoneyComma(cart.totalGroupBuyPrice) }}</p>
                            </div>
                            <div
                                class="flex justify-between text-Neutral-700 text-sm pb-3 border-b border-b-Neutral-200"
                            >
                                <p>運費</p>
                                <p>NT$0</p>
                            </div>
                        </div>
                    </template>

                    <template #footer>
                        <div class="py-2 md:py-0 flex md:block bg-white relative z-50">
                            <div class="flex-1">
                                <p
                                    class="text-xs pb-1 text-Neutral-600-Dark-Primary md:hidden flex items-center gap-x-1"
                                >
                                    共{{ cart.selectGroupBuyProducts.length }}商品
                                    <UIcon
                                        name="i-heroicons-chevron-up"
                                        class="block w-4 h-4 text-Neutral-600-Dark-Primary cursor-pointer transition-transform duration-300"
                                        :class="{ 'rotate-180': showTotalDetail }"
                                        @click="showTotalDetail = !showTotalDetail"
                                    />
                                </p>
                                <p
                                    class="text-xl text-Neutral-800 md:text-Primary-500-Primary font-roboto font-medium md:text-right md:pb-3"
                                >
                                    NT${{ helperMoneyComma(cart.totalGroupBuyPrice) }}
                                </p>
                            </div>

                            <button
                                class="px-4 py-2 text-sm bg-Primary-500-Primary text-center rounded-lg w-full text-white flex-1"
                                @click="goCheckoutPage"
                            >
                                去結帳 ({{ cart.selectGroupBuyProducts.length }})
                            </button>
                        </div>
                    </template>
                </CardContainer>

                <transition name="mask">
                    <div
                        class="fixed w-screen h-screen top-0 left-0 z-[-1] bg-black/50 md:hidden"
                        v-show="showTotalDetail"
                    ></div>
                </transition>
            </div>
        </div>

        <div
            class="pt-6 flex flex-wrap items-start gap-6 max-w-[324px] md:max-w-[1082px] 3xl:max-w-[1300px] mx-auto"
            v-else
        >
            <CardContainer title="購物車" class="w-full">
                <template #body>
                    <div class="flex flex-col items-center gap-y-6">
                        <img src="~assets/images/status/emptyDataCart.svg" alt="empty" class="w-[224px]" />
                        <p class="text-Neutral-600-Dark-Primary">購物車無商品</p>
                        <NuxtLink to="/category/technology-ai?type=groupbuying">
                            <button
                                class="text-sm rounded-lg px-4 py-2 text-white bg-Primary-500-Primary shadow-[0px_1px_10px_rgba(0,0,0,0.04)]"
                            >
                                來去逛逛！
                            </button>
                        </NuxtLink>
                    </div>
                </template>
            </CardContainer>
        </div>
    </div>
</template>

<script setup>
import { cartStore } from "@/stores/cart";
const cart = cartStore();

const showTotalDetail = ref(false);

function isProductBeSelected(id) {
    return cart.selectGroupBuyProducts.some((item) => item.id === id);
}

function selectProduct(product) {
    cart.selectGroupBuyProducts = [product];
}

function goCheckoutPage() {
    navigateTo("/cart/checkout");
}
</script>
