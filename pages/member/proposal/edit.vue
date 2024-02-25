<template>
    <div>
        <div class="flex gap-4 items-center justify-between mt-8 mb-4 md:mt-0">
            <h1 class="text-black text-xl font-medium flex items-center gap-x-2">
                <UIcon name="i-heroicons-chevron-left" class="block w-4 h-4 cursor-pointer" @click="goBack" />
                編輯提案
            </h1>

            <USelectMenu
                variant="none"
                size="sm"
                class="border border-Neutral-100 rounded-md bg-white"
                placeholder="狀態"
                v-model="proposalSortTypeSelected"
                :options="proposalSortType"
            >
                <template #trailing>
                    <img src="~assets/images/icon/sort-icon.svg" alt="sort" />
                </template>
            </USelectMenu>
        </div>

        <div class="md:grid md:grid-cols-3 md:gap-5">
            <CardFundraise v-for="(item, index) in 20" :key="index" :isEditMode="true" />
        </div>

        <UiPagination
            class="mt-6"
            :currentPage="currentPage"
            :totalPages="totalPages"
            @updateCurrentPage="updateCurrentPage"
        />
    </div>
</template>

<script setup>
const proposalSortType = ["新到舊", "舊到新", "優先成功專案", "優先失敗專案"];
const proposalSortTypeSelected = ref(proposalSortType[0]);

const currentPage = ref(1);
const totalPages = ref(20);
const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
};

function goBack() {
    navigateTo("/member/proposal");
}
</script>
