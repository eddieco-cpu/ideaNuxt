<template>
    <div class="mt-6">
        <h1 class="text-xl font-medium">團主資料</h1>
        <p class="text-sm text-Neutral-600-Dark-Primary mt-2">
            此區資訊會出現在您的個人頁面內，您可以透過個人自介、官方網站、社群連結等媒體，讓更多人認識您，同時也歡迎您分享更多商品資訊、創作、影音，紀錄您的精采生活！
        </p>

        <div class="p-3 mt-6 rounded-lg bg-white">
            <UForm
                :schema="leaderInformationSchema"
                :state="leaderInfo"
                class="flex flex-col gap-y-3 md:max-w-[434px]"
                @submit="onSubmit"
            >
                <UFormGroup label="個人網址名稱" name="siteName" help="此網址為您在本站的個人網址。" required>
                    <UButtonGroup size="sm" orientation="horizontal" class="shadow-none w-full">
                        <UInput placeholder="請輸入網址" class="rounded-r-none flex-1" v-model="leaderInfo.siteName" />

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
                        placeholder="請用簡短一段描述，介紹您自己，也可以形容您的精采生活，與對商品的熱愛，讓大家更認識你/妳吧！"
                        v-model="leaderInfo.selfDescription"
                    />
                </UFormGroup>

                <UFormGroup label="Facebook 網址" name="facebook" class="mt-9">
                    <UInput
                        placeholder="請輸入網址"
                        trailingIcon="i-heroicons-cog-6-tooth"
                        v-model="leaderInfo.facebookSite"
                    />
                </UFormGroup>

                <UFormGroup label="Instagram網址" name="instagram" class="mt-9">
                    <UInput
                        placeholder="請輸入網址"
                        trailingIcon="i-heroicons-cog-6-tooth"
                        v-model="leaderInfo.instagramSite"
                    />
                </UFormGroup>

                <UFormGroup label="YouTube網址" name="youtube" class="mt-9">
                    <UInput
                        placeholder="請輸入網址"
                        trailingIcon="i-heroicons-cog-6-tooth"
                        v-model="leaderInfo.youtubeSite"
                    />
                </UFormGroup>

                <UFormGroup label="個人/官方網站網址" name="officialSite" class="mt-9">
                    <UInput
                        placeholder="請輸入網址"
                        trailingIcon="i-heroicons-cog-6-tooth"
                        v-model="leaderInfo.officialSite"
                    />
                </UFormGroup>

                <!-- 儲存更新 -->
                <div class="mt-4">
                    <button type="submit" class="bg-Primary-500-Primary text-white px-4 py-1 rounded-lg text-sm">
                        儲存更新
                    </button>
                </div>
            </UForm>
        </div>
    </div>
</template>

<script setup>
import { leaderInformationSchema } from "~/validation";

const leaderInfo = ref({
    selfDescription: undefined,
    siteName: undefined,
    facebookSite: "https://www.facebookSite.com/",
    instagramSite: "https://www.InstagramSite.com/",
    youtubeSite: "https://www.youtubeSite.com/",
    officialSite: "https://www.officialSite.com/",
});

function onSubmit(event) {
    console.log(event.data);
}
</script>

<style lang="scss" scoped></style>
