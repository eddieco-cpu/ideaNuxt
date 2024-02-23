<template>
    <div>
        <div class="flex gap-4 items-center justify-between mt-8 mb-4 md:mt-0 md:flex-col md:items-start">
            <h1 class="text-black text-xl font-medium flex items-center gap-x-2">
                <UIcon name="i-heroicons-chevron-left" class="block w-4 h-4 cursor-pointer" @click="goBack" />
                團購訂單記錄
            </h1>

            <!-- 手機版篩選 -->
            <USelectMenu
                variant="none"
                size="sm"
                class="border border-Neutral-100 rounded-md bg-white md:hidden"
                placeholder="狀態"
                v-model="orderSortTypeSelected"
                :options="orderSortType"
            >
                <template #trailing>
                    <img src="~assets/images/icon/sort-icon.svg" alt="sort" />
                </template>
            </USelectMenu>

            <!-- 桌機版篩選 -->
            <div class="hidden md:flex">
                <div
                    class="text-sm py-2 px-4 cursor-pointer"
                    :class="showClass(item)"
                    v-for="(item, index) in orderSortType"
                    :key="index"
                    @click="switchSort(item)"
                >
                    {{ item }}
                </div>
            </div>
        </div>

        <CardOrder />
    </div>
</template>

<script setup>
const orderSortType = ["全部", "已成立", "備貨中", "出貨中", "已完成", "取消"];
const orderSortTypeSelected = ref(orderSortType[0]);

function showClass(name) {
    if (name === orderSortTypeSelected.value) {
        return "border border-Primary-500-Primary text-Primary-500-Primary";
    } else {
        return "border border-Neutral-400-Hover";
    }
}

function switchSort(name) {
    orderSortTypeSelected.value = name;
}

function goBack() {
    navigateTo("/member/order");
}
</script>
