<template>
    <div>
        <div class="flex gap-4" v-if="!proposalTypeSelected">
            <div
                class="flex flex-col items-center justify-center gap-y-3 bg-white w-2/4 py-6 rounded-lg cursor-pointer"
                v-for="(item, index) in proposalOption"
                :key="index"
                @click="orderTypeChoose(item.name)"
            >
                <img :src="item.imgUrl" alt="order" />
                <h3 class="text-Primary-500-Primary font-medium">{{ item.name }}</h3>
            </div>
        </div>

        <!-- 提案編輯 -->
        <div v-if="proposalTypeSelected === '提案編輯'">
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

        <!-- 團隊共編設定 -->
        <div v-if="proposalTypeSelected === '團隊共編設定'">
            <div class="flex flex-col gap-y-4 items-start mt-8 mb-4 md:mt-0">
                <h1 class="text-black text-xl font-medium flex items-center gap-x-2">
                    <UIcon name="i-heroicons-chevron-left" class="block w-4 h-4 cursor-pointer" @click="goBack" />
                    團隊共編設定
                </h1>
                <p class="text-sm text-Neutral-600-Dark-Primary">
                    團隊成員可以修改此帳號所提案的專案內容、常見問答及發佈更新。但不能「聯絡贊助人、下載贊助名單」。
                </p>
            </div>

            <div class="bg-white rounded-lg p-4">
                <h1 class="pb-[10px] border-b border-b-Neutral-200">你的團隊成員</h1>

                <div class="md:flex md:items-end md:gap-x-3">
                    <div class="pb-6 pt-[10px] flex items-end gap-x-3 md:flex-1">
                        <UFormGroup label="邀請成員電子信箱" name="groupMemberEmail" class="flex-1">
                            <UInput
                                color="white"
                                variant="none"
                                placeholder="idea2gether @gmail.com"
                                class="border border-Neutral-400-Hover rounded-md"
                                v-model="memberInfo.groupMemberEmail"
                            />
                        </UFormGroup>

                        <UCheckbox label="公開" v-model="memberInfo.public" />
                    </div>

                    <button class="bg-Primary-500-Primary text-white px-4 py-1 rounded-lg text-sm md:mb-6">加入</button>
                </div>

                <div class="pt-[10px] border-t border-t-Neutral-200">
                    <div class="flex items-center gap-x-1 mt-[10px]">
                        <img :src="helperPicture()" alt="orderPic" class="block rounded-full w-10 h-10 object-cover" />

                        <p>陳小美</p>

                        <span class="bg-Neutral-200 px-[6px] py-1 text-Neutral-500-Primary text-xs rounded"
                            >等待確認</span
                        >

                        <button class="underline text-Status-Color-Danger-600-Dark-Primary text-sm ml-auto">
                            取消邀請
                        </button>
                    </div>

                    <div class="flex items-center gap-x-1 mt-[10px]">
                        <img :src="helperPicture()" alt="orderPic" class="block rounded-full w-10 h-10 object-cover" />

                        <p>陳小美</p>

                        <span
                            class="bg-Status-Color-Success-50 px-[6px] py-1 text-Status-Color-Success-500-Primary text-xs rounded"
                            >等待確認</span
                        >

                        <button class="underline text-Status-Color-Danger-600-Dark-Primary text-sm ml-auto">
                            離開團隊
                        </button>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg p-4 mt-6">
                <h1 class="pb-[10px] border-b border-b-Neutral-200">你所屬的團隊</h1>

                <div class="mt-[10px] bg-Primary-50 p-2 md:flex md:items-center md:justify-between" v-if="true">
                    <p class="text-sm text-Neutral-800">你已收到「王大明」的團隊協作邀請！</p>

                    <div class="flex gap-x-1 mt-3 md:mt-0">
                        <button
                            class="bg-white border border-Primary-100 text-Primary-400-Hover px-4 py-1 rounded-lg text-sm"
                        >
                            拒絕
                        </button>
                        <button class="bg-Primary-500-Primary text-white px-4 py-1 rounded-lg text-sm">加入</button>
                    </div>
                </div>

                <div v-else>
                    <p class="text-sm text-Neutral-500-Primary text-center pt-8 pb-8 mt-[10px]">尚無內容</p>
                </div>
            </div>
        </div>

        <!-- 空值圖 -->
        <div class="w-[160px] mx-auto mt-8 md:w-[300px] md:mt-24" v-if="!proposalTypeSelected">
            <img src="~assets/images/status/emptyDataAddress.png" alt="noData" />
        </div>
    </div>
</template>

<script setup>
import Icon from "assets/images/";

const proposalSortType = ["新到舊", "舊到新", "優先成功專案", "優先失敗專案"];
const proposalSortTypeSelected = ref(proposalSortType[0]);

const currentPage = ref(1);
const totalPages = ref(20);
const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
};

const memberInfo = ref({
    groupMemberEmail: "",
    public: true,
});

const proposalOption = [
    {
        name: "提案編輯",
        imgUrl: Icon.edit,
    },
    {
        name: "團隊共編設定",
        imgUrl: Icon.users,
    },
];

const proposalTypeSelected = ref(null);

function goBack() {
    proposalTypeSelected.value = null;
}

function orderTypeChoose(name) {
    proposalTypeSelected.value = name;
}
</script>

<style scoped></style>
