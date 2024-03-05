<template>
    <div
        class="w-full max-w-[324px] md:max-w-full flex mx-auto h-[56px] md:h-[63px] text-Primary-500-Primary font-medium text-sm"
    >
        <div
            class="flex-1 bg-no-repeat bg-contain pt-[8px] pl-[25px] md:pt-[12px] md:pl-[30px]"
            :class="[step === 1 ? stepOne.first : stepTwo.first]"
        >
            <p>Step 1</p>
            <p class="font-normal text-xs">確認商品</p>
        </div>
        <div
            class="flex-1 bg-no-repeat bg-contain pt-[8px] pl-[25px] md:pt-[12px] md:pl-[30px]"
            :class="[step === 1 ? stepOne.second : stepTwo.second]"
        >
            <p>Step 2</p>
            <p class="font-normal text-xs">填寫資料</p>
        </div>
        <div
            class="flex-1 bg-no-repeat bg-[length:100%_100%] md:bg-contain pt-[8px] pl-[25px] md:pt-[12px] md:pl-[30px]"
            :class="[step === 1 ? stepOne.third : stepTwo.third]"
        >
            <p>Step 3</p>
            <p class="font-normal text-xs">訂購完成</p>
        </div>
    </div>
</template>

<script setup>
const { step } = defineProps({
    step: {
        type: Number,
        default: 1,
    },
});

const stepOne = {
    first: "bg-[url('assets/images/cart/order-process-first-active-sm.png')] md:bg-[url('assets/images/cart/order-process-first-active.png')]",
    second: "bg-[url('assets/images/cart/order-process-sec-default-sm.png')] md:bg-[url('assets/images/cart/order-process-sec-default.png')]",
    third: "bg-[url('assets/images/cart/order-process-third-default-sm.png')] md:bg-[url('assets/images/cart/order-process-third-default.png')]",
};

const stepTwo = {
    first: "bg-[url('assets/images/cart/order-process-first-default-sm.png')] md:bg-[url('assets/images/cart/order-process-first-default.png')]",
    second: "bg-[url('assets/images/cart/order-process-sec-active-sm.png')] md:bg-[url('assets/images/cart/order-process-sec-active.png')]",
    third: "bg-[url('assets/images/cart/order-process-third-default-sm.png')] md:bg-[url('assets/images/cart/order-process-third-default.png')]",
};
</script>
