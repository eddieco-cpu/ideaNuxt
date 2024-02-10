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
                        style="'outline: 1px solid orange'"
                        class="block whitespace-nowrap text-sm font-medium text-Neutral-900 hover:text-Primary-400-Hover active:text-Primary-600-Dark-Primary mx-6 transition-colors duration-200 ease-in-out"
                        >{{ item }}</NuxtLink
                    >
                </UCarousel>
            </div>

            <!--  -->
            <section class="bg-[rgb(247,248,252)] py-[1px]">
                <!--  -->
                <div class="my-10">
                    <ModalSlider />
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
                            <UiArrowIcon class="block w-4 h-4 group-hover:animate-ping"></UiArrowIcon>
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
                            <UiArrowIcon class="block w-4 h-4 group-hover:animate-ping"></UiArrowIcon>
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
            <section class="bg-[rgb(244, 244, 244)] py-[1px]">
                <UiContainer>
                    <UiTitle>最後集資倒數</UiTitle>
                    <div class="flex justify-center flex-wrap content-start w-[calc(100%+4px)] ml-[-2px]">
                        <CardFundraiseHome v-for="(item, i) in 8" />
                    </div>
                    <UiPagination />
                </UiContainer>
            </section>
        </div>
    </section>
</template>

<script setup>
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
</script>
