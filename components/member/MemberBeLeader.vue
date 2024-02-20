<template>
    <div class="mt-6">
        <h1 class="text-xl font-medium">團主資料</h1>
        <p class="text-sm text-Neutral-600-Dark-Primary mt-2">
            此區資訊會出現在您的個人頁面內，您可以透過個人自介、官方網站、社群連結等媒體，讓更多人認識您，同時也歡迎您分享更多商品資訊、創作、影音，紀錄您的精采生活！
        </p>

        <div class="p-3 mt-6 rounded-lg bg-white">
            <div class="flex flex-col gap-y-3 md:max-w-[434px]">
                <UFormGroup label="個人網址名稱" name="siteName" help="此網址為您在本站的個人網址。" required>
                    <UButtonGroup size="sm" orientation="horizontal" class="shadow-none w-full">
                        <UInput placeholder="請輸入網址" class="rounded-r-none flex-1" v-model="memberInfo.siteName">
                        </UInput>

                        <div
                            class="rounded-s rounded-r-lg px-3 py-1 text-sm text-black/[0.25] border border-Neutral-400-Hover"
                        >
                            users
                        </div>
                    </UButtonGroup>
                </UFormGroup>

                <UFormGroup label="個人自介" name="selfDescription" required>
                    <UTextarea
                        resize
                        placeholder="請用簡短一段描述，介紹您自己，也可以形容您的精采生活，與對商品的熱愛，讓大家更認識你/妳吧！

"
                    />
                </UFormGroup>

                <UFormGroup label="Facebook 網址" name="facebook" class="mt-9">
                    <UInput
                        placeholder="請輸入網址"
                        trailingIcon="i-heroicons-cog-6-tooth"
                        v-model="memberInfo.facebookSite"
                    />
                </UFormGroup>

                <UFormGroup label="Instagram網址" name="instagram" class="mt-9">
                    <UInput
                        placeholder="請輸入網址"
                        trailingIcon="i-heroicons-cog-6-tooth"
                        v-model="memberInfo.instagramSite"
                    />
                </UFormGroup>

                <UFormGroup label="YouTube網址" name="youtube" class="mt-9">
                    <UInput
                        placeholder="請輸入網址"
                        trailingIcon="i-heroicons-cog-6-tooth"
                        v-model="memberInfo.youtubeSite"
                    />
                </UFormGroup>

                <UFormGroup label="個人/官方網站網址" name="officialSite" class="mt-9">
                    <UInput
                        placeholder="請輸入網址"
                        trailingIcon="i-heroicons-cog-6-tooth"
                        v-model="memberInfo.officialSite"
                    />
                </UFormGroup>
                <!-- 儲存更新 -->
                <div class="mt-4">
                    <button class="bg-Primary-500-Primary text-white px-4 py-1 rounded-lg text-sm">儲存更新</button>
                </div>
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
