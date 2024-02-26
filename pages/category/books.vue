<template>
    <div>
        <!-- 排序 -->
        <template v-if="!isEmptyData">
            <div class="flex justify-between gap-4 items-center mt-8 mb-4 md:mt-0">
                <h1 class="text-black text-xl font-medium">書籍出版</h1>

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

            <div class="grid grid-cols-1 gap-y-4 md:gap-5" :class="showCardClass">
                <!-- 卡片 -->
                <CardFundraise
                    v-for="(item, index) in fundingRaiseList"
                    :key="index"
                    v-bind="item"
                    v-if="showCard === 'fundraise'"
                />
                <CardGroupBuying
                    v-for="(item, index) in groupBuyingList"
                    :key="index"
                    v-bind="item"
                    v-if="showCard === 'groupbuying'"
                />
            </div>

            <UiPagination
                class="mt-6"
                :currentPage="currentPage"
                :totalPages="totalPages"
                @updateCurrentPage="updateCurrentPage"
            />
        </template>

        <div class="pt-14 md:mt-9" v-else>
            <img src="~assets/images/status/emptyData.svg" alt="empty" class="mx-auto" />
            <p class="mt-2 text-xl font-medium text-Primary-500-Primary text-center">查無符合資料</p>
        </div>
    </div>
</template>

<script setup>
import { CardGroupBuying, CardFundraise } from "#components";
const route = useRoute();

const fundingRaiseList = ref([]);
const groupBuyingList = ref([]);

const currentPage = ref(1);
const totalPages = ref(20);
const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
};

const sort = ["最新", "最熱門", "價格高", "價格低"];
const sortSelected = ref(sort[0]);

getGroupBuyingList();
getFundingRaiseList();

const showCard = computed(() => {
    return route.query.type || "fundraise";
});

const isEmptyData = computed(() => {
    if (route.query.type === "groupbuying") {
        return groupBuyingList.value.length === 0;
    } else {
        return fundingRaiseList.value.length === 0;
    }
});

const showCardClass = computed(() => {
    switch (route.query.type) {
        case "fundraise":
            return "md:grid-cols-3";
        case "groupbuying":
            return "md:grid-cols-4";
        default:
            return "md:grid-cols-3";
    }
});

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
</script>

<style scoped>
/* Your CSS styles go here */
</style>
