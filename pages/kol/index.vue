<template>
    <div>
        <div
            class="h-[246px] md:h-[260px] bg-no-repeat bg-cover bg-[url('assets/images/kol/kol-hero.png')] md:bg-[url('assets/images/kol/kol-hero-web.png')]"
        >
            <!-- 團主排名卡片 -->
            <div
                class="none-scrollbar px-6 md:max-w-[1200px] 3xl:max-w-[1300px] md:gap-y-4 md:mx-auto flex flex-nowrap md:grid md:grid-cols-3 gap-x-3 md:gap-x-12 overflow-x-auto overscroll-x-none transform translate-y-[12.5rem]"
            >
                <div class="flex-shrink-0" v-for="(item, index) in kolRank" :key="index">
                    <CardKolRank v-bind="item" />
                </div>
            </div>
        </div>

        <div class="max-w-[324px] mx-auto md:max-w-[1086px] 3xl:max-w-[1300px]">
            <!-- 小banner -->
            <div
                class="h-[75px] rounded-lg mt-40 md:mt-80 flex items-center justify-center bg-no-repeat bg-cover bg-[url('assets/images/kol/banner-sm.png')] md:bg-[url('assets/images/kol/banner-sm-web.png')]"
            >
                <p class="text-white text-sm font-medium">
                    已集結

                    <UtilCounter class="font-roboto text-4xl font-bold" :endNumber="kolCount" />

                    位達人，一同分享好務!
                </p>
            </div>

            <!-- 排序 -->
            <div class="flex justify-between items-end mt-10 mb-4">
                <div class="flex items-end">
                    <h2 class="text-xl font-medium leading-none">精選團主</h2>
                    <span class="text-Primary-500-Primary text-xs ml-2 leading-none">共{{ kolCount }}位</span>
                </div>

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

            <!-- 精選團主卡片 -->
            <div class="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-5">
                <CardKol v-for="(item, index) in kolList" :key="index" v-bind="item" />
            </div>

            <UiPagination
                class="mt-6"
                :currentPage="currentPage"
                :totalPages="totalPages"
                @updateCurrentPage="updateCurrentPage"
            />
        </div>
    </div>
</template>

<script setup>
import { GET } from "~/utils/helperFetchData.js";

const sort = ["新到舊", "舊到新", "開團數", "活耀度"];
const sortSelected = ref(sort[0]);
const kolList = ref([]);
const kolRank = ref([]);
const kolCount = ref(0)


const currentPage = ref(1);
const totalPages = ref(20);
const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
};

async function getKol() {

    const queryParam = `?page=${currentPage.value}`;
    const data = await GET(`/frontend/getKols${queryParam}`,1);

    if (!!data) {
        kolList.value = data.data.data;
        kolCount.value = data.data.total
    }
}

async function getKolRank() {
    const data = await GET("/frontend/getGroupListForHome",1);
    if (!!data) {
        kolRank.value = data.data;
    }
}

getKol();
getKolRank();


</script>

<style scoped></style>
