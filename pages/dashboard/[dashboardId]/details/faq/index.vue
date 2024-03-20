<template>
    <div>
        <section class="mb-3">
            <UiButton class="max-md:w-full md:w-full" type="secondary" @click="toNewProposal"
                >＋ 新增常見問與答</UiButton
            >
        </section>

        <article class="border-[1px] border-[Primary-100] rounded-lg bg-white overflow-hidden">
            <div>
                <draggable v-model="faqs" handle=".handle" item-key="id" @end="dragEnd" @start="dragStart">
                    <template #item="{ element: item, index }">
                        <div
                            class="item bg-white p-6 pb-2 border-b-[1px] border-[#f3f3f3] flex justify-start items-start gap-x-2 max-md:p-3 max-md:pb-0"
                            :class="{ dragging: draggingIndex === index }"
                        >
                            <div class="handle cursor-grab flex-shrink-0 h-8 flex justify-center items-center group">
                                <UIcon
                                    name="i-heroicons-bars-3"
                                    class="block w-5 h-5 text-Neutral-500-Primary text-Primary-500-Primary group-hover:text-Primary-400-Hover group-active:text-Primary-200"
                                />
                            </div>
                            <div class="flex justify-center items-center flex-col gap-y-2 flex-shrink-0">
                                <UIcon
                                    name="i-heroicons-chevron-up"
                                    class="block w-3 h-3 text-Primary-500-Primar cursor-pointer text-Primary-500-Primary hover:text-Primary-400-Hover active:text-Primary-200"
                                    @click="exchangePrev(item, index)"
                                />
                                <UIcon
                                    name="i-heroicons-chevron-down"
                                    class="block w-3 h-3 text-Primary-500-Primar cursor-pointer text-Primary-500-Primary hover:text-Primary-400-Hover active:text-Primary-200"
                                    @click="exchangeNext(item, index)"
                                />
                            </div>
                            <div class="flex-grow">
                                <UiAccordion
                                    :items="item ? [{ leading: `Q${index + 1}. `, ...item }] : []"
                                    :class="' md:mb-0'"
                                />
                            </div>
                            <div class="flex-shrink-0 h-8 flex justify-center items-center group cursor-pointer">
                                <!-- fake use -->
                                <nuxt-link
                                    :to="`/dashboard/${$route.params.dashboardId}/details/faq/${item.linkFaqsId}`"
                                >
                                    <UIcon
                                        name="i-heroicons-pencil-square"
                                        class="block w-5 h-5 text-Neutral-500-Primary text-Primary-500-Primary group-hover:text-Primary-400-Hover group-active:text-Primary-200"
                                    />
                                </nuxt-link>
                            </div>
                        </div>
                    </template>
                </draggable>
            </div>
        </article>
    </div>
</template>
<script setup>
import UiAccordion from "~/components/ui/UiAccordion.vue";

const route = useRoute();
const dashboardId = route.params.dashboardId;

//
const faqs = ref([
    /**
        {
            id: "",
            label: "",
            defaultOpen: false,
            content: [],
        }
     */
]);

//
async function getReviewedFaqData() {
    const data = await GET(`/api/dashboard/details/reviewed/faq`);
    if (!!data) {
        faqs.value = data.faqs.map(({ label, content, id }, i) => ({
            id,
            label,
            content,
            defaultOpen: i === 0 ? true : false,

            //
            linkFaqsId: "fakeDataOfDetailsFaq" + (i + 1), //fake use
        }));
    }
}
getReviewedFaqData();

//
let draggingIndex = ref(-1); // -1 表示没有元素正在被拖拽

function dragStart(event) {
    draggingIndex.value = event.oldIndex;
}

function dragEnd() {
    draggingIndex.value = -1; // 重置
    console.log("拖放操作完成", faqs.value);
}

function exchangePrev(item, index) {
    if (index <= 0) return;

    //
    faqs.value[index] = faqs.value[index - 1];
    faqs.value[index - 1] = item;
}

function exchangeNext(item, index) {
    if (index === faqs.value.length - 1) return;

    //
    faqs.value[index] = faqs.value[index + 1];
    faqs.value[index + 1] = item;
}

//
function toNewProposal() {
    console.log("to new faq");
    const x = new Date().getTime();
    navigateTo(`/dashboard/${dashboardId}/details/faq/${x}`);
}
</script>
<style scoped>
.dragging {
    @apply bg-Primary-50 min-h-[100px];
}
</style>
