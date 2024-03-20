<template>
    <div>
        <section class="mb-3">
            <UiButton class="max-md:w-full md:w-full" type="secondary" @click="toNewProposal">＋ 新增方案卡</UiButton>
        </section>

        <article class="rounded-lg bg-white">
            <UCarousel v-slot="{ it }" :items="['1']" :ui="{ item: 'snap-start' }" class="mx-auto">
                <div>
                    <div
                        v-for="(proposl, index) in proposals"
                        :key="proposl.id"
                        class="flex justify-start items-start gap-x-1"
                    >
                        <!--  -->
                        <section class="">
                            <div
                                class="min-h-20 w-[925px] flex justify-start items-stretch gap-x-2 border-b-[1px] border-Primary-100 py-3 px-4"
                                :class="index === proposals.length - 1 ? ' border-transparent' : ''"
                            >
                                <!--  -->
                                <div>
                                    <!-- fake use -->
                                    <nuxt-link
                                        :to="`/dashboard/${$route.params.dashboardId}/details/proposals/${proposl.linkProposalsId}`"
                                    >
                                        <div
                                            class="flex-shrink-0 h-8 flex justify-center items-center group cursor-pointer"
                                        >
                                            <UIcon
                                                name="i-heroicons-pencil-square"
                                                class="block w-5 h-5 text-Neutral-500-Primary text-Primary-500-Primary group-hover:text-Primary-400-Hover group-active:text-Primary-200"
                                            />
                                        </div>
                                    </nuxt-link>
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
                                <b class="block w-[1px] border-l-[1px] border-gray-100"></b>

                                <!--  -->
                                <div class="w-[165px] flex-shrink-0">
                                    <ul class="list-disc pl-8 text-xs text-Neutral-800">
                                        <li v-for="content in proposl.contentList" class="mb-1">
                                            {{ content }}
                                        </li>
                                    </ul>
                                </div>
                                <b class="block w-[1px] border-l-[1px] border-gray-100"></b>

                                <!--  -->
                                <div class="w-[165px] flex-shrink-0">
                                    <ul class="list-disc pl-8 text-xs text-Neutral-800">
                                        <li v-for="content in proposl.sizeList" class="mb-1">
                                            {{ content }}
                                        </li>
                                    </ul>
                                </div>
                                <b class="block w-[1px] border-l-[1px] border-gray-100"></b>

                                <!--  -->
                                <div class="w-[165px] flex-shrink-0">
                                    <ul class="text-xs text-Neutral-800 ml-1">
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
                </div>
            </UCarousel>

            <!-- <DashboardProposalsDragbleArea :proposals="proposals" v-if="proposals.length" /> -->
        </article>
    </div>
</template>
<script setup>
const route = useRoute();
const dashboardId = route.params.dashboardId;

//
function toNewProposal() {
    console.log("toNewProposal");
    const x = new Date().getTime();
    navigateTo(`/dashboard/${dashboardId}/details/proposals/${x}`);
}

//
const proposals = ref([]);

//
async function getReviewedProposalsData() {
    const data = await GET(`/api/dashboard/details/reviewed/proposals`);
    if (!!data) {
        proposals.value = data.proposals.map((el, i) => ({
            ...el,

            //
            linkProposalsId: "fakeDataOfDetailsProposal" + (i + 1), //fake use //fakeDataOfDetailsProposal6
        }));
    }
}
getReviewedProposalsData();
</script>
