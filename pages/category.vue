<template>
    <div class="max-w-80 md:max-w-[1200px] mt-6 mx-auto md:grid md:grid-cols-12 md:gap-x-6 md:mt-10">
        <!-- 下拉選單 -->
        <div class="grid grid-cols-2 gap-3 md:flex md:flex-col md:col-span-2">
            <USelectMenu
                variant="none"
                size="lg"
                class="border border-Neutral-100 rounded-md bg-white"
                placeholder="集資/團購"
                v-model="typeSelected"
                :options="type"
            />

            <!-- 手機版分類 -->
            <USelectMenu
                variant="none"
                size="lg"
                class="border border-Neutral-100 rounded-md bg-white md:hidden"
                placeholder="分類"
                v-model="categorySelected"
                :options="category"
            />

            <!-- 桌機版分類 -->
            <div class="hidden md:block px-4 py-3">
                <h2 class="text-Neutral-900 text-xl font-medium mb-7">分類</h2>

                <div class="flex flex-col gap-y-5 items-start">
                    <button class="text-Neutral-900" v-for="(item, index) in category" :key="index">
                        {{ item }}
                    </button>
                </div>
            </div>
        </div>

        <div class="md:col-span-10">
            <!-- 排序 -->
            <template v-if="true">
                <div class="grid grid-cols-9 gap-4 items-center mt-8 mb-4 md:mt-0">
                    <h1 class="text-black text-xl font-medium col-span-6 md:col-span-8">3C家電</h1>

                    <USelectMenu
                        variant="none"
                        size="sm"
                        class="border border-Neutral-100 rounded-md bg-white col-span-3 md:col-span-1"
                        placeholder="排序"
                        v-model="sortSelected"
                        :options="sort"
                    >
                        <template #trailing>
                            <img src="~assets/images/icon/sort-icon.svg" alt="sort" />
                        </template>
                    </USelectMenu>
                </div>

                <div class="grid grid-cols-1 gap-y-4 md:gap-5" :class="showCardClass">
                    <!-- 卡片 -->
                    <component :is="showCard" v-for="(item, index) in 12" :key="index" />
                </div>
            </template>

            <div class="pt-14 md:mt-9" v-else>
                <img src="~assets/images/status/emptyData.svg" alt="empty" class="mx-auto" />
                <p class="mt-2 text-xl font-medium text-Primary-500-Primary text-center">查無符合資料</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CardGroupBuying, CardFundraise } from "#components";

const type = ["集資", "團購"];
const category = [
    "科技AI",
    "時尚流行",
    "3C家電",
    "書籍出版",
    "設計藝術",
    "遊戲動漫",
    "保健食品",
    "課程教育",
    "攝影圖像",
    "表演/門票",
    "服務/公益",
];
const sort = ["最新", "最熱門", "價格高", "價格低"];

const typeSelected = ref(type[1]);
const categorySelected = ref(category[0]);
const sortSelected = ref(sort[0]);

const showCard = computed(() => {
    switch (typeSelected.value) {
        case "集資":
            return CardFundraise;
        case "團購":
            return CardGroupBuying;
        default:
            return CardFundraise;
    }
});

const showCardClass = computed(() => {
    switch (typeSelected.value) {
        case "集資":
            return "md:grid-cols-3";
        case "團購":
            return "md:grid-cols-4";
        default:
            return "md:grid-cols-3";
    }
});
</script>

<style scoped>
/* Your CSS styles go here */
</style>
