<template>
    <CartOrderContainer status="success" title="訂單已成立，請進行 ATM 轉帳" :orderId="orderId">
        <template #detail>
            <div class="pl-[40px] text-sm text-black/45">
                <p>匯款銀行： 國泰世華銀行（代號：013）</p>
                <p>虛擬帳號： 2749021413218855 (共16碼)</p>
                <p>轉帳金額： $2,460</p>
                <p>截止時間： 2024-02-14 23:59</p>
                <p class="mt-6">提醒您：如期限內未完成付款，帳號將自動失效。</p>
            </div>
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
