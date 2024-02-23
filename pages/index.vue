<template>
    <section>
        <div class="bg-white overflow-hidden">
            <!--  -->
            <div class="w-screen bg-white absolute top-[74px]">
                <div class="max-md:hidden flex justify-evenly max-w-[1200px] mx-auto py-3">
                    <NuxtLink
                        v-for="(item, index) in category"
                        :key="index"
                        :to="item.link"
                        style="'outline: 1px solid orange'"
                        class="block whitespace-nowrap text-sm font-medium text-Neutral-900 hover:text-Primary-400-Hover active:text-Primary-600-Dark-Primary mx-6 transition-colors duration-200 ease-in-out"
                        >{{ item.name }}</NuxtLink
                    >
                </div>
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
                            to="/category/technology-ai?type=fundraise"
                            class="inline-flex justify-center items-center px-4 py-1 text-sm font-light group text-Primary-500-Primary relative z-[2] max-md:translate-x-4"
                        >
                            <b class="block translate-y-[-1px] mr-1 font-light">找更多點子</b>
                            <UIcon name="i-heroicons-arrow-right-circle" class="block w-4 h-4" />
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
                        :ui="{
                            item: 'snap-start basis-[304px] md:basis-[calc((100%-80px)/4)]',
                            container: 'gap-x-3 md:gap-x-5',
                        }"
                    >
                        <CardFundraise :key="item.id" />
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
                            <UIcon name="i-heroicons-arrow-right-circle" class="block w-4 h-4" />
                        </NuxtLink>
                    </div>

                    <!--  -->
                    <UCarousel
                        v-slot="{ item }"
                        :items="newIdeas"
                        :ui="{
                            item: 'snap-start basis-[304px] md:basis-[calc((100%-80px)/4)]',
                            container: 'gap-x-3 md:gap-x-5',
                        }"
                    >
                        <CardFundraise :key="item.id" />
                    </UCarousel>
                </UiContainer>

                <div
                    class="mx-auto mb-10 w-[1200px] h-[100px] max-md:w-[324px] max-md:h-24 bg-[url('assets/images/home/banner.png')] md:bg-[url('assets/images/home/banner-web.png')]"
                ></div>
            </section>

            <!--  -->
            <section class="bg-[#f4f4f4] py-[1px]">
                <UiContainer>
                    <UiTitle>最後集資倒數</UiTitle>

                    <div class="grid grid-cols-1 md:grid-cols-4 md:gap-x-5 gap-y-4">
                        <CardFundraise v-for="(item, i) in 8" class="mb-4" />
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
                        v-slot="{ item, index }"
                        :items="videoPlayList"
                        :ui="{
                            item: 'snap-start basis-[180px] md:basis-[calc((100%-100px)/6)]',
                            container: 'gap-x-3 md:gap-x-5',
                        }"
                        class="max-w-[1200px] mx-auto py-3"
                    >
                        <CardVideoThumbnail :thumbnail="item.thumbnail" :text="item.text" @click="openVideo(index)" />
                    </UCarousel>
                </UiContainer>

                <transition name="modal">
                    <UtilVideo
                        :videoPlayList="videoPlayList"
                        :videoIndex="videoIndex"
                        @closeVideo="closeVideo"
                        v-if="isOpenVideo"
                    />
                </transition>
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
                        >
                            <NuxtLink to="/category/technology-ai?type=groupbuying">查看更多團購</NuxtLink>
                        </UiButton>
                    </div>
                    <!--  -->
                    <UiTitle>網紅推薦！限時開團中</UiTitle>

                    <div class="grid grid-cols-1 gap-y-4 md:grid-cols-4 md:gap-x-5">
                        <CardGroupBuying v-for="(item, index) in 8" :key="index" />
                    </div>
                </UiContainer>
            </section>

            <!-- -->
            <section class="bg-white md:h-[385px]">
                <section
                    class="mx-auto flex justify-center items-center max-xl:flex-col md:transform md:-translate-y-[30px]"
                >
                    <article class="max-w-[344px] pt-10 pb-10">
                        <p class="text-2xl font-bold font-roboto text-Secondary-400-Hover mb-4">TOP PICKS</p>
                        <p class="text-4xl font-bold mb-4">熱購名人排行榜</p>

                        <p class="text-sm font-normal mb-4">
                            快來瞧瞧，探索每日最新的排行榜！這些不僅是最新最熱門，更是大家一致推崇的選擇。立即尋找那些引領潮流、散發獨特魅力的絕佳商品！
                        </p>
                        <nuxt-link class="text-Secondary-400-Hover underline text-sm" to="/kol">查看所有人</nuxt-link>
                    </article>

                    <div
                        class="w-[752px] h-[446px] flex justify-between flex-wrap content-between max-xl:mb-12 max-md:w-full max-md:h-auto overflow-x-scroll max-md:flex-nowrap max-md:justify-start max-md:gap-x-3 max-md:items-center none-scrollbar max-md:px-4"
                    >
                        <CardKolRank v-for="(item, index) in 6" :key="index" />
                    </div>
                </section>
            </section>

            <section class="bg-[rgb(247,248,252)] pt-9 md:pt-[120px] pb-1">
                <UiContainer class="relative max-md:pb-5 max-md:mb-10">
                    <!--  -->
                    <div
                        class="text-right mb-[-36px] max-md:absolute max-md:bottom-0 max-md:left-0 max-md:w-full max-md:text-center"
                    >
                        <UiButton
                            type="secondary"
                            class="max-w-[120px] !text-sm max-md:max-w-auto max-md:min-w-[calc(100%-48px)]"
                        >
                            <NuxtLink to="/category/technology-ai?type=groupbuying">查看更多團購</NuxtLink>
                        </UiButton>
                    </div>
                    <!--  -->
                    <UiTitle>即將開團</UiTitle>

                    <div class="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-x-5">
                        <CardGroupBuying v-for="(item, index) in 4" :key="index" />
                    </div>
                </UiContainer>
            </section>
        </div>
    </section>
