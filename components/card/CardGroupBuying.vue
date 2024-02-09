<template>
    <div
        class="w-full rounded-lg shadow-card bg-white cursor-pointer relative max-w-[316px] max-h-[146px] md:max-w-[232px] md:max-h-[322px]"
    >
        <!-- 標籤 -->
        <div class="flex flex-col items-center gap-y-2 absolute top-2 left-2" v-if="!isExpired">
            <div class="text-xs font-medium bg-Status-Color-Danger-500-Primary text-white px-2 py-1 rounded-md">
                促銷
            </div>

            <div class="text-xs font-medium bg-Status-Color-Success-400-Hover text-white px-2 py-1 rounded-md">
                免運
            </div>

            <div class="text-xs font-medium bg-Primary-500-Primary text-white px-2 py-1 rounded-md">獨家</div>
        </div>

        <!-- 愛心 -->
        <div class="absolute top-2 right-[175px] md:top-2 md:right-2">
            <img src="~assets/images/icon/heart-icon.svg" alt="favorite" v-show="true" />
            <img src="~assets/images/icon/heart-active-icon.svg" alt="favorite" v-show="false" />
        </div>

        <div class="flex gap-x-3 md:flex-col">
            <!-- 主圖 -->
            <img
                :src="helperPicture()"
                alt="product"
                class="rounded-lg w-[146px] h-[146px] md:w-[234px] md:h-[234px] object-cover"
            />
            <!-- 文字 -->
            <div
                class="relative py-2 pr-2 flex flex-col items-start justify-evenly gap-y-3 flex-1 md:px-3 md:pt-3 md:gap-y-2"
            >
                <!-- 團主名稱 -->
                <div
                    class="rounded-b-lg flex items-center gap-x-1 md:absolute md:-top-[48px] md:left-0 md:w-full md:h-[48px] md:bg-[#1E253399] md:bg-opacity-60"
                >
                    <div class="flex items-center gap-x-1 h-full w-full" v-if="!isExpired">
                        <UAvatar
                            src="https://avatars.githubusercontent.com/u/739984?v=4"
                            alt="user"
                            size="xl"
                            class="md:ml-3 md:transform md:-translate-y-3"
                            :ui="{
                                size: {
                                    xl: 'w-[36px] h-[36px] md:w-[60px] md:h-[60px]',
                                },
                            }"
                        />
                        <span class="text-xs md:text-base font-medium text-Neutral-700 text-ellipsis md:text-white"
                            >小雯媽咪愛漂亮</span
                        >
                    </div>

                    <div
                        class="text-Neutral-700 text-xs font-medium md:text-white md:inline-block md:mx-auto md:text-base"
                        v-else
                    >
                        已結束
                    </div>
                </div>

                <!-- 敘述 -->
                <div>
                    <p class="line-clamp-2 text-Neutral-900 text-sm font-medium">
                        小雯媽咪 x 最舒適的被子推薦❤️十月被、冬月被被子推薦❤️十月被、冬月被冬月
                    </p>
                </div>
                <!-- 價格 -->
                <div v-if="!isExpired">
                    <p class="text-Status-Color-Danger-500-Primary font-medium font-roboto">$ 1,200 - $ 3,280</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { isExpired } = defineProps({
    isExpired: {
        type: Boolean,
        default: false,
    },
});
</script>

<style scoped></style>
