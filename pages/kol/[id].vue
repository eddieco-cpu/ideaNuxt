<template>
    <div>
        <div
            class="h-[240px] md:h-[110px] bg-no-repeat bg-cover bg-[url('/_nuxt/assets/images/kol/banner.png')] md:bg-[url('/_nuxt/assets/images/kol/banner-web.png')]"
        ></div>

        <div class="max-w-80 md:max-w-[1086px] -mt-[80px] mx-auto md:grid md:grid-cols-12 md:gap-x-6 md:mt-10">
            <!-- 團主檔案 -->
            <div
                class="relative h-max max-w-[323px] flex flex-col items-center gap-y-4 pt-14 px-5 pb-6 bg-white rounded-2xl mx-auto md:col-span-4 md:mt-[150px]"
            >
                <img
                    src="https://avatars.githubusercontent.com/u/739984?v=4"
                    alt="avatar"
                    class="absolute -top-[100px] left-2/4 transform -translate-x-1/2 w-[152px] h-[152px] rounded-[48px]"
                />

                <h1 class="text-Primary-500-Primary text-xl font-medium text-center">媽媽我想嫁去台南</h1>

                <p class="text-sm text-Neutral-800">
                    我是一位熱愛生活的一兒寶媽，我最喜歡的兩大興趣就是精心收納每個空間，而最讓我感到滿足的，莫過於透過以最優惠的價格，將我發現的好物介紹給朋友們。期待與大家共同探索更多美好生活的可能性！💖讓我們一同創造更精彩的生活吧！💐
                </p>

                <div
                    class="rounded-lg flex items-center justify-between w-[276px] p-3 px-4 bg-Primary-50 border border-Primary-200 bg-Primary-100"
                >
                    <div class="flex flex-col items-center justify-center pr-4">
                        <h3 class="text-Neutral-900 text-sm">好物開團</h3>
                        <p class="text-Primary-500-Primary font-medium">6</p>
                    </div>

                    <div
                        class="flex flex-col items-center justify-center border border-y-0 border-l-Primary-100 border-r-Primary-100 px-4"
                    >
                        <h3 class="text-Neutral-900 text-sm">文章分享</h3>
                        <p class="text-Primary-500-Primary font-medium">3</p>
                    </div>

                    <div class="flex flex-col items-center justify-center pl-4">
                        <h3 class="text-Neutral-900 text-sm">影音快播</h3>
                        <p class="text-Primary-500-Primary font-medium">6</p>
                    </div>
                </div>

                <!-- 收藏團購主 -->
                <div class="bg-Primary-100 flex items-center gap-x-1 rounded-lg bg-Primary-50 py-2 px-4">
                    <div>
                        <img src="~assets/images/icon/heart-icon-active-purple.svg" alt="heart" v-show="true" />
                        <img src="~assets/images/icon/heart-icon-purple.svg" alt="heart" v-show="false" />
                    </div>

                    <h3 class="text-sm text-Primary-400-Hover">收藏團購主</h3>
                </div>

                <!-- 社群軟體 -->
                <Media />
            </div>

            <div class="md:col-span-8 md:grid md:gap-y-10">
                <!-- 跟著我一起買 -->
                <div v-if="true">
                    <div class="flex gap-4 items-center justify-between mt-8 mb-4 md:mt-0">
                        <h1 class="text-black text-xl font-medium">跟著我一起買(進行中)</h1>

                        <USelectMenu
                            variant="none"
                            size="sm"
                            class="border border-Neutral-100 rounded-md bg-white"
                            placeholder="排序"
                            v-model="sortSelected"
                            :options="sort"
                        >
                            <template #trailing>
                                <img src="~assets/images/icon/sort-icon.svg" alt="sort" />
                            </template>
                        </USelectMenu>
                    </div>

                    <div class="grid grid-cols-1 gap-y-4 md:gap-5 md:grid-cols-3">
                        <!-- 卡片 -->
                        <CardGroupBuying v-for="(item, index) in 10" :key="index" />
                    </div>
                </div>

                <!-- 即將開團 -->
                <div v-if="true">
                    <div class="flex gap-4 items-center justify-between mt-8 mb-4 md:mt-0">
                        <h1 class="text-black text-xl font-medium">即將開團</h1>

                        <USelectMenu
                            variant="none"
                            size="sm"
                            class="border border-Neutral-100 rounded-md bg-white"
                            placeholder="排序"
                            v-model="sortComingSelected"
                            :options="sortComing"
                        >
                            <template #trailing>
                                <img src="~assets/images/icon/sort-icon.svg" alt="sort" />
                            </template>
                        </USelectMenu>
                    </div>

                    <div class="grid grid-cols-1 gap-y-4 md:gap-5 md:grid-cols-2">
                        <!-- 卡片 -->
                        <CardComingBuying v-for="(item, index) in 6" :key="index" />
                    </div>
                </div>

                <!-- 開團紀錄 -->
                <div v-if="true">
                    <div class="flex gap-4 items-center justify-between mt-8 mb-4 md:mt-0">
                        <h1 class="text-black text-xl font-medium">開團紀錄</h1>

                        <USelectMenu
                            variant="none"
                            size="sm"
                            class="border border-Neutral-100 rounded-md bg-white"
                            placeholder="排序"
                            v-model="sortHistorySelected"
                            :options="sortHistory"
                        >
                            <template #trailing>
                                <img src="~assets/images/icon/sort-icon.svg" alt="sort" />
                            </template>
                        </USelectMenu>
                    </div>

                    <div class="grid grid-cols-1 gap-y-4 md:gap-5 md:grid-cols-3">
                        <!-- 卡片 -->
                        <CardGroupBuying v-for="(item, index) in 6" :key="index" :isExpired="true" />
                    </div>
                </div>

                <div class="pt-14 md:mt-9" v-else>
                    <img src="~assets/images/status/emptyData.svg" alt="empty" class="mx-auto" />
                    <p class="mt-2 text-xl font-medium text-Primary-500-Primary text-center">查無符合資料</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const sort = ["新到舊", "舊到新", "開團數", "活耀度"];
const sortComing = ["新到舊", "舊到新", "開團數", "活耀度"];
const sortHistory = ["新到舊", "舊到新", "開團數", "活耀度"];

const sortSelected = ref(sort[0]);
const sortComingSelected = ref(sortComing[0]);
const sortHistorySelected = ref(sortHistory[0]);
</script>

<style scoped>
/* Your CSS styles go here */
</style>
