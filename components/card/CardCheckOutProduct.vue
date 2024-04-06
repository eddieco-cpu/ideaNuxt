<template>
    <div class="flex md:flex-row gap-4">
        <img :src="img" alt="product" class="size-[66px] md:size-[100px] rounded" />

        <div class="flex flex-col justify-between gap-y-3 md:flex-row md:gap-x-6 flex-1 relative">
            <div class="md:max-w-[450px]">
                <h1 class="text-Neutral-800 text-sm font-medium line-clamp-2">
                    {{ name }}
                </h1>

                <!-- <p class="text-Neutral-700 text-xs mt-1">{{ text }}</p> -->
            </div>

            <span class="text-Neutral-900 font-medium font-roboto flex-1 md:text-right"
                >NT${{ helperMoneyComma(sales_price * amount) }}</span
            >

            <div
                class="text-xs text-Neutral-700 flex gap-x-2 absolute bottom-1 right-0 md:flex-col md:gap-y-2 md:items-end md:static"
                v-if="showButton"
            >
                <slot name="button">
                    <!-- <button class="underline">移至收藏夾</button> -->
                    <button class="underline" @click="removeProduct">刪除</button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { cartStore } from "@/stores/cart";
const cart = cartStore();
const authStore = useAuthStore();
const token = authStore.token;


const props = defineProps({
    showButton: {
        type: Boolean,
        default: true,
    },
    id: {
        type: Number,
    },
    sales_price: {
        type: Number,
    },
    amount: {
        type: Number,
    },
    img: {
        type: String,
        default: "",
    },
    name: {
        type: String,
        default: "",
    },
    cartItemId: {
        type: Number ,
        default: "",
    },
    getData: Function 
});

async function removeProduct() {

    const payload = {
        id: props.cartItemId
    };
    const data = await POST("/removeCartItem", payload, token);

    if(!!data.status) {
        props.getData()
    }
    
    // const productIndex = cart.selectGroupBuyProducts.products.findIndex((item) => item.id === props.id);

    // cart.selectGroupBuyProducts.products.splice(productIndex, 1);

    // await nextTick();

    // if (cart.selectGroupBuyProducts.products.length === 0) {
    //     cart.selectGroupBuyProducts = {};

    //     delete cart.cartList[props.cartId];
    // }
}
</script>
