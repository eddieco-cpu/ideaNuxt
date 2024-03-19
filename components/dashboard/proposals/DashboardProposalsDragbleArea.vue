<template>
    <div class="ring-1 tttt">
        <Swiper v-if="slides.length > 0" :modules="[SwiperFreeMode, SwiperPagination]" :slides-per-view="'auto'">
            <SwiperSlide
                v-for="(slide, idx) in slides"
                :key="idx"
                :class="`card card-${idx}`"
                style="outline: 2px solid orange"
            >
                <div class="relative block rounded-lg overflow-hidden">
                    <template v-if="idx !== 1"> pp {{ idx }} </template>
                    <template v-else>
                        <draggable
                            v-model="xProposals"
                            handle=".handle"
                            item-key="id"
                            @end="dragEnd"
                            @start="dragStart"
                            v-if="xProposals.length > 0"
                        >
                            <template #item="{ element: proposl, index }">
                                <div
                                    class="flex justify-start items-start gap-x-1"
                                    :class="{ dragging: draggingIndex === index }"
                                >
                                    <!--  -->
                                    <section class="p-3 ring-1">
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
                                                <picture
                                                    class="block w-[125px] aspect-[125/50] overflow-hidden rounded"
                                                >
                                                    <img
                                                        :src="proposl.photo"
                                                        alt=""
                                                        class="block w-full h-full object-cover"
                                                    />
                                                </picture>
                                            </div>

                                            <!--  -->
                                            <div class="w-[208px] flex-shrink-0">
                                                <article>
                                                    <h3
                                                        class="line-clamp-3 text-sm font-medium mb-1"
                                                        :title="proposl.name"
                                                    >
                                                        {{ proposl.name }}
                                                    </h3>
                                                    <p class="pb-1 flex justify-start items-center gap-x-1">
                                                        <b
                                                            class="text-Status-Color-Danger-500-Primary text-sm font-medium"
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
                    </template>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script setup>
//
const props = defineProps({
    proposals: Array,
});
console.log(props.proposals);

//
const xProposals = ref([]);
onMounted(() => {
    xProposals.value = props.proposals;
    console.log(xProposals.value);
});

//
const slides = ref([
    {
        photo: helperPicture(),
    },
    {
        photo: helperPicture(),
    },
    {
        photo: helperPicture(),
    },
]);

//
let draggingIndex = ref(-1); // -1 表示没有元素正在被拖拽

function dragStart(event) {
    console.log("dragStart", event);
    draggingIndex.value = event.oldIndex;
}

function dragEnd() {
    console.log("dragEnd");
    draggingIndex.value = -1; // 重置
    console.log("拖放操作完成", proposals.value);
}
</script>
<style>
/*  */
.tttt .swiper-slide:first-child {
    width: 10% !important;
}
.tttt .swiper-slide:nth-child(2) {
    width: 118.75% !important;
}
.tttt .swiper-slide:last-child {
    width: 10% !important;
}

/*  */
.dragging {
    @apply bg-Primary-50 min-h-[120px];
}
/* .card::-webkit-scrollbar {
    width: 3px;
    height: 3px;
}
.card::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
}
.card::-webkit-scrollbar-track {
    background-color: #f1f1f1;
} */
</style>
