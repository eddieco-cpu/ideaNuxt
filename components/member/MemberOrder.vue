<template>
    <div>
        <div class="flex gap-4" v-if="!orderTypeSelected">
            <div
                class="flex flex-col items-center justify-center gap-y-3 bg-white w-2/4 py-6 rounded-lg cursor-pointer"
                v-for="(item, index) in orderOption"
                :key="index"
                @click="orderTypeChoose(item.name)"
            >
                <img :src="item.imgUrl" alt="order" />
                <h3 class="text-Primary-500-Primary font-medium">{{ item.name }}</h3>
            </div>
        </div>

        <div v-if="orderTypeSelected">
            <div class="flex gap-4 items-center justify-between mt-8 mb-4 md:mt-0">
                <h1 class="text-black text-xl font-medium flex items-center gap-x-2">
                    <UIcon name="i-heroicons-chevron-left" class="block w-4 h-4 cursor-pointer" @click="goBack" />
                    團購訂單記錄
                </h1>

                <USelectMenu
                    variant="none"
                    size="sm"
                    class="border border-Neutral-100 rounded-md bg-white"
                    placeholder="狀態"
                    v-model="orderSortTypeSelected"
                    :options="orderSortType"
                >
                    <template #trailing>
                        <img src="~assets/images/icon/sort-icon.svg" alt="sort" />
                    </template>
                </USelectMenu>
            </div>

            <CardOrder />
        </div>

        <!-- 空值圖 -->
        <div class="w-[160px] mx-auto mt-8 md:w-[300px] md:mt-24" v-if="!orderTypeSelected">
            <img src="~assets/images/status/emptyDataAddress.png" alt="noData" />
        </div>
    </div>
</template>

<script setup>
const orderSortType = ["全部", "已成立", "備貨中", "出貨中", "已完成", "取消"];
const orderSortTypeSelected = ref(orderSortType[0]);

const orderOption = [
    {
        name: "募資訂單",
        imgUrl: "/_nuxt/assets/images/icon/rocket-active-icon.svg",
    },
    {
        name: "團購訂單",
        imgUrl: "/_nuxt/assets/images/icon/users-active-icon.svg",
    },
];
const orderTypeSelected = ref(null);

function goBack() {
    orderTypeSelected.value = null;
}

function orderTypeChoose(name) {
    orderTypeSelected.value = name;
}
</script>

<style scoped></style>
