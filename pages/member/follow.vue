<template>
    <div>
        <div>
            <ul class="relative hidden py-4 font-medium border-b-2 border-Neutral-200 mb-6 md:flex md:gap-x-8">
                <li
                    v-for="(item, index) in mapfollowType"
                    :key="index"
                    class="cursor-pointer px-2"
                    :class="showNavClass(item)"
                    @click="switchFollowType($event, item.name)"
                >
                    {{ item.name }} ({{ item.number }})
                </li>

                <!-- 導覽列下底線 -->
                <div
                    class="absolute bottom-0 left-0 border-b-2 border-Primary-500-Primary w-[120px] transition-all duration-200"
                    ref="underLine"
                ></div>
            </ul>

            <div v-if="true">
                <div class="flex gap-4 items-center justify-between mt-8 mb-4 md:mt-0">
                    <h1 class="text-black text-xl font-medium gap-x-2 hidden md:block">
                        {{ followTypeSelected }}
                        <span class="text-base text-Neutral-600-Dark-Primary ml-4">共{{ cardNumber }}個</span>
                    </h1>

                    <USelectMenu
                        variant="none"
                        size="sm"
                        class="w-[200px] border border-Neutral-100 rounded-md bg-white md:hidden"
                        placeholder="狀態"
                        v-model="followTypeSelected"
                        :options="followType"
                    >
                    </USelectMenu>

                    <USelectMenu
                        variant="none"
                        size="sm"
                        class="border border-Neutral-100 rounded-md bg-white"
                        placeholder="狀態"
                        v-model="sortTypeSelected"
                        :options="sortType"
                    >
                        <template #trailing>
                            <img src="~assets/images/icon/sort-icon.svg" alt="sort" />
                        </template>
                    </USelectMenu>
                </div>

                <div class="grid gap-[10px] bg-white p-3 md:p-6 rounded-lg" :class="showCardClass">
                    <CardFundraise
                        v-for="(item, index) in fundingRaiseList"
                        :key="index"
                        v-if="followTypeSelected === '集資專案'"
                        v-bind="item"
                    />
                    <CardGroupBuying
                        v-for="(item, index) in groupBuyingList"
                        :key="index"
                        v-if="followTypeSelected === '好評團購'"
                        v-bind="item"
                    />
                    <CardKol
                        v-for="(item, index) in kolList"
                        :key="index"
                        v-if="followTypeSelected === '名人與團主'"
                        v-bind="item"
                    />
                    <CardBlog
                        v-for="(item, index) in comingBuyingList"
                        :key="index"
                        v-if="followTypeSelected === '好物分享'"
                        v-bind="item"
                    />
                </div>

                <UiPagination
                    class="mt-3"
                    :currentPage="currentPage"
                    :totalPages="totalPages"
                    @updateCurrentPage="updateCurrentPage"
                />
            </div>

            <!-- 空值 -->
            <div class="flex flex-col gap-y-6 items-center justify-center pt-6" v-else>
                <img src="~assets/images/status/emptyDataFollow.png" alt="empty" />

                <span>尚無資料</span>

                <button class="bg-Primary-500-Primary text-white px-4 py-2 rounded-lg text-sm">來去逛逛!</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CardBlog, CardFundraise, CardGroupBuying, CardKol } from "#components";
const currentPage = ref(1);
const totalPages = ref(20);

const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
};

const sortType = ["新到舊", "舊到新"];
const sortTypeSelected = ref(sortType[0]);

const followType = ["集資專案", "好評團購", "名人與團主", "好物分享"];
const followTypeSelected = ref(followType[0]);

const kolList = ref([]);
const comingBuyingList = ref([]);
const fundingRaiseList = ref([]);
const groupBuyingList = ref([]);

getKol();
getFundingRaiseList();
getGroupBuyingList();
getBlogList();

const underLine = ref(null);

const mapfollowType = computed(() => {
    return followType.map((item) => {
        let obj = {
            name: item,
            number: 0,
        };

        switch (item) {
            case "集資專案":
                obj.number = fundingRaiseList.value.length;
                break;
            case "好評團購":
                obj.number = groupBuyingList.value.length;
                break;
            case "名人與團主":
                obj.number = kolList.value.length;
                break;
            case "好物分享":
                obj.number = comingBuyingList.value.length;
                break;
            default:
                obj.number = 0;
                break;
        }

        return obj;
    });
});

const cardNumber = computed(() => {
    return mapfollowType.value.find((item) => item.name === followTypeSelected.value)?.number ?? 0;
});

const showCardClass = computed(() => {
    switch (followTypeSelected.value) {
        case "名人與團主":
            return "grid-cols-2 md:grid-cols-5";
        case "好物分享":
            return "md:grid-cols-2";
        default:
            return "md:grid-cols-3";
    }
});

function showNavClass(name) {
    if (followTypeSelected.value === name) {
        return "text-Primary-500-Primary";
    } else {
        return "text-black/[0.85]";
    }
}

function switchFollowType(e, name) {
    underLine.value.style.left = `${e.target.offsetLeft}px`;

    followTypeSelected.value = name;
}

async function getKol() {
    const data = await GET("/api/kol");

    if (!!data) {
        kolList.value = data.sort((a, b) => a.index - b.index).slice(0, 6);
    }
}

async function getBlogList() {
    const data = await GET("/api/comingBuying");

    if (!!data) {
        comingBuyingList.value = data;
    }
}

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

<style scoped></style>
