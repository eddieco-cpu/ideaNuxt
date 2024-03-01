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

        <div class="flex flex-col gap-y-3 md:flex-row md:gap-x-3 mb-3">
            <!-- 訂單資訊 -->
            <div class="bg-white rounded-lg p-3 md:min-w-[285px]">
                <h1 class="text-black/85 font-medium pb-[10px] border-b border-b-Neutral-200">訂單資訊</h1>
                <ul class="pt-[10px] flex flex-col gap-y-3">
                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">訂單編號</h5>
                        <p class="text-Neutral-900 text-sm">ID22092313548</p>
                    </li>
                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">成立時間</h5>
                        <p class="text-Neutral-900 text-sm">2022-10-18 03:34</p>
                    </li>
                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">訂單狀態</h5>
                        <p class="text-Neutral-900 text-sm">已完成</p>
                    </li>
                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">訂單金額</h5>
                        <p class="text-Neutral-900 text-sm">NT$1,620</p>
                    </li>
                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">付款方式</h5>
                        <p class="text-Neutral-900 text-sm">信用卡付款</p>
                    </li>
                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">配送方式</h5>
                        <p class="text-Neutral-900 text-sm">宅配到府</p>
                    </li>
                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">訂單備註</h5>
                        <p class="text-Neutral-900 text-sm">無</p>
                    </li>
                </ul>
            </div>

            <!-- 商品資訊 -->
            <div class="bg-white rounded-lg p-3 md:flex-1">
                <h1 class="text-black/85 font-medium pb-[10px] border-b border-b-Neutral-200">商品資訊</h1>
                <div class="pt-[10px] flex gap-x-4">
                    <img :src="helperPicture()" alt="product" class="size-16 rounded" />

                    <div class="flex flex-col gap-y-3">
                        <h1 class="line-clamp-2 font-medium">
                            聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的最佳音樂夥伴
                        </h1>

                        <div class="flex justify-between gap-x-3">
                            <p class="text-Neutral-700 text-sm">VIP超早鳥限定｜全套桌曆＋年曆</p>
                            <p class="text-Neutral-900 font-roboto">NT$1,620</p>
                        </div>

                        <div class="flex justify-between gap-x-3">
                            <p class="text-Neutral-700 text-sm">運費</p>
                            <p class="text-Neutral-900 font-roboto">NT$80</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between pt-[10px] mt-[70px] border-t border-t-Neutral-200">
                    <p class="text-Neutral-700 text-sm">總金額</p>
                    <p class="text-Neutral-900 font-roboto">NT$1,620</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-y-3 md:flex-row md:gap-x-3">
            <!-- 購買人資訊 -->
            <div class="bg-white rounded-lg p-3 md:min-w-[359px]">
                <h1 class="text-black/85 font-medium pb-[10px] border-b border-b-Neutral-200">購買人資訊</h1>
                <ul class="pt-[10px] flex flex-col gap-y-3">
                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">購買人姓名</h5>
                        <p class="text-Neutral-900 text-sm">陳佑瑋</p>
                    </li>
                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">聯絡地址</h5>
                        <p class="text-Neutral-900 text-sm">114 台北市內湖區成功路五段450巷4號4樓</p>
                    </li>
                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">聯絡電話</h5>
                        <p class="text-Neutral-900 text-sm">+8860926390926</p>
                    </li>
                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">電子郵件</h5>
                        <p class="text-Neutral-900 text-sm">baby.c.a.t@yahoo.com.tw</p>
                    </li>
                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">付款方式</h5>
                        <p class="text-Neutral-900 text-sm">信用卡付款</p>
                    </li>
                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">發票類型</h5>
                        <p class="text-Neutral-900 text-sm">電子發票 (T9BXTCQ)</p>
                    </li>
                </ul>
            </div>

            <!-- 收件人資訊 -->
            <div class="bg-white rounded-lg p-3 md:flex-1">
                <h1 class="text-black/85 font-medium pb-[10px] border-b border-b-Neutral-200">收件人資訊</h1>
                <ul class="pt-[10px] flex flex-col gap-y-3">
                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">收件人姓名</h5>
                        <p class="text-Neutral-900 text-sm">陳佑瑋</p>
                    </li>

                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">聯絡地址</h5>
                        <p class="text-Neutral-900 text-sm">114 台北市內湖區成功路五段450巷4號4樓</p>
                    </li>

                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">聯絡電話</h5>
                        <p class="text-Neutral-900 text-sm">+8860926390926</p>
                    </li>

                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">電子郵件</h5>
                        <p class="text-Neutral-900 text-sm">baby.c.a.t@yahoo.com.tw</p>
                    </li>

                    <li class="flex items-center gap-x-4">
                        <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">配送方式</h5>
                        <p class="text-Neutral-900 text-sm">宅配到府</p>
                    </li>

                    <li class="bg-Neutral-bg rounded p-2 flex gap-x-2">
                        <img src="~assets/images/order/black-cat.png" alt="delivery" class="size-9 rounded" />

                        <div class="flex-1">
                            <p class="text-Neutral-Primary text-sm font-medium flex items-center">
                                黑貓宅急便
                                <span class="underline ml-2">804148783468 </span>
                                <img
                                    src="~assets/images/icon/copy-icon.svg"
                                    alt="copy"
                                    class="cursor-pointer ml-1"
                                    @click="copyText"
                                />
                            </p>
                            <p class="text-xs text-neutral-third-hint">2023-08-16 11:32</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
const router = useRouter();

const deliveryNumber = ref("804148783468");
const orderStatus = ref("出貨中");

function copyText() {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(deliveryNumber.value);
    } else {
        const el = document.createElement("textarea");
        el.value = deliveryNumber.value;
        el.style.position = "absolute";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    }

    toast.success("已複製");
}

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
