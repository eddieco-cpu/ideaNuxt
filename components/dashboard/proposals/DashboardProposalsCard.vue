<template>
    <div
        class="border-[1px] border-Primary-100 rounded-lg px-4 py-3 bg-white ring-1 ring-Primary-100 mb-1 relative"
        :class="class"
    >
        <div :class="item.soldOut ? ' opacity-45 sold-out' : ''">
            <picture class="block aspect-[212/75] rounded overflow-hidden mb-[10px]">
                <img class="block h-full w-full object-cover" :src="item.projectPreview" />
            </picture>

            <div
                v-if="item.sponsors && item.sponsors > 0"
                class="bg-Primary-400-Hover text-white rounded inline-block p-1 px-[6px] mb-[10px] text-xs mr-2"
            >
                已支持{{ item.sponsors }}人
            </div>

            <div
                v-if="item.salesLimit"
                class="bg-Primary-400-Hover text-white rounded inline-block p-1 px-[6px] mb-[10px] text-xs"
            >
                剩餘{{ item.salesLimitedQuantity }}組
            </div>

            <h3 class="text-base font-medium mb-2 line-clamp-1">
                {{ item.projectName }}
            </h3>

            <p class="flex justify-start items-center gap-x-1 mb-[10px]">
                <b class="text-Status-Color-Danger-500-Primary text-sm font-medium text-xl"
                    >NT$ {{ item.specialOffer }}</b
                >
                <b class="text-Status-Color-Danger-400-Hover text-xs font-normal line-through text-xs"
                    >定價 ${{ item.originalPrice }}，現省 ${{ item.originalPrice - item.specialOffer }}</b
                >
            </p>
            <section class="border-y-[1px] border-gray-100 py-[6px] mb-[10px]">
                <p class="text-xs font-medium">商品內容</p>
                <article class="text-xs mb-4" v-html="item.content"></article>
                <p class="text-xs font-medium">商品規格</p>
                <article class="text-xs" v-html="item.specification"></article>
            </section>
            <ul class="text-xs text-Neutral-800 flex justify-start content-start items-start flex-wrap gap-1">
                <li class="mb-1 flex justify-start items-center gap-x-1 text-xs">
                    <UIcon name="i-heroicons-shopping-bag" class="block w-3 h-3" />
                    預計{{ item.deliveryTime ? formatDateToYearMonth(item.deliveryTime) : " yyyy/mm " }}出貨
                </li>
                <li
                    v-if="item.deliveryWays.includes('deliveInCountry')"
                    class="mb-1 flex justify-start items-center gap-x-1 text-xs"
                >
                    <UIcon name="i-heroicons-shopping-cart" class="block w-3 h-3" />
                    台灣本島免運費
                </li>
                <li
                    v-if="item.deliveryWays.includes('deliveToStore')"
                    class="mb-1 flex justify-start items-center gap-x-1 text-xs"
                >
                    <UIcon name="i-heroicons-shopping-cart" class="block w-3 h-3" />
                    超商取貨 {{ item.deliveToStoreFee }} 元
                </li>
                <li
                    v-if="item.deliveryWays.includes('deliveToHouse')"
                    class="mb-1 flex justify-start items-center gap-x-1 text-xs"
                >
                    <UIcon name="i-heroicons-shopping-cart" class="block w-3 h-3" />
                    宅配
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => ({
            projectPreview: "",
            salesLimit: "",
            salesLimitedQuantity: "",
            sponsors: 0,
            projectName: "",
            specialOffer: "",
            originalPrice: "",
            content: "",
            specification: "",
            deliveryTime: "",
            deliveryWays: ["deliveInCountry", "deliveToStore", "deliveToHouse"],
            deliveToStoreFee: 0,
            soldOut: false,
        }),
    },
    class: {
        type: String,
        default: " w-[242px] min-h-[316px]",
    },
});

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
<style scoped>
.sold-out::after {
    content: "- 方案已售完 -";
    @apply m-auto inline-flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 text-white bg-gray-500 rounded text-xl w-40 h-9 z-[1];
}
</style>
