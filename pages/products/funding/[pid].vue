<template>
    <section class="funding_main max-w-[1090px] mx-auto max-xl:px-6 max-xl:py-4 max-md:px-0">
        <!--  -->
        <section class="pt-12 pb-5 max-md:px-6 max-md:pt-1 max-md:pb-3">
            <UBreadcrumb
                divider="/"
                :links="[
                    { label: 'Home', to: '/' },
                    { label: '群眾集資' },
                    { label: '3C科技', to: '/category/technology-ai?type=fundraise' },
                ]"
                :ui="{
                    active: 'text-black font-bold max-md:font-normal',
                    inactive: 'text-Neutral-600-Dark-Primary font-normal max-md:font-normal',
                    li: '!font-normal max-md:text-xs',
                }"
            />
        </section>

        <!--  -->
        <section
            class="grid grid-rows-1 grid-cols-[auto_auto] gap-6 mb-7 max-xl:grid-rows-[auto_auto] max-xl:grid-cols-1 max-md:px-6 max-md:gap-0"
        >
            <!-- slider -->
            <section
                class="w-[626px] h-[408px] aspect-[313/204] rounded-lg py-1 max-xl:w-full max-xl:aspect-auto max-xl:py-0 max-md:h-auto max-md:aspect-auto"
            >
                <ProductsSlider />
            </section>

            <!-- product details -->
            <article class="w-[436px] max-xl:w-auto">
                <div class="mb-5 max-md:translate-y-[-4px]">
                    <b class="inline-block rounded px-2 py-1 bg-Status-Color-Danger-500-Primary text-white font-light"
                        >促銷</b
                    >
                </div>
                <p class="mb-1">
                    <span class="text-sm font-normal">提案人</span>
                    <b class="text-Primary-500-Primary text-sm font-normal mx-1">華生科技股份有限公司 lnc.</b>
                </p>
                <h1 class="font-medium text-xl mb-6">
                    聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的最佳音樂夥伴
                </h1>
                <p class="text-Neutral-600-Dark-Primary text-sm font-normal mb-6">
                    聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的最佳音樂夥伴聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機。聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的音。
                </p>
                <div class="flex justify-between items-end mb-2">
                    <h2 class="text-3xl font-bold max-md:text-xl">$ 1,544,980</h2>
                    <p class="text-Neutral-600-Dark-Primary text-xs">
                        目標金額
                        <span>$ 1,000,000</span>
                    </p>
                </div>

                <!-- % -->
                <div class="flex items-center gap-3 mt-1 mb-1">
                    <UMeter
                        :value="progressMeter"
                        :ui="{ meter: { color: 'text-Primary-500-Primary', background: 'bg-Primary-50' } }"
                        color="violet"
                    />
                    <span class="text-Primary-500-Primary font-medium text-xs">{{ progressMeter }}%</span>
                </div>

                <div class="flex justify-between items-center mb-6 max-md:block">
                    <p class="text-xs text-Neutral-600-Dark-Primary">
                        募資時間 <span>2022/06/16</span> - <span>2022/07/27</span>
                    </p>
                    <div class="inline-flex justify-between items-center max-md:mt-2">
                        <p class="mr-3 ring-1 ring-Primary-200 rounded flex justify-center items-center p-1">
                            <img src="~assets/images/icon/clock-icon.svg" alt="clock" width="12" />
                            <span class="ml-1 text-Primary-600-Dark-Primary text-sm">19日</span>
                        </p>
                        <p class="ring-1 ring-Primary-200 rounded flex justify-center items-center p-1">
                            <img src="~assets/images/icon/user-icon.svg" alt="clock" width="12" />
                            <span class="ml-1 text-Primary-600-Dark-Primary text-sm">345人</span>
                        </p>
                    </div>
                </div>

                <div
                    class="flex justify-between items-center max-xl:fixed max-xl:z-10 max-xl:bottom-0 max-xl:left-0 max-xl:w-full max-xl:bg-white max-xl:px-4 max-xl:py-2 max-md:gap-x-3"
                >
                    <!--  -->
                    <button
                        @click="setIsFavorite($event, !isFavorite)"
                        class="w-12 h-12 rounded-lg ring-2 ring-Neutral-500-Primary flex justify-center items-center max-xl:w-9 max-xl:h-9 max-xl:ring-1"
                        :class="isFavorite ? 'ring-[#FF4D4F]' : 'ring-Neutral-500-Primary'"
                    >
                        <ProductsHeartActive v-if="isFavorite" class="xl:scale-[1.33]" />
                        <ProductsHeartInActive v-else class="xl:scale-[1.33]" />
                    </button>

                    <!-- @click="() => $router.push('/products/funding/1')" -->
                    <UiButton
                        class="min-w-[370px] min-h-12 max-md:min-w-40 max-md:flex-grow max-xl:min-h-9 max-xl:h-9"
                        @click="addToCart()"
                    >
                        立即贊助
                    </UiButton>
                </div>
            </article>
        </section>

        <!--  -->
        <section class="bg-white mb-4 rounded-lg sticky top-[74px] z-[2] max-md:top-[51px]">
            <div class="w-80 px-6">
                <UiHorizontalNav
                    :nav-items="navItems"
                    :activeNavItemId="activeNavItemId"
                    @updateNavItemId="updateNavItemId"
                />
            </div>
        </section>

        <!--  -->
        <section
            class="grid grid-cols-[627fr_446fr] gap-6 xl:w-[calc(100%+10px)] max-xl:grid-cols-1 grid-rows-[auto_auto]"
        >
            <!-- sticky mt-auto bottom-0 -->
            <section
                class="max-xl:relative xl:sticky xl:mt-auto bottom-0 xl:min-h-[calc(100vh-48px-75px)]"
                :class="
                    lockMaxHeightInMobile && activeNavItemId === 'a'
                        ? `max-md:max-h-[${maxHeight}px] overflow-hidden`
                        : 'max-md:max-h-[auto]'
                "
            >
                <!--  -->
                <div
                    v-if="activeNavItemId === 'a' && articleRefHeight > maxHeight"
                    class="md:hidden flex flex-col-reverse absolute bottom-0 left-0 z-[2] w-full pb-8 pt-32 px-20 bg-gradient-to-t from-white to-transparent"
                    :class="lockMaxHeightInMobile ? '' : ' hidden'"
                >
                    <UiButton class="max-md:w-full" type="secondary" @click="lockMaxHeightInMobile = false"
                        >查看完整說明</UiButton
                    >
                </div>

                <template v-if="activeNavItemId === 'a'">
                    <div ref="articleRef">
                        <article class="bg-white p-6 rounded-lg ql-editor" v-html="articleHTML"></article>
                        <article class="bg-white p-6 pt-0 rounded-lg">
                            <ProductsAccordionTypeA />
                        </article>
                    </div>
                </template>
                <template v-if="activeNavItemId === 'b'">
                    <article class="bg-white p-6 rounded-lg">
                        <ProductsAccordionTypeB />
                    </article>
                </template>
                <template v-if="activeNavItemId === 'c'">
                    <article class="bg-white p-6 rounded-lg">
                        <UiAccordion />
                    </article>
                </template>
            </section>

            <!-- sticky mt-auto bottom-0 -->
            <ul
                class="card_group xl:sticky xl:mt-auto bottom-0 xl:h-[calc(100vh-48px-75px)] xl:overflow-y-auto max-md:px-6"
            >
                <template v-for="(prod, i) in prods" :key="prod.id">
                    <ProductsFundraise :prod="prod" @click="addToCart(prod)" />
                </template>
            </ul>
        </section>
    </section>
