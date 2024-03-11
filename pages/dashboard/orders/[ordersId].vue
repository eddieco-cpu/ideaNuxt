<template>
    <div>
        <UiTitle class="w-full">
            <nuxt-link to="/dashboard/orders/" class="flex justify-start items-center gap-1">
                <UIcon name="i-heroicons-chevron-left" class="" /> 訂單詳情</nuxt-link
            >
        </UiTitle>

        <section
            class="max-w-[1082px] mx-auto py-4 rounded-lg bg-white max-md:max-w-[100%-24px] mb-3 max-md:mt-6 max-xl:mx-3 max-xl:max-w-[100%]"
        >
            <ul
                class="w-[calc(100%-200px)] max-md:w-[calc(100%-20px)] mx-auto flex justify-between items-start relative"
            >
                <li
                    :key="step.id"
                    v-for="(step, stepIndex) in stepsData"
                    class="w-17 flex flex-col justify-center items-center gap-y-2 relative z-[1]"
                >
                    <div
                        class="w-4 h-4 rounded-full flex justify-center items-center"
                        :class="stepIndex > stepsStatus ? ' bg-Primary-400-Hover' : ' bg-Primary-500-Primary'"
                    >
                        <template v-if="stepIndex >= stepsStatus">
                            <div class="w-2 h-2 rounded-full bg-white"></div>
                        </template>
                        <template v-else>
                            <UIcon name="i-heroicons-check" class="block size-[13px] font-black text-white" />
                        </template>
                    </div>
                    <div
                        class="text-xs font-medium text-center"
                        :class="stepIndex > stepsStatus ? ' text-Neutral-500-Primary' : 'text-Primary-500-Primary'"
                    >
                        <p>{{ step.name }}</p>
                        <p>{{ step.time || " " }}</p>
                    </div>
                </li>
                <li
                    class="mx-auto absolute top-[7px] left-0 right-0 w-[calc(100%-64px)] h-[2px] bg-Primary-500-Primary"
                    :style="
                        stepsStatus < 3
                            ? ` background-image: linear-gradient(to right, rgb(107,86,202) ${stepsStatus * 33.3333}%, rgb(145,127,221) ${stepsStatus * 33.3333}%);`
                            : ''
                    "
                ></li>
            </ul>
        </section>

        <section class="grid_block ring-1 gap-3 min-h-[calc(302px+12px+270px)]">
            <article class="grid_item">
                <h3 class="text-base font-medium pb-3 border-b-[1px] border-gray-100">訂單資訊</h3>
                <ul>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >訂單編號</span
                        >
                        <span class="text-sm font-normal flex-grow">ID22092313548</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >成立時間</span
                        >
                        <span class="text-sm font-normal flex-grow">2022-10-18 03:34</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >訂單狀態</span
                        >
                        <span class="text-sm font-normal flex-grow">已成立</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >訂單金額</span
                        >
                        <span class="text-sm font-normal flex-grow">NT$1,620</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >付款方式</span
                        >
                        <span class="text-sm font-normal flex-grow">信用卡付款</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >配送方式</span
                        >
                        <span class="text-sm font-normal flex-grow">宅配到府</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >訂單備註</span
                        >
                        <span class="text-sm font-normal flex-grow">無</span>
                    </li>
                </ul>
            </article>
            <article class="grid_item flex flex-col justify-center items-center">
                <h3 class="text-base font-medium pb-3 border-b-[1px] border-gray-100 w-full">商品資訊</h3>
                <section
                    class="mt-3 border-b-[1px] border-gray-100 flex justify-start items-start gap-x-4 w-full flex-grow"
                >
                    <picture class="block w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img :src="helperPicture()" alt="" class="block w-full h-full object-cover" />
                    </picture>
                    <article class="">
                        <h3 class="line-clamp-2 max-md:text-sm text-base font-medium">
                            聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的最佳音樂夥伴
                        </h3>
                        <ul>
                            <li class="flex justify-between items-center gap-x-2 mt-3">
                                <span class="text-Neutral-700 text-sm font-normal">VIP超早鳥限定｜全套桌曆＋年曆</span>
                                <span class="text-base font-normal">NT$1,620</span>
                            </li>
                            <li class="flex justify-between items-center gap-x-2 mt-3">
                                <span class="text-Neutral-700 text-sm font-normal">運費</span>
                                <span class="text-base font-normal">NT$80</span>
                            </li>
                        </ul>
                    </article>
                </section>
                <p class="mt-3 flex justify-between items-center w-full">
                    <span class="text-sm font-normal">總金額</span>
                    <span class="text-base font-medium">NT$1,620</span>
                </p>
            </article>
            <article class="grid_item">
                <h3 class="text-base font-medium pb-3 border-b-[1px] border-gray-100">購買人資訊</h3>
                <ul>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >購買人姓名</span
                        >
                        <span class="text-sm font-normal flex-grow">陳佑瑋</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >聯絡地址</span
                        >
                        <span class="text-sm font-normal flex-grow">114 台北市內湖區成功路五段450巷4號4樓</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >聯絡電話</span
                        >
                        <span class="text-sm font-normal flex-grow">+8860926390926</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >電子郵件</span
                        >
                        <span class="text-sm font-normal flex-grow">baby.c.a.t@yahoo.com.tw</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >付款方式</span
                        >
                        <span class="text-sm font-normal flex-grow">信用卡付款</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >發票類型</span
                        >
                        <span class="text-sm font-normal flex-grow">電子發票 (T9BXTCQ)</span>
                    </li>
                </ul>
            </article>
            <article class="grid_item">
                <h3 class="text-base font-medium pb-3 border-b-[1px] border-gray-100">收件人資訊</h3>
                <ul>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >收件人姓名</span
                        >
                        <span class="text-sm font-normal flex-grow">陳佑瑋</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >聯絡地址</span
                        >
                        <span class="text-sm font-normal flex-grow">114 台北市內湖區成功路五段450巷4號4樓</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >聯絡電話</span
                        >
                        <span class="text-sm font-normal flex-grow">+8860926390926</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >電子郵件</span
                        >
                        <span class="text-sm font-normal flex-grow">baby.c.a.t@yahoo.com.tw</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >配送方式</span
                        >
                        <span class="text-sm font-normal flex-grow">宅配到府</span>
                    </li>
                </ul>
            </article>
        </section>
    </div>
</template>
<script setup>
//
const stepsStatus = ref(1); //0~4
const stepsData = ref([
    {
        id: "1",
        name: "已成立",
        time: "06-16 12:00",
    },
    {
        id: "2",
        name: "備貨中",
        time: "",
    },
    {
        id: "3",
        name: "出貨中",
        time: "",
    },
    {
        id: "4",
        name: "已完成",
        time: "",
    },
]);
</script>
<style scoped>
.grid_block {
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    grid-template-rows: repeat(2, auto);
}
.grid_item {
    @apply bg-white rounded-lg shadow-md rounded-lg p-6;
}
.grid_block > .grid_item:first-child {
    grid-column: 1 / 8;
    grid-row: 1 / 2;
}
.grid_block > .grid_item:nth-child(2) {
    grid-column: 8 / 19;
    grid-row: 1 / 2;
}
.grid_block > .grid_item:nth-child(3) {
    grid-column: 1 / 10;
    grid-row: 2 / 3;
}
.grid_block > .grid_item:nth-child(4) {
    grid-column: 10 / 19;
    grid-row: 2 / 3;
}

@media screen and (width < 1280px) {
    .grid_block {
        display: block;
    }
    .grid_item {
        margin-bottom: 12px;
    }
}
</style>
