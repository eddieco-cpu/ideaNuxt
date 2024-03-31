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
                        class="block whitespace-nowrap text-sm text-Neutral-900 hover:text-Primary-400-Hover active:text-Primary-600-Dark-Primary mx-6 transition-colors duration-200 ease-in-out"
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
                            :to="categoryIndex"
                            class="inline-flex justify-center items-center px-4 py-1 text-sm font-light group text-Primary-500-Primary relative z-[2] max-md:translate-x-4"
                        >
                            <b class="block translate-y-[-1px] mr-1 font-light">找更多點子</b>
                            <UIcon name="i-heroicons-arrow-right-circle" class="block w-4 h-4" />
                        </NuxtLink>
                    </div>

                    <!--  -->
                    <UCarousel
                        v-slot="{ item }"
                        :items="category"
                        :ui="{ item: 'snap-start' }"
                        class="max-w-[1200px] mx-auto mb-4 max-md:w-[calc(100%+48px)] max-md:ml-[-24px] max-md:pl-4"
                    >
                        <NuxtLink
                            to="/"
                            :class="
                                item.id == newIdeasTypes.typeActive
                                    ? 'bg-Primary-100 text-Primary-600-Dark-Primary'
                                    : 'bg-Primary-50 text-Primary-400-Hover'
                            "
                            class="block rounded-lg whitespace-nowrap text-sm leading-6 px-4 py-1 mr-4 hover:text-Primary-400-Hover active:text-Primary-600-Dark-Primary transition-colors duration-200 ease-in-out"
                            @click="refresFundingRaiseList(item.id)"
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
                        :items="fundingRaiseListByHot"
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
                        <CardFundraise v-for="(item, i) in fundingRaiseListByLast" v-bind="item" class="mb-4" />
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
                            v-for="(item, index) in formattedGroupBuyingList"
                            :key="index"
                            v-bind="item"
                            :isMainPictureShowLeft="
                                screenWidth > 768 ? true : index === 0 || index === 1 ? true : false
                            "
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
                        <CardGroupBuying
                            v-for="(item, index) in formattedGroupBuyingListSoon"
                            :key="index"
                            v-bind="item"
                            :isMainPictureShowLeft="screenWidth <= 768"
                        />
                    </div>
                </UiContainer>
            </section>
        </div>
    </section>
</template>

<script setup>
//
const currentPage = ref(1);
const totalPages = ref(1);
const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
    getFundingRaiseListByLast()
};

//
const screenWidth = ref(800);
onMounted(() => {
    screenWidth.value = window.innerWidth;
});

const videoPlayList = ref([]);
const kolList = ref([]);
const fundingRaiseList = ref([]);
const fundingRaiseListByHot = ref([]);
const fundingRaiseListByLast = ref([]);
const groupBuyingList = ref([]);
const groupBuyingListSoon = ref([]);
const slides = ref([]);
const category = ref([]);

const newIdeasTypes = reactive({
    typeActive: "1",
});

const isOpenVideo = ref(false);
const videoIndex = ref(0);
const categoryIndex = ref('');

getSliderDatas();
getCategory()
getKol();
getFundingRaiseList();
getFundingRaiseListByHot();
getFundingRaiseListByLast();
getGroupBuyingList();
getGroupBuyingListSoon();
getVideoList();

async function getSliderDatas() {
    
    const data = await GET(`/frontend/getBannerData`,1);
    if (!!data) {
        slides.value = data.data;
    }
}

async function getCategory() {
    const queryParam = "?type=fundraise";
    const data = await GET(`/frontend/getFrontendCategory${queryParam}`,1);
    if (!!data) {
        category.value = data.Categorydata;
        categoryIndex.value = data.Categorydata[0].link;
        newIdeasTypes.typeActive = data.Categorydata[0].id;
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
    const data = await GET("/frontend/getGroupListForHome",1);
    if (!!data) {
        kolList.value = data.data;
    }
}

async function getFundingRaiseList() {
    const queryParam = `?category_id=${newIdeasTypes.typeActive}&limit=4`;
    const data = await GET(`/frontend/getFrontendProject/${queryParam}`,1);

    if (!!data) {
        fundingRaiseList.value = data.data;
    }
}

function refresFundingRaiseList(categoryId) {
    newIdeasTypes.typeActive = categoryId
    getFundingRaiseList();
}

async function getFundingRaiseListByHot() {

    const data = await GET(`/frontend/getFrontendProjectByHot`,1);

    if (!!data) {
        fundingRaiseListByHot.value = data.data;
    }
}

async function getFundingRaiseListByLast() {
    const queryParam = `?page=${currentPage.value}`;
    const data = await GET(`/frontend/getFrontendProjectByLast${queryParam}`,1);

    if (!!data) {
        fundingRaiseListByLast.value = data.paginateData.data;
        totalPages.value =  data.paginateData.last_page;
    }
}

async function getGroupBuyingList() {
    const data = await GET("/frontend/getGroupForHome",1);

    if (!!data) {
        groupBuyingList.value = data;
    }
}





const formattedGroupBuyingList = computed(() => {
  if (Array.isArray(groupBuyingList.value.data)) {
    return groupBuyingList.value.data.map(item => ({
      id: item.id,
      name: item.users ? item.users.name : 'Default Name',
      image: item.projects ? item.projects.image : 'Default Image',
      avatar: item.users ? item.users.image : 'Default Avatar',
      text: item.projects ? item.projects.name : 'Default Text',
      price: item.price,
      tags: item.product ? item.product.tags : []
    }));
  } else {
    return [];
  }
});

async function getGroupBuyingListSoon() {
    const data = await GET("/frontend/getGroupForHomeBySoon",1);

    if (!!data) {
        groupBuyingListSoon.value = data;
    }
}

const formattedGroupBuyingListSoon = computed(() => {
  if (Array.isArray(groupBuyingListSoon.value.data)) {
    return groupBuyingListSoon.value.data.map(item => ({
      id: item.id,
      name: item.users ? item.users.name : 'Default Name',
      image: item.projects ? item.projects.image : 'Default Image',
      avatar: item.users ? item.users.image : 'Default Avatar',
      text: item.projects ? item.projects.name : 'Default Text',
      price: item.price,
      tags: item.product ? item.product.tags : []
    }));
  } else {
    return [];
  }
});



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
