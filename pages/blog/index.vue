<template>
    <section class="section">
        <div class="bg-white">
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
                    <BlogSlider :slides="slides" />
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
                    <div class="flex justify-between items-end flex-wrap">
                        <div class="w-full order-2 md:w-[68%] mt-9 md:order-1 md:mt-0">
                            <h1 class="text-[#010204] text-xl font-medium mb-4">精選文章</h1>
                            <div class="flex flex-col gap-y-8">
                                <BlogArticle v-for="item in blogList" v-bind="item" />
                                <div class="text-center pt-8 border-t border-t-Neutral-300">
                                    <NuxtLink
                                        to="/blog/list/technology-ai"
                                        class="w-full text-Primary-400-Hover text-sm max-w-[380px] rounded-lg mx-auto py-2 shadow-[0_1px_10px_0px_rgba(0,0,0,0.02)] border border-Primary-100 bg-white block"
                                    >
                                        更多文章</NuxtLink
                                    >
                                </div>
                            </div>
                        </div>

                        <div
                            class="w-full order-1 md:w-[27%] md:overflow-auto md:sticky bottom-[0px] md:h-[calc(100vh-76px-60px)] md:order-2"
                        >
                            <div>
                                <h1 class="text-[#010204] text-xl font-medium mb-4">文章排行榜</h1>
                                <div class="bg-white rounded-lg py-2 divide-y-[1px] divide-Neutral-300">
                                    <BlogRank v-for="item in blogRank" v-bind="item" />
                                </div>
                            </div>

                            <div class="w-full mt-9 hidden md:block">
                                <h1 class="text-[#010204] text-xl font-medium mb-4">猜你想看…</h1>
                                <div class="flex flex-wrap gap-4">
                                    <BlogTag v-for="tag in blogTagsList" :text="tag" />
                                </div>
                            </div>
                        </div>

                        <div class="w-full order-3 mt-9 md:hidden">
                            <h1 class="text-[#010204] text-xl font-medium mb-4">猜你想看…</h1>
                            <div class="flex flex-wrap gap-4">
                                <BlogTag v-for="tag in blogTagsList" :text="tag" />
                            </div>
                        </div>
                    </div>
                </UiContainer>
            </section>
        </div>
    </section>
</template>

<script setup>
const videoPlayList = ref([]);
const blogList = ref([]);
const blogTagsList = ref([]);
const slides = ref([]);

const category = [
    { name: "全部文章", link: "/blog" },
    { name: "科技AI", link: "/blog/list/technology-ai" },
    { name: "時尚流行", link: "/blog/list/fashion" },
    { name: "3C家電", link: "/blog/list/appliance" },
    { name: "書籍出版", link: "/blog/list/books" },
    { name: "設計藝術", link: "/blog/list/design" },
    { name: "遊戲動漫", link: "/blog/list/gaming" },
    { name: "保健食品", link: "/blog/list/health" },
    { name: "課程教育", link: "/blog/list/education" },
    { name: "攝影圖像", link: "/blog/list/photography" },
    { name: "表演/門票", link: "/blog/list/tickets" },
    { name: "服務/公益", link: "/blog/list/welfare" },
];

const isOpenVideo = ref(false);
const videoIndex = ref(0);

getSliderDatas();
getVideoList();
getBlogList();
getBlogTagList();

async function getSliderDatas() {
    const data = await GET(`/api/blogSliderDatas`);
    if (!!data) {
        slides.value = data.sliderDatas;
    }

    console.log("data", data);
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

async function getVideoList() {
    const data = await GET("/api/video");

    if (!!data) {
        videoPlayList.value = data;
    }
}

async function getBlogList() {
    const data = await GET("/api/blog");

    if (!!data) {
        blogList.value = data;
    }
}

async function getBlogTagList() {
    const data = await GET("/api/blogTags");

    if (!!data) {
        blogTagsList.value = data;
    }
}

const blogRank = computed(() => {
    return blogList.value.sort((a, b) => a.index - b.index).slice(0, 5);
});

onMounted(() => {
    window.addEventListener("scroll", scrollDirection);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", scrollDirection);
});
</script>

<style scoped></style>
