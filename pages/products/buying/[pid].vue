<template>
    <div >
        <picture class="block h-36 w-auto relative z-[-1] banner_photo">
            <img :src="banner" alt="" class="block w-full h-full object-cover" />
        </picture>
        <section class="max-w-[1090px] mx-auto max-xl:px-6 max-xl:py-4 max-md:px-0">
            <!--  -->
            <section class="pt-8 pb-8 mt-[-140px] max-md:px-6 max-md:pt-1 max-md:pb-3">
                <UBreadcrumb
                    divider="/"
                    :links="[
                        { label: 'Home', to: '/' },
                        { label: '團主推薦' },
                        { label: '3C科技', to: '/category/technology-ai?type=groupbuying' },
                    ]"
                    :ui="{
                        active: 'text-white font-normal',
                        inactive: 'text-white font-normal',
                        divider: {
                            base: 'text-white bg-white',
                        },
                        ol: 'text-white',
                        li: 'text-white !font-normal max-md:text-xs',
                    }"
                />
            </section>

            <!--  -->
            <div
                class="hidden max-xl:flex justify-between items-center max-xl:fixed max-xl:z-10 max-xl:bottom-0 max-xl:left-0 max-xl:w-full max-xl:bg-white max-xl:px-4 max-xl:py-2 max-md:gap-x-3"
            >
                <!--  -->
                <button
                    class="w-12 h-12 rounded-lg ring-1 ring-Neutral-500-Primary flex justify-center items-center max-xl:w-9 max-xl:h-9"
                    :class="isFavorite ? 'ring-[#FF4D4F]' : 'ring-Neutral-500-Primary'"
                    @click="setIsFavorite($event, !isFavorite)"
                >
                    <ProductsHeartActive v-if="isFavorite" />
                    <ProductsHeartInActive v-else />
                </button>

                <!-- @click="() => $router.push('/products/funding/1')" -->
                <UiButton class="min-w-[370px] min-h-12 max-md:min-w-40 max-md:flex-grow max-md:min-h-9 max-md:h-9">
                    立即購買 {{ " " }}({{ recommendationSelects.reduce((c, t) => c + t.amount, 0) }})
                </UiButton>
            </div>

            <!--  -->
            <section class="max-md:px-6 mb-10 max-md:mb-5" >
                <section class="p-4 bg-white rounded-lg overflow-hidden">
                    <div class="flex flex-row items-center gap-x-2">
                        <div
                            class="bg-[#4AACFD] rounded py-1 px-2 text-white flex justify-start items-center gap-x-1 max-md:text-sm"
                        >
                            <UIcon name="i-heroicons-clock" class="w-4 h-4 mr-1" />

                            <!-- <span>03</span>
                            日<span>04</span>時<span>34</span>分<span>22</span>秒 -->
                            <p>{{ countdownTime }}</p>
                        </div>
                        <div class="items-baseline">
                            <b
                                class="inline-block rounded px-2 py-1 bg-Status-Color-Danger-500-Primary text-white font-light whitespace-nowrap max-md:text-sm"
                                >促銷</b
                            >
                        </div>
                        <div class="items-baseline">
                            <b
                                class="inline-block rounded px-2 py-1 bg-Primary-500-Primary text-white font-light whitespace-nowrap max-md:text-sm"
                                >獨家</b
                            >
                        </div>
                    </div>
                    <h2 class="font-medium text-xl py-3">{{ pageData.projects?.name }}</h2>
                    <h3 class="font-noto text-xs text-Neutral-600-Dark-Primary">
                        {{ pageData.projects?.description }}
                    </h3>
                </section>
            </section>

            <!--  -->
            <section
                class="grid grid-rows-1 grid-cols-[auto_auto] gap-6 mb-7 max-xl:grid-rows-[auto_auto] max-xl:grid-cols-1 max-md:px-6 max-md:gap-0"
            >
                <!-- slider -->
                <section
                    class="w-[626px] h-[408px] aspect-[313/204] rounded-lg py-1 max-xl:w-full max-xl:aspect-auto max-xl:py-0 max-md:h-auto max-md:aspect-auto"
                >
                    <ProductsSlider :slides="[pageData.projects?.image]"/>
                </section>

                <!-- art -->
                <article class="w-[436px] flex flex-col justify-center items-center max-xl:w-auto">
                    <!-- avater -->
                    <nuxt-link to="/kol/1"
                        class="flex justify-between items-center gap-x-2 bg-white mb-2 p-3 rounded-lg w-full max-md:mb-5 max-md:translate-y-[-4px]"
                    >
                        <div class="flex justify-start items-center gap-x-3">
                            <picture class="block w-[110px] aspect-[1/1] overflow-hidden rounded-lg flex-shrink-0">
                                <img :src="pageData.users?.image" class="block w-full h-full object-cover" />
                            </picture>
                            <div>
                                <p class="text-xs text-gray-400 mb-1">本次開團主</p>
                                <h1 class="text-base font-medium">{{ pageData.users?.name }}</h1>
                            </div>
                        </div>

                        <UIcon
                            name="i-heroicons-arrow-right-circle"
                            class="block w-8 h-8 text-Secondary-500-Primary flex-shrink-0"
                        />
                    </nuxt-link>

                    <!-- detail -->
                    <ul class="bg-white py-3 px-5 flex-grow w-full">
                        <li class="mb-2">
                            <p class="flex justify-start items-center text-Primary-500-Primary text-sm gap-x-1 mb-1">
                                <UIcon name="i-heroicons-clock" />
                                <span>開團時間</span>
                            </p>
                            <p class="text-xs leading-relaxed">{{pageData.start_time}} - {{pageData.end_time}}</p>
                        </li>
                        <li class="mb-2">
                            <p class="flex justify-start items-center text-Primary-500-Primary text-sm gap-x-1 mb-1">
                                <UIcon name="i-heroicons-shopping-bag" />
                                <span>出貨時間</span>
                            </p>
                            <p v-html="pageData.ship_remark" class="text-xs leading-relaxed"></p>
                        </li>

                        <!-- <li class="mb-2">
                            <p class="flex justify-start items-center text-Primary-500-Primary text-sm gap-x-1 mb-1">
                                <UIcon name="i-heroicons-truck" />
                                <span>宅配運費</span>
                            </p>
                            <p class="text-xs leading-relaxed">$100 元 (滿 $1,000 元免運)，限台灣本島配送</p>
                        </li> -->

                        <!-- <li class="mb-2">
                            <p class="flex justify-start items-center text-Primary-500-Primary text-sm gap-x-1 mb-1">
                                <UIcon name="i-heroicons-gift" />
                                <span>滿額增品</span>
                            </p>
                            <ol class="list-decimal pl-5 text-xs">
                                <li class="leading-relaxed">滿1600 送鮑魚干貝乾拌麵</li>
                                <li class="leading-relaxed">滿2600 送和牛肉燥乾拌麵或味噌乾拌麵</li>
                                <li class="leading-relaxed">滿3000元送麻辣鴨血寬粉</li>
                            </ol>
                        </li> -->
                    </ul>
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
                <!-- gird item -->
                <section
                    class="max-xl:relative xl:sticky xl:mt-auto bottom-0 xl:min-h-[calc(100vh-48px-75px)]"
                    :class="
                        lockMaxHeightInMobile && activeNavItemId === 'a'
                            ? `max-md:max-h-[700px] max-md:overflow-hidden`
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
                        <div v-html="pageData.projects?.content"></div>
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

                <!-- gird item -->
                <section
                    class="card_group xl:sticky xl:mt-auto bottom-0 xl:h-[calc(100vh-48px-75px)] xl:overflow-y-auto max-md:px-6"
                >
                    <UiTitle class="!mb-5">本團推薦商品</UiTitle>
                    <ul class="grid grid-cols-2 gap-x-[14px] gap-y-[28px] xl:mr-[5px]">
                        <ProductsSelectCard
                            v-for="(select, i) in recommendationSelects"
                            :key="select.id"
                            :id="select.id"
                            :select="select"
                            :groupId = "groupId"
                        />
                    </ul>

                    <!--  -->
                    <!-- <UiTitle class="!mb-5 mt-8">本團推薦商品</UiTitle>

                    <section class="grid grid-cols-1 gap-y-4 xl:mr-[5px] xl:mb-4">
                        <ProductsRecommendCard />
                        <ProductsRecommendCard />
                        <ProductsRecommendCard />
                        <ProductsRecommendCard />
                    </section> -->
                </section>
            </section>
        </section>
    </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();
