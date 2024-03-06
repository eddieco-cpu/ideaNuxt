<template>
    <CartOrderContainer status="success" title="訂單已成立" :orderId="orderId">
        <template #subTitle>
            <p class="text-sm text-black/45">訂單成立信件已同時寄送至您的 email 信箱。</p>
        </template>
    </CartOrderContainer>
</template>

<script setup>
const { orderId } = defineProps({
    orderId: {
        type: Number,
    },
});
</script>
