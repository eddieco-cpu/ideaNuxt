<template>
    <div>
        <div>
            <div class="flex gap-4 items-center justify-between mt-8 mb-4 md:mt-0">
                <h1 class="text-black text-xl font-medium flex items-center gap-x-2">
                    <UIcon name="i-heroicons-chevron-left" class="block w-4 h-4 cursor-pointer" />
                    團購訂單記錄
                </h1>

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

            <div class="grid gap-y-5 md:grid md:grid-cols-3 md:gap-5">
                <CardFundraise v-for="(item, index) in 7" :key="index" />
            </div>
        </div>
    </div>
</template>

<script setup>
const sortType = ["新到舊", "舊到新"];
const sortTypeSelected = ref(sortType[0]);
</script>

<style scoped></style>
