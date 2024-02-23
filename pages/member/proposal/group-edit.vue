<template>
    <div>
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
                        <UInput placeholder="idea2gether @gmail.com" v-model="memberInfo.groupMemberEmail" />
                    </UFormGroup>

                    <UCheckbox label="公開" v-model="memberInfo.public" />
                </div>

                <button class="bg-Primary-500-Primary text-white px-4 py-1 rounded-lg text-sm md:mb-6">加入</button>
            </div>

            <div class="pt-[10px] border-t border-t-Neutral-200">
                <div class="flex items-center gap-x-1 mt-[10px]">
                    <img :src="helperPicture()" alt="orderPic" class="block rounded-full w-10 h-10 object-cover" />

                    <p>陳小美</p>

                    <span class="bg-Neutral-200 px-[6px] py-1 text-Neutral-500-Primary text-xs rounded">等待確認</span>

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
</template>

<script setup>
const memberInfo = ref({
    groupMemberEmail: "",
    public: true,
});

function goBack() {
    navigateTo("/member/proposal");
}
</script>
