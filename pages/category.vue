<template>
    <div class="w-80 mt-6 mx-auto">
        <!-- 下拉選單 -->
        <div class="grid grid-cols-2 gap-3">
            <UInputMenu
                variant="none"
                size="lg"
                class="border border-Neutral-100 rounded-md bg-white"
                placeholder="集資/團購"
                v-model="typeSelected"
                :options="type"
            />
            <UInputMenu
                variant="none"
                size="lg"
                class="border border-Neutral-100 rounded-md bg-white"
                placeholder="分類"
                v-model="categorySelected"
                :options="category"
            />
        </div>

        <!-- 排序 -->
        <div class="grid grid-cols-9 gap-4 items-center mt-8 mb-4">
            <h1 class="text-black text-xl font-medium col-span-6">3C家電</h1>

            <UInputMenu
                variant="none"
                size="sm"
                class="border border-Neutral-100 rounded-md bg-white col-span-3"
                placeholder="排序"
                v-model="sortSelected"
                :options="sort"
            >
                <template #trailing>
                    <img src="~assets/images/icon/sort-icon.svg" alt="sort" />
                </template>
            </UInputMenu>
        </div>

        <!-- 卡片 -->
        <div class="w-full rounded-lg shadow-card bg-white pb-3">
            <!-- 主圖 -->
            <img :src="helperPicture()" alt="product" class="rounded-lg block w-full max-w-full max-h-[186px] object-fill" />

            <div class="w-72 mx-auto">
                <!-- 文字 -->
                <p class="text-sm font-medium mt-3 mb-5">All Day水潤機 | 突破日夜保濕侷限，填滿保養空窗期，創造24小時保養時區！</p>

                <div class="flex items-center">
                    <!-- 價格 -->
                    <p class="text-Neutral-800 font-medium">$ 544,980</p>

                    <!-- 日期 -->
                    <img src="~assets/images/icon/clock-icon.svg" alt="clock" width="12" class="ml-auto" />
                    <p class="ml-1 text-Neutral-700 text-sm">19日</p>

                    <!-- 人數 -->
                    <img src="~assets/images/icon/user-icon.svg" alt="clock" width="12" class="ml-3" />
                    <p class="ml-1 text-Neutral-700 text-sm">345人</p>
                </div>

                <!-- 百分比 -->
                <div class="flex items-center gap-3 mt-2">
                    <UMeter :value="25" :ui="{ meter: { color: 'text-Primary-500-Primary', background: 'bg-Primary-50' } }" color="violet" />
                    <span class="text-Primary-500-Primary font-medium text-xs">25%</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const type = ["集資", "團購"];
const category = ["科技AI", "時尚流行", "3C家電", "書籍出版", "設計藝術", "遊戲動漫", "保健食品", "課程教育", "攝影圖像", "表演/門票", "服務/公益"];
const sort = ["最新", "最熱門", "價格高", "價格低"];

const typeSelected = ref(type[0]);
const categorySelected = ref(category[0]);
const sortSelected = ref(sort[0]);
</script>

<style scoped>
/* Your CSS styles go here */
</style>
