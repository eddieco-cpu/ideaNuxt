<template>
    <div class="pt-6 flex flex-wrap items-start gap-6 max-w-[324px] md:max-w-[1082px] mx-auto">
        <div class="flex flex-col gap-y-6 items-center w-full">
            <component :is="showOrderStatus" :orderId="orderStatus.orderId"></component>

            <div class="flex flex-wrap gap-3">
                <CardOrderInformation class="w-full md:w-[40%]" />
                <CardProductInformation class="w-full md:flex-1" />
                <CardBuyerInformation class="w-full md:w-[calc(50%_-_6px)]" v-if="isOrderSuccess" />
                <CardReceiverInformation class="w-full md:w-[calc(50%_-_6px)]" v-if="isOrderSuccess" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { CartOrderSuccess, CartOrderFailed, CartOrderAtm } from "#components";
const orderStatus = ref({
    status: "success",
    payment: "atm",
    orderId: 122012,
});

const showOrderStatus = computed(() => {
    if (orderStatus.value.status === "success" && orderStatus.value.payment === "atm") {
        return CartOrderAtm;
    }

    if (orderStatus.value.status === "success" && orderStatus.value.payment === "credit") {
        return CartOrderSuccess;
    }

    if (orderStatus.value.status === "failed") {
        return CartOrderFailed;
    }
});

const isOrderSuccess = computed(() => {
    return orderStatus.value.status === "success";
});
</script>

<style scoped></style>