</template>

<script setup>
import { useToast } from "vue-toastification";
import "@vueup/vue-quill/dist/vue-quill.core.css";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";

const toast = useToast();
const route = useRoute();
const projectId = route.params.pid;

const isFavorite = ref(false);

function addToCart(prod) {
    let card = prod || prods.value.filter((item) => !item.soldOut)[0];

    navigateTo(`/cart/cart-fundraise?project_id=${projectId}&project_card_id=${card.id}`);
}

function setIsFavorite(e, status) {
    e.stopPropagation();

    isFavorite.value = status;

    if (status) {
        toast.success("已加入購物車");
    } else {
        toast.error("已取消加入購物車");
    }
}

const lockMaxHeightInMobile = ref(true);
const maxHeight = ref(700);
const articleRef = ref(null);
const articleRefHeight = ref(0);

const articleHTML = ref("");

//
onMounted(() => {
    if (articleRef.value) {
        articleRefHeight.value = articleRef.value.offsetHeight;
    }
    async function getHtmlContext() {
        let data = await GET(`/api/dashboard/details/product/fakeHtml`);
        if (!!data) {
            console.log("data.data", data.data);
            data.data = cleanUpString(data.data);
            console.log("data.data", data.data);
            if (data.data) articleHTML.value = data.data;
        }
    }
    getHtmlContext();
});

//
const prods = ref([]);

async function getProdsData() {
    const data = await GET(`/api/productsFundraise`);
    if (!!data) {
        prods.value = data.prods.map((el, i) => ({
            ...el,
        }));
    }
}
getProdsData();

const progressMeter = 300;

const navItems = [
    {
        id: "a",
        html: `專案內容`,
    },
    {
        id: "b",
        html: "進度更新",
    },
    {
        id: "c",
        html: "常見問題",
    },
];
const activeNavItemId = ref("a");
const updateNavItemId = (id) => {
    activeNavItemId.value = id;
};

//
function goToCart() {
    setTimeout(() => {
        navigateTo(`/cart`);
    }, 100);
}

function cleanUpString(str) {
    // 移除換行符或回車符
    str = str.replace(/[\r\n]+/gm, "");
    // 壓縮標籤之間的多個空白為一個空白，並移除標籤周圍的空白
    str = str.replace(/>\s+</gm, "><").replace(/\s{2,}/g, " ");
    return str;
}
</script>

<style lang="scss">
@import "@/styles/quillContext.scss";

/*
.funding_main {
    .card_group::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    .card_group::-webkit-scrollbar-thumb {
        background-color: #ccc;
    }
    .card_group::-webkit-scrollbar-track {
        background-color: transparent;
    }
}
*/
</style>
