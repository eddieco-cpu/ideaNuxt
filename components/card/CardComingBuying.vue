<template>
    <div
        class="w-full rounded-lg shadow-card bg-white pb-2 md:pb-0 cursor-pointer relative max-w-[322px] max-h-[320px] md:max-w-[344px] md:max-h-[308px]"
    >
        <!-- 愛心 -->
        <div class="absolute top-2 right-2">
            <img src="~assets/images/icon/heart-icon.svg" alt="favorite" v-show="true" />
            <img src="~assets/images/icon/heart-active-icon.svg" alt="favorite" v-show="false" />
        </div>

        <!-- 主圖 -->
        <img :src="helperPicture()" alt="product" class="rounded-lg w-full h-[148px] object-cover" />

        <div class="relative px-2">
            <!-- 團主名稱 -->
            <div
                class="rounded-b-lg flex items-center gap-x-1 absolute -top-[60px] left-0 w-full h-[48px] bg-[#1E253399] bg-opacity-60"
            >
                <UAvatar
                    src="https://avatars.githubusercontent.com/u/739984?v=4"
                    alt="user"
                    size="xl"
                    class="ml-3 transform -translate-y-3 mr-2"
                    :ui="{
                        size: {
                            xl: 'w-[40px] h-[40px]',
                        },
                    }"
                />
                <span class="font-medium text-sm text-ellipsis text-white">團購達人Charlie</span>
            </div>
            <!-- 文字 -->
            <p class="text-sm font-medium mt-3 mb-2">
                All Day水潤機 | 突破日夜保濕侷限，填滿保養空窗期，創造24小時保養時區！
            </p>

            <p class="text-Neutral-500-Primary text-xs">2023/12/31</p>
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>
