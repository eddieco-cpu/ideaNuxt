<template>
    <div>
        <UCarousel
            v-slot="{ item }"
            :items="reviewedProposals"
            :ui="{ item: 'snap-start' }"
            class="w-full mx-auto mb-4"
        >
            <div
                class="w-[242px] min-h-[316px] border-[1px] border-Primary-100 rounded-lg px-4 py-3 bg-white ring-1 ring-Primary-100 mr-2 mb-1"
            >
                <picture class="block aspect-[212/75] rounded overflow-hidden mb-[10px]">
                    <img class="block h-full w-full object-cover" :src="item.projectPreview" />
                </picture>

                <div
                    v-if="item.salesLimit"
                    class="bg-Primary-400-Hover text-white rounded inline-block p-1 px-[6px] mb-[10px] text-[9px]"
                >
                    剩餘{{ item.salesLimitedQuantity }}組
                </div>

                <h3 class="text-xs font-medium mb-[10px] line-clamp-1">
                    {{ item.projectName }}
                </h3>

                <p class="flex justify-start items-center gap-x-1 mb-[10px]">
                    <b class="text-Status-Color-Danger-500-Primary text-sm font-medium text-sm"
                        >NT$ {{ item.specialOffer }}</b
                    >
                    <b class="text-Status-Color-Danger-400-Hover text-xs font-normal line-through text-[9px]"
                        >定價 ${{ item.originalPrice }}，現省 ${{ item.originalPrice - item.specialOffer }}</b
                    >
                </p>
                <section class="border-y-[1px] border-gray-100 py-[6px] mb-[10px]">
                    <p class="text-[9px] font-medium">商品內容</p>
                    <article class="text-[8px] leading-3 mb-4" v-html="item.content"></article>
                    <p class="text-[9px] font-medium">商品規格</p>
                    <article class="text-[8px] leading-3" v-html="item.specification"></article>
                </section>
                <ul class="text-xs text-Neutral-800 flex justify-start content-start items-start flex-wrap gap-1">
                    <li class="mb-1 flex justify-start items-center gap-x-1 text-[9px]">
                        <UIcon name="i-heroicons-shopping-bag" class="block w-3 h-3" />
                        預計{{ item.deliveryTime ? formatDateToYearMonth(item.deliveryTime) : " yyyy/mm " }}出貨
                    </li>
                    <li
                        v-if="item.deliveryWays.includes('deliveInCountry')"
                        class="mb-1 flex justify-start items-center gap-x-1 text-[9px]"
                    >
                        <UIcon name="i-heroicons-shopping-cart" class="block w-3 h-3" />
                        台灣本島免運費
                    </li>
                    <li
                        v-if="item.deliveryWays.includes('deliveToStore')"
                        class="mb-1 flex justify-start items-center gap-x-1 text-[9px]"
                    >
                        <UIcon name="i-heroicons-shopping-cart" class="block w-3 h-3" />
                        超商取貨 {{ item.deliveToStoreFee }} 元
                    </li>
                    <li
                        v-if="item.deliveryWays.includes('deliveToHouse')"
                        class="mb-1 flex justify-start items-center gap-x-1 text-[9px]"
                    >
                        <UIcon name="i-heroicons-shopping-cart" class="block w-3 h-3" />
                        宅配
                    </li>
                </ul>
            </div>
        </UCarousel>
    </div>
</template>
<script setup>
const route = useRoute();

//
const reviewedProposals = ref([
    {
        id: 1,
        projectName: "商品名稱",
        projectPreview: helperPicture(),
        specialOffer: 1000,
        originalPrice: 2000,
        salesLimit: true,
        salesLimitedQuantity: 10,
        content: "商品內容",
        specification: "商品規格",
        deliveryTime: "2022-12-31",
        deliveryWays: ["deliveInCountry", "deliveToStore", "deliveToHouse"],
        deliveToStoreFee: 50,
    },
    {
        id: 2,
        projectName: "商品名稱",
        projectPreview: helperPicture(),
        specialOffer: 1000,
        originalPrice: 2000,
        salesLimit: true,
        salesLimitedQuantity: 10,
        content: "商品內容",
        specification: "商品規格",
        deliveryTime: "2022-12-31",
        deliveryWays: ["deliveInCountry", "deliveToStore", "deliveToHouse"],
        deliveToStoreFee: 50,
    },
    {
        id: 3,
        projectName: "商品名稱",
        projectPreview: helperPicture(),
        specialOffer: 1000,
        originalPrice: 2000,
        salesLimit: true,
        salesLimitedQuantity: 10,
        content: "商品內容",
        specification: "商品規格",
        deliveryTime: "2022-12-31",
        deliveryWays: ["deliveInCountry", "deliveToStore", "deliveToHouse"],
        deliveToStoreFee: 50,
    },
    {
        id: 4,
        projectName: "商品名稱",
        projectPreview: helperPicture(),
        specialOffer: 1000,
        originalPrice: 2000,
        salesLimit: true,
        salesLimitedQuantity: 10,
        content: "商品內容",
        specification: "商品規格",
        deliveryTime: "2022-12-31",
        deliveryWays: ["deliveInCountry", "deliveToStore", "deliveToHouse"],
        deliveToStoreFee: 50,
    },
    {
        id: 5,
        projectName: "商品名稱",
        projectPreview: helperPicture(),
        specialOffer: 1000,
        originalPrice: 2000,
        salesLimit: true,
        salesLimitedQuantity: 10,
        content: "商品內容",
        specification: "商品規格",
        deliveryTime: "2022-12-31",
        deliveryWays: ["deliveInCountry", "deliveToStore", "deliveToHouse"],
        deliveToStoreFee: 50,
    },
]);

//
function formatDateToYearMonth(dateInput) {
    // 將輸入的日期字符串轉換成Date物件
    const date = new Date(dateInput);

    // 獲取年份和月份，並確保月份為兩位數格式
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);

    // 組合年份和月份成"yyyy/mm"格式
    return `${year}/${month}`;
}
</script>
