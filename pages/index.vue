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
                        style="'outline: 1px solid orange'"
                        class="block whitespace-nowrap text-sm font-medium text-Neutral-900 hover:text-Primary-400-Hover active:text-Primary-600-Dark-Primary mx-6 transition-colors duration-200 ease-in-out"
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
                        :items="fundingRaiseList"
                        :ui="{
                            item: 'snap-start basis-[304px] md:basis-[calc((100%-80px)/4)]',
                            container: 'gap-x-3 md:gap-x-5',
                        }"
                    >
                        <CardFundraise :key="item.id" v-bind="item" />
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
                        :items="fundingRaiseList"
                        :ui="{
                            item: 'snap-start basis-[304px] md:basis-[calc((100%-80px)/4)]',
                            container: 'gap-x-3 md:gap-x-5',
                        }"
                    >
                        <CardFundraise :key="item.id" v-bind="item" />
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
                        <CardFundraise v-for="(item, i) in fundingRaiseList" v-bind="item" class="mb-4" />
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

                    <div class="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-5">
                        <CardGroupBuying
                            v-for="(item, index) in groupBuyingList"
                            :key="index"
                            v-bind="item"
                            :isMainPictureShowLeft="true"
                        />
                    </div>
                </UiContainer>
            </section>

            <!-- -->
            <section class="bg-white md:h-[385px]">
                <section
                    class="mx-auto flex justify-center items-center max-md:flex-col md:transform md:-translate-y-[30px]"
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
                        class="w-[752px] h-[446px] flex justify-between flex-wrap content-between max-md:mb-12 max-md:w-full max-md:h-auto overflow-x-scroll max-md:flex-nowrap max-md:justify-start max-md:gap-x-3 max-md:items-center none-scrollbar max-md:px-4"
                    >
                        <CardKolRank v-for="(item, index) in kolList" :key="index" v-bind="item" />
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
                        <CardGroupBuying v-for="(item, index) in groupBuyingList" :key="index" v-bind="item" />
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

const videoPlayList = ref([]);
const kolList = ref([]);
const fundingRaiseList = ref([]);
const groupBuyingList = ref([]);
const slides = ref([]);
const category = [
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
