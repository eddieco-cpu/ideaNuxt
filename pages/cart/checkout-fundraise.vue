<template>
    <div class="max-w-[324px] md:max-w-[1082px] mx-auto mt-8">
        <div class="bg-white rounded-lg p-3 flex gap-x-2">
            <img :src="helperPicture()" alt="image" class="rounded-lg w-[96px] h-[62px] object-cover" />
            <div class="flex flex-col justify-between">
                <div class="flex items-end gap-x-1">
                    <Tag :tag="{ name: '促銷', color: 'danger', type: 'text' }" />
                    <span class="text-Neutral-900 text-sm"
                        >提案人 <span class="text-Primary-500-Primary">華生科技股份有限公司Inc</span></span
                    >
                </div>
                <h1 class="text-xl font-medium text-Neutral-900">
                    聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的最佳音樂夥伴
                </h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { cartStore } from "@/stores/cart";
const cart = cartStore();

const showTotalDetail = ref(false);

function isProductBeSelected(id) {
    return cart.selectProducts.some((item) => item.id === id);
}

function goCheckoutPage() {
    navigateTo("/cart/checkout");
}
</script>
