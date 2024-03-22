<template>
    <div>
        <UiTitle class="w-full">募資進度更新</UiTitle>
        <section class="min-h-32 rounded-lg border-[1px] border-[#E5E5E5] mb-3 bg-white overflow-hidden">
            <draggable v-model="progressList" handle=".handle" item-key="id" @end="dragEnd" @start="dragStart($event)">
                <template #item="{ element: item, index }">
                    <div
                        class="item bg-white px-6 pt-8 pb-2 border-b-[1px] border-[#f3f3f3] flex justify-start items-start gap-x-2 max-md:p-3 max-md:pb-0"
                        :class="{ dragging: draggingIndex === index }"
                    >
                        <!-- <div class="handle cursor-grab flex-shrink-0 h-8 flex justify-center items-center group">
                            <UIcon
                                name="i-heroicons-bars-3"
                                class="block w-5 h-5 text-Neutral-500-Primary text-Primary-500-Primary group-hover:text-Primary-400-Hover group-active:text-Primary-200"
                            />
                        </div> -->
                        <div class="flex-shrink-0 h-8 flex justify-center items-center group cursor-pointer">
                            <nuxt-link :to="`/dashboard/${$route.params.dashboardId}/progress/${item.linkProgressId}`">
                                <UIcon
                                    name="i-heroicons-pencil-square"
                                    class="block w-5 h-5 text-Neutral-500-Primary text-Primary-500-Primary group-hover:text-Primary-400-Hover group-active:text-Primary-200"
                                />
                            </nuxt-link>
                        </div>
                        <div class="flex-grow">
                            <DashboardProgressAccordion :item="item" />
                        </div>
                    </div>
                </template>
            </draggable>
        </section>
        <section class="mt-3">
            <UiButton class="max-md:w-full md:w-full" type="secondary" @click="toNewProgress">＋ 新增進度更新</UiButton>
        </section>
    </div>
</template>
<script setup>
const route = useRoute();
const dashboardId = route.params.dashboardId;

/**
 * {
 *  id: 1,
 *  title: "進度更新標題",
 *  html: "進度更新內容",
 *  date: "2021-10-01",
 * }
 */
const progressList = ref([
    {
        id: 1,
        title: "進度更新標題",
        html: "進度更新內容",
        date: "2021-10-01",
        linkProgressId: "fakeDataOfProgress",
    },
    {
        id: 2,
        title: "進度更新標題進度更新標題",
        html: "<p>進度更新內容</p><p>進度更新內容</p>",
        date: "2021-10-01",
        linkProgressId: "fakeDataOfProgress",
    },
    {
        id: 3,
        title: "進度更新標題進度更新標題進度更新標題",
        html: "<p>進度更新內容</p><p>進度更新內容</p><p>進度更新內容</p>",
        date: "2021-10-01",
        linkProgressId: "fakeDataOfProgress",
    },
    {
        id: 4,
        title: "進度更新標題進度更新標題進度更新標題進度更新標題",
        html: "<p>進度更新內容</p><p>進度更新內容</p><p>進度更新內容</p><p>進度更新內容</p>",
        date: "2021-10-01",
        linkProgressId: "fakeDataOfProgress",
    },
    {
        id: 5,
        title: "進度更新標題",
        html: "進度更新內容",
        date: "2021-10-01",
        linkProgressId: "fakeDataOfProgress",
    },
]);

//
let draggingIndex = ref(-1);

function dragStart(event) {
    draggingIndex.value = event.oldIndex;
}
function dragEnd() {
    draggingIndex.value = -1; // 重置
    console.log("拖放操作完成", progressList.value);
}

//
//
function toNewProgress() {
    const x = new Date().getTime();
    navigateTo(`/dashboard/${dashboardId}/progress/${x}`);
}

//
</script>
<style scoped>
.dragging {
    @apply bg-Primary-50 min-h-[100px];
}
</style>
