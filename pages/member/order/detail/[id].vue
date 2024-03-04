<template>
    <div>
        <div class="flex gap-4 items-center justify-between mt-8 mb-4 md:mt-0 md:flex-col md:items-start">
            <h1 class="text-black text-xl font-medium flex items-center gap-x-2">
                <UIcon name="i-heroicons-chevron-left" class="block w-4 h-4 cursor-pointer" @click="goBack" />
                訂單詳情
            </h1>
        </div>

        <!-- 訂單排程 -->
        <ul class="bg-white py-4 px-3 flex items-start rounded-lg mb-3">
            <li
                class="flex flex-col gap-y-2 items-center text-xs font-medium text-Primary-500-Primary text-center step flex-1"
                :class="{ active: orderBuild }"
            >
                <img src="~assets/images/icon/circle-icon.svg" alt="circle " v-show="!orderBuild" />
                <img src="~assets/images/icon/circle-check-icon.svg" alt="circle " v-show="orderBuild" />
                <p :class="{ 'text-Neutral-500-Primary': !orderBuild }">已成立</p>
                <p v-show="orderBuild">08-16 11:32</p>
            </li>
            <li
                class="flex flex-col gap-y-2 items-center text-xs font-medium text-Primary-500-Primary text-center step flex-1"
                :class="{ active: orderPrepare }"
            >
                <img src="~assets/images/icon/circle-icon.svg" alt="circle " v-show="!orderPrepare" />
                <img src="~assets/images/icon/circle-check-icon.svg" alt="circle " v-show="orderPrepare" />
                <p :class="{ 'text-Neutral-500-Primary': !orderPrepare }">備貨中</p>
                <p v-show="orderPrepare">08-16 11:32</p>
            </li>
            <li
                class="flex flex-col gap-y-2 items-center text-xs font-medium text-Primary-500-Primary text-center step flex-1"
                :class="{ active: orderDelivery }"
            >
                <img src="~assets/images/icon/circle-icon.svg" alt="circle " v-show="!orderDelivery" />
                <img src="~assets/images/icon/circle-check-icon.svg" alt="circle " v-show="orderDelivery" />
                <p :class="{ 'text-Neutral-500-Primary': !orderDelivery }">出貨中</p>
                <p v-show="orderDelivery">08-16 11:32</p>
            </li>
            <li
                class="flex flex-col gap-y-2 items-center text-xs font-medium text-Primary-500-Primary text-center step flex-1"
                :class="{ active: orderFinished }"
            >
                <img src="~assets/images/icon/circle-icon.svg" alt="circle " v-show="!orderFinished" />
                <img src="~assets/images/icon/circle-check-icon.svg" alt="circle " v-show="orderFinished" />
                <p :class="{ 'text-Neutral-500-Primary': !orderFinished }">已完成</p>
                <p v-show="orderFinished">08-16 11:32</p>
            </li>
        </ul>

        <div class="flex flex-col flex-wrap gap-y-3 md:flex-row md:gap-x-3 mb-3">
            <CardOrderInformation class="w-full md:w-[40%]" />
            <CardProductInformation class="w-full md:flex-1" />
            <CardBuyerInformation class="w-full md:w-[calc(50%_-_6px)]" />
            <CardReceiverInformation class="w-full md:w-[calc(50%_-_6px)]" />
        </div>
    </div>
</template>

<script setup>
const router = useRouter();

const orderStatus = ref("出貨中");

const orderBuild = computed(() => {
    return ["已成立", "備貨中", "出貨中", "已完成"].includes(orderStatus.value);
});
const orderPrepare = computed(() => {
    return ["備貨中", "出貨中", "已完成"].includes(orderStatus.value);
});
const orderDelivery = computed(() => {
    return ["出貨中", "已完成"].includes(orderStatus.value);
});
const orderFinished = computed(() => {
    return ["已完成"].includes(orderStatus.value);
});

function goBack() {
    router.go(-1);
}
</script>

<style scoped>
.step {
    position: relative;
    padding: 0 5px;
}

.step:not(:first-child)::before {
    content: "";
    position: absolute;
    top: 7px;
    right: calc(50% + 8px);
    width: calc(100% - 16px);
    height: 2px;
}

.step:not(:first-child)::before {
    background-color: #917fdd;
}

.step.active:not(:first-child)::before {
    background-color: #6b56ca;
}
</style>
