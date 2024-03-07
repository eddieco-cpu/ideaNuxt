<template>
    <li class="rounded-lg overflow-hidden bg-white">
        <picture class="block w-full aspect-[1/1] rounded-lg overflow-hidden">
            <img :src="helperPicture()" class="block w-full h-full object-cover" />
        </picture>
        <section class="p-3 pb-2 max-md:aspect-[212/200] xl:aspect-[212/200]">
            <h4 class="text-sm font-medium text-ellipsis line-clamp-2 mb-2">
                東兩客 老校粉攻值身多 線罪短買懷部列四爾英。
            </h4>
            <h4 class="text-base font-medium text-Status-Color-Danger-500-Primary">團購價 $ 3,280</h4>
            <p class="line-through text-xs text-Neutral-600-Dark-Primary mb-3">市價 $ 6,280</p>

            <div class="flex justify-center ring-1 ring-gray-200 rounded overflow-hidden mb-3">
                <button class="w-8 flex justify-center items-center" @click="select.amount >= 1 ? select.amount-- : ''">
                    －
                </button>
                <p class="flex-grow flex justify-center items-center ring-1 ring-gray-200">
                    {{ select.amount }}
                </p>
                <button class="w-8 flex justify-center items-center" @click="select.amount++">＋</button>
            </div>

            <!-- <p>
                <input type="text" v-model="select.name" />
            </p> -->
            <UiButton class="max-xl:w-full max-md:h-[30px] max-md:text-sm" @click="addToCart">加入購物車</UiButton>
        </section>
    </li>
</template>
<script setup>
import { cartStore } from "@/stores/cart";
const cart = cartStore();

const props = defineProps({
    select: Object,
});

function addToCart() {
    const productInfo = {
        id: new Date().getTime(),
        image: helperPicture(),
        title: helperLorem(50, 80),
        text: helperLorem(30, 50),
        price: 1000,
        qty: props.select.amount,
    };

    cart.cartList.push(productInfo);
}
</script>
