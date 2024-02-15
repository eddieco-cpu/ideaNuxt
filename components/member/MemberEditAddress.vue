<template>
    <div class="p-3 mt-6 rounded-lg bg-white">
        <h2 class="font-medium text-black/[0.85] mb-5">地址 1</h2>
        <div class="flex flex-col gap-y-3">
            <UFormGroup label="收件人" name="receiver" help="請填寫您個人真實姓名，才能確實收到包裹。">
                <UInput
                    color="white"
                    variant="none"
                    placeholder="王小美"
                    class="border border-Neutral-400-Hover rounded-md"
                    v-model="memberInfo.nickName"
                />
            </UFormGroup>

            <UFormGroup label="收件人手機" name="receiverPhone" help="用於聯絡到貨通知使用。" required>
                <UInput
                    color="white"
                    variant="none"
                    placeholder="王小美"
                    class="border border-Neutral-400-Hover rounded-md"
                    v-model="memberInfo.nickName"
                />
            </UFormGroup>

            <UFormGroup label="收件人電子信箱" name="receiverEmail" help="用於聯絡到貨通知使用。" required>
                <UInput
                    color="white"
                    variant="none"
                    placeholder="王小美"
                    class="border border-Neutral-400-Hover rounded-md"
                    v-model="memberInfo.nickName"
                />
            </UFormGroup>

            <UFormGroup label="收件人地址" name="receiverAddress" help="如使用宅配到府得以直接帶入該地址。" required>
                <UInput
                    color="white"
                    variant="none"
                    placeholder="王小美"
                    class="border border-Neutral-400-Hover rounded-md"
                    v-model="memberInfo.nickName"
                />
            </UFormGroup>

            <!-- 儲存更新 -->
            <div class="mt-4 flex gap-x-2">
                <button class="bg-Primary-500-Primary text-white px-4 py-1 rounded-lg text-sm">儲存更新</button>
                <button class="bg-white border border-Neutral-300 px-4 py-1 rounded-lg text-sm text-Primary-400-Hover">
                    取消
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const memberInfo = ref({
    nickName: "",
    name: "",
    phone: "",
    email: "",
    birthDay: "",
    sex: "0",
    siteName: "https://www.idea2gether.com/",
    facebookSite: "https://www.facebookSite.com/",
    instagramSite: "https://www.InstagramSite.com/",
    youtubeSite: "https://www.youtubeSite.com/",
    officialSite: "https://www.officialSite.com/",
    notification: false,
    subscription: false,
    register: false,
});
</script>

<style lang="scss" scoped></style>
