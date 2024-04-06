<template>
    <div
        class="border-[1px] border-Primary-100 rounded-lg px-4 py-3 bg-white ring-1 ring-Primary-100 mb-1 relative"
        :class="class"
    >
        <div
            :class="item.soldOut ? ' opacity-45 sold-out' : ''"
            class="flex flex-col justify-start items-center min-h-[495px]"
        >
            <picture class="w-full block aspect-[212/75] rounded overflow-hidden mb-[10px]">
                <img class="block h-full w-full object-cover" :src="item.projectPreview" />
            </picture>

            <div class="w-full">
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
            </div>

            <h3 class="w-full text-base font-medium mb-2 line-clamp-1">
                {{ item.projectName }}
            </h3>

            <p class="w-full flex justify-start items-center gap-x-1 mb-[10px]">
                <b class="text-Status-Color-Danger-500-Primary font-medium text-xl">NT$ {{ item.specialOffer }}</b>
                <b class="text-Status-Color-Danger-400-Hover font-normal line-through text-xs"
                    >定價 ${{ item.originalPrice }}，現省 ${{ item.originalPrice - item.specialOffer }}</b
                >
            </p>

            <section class="w-full border-t-[1px] border-gray-100 py-[6px] mb-1">
                <p class="text-xs font-medium mb-1">商品內容：</p>
                <article class="text-xs">
                    <p v-for="(content, i) in item.content" :key="i" v-html="content"></p>
                </article>
            </section>
            <ul class="flex-grow w-full text-xs text-Neutral-800 flex flex-col justify-start items-start gap-1 mb-3">
                <li class="flex justify-start items-center gap-x-1 text-xs" v-if="item.deliveToStore.isAvailable">
                    <UIcon name="i-heroicons-check-circle" class="block text-base w-4 h-4 text-Primary-500-Primary" />
                    {{
                        item.deliveToStore.fee === 0
                            ? `本專案享超商取貨免運`
                            : `本專案可超商取貨，運費${item.deliveToStore.fee}元`
                    }}
                </li>
                <li class="flex justify-start items-center gap-x-1 text-xs" v-if="item.deliveToHouse.isAvailable">
                    <UIcon name="i-heroicons-check-circle" class="block text-base w-4 h-4 text-Primary-500-Primary" />
                    {{
                        item.deliveToHouse.fee === 0
                            ? `本專案享宅配免運優惠`
                            : `本專案宅配出貨，運費${item.deliveToHouse.fee}元`
                    }}
                </li>
                <li class="flex justify-start items-center gap-x-1 text-xs" v-if="item.deliveOverseas.isAvailable">
                    <UIcon name="i-heroicons-check-circle" class="block text-base w-4 h-4 text-Primary-500-Primary" />
                    {{
                        item.deliveOverseas.fee === 0
                            ? `可寄送國外離島，享免運優惠`
                            : `可寄送國外/離島，運費${item.deliveOverseas.fee}元`
                    }}
                </li>
            </ul>
            <div class="w-full border-t-[1px] border-gray-100">
                <p class="pt-3 pb-2 text-center text-xs font-normal text-Primary-500-Primary">
                    本專案預計 {{ item.deliveryTime }} 實現，敬啟期待
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => ({
            id: "",
            projectName: "",
            projectPreview: "",

            specialOffer: "",
            originalPrice: "",

            salesLimit: "",
            salesLimitedQuantity: "",

            sponsors: 0,

            content: "",

            deliveryTime: "",

            deliveOverseas: {
                isAvailable: true,
                fee: 0,
            },
            deliveToStore: {
                isAvailable: true,
                fee: 0,
            },
            deliveToHouse: {
                isAvailable: true,
                fee: 0,
            },

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
