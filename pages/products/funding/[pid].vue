<template>
    <section class="max-w-[1090px] mx-auto max-xl:px-6 max-xl:py-4 ring-1 max-xl:ring-orange-400 max-md:px-0">
        <!--  -->
        <section class="pt-12 pb-5">
            <UBreadcrumb
                divider="/"
                :links="[{ label: 'Home', to: '/' }, { label: 'Navigation' }, { label: 'Breadcrumb' }]"
                :ui="{
                    active: 'text-black font-bold',
                    inactive: 'text-Neutral-600-Dark-Primary font-normal',
                }"
            />
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

            <!-- product details -->
            <article class="w-[436px] ring-1 max-xl:w-auto">
                <div class="mb-6">
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
                    <h2 class="text-3xl font-bold">$ 1,544,980</h2>
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
                    class="flex justify-between items-center max-xl:fixed max-xl:bottom-0 max-xl:left-0 max-xl:w-full max-xl:bg-white max-xl:px-4 max-xl:py-2 max-md:gap-x-3"
                >
                    <!--  -->
                    <button
                        class="w-12 h-12 rounded-lg ring-2 ring-Neutral-500-Primary flex justify-center items-center"
                    >
                        <UIcon name="i-heroicons-heart" class="text-Neutral-500-Primary text-4xl" />
                    </button>

                    <!-- @click="() => $router.push('/products/funding/1')" -->
                    <UiButton class="min-w-[370px] min-h-12 max-md:min-w-40 max-md:flex-grow"> 立即贊助 </UiButton>
                </div>
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
                        <ProductsAccordionTypeA />
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
            <ul>
                <li
                    v-for="(faq, i) in ['a', 'b', 'c']"
                    :key="i"
                    class="bg-white p-6 rounded-lg ring-2 ring-Primary-100 mb-5"
                >
                    <picture class="block w-full mb-4">
                        <img :src="helperPicture()" alt="" class="block w-full" />
                    </picture>
                    <div class="flex justify-start items-center mb-3">
                        <p class="inline-block px-[6px] py-1 rounded text-xs text-white bg-Primary-400-Hover mr-2">
                            已支持36人
                        </p>
                        <p class="inline-block px-[6px] py-1 rounded text-xs text-white bg-Primary-400-Hover">
                            剩餘50組
                        </p>
                    </div>
                    <h3 class="text-base font-medium mb-1">VIP超早鳥限定｜全套桌曆＋年曆</h3>
                    <p class="text-Status-Color-Danger-500-Primary text-xl font-medium mb-2">
                        NT$10,000
                        <span class="text-xs font-normal opacity-80 line-through">定價 $15,000</span>
                        <span class="text-xs font-normal opacity-80">，限省 $5,000</span>
                    </p>
                    <div class="h-[1px] bg-gray-300 mb-2"></div>
                    <div class="mb-4">
                        <p class="text-xs font-medium text-gray-700 leading-5">商品內容：</p>
                        <ul class="text-xs font-medium text-gray-700 leading-5 list-disc pl-8">
                            <li>Tripology 22 吋行李箱 x1</li>
                            <li>專用防塵保護套 x1</li>
                        </ul>
                    </div>
                    <div class="mb-2">
                        <p class="text-xs font-medium text-gray-700 leading-5">商品規格：</p>
                        <ul class="text-xs font-medium text-gray-700 leading-5 list-disc pl-8">
                            <li>淨重 4.5 kg</li>
                            <li>尺寸 39 x 25 x 59cm</li>
                        </ul>
                    </div>
                    <div class="h-[1px] bg-gray-300 mb-2"></div>
                    <p></p>
                </li>
            </ul>
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
</script>