const route = useRoute();

const isFavorite = ref(false);
const pageData   = ref([])
const groupId = route.params.pid;

const recommendationSelects = reactive([]);

getDatas()

async function getDatas() {
    const queryParam = `?type=group&id=${route.params.pid}`;
    const data = await GET(`/frontend/getGroup${queryParam}`,1);
    if (!!data) {
        pageData.value = data.data;
        
        recommendationSelects.splice(0, recommendationSelects.length, ...data.data.product_specs);

        targetTime.value = new Date(`${pageData.value.end_time}`).getTime();
        startCountdown(targetTime.value)
        
    }
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
const maxHeight = 700;
const articleRef = ref(null);
const articleRefHeight = ref(0);

const banner = helperPicture();
const avater = helperPicture();
const photos = [
    helperPicture(),
    helperPicture(),
    helperPicture(),
    helperPicture(),
    helperPicture(),
];

//
const targetTime = ref(new Date('2024-06-20T12:00:00').getTime());

const countdownTime = ref("");

function formatCountdown(milliseconds) {
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    const days = Math.floor(milliseconds / oneDay);
    const hours = Math.floor((milliseconds % oneDay) / oneHour);
    const minutes = Math.floor((milliseconds % oneHour) / oneMinute);
    const seconds = Math.floor((milliseconds % oneMinute) / oneSecond);

     // 
     const pad = (num) => (String(num).padStart(2, '0'));

    return `${pad(days)} 日 ${pad(hours)} 時 ${pad(minutes)} 分 ${pad(seconds)} 秒`;
}

function startCountdown(targetDate) {
    //
    const updateCountdown = () => {
        const currentTime = new Date().getTime();
        const distance = targetDate - currentTime;

        countdownTime.value = formatCountdown(distance);

        if (distance < 0) {
            clearInterval(interval);
            countdownTime.value= '時間到！';
        }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

onMounted(() => {
    if (articleRef.value) {
        //console.log("articleRef 高度:", articleRef.value.offsetHeight);
        articleRefHeight.value = articleRef.value.offsetHeight;
    }
   
});

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

</script>

<style scoped>
.banner_photo::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
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
</style>
