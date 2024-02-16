<template>
    <div class="bg-white rounded-lg relative p-3">
        <!-- 訂單標籤 -->
        <div class="flex items-center gap-x-2 absolute top-2 right-2">
            <TagOrder :status="'取消'" />
        </div>

        <div class="border-b border-Neutral-200 pb-2 mb-2 font-roboto">
            <h2 class="text-Neutral-900 font-medium">ID22092313548</h2>

            <p class="text-Neutral-600-Dark-Primary text-xs">2022-11-30 21:26</p>
        </div>

        <div class="flex items-center gap-x-4">
            <img :src="helperPicture()" alt="orderPic" class="block rounded w-16 h-16 object-cover" />

            <div class="flex-1">
                <h2 class="text-sm text-Neutral-700 mb-2">共1件商品</h2>
                <p class="font-medium text-Neutral-900">NT$1,620</p>

                <p class="text-Status-Color-Danger-600-Dark-Primary underline text-sm cursor-pointer" v-if="false">
                    繼續付款
                </p>
                <p class="text-Primary-500-Primary underline text-sm cursor-pointer" v-else>再次訂購</p>
            </div>

            <UIcon name="i-heroicons-chevron-right" class="block w-4 h-4 text-Neutral-500-Primary" />
        </div>

        <div class="border-t border-Neutral-200 pt-2 mt-2 flex items-center gap-x-1">
            <img src="~assets/images/icon/truck-icon.svg" alt="物流" class="w-4 h-4" />

            <p class="text-Neutral-700 text-sm">物流：黑貓 4309672096</p>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