</template>

<script setup>
const currentPage = ref(10);
const totalPages = ref(20);
const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
};

const slides = ref([]);

const category = [
    { name: "科技AI", link: "/category/technology-ai" },
    { name: "時尚流行", link: "/category/fashion" },
    { name: "書籍出版", link: "/category/books" },
    { name: "設計藝術", link: "/category/design" },
    { name: "遊戲動漫", link: "/category/gaming" },
    { name: "保健食品", link: "/category/health" },
    { name: "課程教育", link: "/category/education" },
    { name: "攝影圖像", link: "/category/photography" },
    { name: "表演/門票", link: "/category/tickets" },
    { name: "服務/公益", link: "/category/welfare" },
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

const isOpenVideo = ref(false);
const videoIndex = ref(0);

function openVideo(index) {
    isOpenVideo.value = true;

    videoIndex.value = index;
}

function closeVideo() {
    isOpenVideo.value = false;
}

const videoPlayList = ref([
    { source: "/1.mp4", thumbnail: "/1.jpg", text: "影片1 x 【小灶堂】花雕祖傳秘製滷五花，新年特惠組，限時搶購" },
    { source: "/2.mp4", thumbnail: "/2.jpg", text: "影片2  x 【小灶堂】花雕祖傳秘製滷五花，新年特惠組，限時搶購" },
    { source: "/3.mp4", thumbnail: "/3.jpg", text: "影片3  x 【小灶堂】花雕祖傳秘製滷五花，新年特惠組，限時搶購" },
    { source: "/1.mp4", thumbnail: "/1.jpg", text: "影片4 x 【小灶堂】花雕祖傳秘製滷五花，新年特惠組，限時搶購" },
    { source: "/2.mp4", thumbnail: "/2.jpg", text: "影片5  x 【小灶堂】花雕祖傳秘製滷五花，新年特惠組，限時搶購" },
    { source: "/3.mp4", thumbnail: "/3.jpg", text: "影片6  x 【小灶堂】花雕祖傳秘製滷五花，新年特惠組，限時搶購" },
    { source: "/1.mp4", thumbnail: "/1.jpg", text: "影片7 x 【小灶堂】花雕祖傳秘製滷五花，新年特惠組，限時搶購" },
    { source: "/2.mp4", thumbnail: "/2.jpg", text: "影片8  x 【小灶堂】花雕祖傳秘製滷五花，新年特惠組，限時搶購" },
]);

onBeforeMount(async () => {
    const response = await fetch("/api/sliderDatas");
    const { sliderDatas } = await response.json();
    slides.value = sliderDatas;
});
</script>

<style scoped></style>
