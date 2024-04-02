<template>
    <section class="section">
        <div class="bg-white overflow-hidden">
            <!--  -->
            <div class="w-screen bg-white fixed top-[74px] z-30 header-links">
                <div class="max-md:hidden flex justify-evenly max-w-[1200px] mx-auto py-3">
                    <NuxtLink
                        v-for="(item, index) in category"
                        :key="index"
                        :to="item.link"
                        class="block whitespace-nowrap text-sm text-Neutral-900 hover:text-Primary-400-Hover active:text-Primary-600-Dark-Primary transition-colors duration-200 ease-in-out"
                        >{{ item.name }}</NuxtLink
                    >
                </div>
            </div>

            <!--  -->
            <section class="bg-[rgb(247,248,252)] py-[1px]">
                <!--  -->
                <div class="my-10 max-md:my-9 md:mt-24">
                    <HomeMainSlider :slides="slides" />
                </div>
            </section>

            <!--  -->
            <section class="bg-[#f4f4f4] py-[1px]">
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

            <section class="bg-[rgb(247,248,252)] py-[1px]">
                <UiContainer>
                    <div class="flex justify-between flex-wrap">
                        <div class="w-full order-2 md:w-[68%] mt-9 md:order-1 md:mt-0">
                            <h1 class="text-[#010204] text-xl font-medium mb-4">精選文章</h1>
                            <div class="flex flex-col gap-y-8">
                                <BlogArticle v-for="item in 5" />
                                <div class="text-center py-8 border-t border-t-Neutral-300">
                                    <button
                                        class="w-full text-Primary-400-Hover text-sm max-w-[380px] rounded-lg mx-auto py-2 shadow-[0_1px_10px_0px_rgba(0,0,0,0.02)] border border-Primary-100 bg-white"
                                    >
                                        更多文章
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="w-full order-1 md:w-[27%] md:order-2">
                            <div>
                                <h1 class="text-[#010204] text-xl font-medium mb-4">文章排行榜</h1>
                                <div class="bg-white rounded-lg py-2 divide-y-[1px] divide-Neutral-300">
                                    <BlogRank v-for="item in 5" />
                                </div>
                            </div>

                            <div class="w-full mt-9 hidden md:block">
                                <h1 class="text-[#010204] text-xl font-medium mb-4">猜你想看…</h1>
                                <div class="flex flex-wrap gap-4">
                                    <BlogTag v-for="item in 10" />
                                </div>
                            </div>
                        </div>

                        <div class="w-full order-3 mt-9 md:hidden">
                            <h1 class="text-[#010204] text-xl font-medium mb-4">猜你想看…</h1>
                            <div class="flex flex-wrap gap-4">
                                <BlogTag v-for="item in 10" />
                            </div>
                        </div>
                    </div>
                </UiContainer>
            </section>
        </div>
    </section>
</template>

<script setup>
//
const currentPage = ref(10);
const totalPages = ref(20);
const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
};

//
const screenWidth = ref(800);
onMounted(() => {
    screenWidth.value = window.innerWidth;
});

const videoPlayList = ref([]);
const kolList = ref([]);
const fundingRaiseList = ref([]);
const groupBuyingList = ref([]);
const slides = ref([]);
const category = [
    { name: "全部文章", link: "/blog" },
    { name: "科技AI", link: "/category/technology-ai?type=fundraise" },
    { name: "時尚流行", link: "/category/fashion?type=fundraise" },
    { name: "3C家電", link: "/category/appliance?type=fundraise" },
    { name: "書籍出版", link: "/category/books?type=fundraise" },
    { name: "設計藝術", link: "/category/design?type=fundraise" },
    { name: "遊戲動漫", link: "/category/gaming?type=fundraise" },
    { name: "保健食品", link: "/category/health?type=fundraise" },
    { name: "課程教育", link: "/category/education?type=fundraise" },
    { name: "攝影圖像", link: "/category/photography?type=fundraise" },
    { name: "表演/門票", link: "/category/tickets?type=fundraise" },
    { name: "服務/公益", link: "/category/welfare?type=fundraise" },
];
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

getSliderDatas();
getKol();
getFundingRaiseList();
getGroupBuyingList();
getVideoList();

async function getSliderDatas() {
    const data = await GET(`/api/sliderDatas`);
    if (!!data) {
        slides.value = data.sliderDatas;
    }
}

function openVideo(index) {
    isOpenVideo.value = true;
    videoIndex.value = index;
}

function closeVideo() {
    isOpenVideo.value = false;
}

let oldScrollY = 0;
function scrollDirection() {
    document.querySelector(".header-links").style.transition = "top 0.5s";
    if (oldScrollY < window.scrollY) {
        document.querySelector(".header-links").style.top = "0px";
    } else {
        document.querySelector(".header-links").style.top = "74px";
    }
    oldScrollY = window.scrollY;
}

async function getKol() {
    const data = await GET("/api/kol");

    if (!!data) {
        kolList.value = data.sort((a, b) => a.index - b.index).slice(0, 6);
    }
}

async function getFundingRaiseList() {
    const data = await GET("/api/fundingRaise");

    if (!!data) {
        fundingRaiseList.value = data;
    }
}

async function getGroupBuyingList() {
    const data = await GET("/api/groupBuying");

    if (!!data) {
        groupBuyingList.value = data;
    }
}

async function getVideoList() {
    const data = await GET("/api/video");

    if (!!data) {
        videoPlayList.value = data;
    }
}

onMounted(() => {
    window.addEventListener("scroll", scrollDirection);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", scrollDirection);
});
</script>

<style scoped></style>
