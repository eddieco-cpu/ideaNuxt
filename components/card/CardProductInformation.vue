<template>
    <CardContainer title="商品資訊">
        <template #body>
            <div class="flex flex-col gap-2">
                <CardCheckOutProduct
                    v-for="(item, index) in productSpecs"
                    :key="index"
                    :showButton="false"
                    v-bind="item"
                />

                <div class="flex justify-end gap-x-3">
                    <p class="text-Neutral-700 text-sm">運費</p>
                    <p class="text-Neutral-900 font-roboto">NT${{ ship }}</p>
                </div>
            </div>

            <div class="flex justify-between pt-[10px] mt-[70px] border-t border-t-Neutral-200">
                <p class="text-Neutral-700 text-sm">總金額</p>
                <p class="text-Neutral-900 font-roboto font-medium">
                    NT${{ total + ship }}
                </p>
            </div>
        </template>
    </CardContainer>
</template>

<script setup>
import { cartStore } from "@/stores/cart";
const cart = cartStore();



const { total, ship, productSpecs } = defineProps({
    total: {
        type: Number,
    },
    ship: {
        type: Number,
    },
    productSpecs: {
        type: Object,
    },
  
});
</script>
