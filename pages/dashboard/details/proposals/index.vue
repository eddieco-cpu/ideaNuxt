<template>
    <div>
        <section class="mb-3">
            <UiButton class="max-md:w-full md:w-full" type="secondary" @click="toNewProposal">＋ 新增方案卡</UiButton>
        </section>

        <article class="rounded-lg bg-white w-[800px]">
            <div>
                <draggable v-model="proposals" handle=".handle" item-key="id" @end="dragEnd" @start="dragStart">
                    <template #item="{ element: proposl, index }">
                        <div
                            class="flex justify-start items-start gap-x-1"
                            :class="{ dragging: draggingIndex === index }"
                        >
                            <!--  -->
                            <section class="card p-3 overflow-x-auto">
                                <div class="min-h-20 w-[925px] flex justify-start items-stretch gap-x-2">
                                    <!--  -->
                                    <div>
                                        <div
                                            class="handle cursor-grab flex-shrink-0 h-8 flex justify-center items-center group"
                                        >
                                            <UIcon
                                                name="i-heroicons-bars-3"
                                                class="block w-5 h-5 text-Neutral-500-Primary text-Primary-500-Primary group-hover:text-Primary-400-Hover group-active:text-Primary-200"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            class="flex-shrink-0 h-8 flex justify-center items-center group cursor-pointer"
                                        >
                                            <UIcon
                                                name="i-heroicons-pencil-square"
                                                class="block w-5 h-5 text-Neutral-500-Primary text-Primary-500-Primary group-hover:text-Primary-400-Hover group-active:text-Primary-200"
                                            />
                                        </div>
                                    </div>

                                    <!--  -->
                                    <div class="w-[125px] flex-shrink-0">
                                        <picture class="block w-[125px] aspect-[125/50] overflow-hidden rounded">
                                            <img :src="proposl.photo" alt="" class="block w-full h-full object-cover" />
                                        </picture>
                                    </div>

                                    <!--  -->
                                    <div class="w-[208px] flex-shrink-0">
                                        <article>
                                            <h3 class="line-clamp-3 text-sm font-medium mb-1" :title="proposl.name">
                                                {{ proposl.name }}
                                            </h3>
                                            <p class="pb-1 flex justify-start items-center gap-x-1">
                                                <b class="text-Status-Color-Danger-500-Primary text-sm font-medium"
                                                    >NT$ {{ proposl.specialOffer }}</b
                                                >
                                                <b
                                                    class="text-Status-Color-Danger-400-Hover text-xs font-normal line-through"
                                                    >定價 ${{ proposl.originalPrice }}</b
                                                >
                                            </p>
                                        </article>
                                    </div>
                                    <b class="block w-[1px] border-l-[1px] border-[#ccc]"></b>

                                    <!--  -->
                                    <div class="w-[158px] flex-shrink-0">
                                        <ul class="list-disc pl-8 text-xs text-Neutral-800">
                                            <li v-for="content in proposl.contentList" class="mb-1">
                                                {{ content }}
                                            </li>
                                        </ul>
                                    </div>
                                    <b class="block w-[1px] border-l-[1px] border-[#ccc]"></b>

                                    <!--  -->
                                    <div class="w-[158px] flex-shrink-0">
                                        <ul class="list-disc pl-8 text-xs text-Neutral-800">
                                            <li v-for="content in proposl.sizeList" class="mb-1">
                                                {{ content }}
                                            </li>
                                        </ul>
                                    </div>
                                    <b class="block w-[1px] border-l-[1px] border-[#ccc]"></b>

                                    <!--  -->
                                    <div class="w-[158px] flex-shrink-0">
                                        <ul class="text-xs text-Neutral-800">
                                            <li class="mb-1 flex justify-start items-center gap-x-1">
                                                <UIcon name="i-heroicons-shopping-bag" class="block w-4 h-4" />
                                                預計{{ proposl.deliveryTime }}出貨
                                            </li>
                                            <li
                                                v-if="proposl.isDeliveryFree"
                                                class="mb-1 flex justify-start items-center gap-x-1"
                                            >
                                                <UIcon name="i-heroicons-shopping-cart" class="block w-4 h-4" />
                                                台灣本島免運費
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </template>
                </draggable>
            </div>
        </article>
    </div>
</template>
<script setup>
const route = useRoute();

//
function toNewProposal() {
    console.log("toNewProposal");
    const x = new Date().getTime();
    navigateTo(`/dashboard/details/proposals/${x}`);
}

//
const proposals = ref([]);

//
async function getReviewedProposalsData() {
    const data = await GET(`/api/dashboard/details/reviewed/proposals`);
    if (!!data) {
        proposals.value = data.proposals;
    }
}
getReviewedProposalsData();

//
let draggingIndex = ref(-1); // -1 表示没有元素正在被拖拽

function dragStart(event) {
    draggingIndex.value = event.oldIndex;
}

function dragEnd() {
    draggingIndex.value = -1; // 重置
    console.log("拖放操作完成", proposals.value);
}
</script>
<style scoped>
.dragging {
    @apply bg-Primary-50 min-h-[120px];
}
.card::-webkit-scrollbar {
    width: 3px;
    height: 3px;
}
.card::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
}
.card::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}
</style>
