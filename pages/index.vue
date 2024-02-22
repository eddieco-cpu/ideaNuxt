<template>
    <section>
        <div class="bg-white overflow-hidden">
            <!--  -->
            <div class="text-center mx-auto max-lg:hidden">
                <UCarousel
                    v-slot="{ item }"
                    :items="category"
                    :ui="{ item: 'snap-start' }"
                    class="max-w-[1200px] mx-auto py-3"
                >
                    <NuxtLink
                        to="/"
                        class="block whitespace-nowrap text-sm font-medium text-Neutral-900 hover:text-Primary-400-Hover active:text-Primary-600-Dark-Primary mx-6 transition-colors duration-200 ease-in-out"
                        >{{ item }}</NuxtLink
                    >
                </UCarousel>
            </div>

            <!--  -->
            <section class="bg-[rgb(247,248,252)] py-[1px]">
                <!--  -->
                <div class="my-10 max-md:my-9">
                    <HomeMainSlider :slides="slides" />
                </div>

                <UiContainer>
                    <UiTitle>新點子集資</UiTitle>

                    <!--  -->
                    <div class="text-right mb-[-30px] max-md:mt-[-44px] max-md:mb-4">
                        <NuxtLink
                            to="/"
                            class="inline-flex justify-center items-center px-4 py-1 text-sm font-light group text-Primary-500-Primary relative z-[2] max-md:translate-x-4"
                        >
                            <b class="block translate-y-[-1px] mr-1 font-light">找更多點子</b>
                            <UIcon
                                name="i-heroicons-arrow-right-circle"
                                class="block w-4 h-4 group-hover:animate-ping"
                            />
                        </NuxtLink>
                    </div>

                    <!--  -->
                    <UCarousel
                        v-slot="{ item }"
                        :items="newIdeasTypes.types"
                        :ui="{ item: 'snap-start' }"
                        class="max-w-[1200px] mx-auto mb-4 max-md:w-[calc(100%+48px)] max-md:ml-[-24px] max-md:pl-4"
                        :class="false && 'ring-1 ring-green-200 max-md:ring-yellow-400'"
                    >
                        <NuxtLink
                            to="/"
                            :class="
                                item.id == newIdeasTypes.typeActive
                                    ? 'bg-Primary-100 text-Primary-600-Dark-Primary'
                                    : 'bg-Primary-50 text-Primary-400-Hover'
                            "
                            class="block rounded-lg whitespace-nowrap text-sm leading-6 px-4 py-1 mr-4 hover:text-Primary-400-Hover active:text-Primary-600-Dark-Primary transition-colors duration-200 ease-in-out"
                            @click="newIdeasTypes.typeActive = item.id"
                            >{{ item.name }}</NuxtLink
                        >
                    </UCarousel>

                    <!--  -->
                    <UCarousel
                        v-slot="{ item }"
                        :items="newIdeas"
                        :ui="{ item: 'snap-start' }"
                        class="max-w-[1200px] mx-auto mb-10 max-md:w-[calc(100%+48px)] max-md:ml-[-24px] max-md:pl-4"
                        :class="false && 'ring-1 ring-blue-200 max-md:ring-orange-400'"
                    >
                        <CardFundraiseHome :key="item.id" />
                    </UCarousel>
                </UiContainer>

                <UiContainer>
                    <UiTitle>熱門點子推薦</UiTitle>

                    <!--  -->
                    <div class="text-right mt-[-44px] mb-4">
                        <NuxtLink
                            to="/"
                            class="inline-flex justify-center items-center px-4 py-1 text-sm font-light group text-Primary-500-Primary relative z-[2] max-md:translate-x-4"
                        >
                            <b class="block translate-y-[-1px] mr-1 font-light">找更多點子</b>
                            <UIcon
                                name="i-heroicons-arrow-right-circle"
                                class="block w-4 h-4 group-hover:animate-ping"
                            />
                        </NuxtLink>
                    </div>

                    <!--  -->
                    <UCarousel
                        v-slot="{ item }"
                        :items="newIdeas"
                        :ui="{ item: 'snap-start' }"
                        class="max-w-[1200px] mx-auto mb-10 max-md:w-[calc(100%+48px)] max-md:ml-[-24px] max-md:pl-4"
                        :class="false && 'ring-1 ring-blue-200 max-md:ring-orange-400'"
                    >
                        <CardFundraiseHome :key="item.id" />
                    </UCarousel>
                </UiContainer>

                <div class="mx-auto mb-10 w-[1200px] h-[100px] max-md:w-[324px] max-md:h-24">
                    <img :src="helperPicture()" alt="" class="block w-full h-full object-cover" />
                </div>
            </section>

            <!--  -->
            <section class="bg-[#f4f4f4] py-[1px]">
                <UiContainer>
                    <UiTitle>最後集資倒數</UiTitle>
                    <div
                        class="flex justify-start flex-wrap content-start w-[calc(100%+4px)] ml-[-2px] max-xl:w-[calc(301*3px)] max-xl:mx-auto max-lg:w-[calc(301*2px)] max-md:w-[calc(301*1px)]"
                    >
                        <CardFundraiseHome v-for="(item, i) in 8" class="mb-4" />
                    </div>
                    <UiPagination
                        :currentPage="currentPage"
                        :totalPages="totalPages"
                        @updateCurrentPage="updateCurrentPage"
                    />
                </UiContainer>
            </section>

            <!--  -->
            <section class="bg-[rgb(247,248,252)] py-[1px]">
                <UiContainer>
                    <!--  -->
                    <UiTitle>點子開箱！影音快播</UiTitle>
                    <UCarousel
                        v-slot="{ item }"
                        :items="videoList"
                        :ui="{ item: 'snap-start' }"
                        class="max-w-[1200px] mx-auto py-3"
                    >
                        <div class="mr-5 w-[183px] aspect-[183/256] rounded-[10px] overflow-hidden">
                            <img :src="helperPicture()" class="block w-full h-full object-cover" />
                        </div>
                    </UCarousel>
                </UiContainer>
            </section>

            <!--  -->
            <section class="bg-[rgb(247,248,252)] py-[1px] pb-20">
                <UiContainer class="relative max-md:pb-5 max-md:mb-10">
                    <!--  -->
                    <div
                        class="text-right mb-[-36px] max-md:absolute max-md:bottom-0 max-md:left-0 max-md:w-full max-md:text-center"
                    >
                        <UiButton
                            type="secondary"
                            class="max-w-[120px] !text-sm max-md:max-w-auto max-md:min-w-[calc(100%-48px)]"
                            >查看更多團購</UiButton
                        >
                    </div>
                    <!--  -->
                    <UiTitle>網紅推薦！限時開團中</UiTitle>
                    <div
                        class="grid grid-cols-3 grid-rows-2 gap-5 max-xl:grid-cols-2 max-xl:grid-rows-3 max-md:grid-cols-1 max-md:grid-rows-[auto_auto_auto_auto_auto_auto]"
                    >
                        <CardFlashBuying type="ttb" />
                        <CardFlashBuying type="ttb" />
                        <CardFlashBuying />
                        <CardFlashBuying />
                        <CardFlashBuying />
                        <CardFlashBuying />
                    </div>
                </UiContainer>
            </section>

            <!-- -->
            <section class="bg-white py-[1px] h-[385px] flex justify-center items-center max-xl:h-auto">
                <section class="w-[1200px] mx-auto flex justify-between items-center max-xl:flex-col">
                    <article class="max-w-[344px] pt-10 pb-10">
                        <p class="text-2xl font-bold font-roboto text-Secondary-400-Hover mb-4">TOP PICKS</p>
                        <p class="text-4xl font-bold mb-4">熱購名人排行榜</p>

                        <p class="text-sm font-normal mb-4">
                            快來瞧瞧，探索每日最新的排行榜！這些不僅是最新最熱門，更是大家一致推崇的選擇。立即尋找那些引領潮流、散發獨特魅力的絕佳商品！
                        </p>
                        <nuxt-link class="text-Secondary-400-Hover underline text-sm" to="/kol">查看所有人</nuxt-link>
                    </article>
                    <div
                        class="w-[752px] h-[446px] flex justify-between flex-wrap content-between max-xl:mb-12 max-md:w-full max-md:h-auto overflow-x-scroll max-md:flex-nowrap max-md:justify-start max-md:gap-x-3 max-md:items-center top-picks-nav max-md:px-4"
                    >
                        <CardKolRank />
                        <CardKolRank />
                        <CardKolRank />
                        <CardKolRank />
                        <CardKolRank />
                        <CardKolRank />
                    </div>
                </section>
            </section>

            <section class="bg-[rgb(247,248,252)] pt-[120px] pb-1">
                <UiContainer class="relative max-md:pb-5 max-md:mb-10">
                    <!--  -->
                    <div
                        class="text-right mb-[-36px] max-md:absolute max-md:bottom-0 max-md:left-0 max-md:w-full max-md:text-center"
                    >
                        <UiButton
                            type="secondary"
                            class="max-w-[120px] !text-sm max-md:max-w-auto max-md:min-w-[calc(100%-48px)]"
                            >查看更多團購</UiButton
                        >
                    </div>
                    <!--  -->
                    <UiTitle>即將開團</UiTitle>
                    <div
                        class="mx-auto flex justify-between items-center gap-x-5 max-lg:max-w-[calc(100%-48px)] max-lg:flex-col max-lg:justify-center max-lg:gap-y-4 max-md:max-w-full"
                    >
                        <CardGroupBuyingHome />
                        <CardGroupBuyingHome />
                        <CardGroupBuyingHome />
                        <CardGroupBuyingHome />
                    </div>
                </UiContainer>
            </section>

            <!--  -->
            <!-- <hr />
            <CardGroupBuying />
            <hr /> -->
        </div>
    </section>
</template>

<script setup>
const currentPage = ref(10);
const totalPages = ref(20);
const updateCurrentPage = (newPage) => {
    console.log("newPage", newPage);
    currentPage.value = newPage;
};

const category = [
    "科技AI",
    "時尚流行",
    "3C家電",
    "書籍出版",
    "設計藝術",
    "遊戲動漫",
    "保健食品",
    "課程教育",
    "攝影圖像",
    "表演/門票",
    "服務/公益",
];
const newIdeas = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
const newIdeasTypes = reactive({
    typeActive: "1",
    types: [
        { id: "1", name: "時尚流行" },
        { id: "2", name: "3C家電" },
        { id: "3", name: "書籍出版" },
        { id: "4", name: "遊戲動漫" },
        { id: "5", name: "保健食品" },
        { id: "6", name: "科技AI" },
    ],
});

const videoList = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }];

const slides = ref([]);

onBeforeMount(async () => {
    const response = await fetch("/api/sliderDatas");
    const { sliderDatas } = await response.json();
    slides.value = sliderDatas;
});
</script>

<style>
.top-picks-nav::-webkit-scrollbar {
    display: none;
}
</style>
