<template>
    <div>
        <UiTitle class="w-full">
            <nuxt-link
                :to="`/dashboard/${$route.params.dashboardId}/orders/`"
                class="flex justify-start items-center gap-1"
            >
                <UIcon name="i-heroicons-chevron-left" class="" /> 訂單詳情</nuxt-link
            >
        </UiTitle>

        <section class="grid_block gap-3 min-h-[calc(302px+12px+270px)]">
            <article class="grid_item">
                <h3 class="text-base font-medium pb-3 border-b-[1px] border-gray-100">訂單資訊</h3>
                <ul>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >訂單編號</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ ordersInfo.id }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >成立時間</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ ordersInfo.date }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >訂單狀態</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ ordersInfo.status }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >訂單金額</span
                        >
                        <span class="text-sm font-normal flex-grow">NT${{ ordersInfo.amount }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >付款方式</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ ordersInfo.payment }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >配送方式</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ ordersInfo.delivery }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >訂單備註</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ ordersInfo.notes }}</span>
                    </li>
                </ul>
            </article>
            <article class="grid_item flex flex-col justify-center items-center">
                <h3 class="text-base font-medium pb-3 border-b-[1px] border-gray-100 w-full">商品資訊</h3>
                <section
                    class="mt-3 border-b-[1px] border-gray-100 flex justify-start items-start gap-x-4 w-full flex-grow"
                >
                    <picture class="block w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img :src="productsInfo.photo" alt="" class="block w-full h-full object-cover" />
                    </picture>
                    <article class="">
                        <h3 class="line-clamp-2 max-md:text-sm text-base font-medium">
                            {{ productsInfo.title }}
                        </h3>
                        <ul>
                            <li class="flex justify-between items-center gap-x-2 mt-3">
                                <span class="text-Neutral-700 text-sm font-normal">{{ productsInfo.name }}</span>
                                <span class="text-base font-normal">NT${{ productsInfo.price }}</span>
                            </li>
                            <li class="flex justify-between items-center gap-x-2 mt-3">
                                <span class="text-Neutral-700 text-sm font-normal">運費</span>
                                <span class="text-base font-normal">NT${{ productsInfo.shipping }}</span>
                            </li>
                        </ul>
                    </article>
                </section>
                <p class="mt-3 flex justify-between items-center w-full">
                    <span class="text-sm font-normal">總金額</span>
                    <span class="text-base font-medium">NT${{ productsInfo.price + productsInfo.shipping }}</span>
                </p>
            </article>
            <article class="grid_item">
                <h3 class="text-base font-medium pb-3 border-b-[1px] border-gray-100">購買人資訊</h3>
                <ul>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >購買人姓名</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ buyerInfo.name }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >聯絡地址</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ buyerInfo.address }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >聯絡電話</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ buyerInfo.phone }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >電子郵件</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ buyerInfo.email }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >付款方式</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ buyerInfo.payment }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >發票類型</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ buyerInfo.invoice }}</span>
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
                        <span class="text-sm font-normal flex-grow">{{ recipientInfo.name }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >聯絡地址</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ recipientInfo.address }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >聯絡電話</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ recipientInfo.phone }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >電子郵件</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ recipientInfo.email }}</span>
                    </li>
                    <li class="flex justify-start items-center gap-x-2 mt-3">
                        <span class="w-[70px] text-Neutral-600-Dark-Primary text-sm font-normal flex-shrink-0"
                            >配送方式</span
                        >
                        <span class="text-sm font-normal flex-grow">{{ recipientInfo.delivery }}</span>
                    </li>
                </ul>
            </article>
        </section>
    </div>
</template>
<script setup>
//
const ordersInfo = ref({
    id: "ID22092313548",
    date: "2022-10-18 03:34",
    amount: 1620,
    status: "已成立",
    payment: "ATM 轉帳付款",
    delivery: "宅配到府",
    notes: "無",
});

const productsInfo = ref({
    id: 1,
    photo: helperPicture(),
    title: "聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的最佳音樂夥伴",
    name: "VIP超早鳥限定｜全套桌曆＋年曆",
    price: 1620,
    shipping: 80,
});

const buyerInfo = ref({
    name: "陳佑瑋",
    address: "114 台北市內湖區成功路五段450巷4號4樓",
    phone: "+8860926390926",
    email: "baby.c.a.t@yahoo.com.tw",
    payment: "信用卡付款",
    invoice: "電子發票 (T9BXTCQ)",
});

const recipientInfo = ref({
    name: "陳佑瑋",
    address: "114 台北市內湖區成功路五段450巷4號4樓",
    phone: "+8860926390926",
    email: "baby.c.a.t@yahoo.com.tw",
    delivery: "宅配到府",
});

//
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
