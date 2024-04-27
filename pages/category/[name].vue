<template>
    <div v-show = "loadDataDone">
        <!-- 排序 -->
        <template v-if="!isEmptyData">
            <div class="flex justify-between gap-4 items-center mt-8 mb-4 md:mt-0">
                <h1 class="text-black text-xl font-medium">{{ categoryName }}</h1>

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
                    v-for="(item, index) in formattedGroupBuyingList"
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
    getAllLists()
};

const loadDataDone = ref(false);

getAllLists();

const categoryName = route.params.name;

const showCard = computed(() => {
    return route.query.type || "fundraise";
});

const sort = computed(() => {

switch (showCard.value) {
  case 'fundraise':
    return ["最新"]; 
  case 'groupbuying':
    return ["最新", "價格高", "價格低"]; 
  default:
    return ["最新", "價格高", "價格低"];
}
});
const sortSelected = ref("");
watchEffect(() => {
  sortSelected.value = sort.value[0];
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

async function getAllLists() {

    const fundingRaiseQueryParam = `?category_name=${route.params.name}&type=fundraise&page=${currentPage}`;
    const groupBuyingQueryParam = `?category_name=${route.params.name}&type=groupbuying&page=${currentPage}`;

    const [fundingRaiseData, groupBuyingData] = await Promise.all([
        GET(`/frontend/getCategoryPageData${fundingRaiseQueryParam}`, 1),
        GET(`/frontend/getGroupCategoryPageData${groupBuyingQueryParam}`, 1),
    ]);

    if (!!fundingRaiseData.status) {
        fundingRaiseList.value = fundingRaiseData.paginateData.data;
        if(showCard.value == 'fundraise') {
            totalPages.value = fundingRaiseData.paginateData.last_page;
        }
    }

    if (!!groupBuyingData.status) {
        groupBuyingList.value = groupBuyingData.paginateData.data;
        if(showCard.value == 'groupbuying') {
            totalPages.value = groupBuyingData.paginateData.last_page;
        }
    }

    loadDataDone.value = true;
}

const formattedGroupBuyingList = computed(() => {
  if (Array.isArray(groupBuyingList.value)) {

    let sortedList = groupBuyingList.value.slice();

    if (sortSelected.value === '價格低') {
      sortedList.sort((a, b) => {
        const priceA = Array.isArray(a.price) && a.price.length > 0 ? a.price[0] : Infinity;
        const priceB = Array.isArray(b.price) && b.price.length > 0 ? b.price[0] : Infinity;
        return priceA - priceB;
      });
    } else if (sortSelected.value === '價格高') {
      sortedList.sort((a, b) => {
        const priceA = Array.isArray(a.price) && a.price.length > 0 ? a.price[0] : -Infinity;
        const priceB = Array.isArray(b.price) && b.price.length > 0 ? b.price[0] : -Infinity;
        return priceB - priceA;
      });
    }

    return sortedList.map(item => ({
      id: item.id,
      name: item.users ? item.users.name : 'Default Name',
      image: item.projects ? item.projects.image : 'Default Image',
      avatar: item.users ? item.users.image : 'Default Avatar',
      text: item.projects ? item.projects.name : 'Default Text',
      price: item.price,
      tags: item.product ? item.product.tags : []
    }));
  } else {
    return [];
  }
});
</script>

<style scoped>
/* Your CSS styles go here */
</style>
