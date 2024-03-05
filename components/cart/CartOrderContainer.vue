<template>
    <div class="flex flex-col gap-y-6 items-center">
        <img src="~assets/images/cart/check-circle.svg" alt="check" class="size-[80px]" v-show="status === 'success'" />
        <img src="~assets/images/cart/close-circle.svg" alt="failed" class="size-[80px]" v-show="status === 'failed'" />
        <div class="text-center">
            <h1 class="text-xl font-medium text-black/85">{{ title }}</h1>
            <slot name="subTitle" />
        </div>

        <slot name="detail" />

        <slot name="button">
            <div class="flex gap-x-2">
                <NuxtLink :to="`/member/order/detail/${orderId}`">
                    <button
                        class="text-sm rounded-lg px-4 py-2 text-white bg-Primary-500-Primary shadow-[0px_1px_10px_rgba(0,0,0,0.02)]"
                    >
                        前往訂單詳情
                    </button>
                </NuxtLink>

                <NuxtLink to="/category/technology-ai?type=fundraise">
                    <button
                        class="text-sm rounded-lg px-4 py-2 text-Primary-400-Hover border border-Neutral-300 shadow-[0px_1px_10px_rgba(0,0,0,0.04)]"
                    >
                        來去逛逛
                    </button>
                </NuxtLink>
            </div>
        </slot>
    </div>
</template>

<script setup>
const { status, title } = defineProps({
    status: {
        type: String,
        default: "success",
    },
    title: {
        type: String,
        default: "",
    },
    orderId: {
        type: Number,
    },
});
</script>
