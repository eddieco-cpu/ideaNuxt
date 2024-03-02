<template>
    <div class="bg-white rounded-lg p-[20px]">
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
        <button
            class="px-4 py-2 bg-Primary-500-Primary text-center rounded-lg w-full text-white"
            @click="goPage('/cart/checkout')"
        >
            去結帳 ({{ 3 }})
        </button>
    </div>
</template>

<script setup>
function goPage(route) {
    navigateTo(route);
}
</script>
