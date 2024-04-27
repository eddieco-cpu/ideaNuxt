<template>
    <div v-if="data && data.data.data.length > 0 ">
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

<<<<<<< HEAD
        <div class="md:grid md:grid-cols-3 md:gap-5" v-if="data && data.data.data.length > 0 ">
=======
        <div class="md:grid md:grid-cols-3 md:gap-5" >
>>>>>>> 1cdb0af (0427)
            <CardFundraise v-for="(item, index) in data.data.data" :key="index" v-bind="item" :isEditMode="true" />
        </div>
        <ClientOnly>
            <UiPagination
                class="mt-6"
                :currentPage="currentPage"
                :totalPages="totalPages"
                @updateCurrentPage="updateCurrentPage"
            />
        </ClientOnly>
    </div>
</template>

<script setup>

const proposalSortType         = ["新到舊", "舊到新"];
const proposalSortTypeSelected = ref(proposalSortType[0]);
const currentPage              = ref(1);
const totalPages               = ref(20);

const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
    refresh();
};

const { data, refresh } = useCustomFetch("/getProjectByUser", {'page': currentPage.value}, '');
<<<<<<< HEAD
console.log(data.value)

// totalPages.value = data.value.last_page;
=======

if(data && data.value?.data?.data.length > 0) {
    totalPages.value = data.value?.data?.last_page;
}
>>>>>>> 1cdb0af (0427)

function goBack() {
    navigateTo("/member/proposal");
}
</script>
