<template>
    <picture class="block h-36 w-auto relative z-[-1] banner_photo">
        <img :src="helperPicture()" alt="" class="block w-full h-full object-cover" />
    </picture>
    <section class="max-w-[1090px] mx-auto max-xl:px-6 max-xl:py-4 ring-1 max-xl:ring-orange-400 max-md:px-0">
        <!--  -->
        <section class="pt-8 pb-8 mt-[-140px] max-md:px-6">
            <UBreadcrumb
                divider="/"
                :links="[{ label: 'Home', to: '/' }, { label: 'Navigation' }, { label: 'Breadcrumb' }]"
                :ui="{
                    active: 'text-white',
                    inactive: 'text-white',
                    divider: {
                        base: 'text-white bg-white',
                    },
                    ol: 'text-white',
                    li: 'text-white',
                }"
            />
        </section>

        <!--  -->
        <div
            class="hidden max-xl:flex justify-between items-center max-xl:fixed max-xl:bottom-0 max-xl:left-0 max-xl:w-full max-xl:bg-white max-xl:px-4 max-xl:py-2 max-md:gap-x-3"
        >
            <!--  -->
            <button class="w-12 h-12 rounded-lg ring-2 ring-Neutral-500-Primary flex justify-center items-center">
                <UIcon name="i-heroicons-heart" class="text-Neutral-500-Primary text-4xl" />
            </button>

            <!-- @click="() => $router.push('/products/funding/1')" -->
            <UiButton class="min-w-[370px] min-h-12 max-md:min-w-40 max-md:flex-grow">
                立即購買 {{ " " }}({{ recommendationSelects.reduce((c, t) => c + t.amount, 0) }})
            </UiButton>
        </div>

        <!--  -->
        <section class="max-md:px-6 mb-10 max-md:mb-5">
            <section class="p-4 bg-white rounded-lg overflow-hidden">
                <div class="flex flex-row items-center gap-x-2">
                    <p class="bg-Secondary-500-Primary rounded py-1 px-2 text-white flex justify-start items-center">
                        <UIcon name="i-heroicons-clock" class="w-4 h-4" />
                        {{ " " }}03日04時34分22秒
                    </p>
                    <div class="items-baseline">
                        <b
                            class="inline-block rounded px-2 py-1 bg-Status-Color-Danger-500-Primary text-white font-light"
                            >促銷</b
                        >
                    </div>
                    <div class="items-baseline">
                        <b class="inline-block rounded px-2 py-1 bg-Primary-500-Primary text-white font-light">獨家</b>
                    </div>
                </div>
                <h2 class="font-black text-xl py-3">金秘書 x 藍海饌 美味就像現煮❤️常溫料理包直接買</h2>
                <h3 class="font-noto text-xs text-Neutral-600-Dark-Primary">
                    聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的最佳音樂夥伴聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機。聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的音。
                </h3>
            </section>
        </section>

        <!--  -->
        <section
            class="grid grid-rows-1 grid-cols-[auto_auto] gap-6 mb-7 max-xl:grid-rows-[auto_auto] max-xl:grid-cols-1 max-md:px-6"
        >
            <!-- slider -->
            <section
                class="w-[626px] h-[408px] aspect-[313/204] rounded-lg py-1 max-xl:w-full max-xl:aspect-auto max-xl:py-0 max-md:h-auto max-md:aspect-auto"
            >
                <ProductsSlider />
            </section>

            <!-- art -->
            <article class="w-[436px] ring-1 flex flex-col justify-center items-center max-xl:w-auto">
                <!-- avater -->
                <div class="flex justify-between items-center gap-x-2 bg-white mb-2 p-3 rounded-lg w-full">
                    <div class="flex justify-start items-center gap-x-3">
                        <picture class="block w-[110px] aspect-[1/1] overflow-hidden rounded-lg flex-shrink-0">
                            <img :src="helperPicture()" classs="block w-full h-full object-cover" />
                        </picture>
                        <div>
                            <p class="text-xs text-gray-400 mb-1">本次開團主</p>
                            <h1 class="text-base font-medium">媽媽我想嫁去台南媽媽我想嫁去台南</h1>
                        </div>
                    </div>

                    <UIcon
                        name="i-heroicons-arrow-right-circle"
                        class="block w-8 h-8 text-Secondary-500-Primary flex-shrink-0"
                    />
                </div>

                <!-- detail -->
                <ul class="bg-white py-3 px-5 flex-grow w-full">
                    <li class="mb-2">
                        <p class="flex justify-start items-center text-Primary-500-Primary text-sm gap-x-1 mb-1">
                            <UIcon name="i-heroicons-clock" />
                            <span>開團時間</span>
                        </p>
                        <p class="text-xs leading-relaxed">2023/12/29 00:00 - 2024/01/20 23:59</p>
                    </li>
                    <li class="mb-2">
                        <p class="flex justify-start items-center text-Primary-500-Primary text-sm gap-x-1 mb-1">
                            <UIcon name="i-heroicons-shopping-bag" />
                            <span>出貨時間</span>
                        </p>
                        <p class="text-xs leading-relaxed">現貨 3-5個工作天，預購 1/29日 開始依訂單順序出貨</p>
                    </li>

                    <li class="mb-2">
                        <p class="flex justify-start items-center text-Primary-500-Primary text-sm gap-x-1 mb-1">
                            <UIcon name="i-heroicons-truck" />
                            <span>宅配運費</span>
                        </p>
                        <p class="text-xs leading-relaxed">$100 元 (滿 $1,000 元免運)，限台灣本島配送</p>
                    </li>

                    <li class="mb-2">
                        <p class="flex justify-start items-center text-Primary-500-Primary text-sm gap-x-1 mb-1">
                            <UIcon name="i-heroicons-gift" />
                            <span>滿額增品</span>
                        </p>
                        <ol class="list-decimal pl-5 text-xs">
                            <li class="leading-relaxed">滿1600 送鮑魚干貝乾拌麵</li>
                            <li class="leading-relaxed">滿2600 送和牛肉燥乾拌麵或味噌乾拌麵</li>
                            <li class="leading-relaxed">滿3000元送麻辣鴨血寬粉</li>
                        </ol>
                    </li>
                </ul>
            </article>
        </section>

        <!--  -->
        <section class="bg-white mb-4 rounded-lg sticky top-[76px] max-md:top-[51px]">
            <div class="w-80 px-6">
                <UiHorizontalNav
                    :nav-items="navItems"
                    :activeNavItemId="activeNavItemId"
                    @updateNavItemId="updateNavItemId"
                />
            </div>
        </section>

        <!--  -->
        <section class="grid grid-rows-1 grid-cols-[627fr_436fr] gap-6 max-xl:grid-cols-1 max-xl:grid-rows-[auto_auto]">
            <!--  -->
            <section>
                <template v-if="activeNavItemId === 'a'">
                    <article class="bg-white p-6 rounded-lg">
                        <h1 class="text-[28px] leading-snug font-medium mb-4">
                            {{ useState("a", () => helperLorem(20, 40)).value }}
                        </h1>
                        <h2 class="text-2xl font-medium mb-4">
                            {{ useState("b", () => helperLorem(20, 40)).value }}
                        </h2>
                        <h3 class="text-xl font-medium mb-4">
                            {{ useState("c", () => helperLorem(20, 40)).value }}
                        </h3>
                        <h4 class="text-base font-medium mb-4">
                            {{ useState("d", () => helperLorem(20, 40)).value }}
                        </h4>
                        <h5 class="text-xs font-normal mb-4 text-[#696969]">
                            {{ useState("e", () => helperLorem(20, 40)).value }}
                        </h5>
                        <picture class="block w-full mb-4">
                            <img :src="helperPicture()" alt="" class="block w-full" />
                        </picture>

                        <picture class="block w-full mb-4">
                            <img :src="helperPicture()" alt="" class="block w-full" />
                        </picture>

                        <picture class="block w-full mb-4">
                            <img :src="helperPicture()" alt="" class="block w-full" />
                        </picture>
                    </article>
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

            <!--  -->
            <section class="max-md:mx-6">
                <UiTitle class="!mb-5">本團推薦商品</UiTitle>
                <ul class="ring-1 grid grid-cols-2 gap-x-[14px] gap-y-[28px]">
                    <ProductsSelectCard
                        v-for="(select, i) in recommendationSelects"
                        :key="select.id"
                        :select="select"
                    />
                </ul>

                <!--  -->
                <UiTitle class="!mb-5 mt-8">本團推薦商品</UiTitle>

                <section class="grid grid-cols-1 gap-y-4">
                    <ProductsRecommendCard />
                    <ProductsRecommendCard />
                    <ProductsRecommendCard />
                    <ProductsRecommendCard />
                </section>
            </section>
        </section>
    </section>
</template>

<script setup>
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
const recommendationSelects = reactive([
    {
        id: "a",
        amount: 0,
        name: "",
    },
    {
        id: "b",
        amount: 0,
        name: "",
    },
    {
        id: "c",
        amount: 0,
        name: "",
    },
    {
        id: "d",
        amount: 0,
        name: "",
    },
    {
        id: "e",
        amount: 0,
        name: "",
    },
    {
        id: "f",
        amount: 0,
        name: "",
    },
]);
</script>

<style setup>
.banner_photo {
    filter: contrast(50%);
}
</style>
