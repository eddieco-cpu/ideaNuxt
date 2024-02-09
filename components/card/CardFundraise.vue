<template>
    <div
        class="w-full rounded-lg shadow-card bg-white pb-2 md:pb-0 cursor-pointer relative max-w-[322px] max-h-[320px] md:max-w-[318px] md:max-h-[308px]"
    >
        <!-- 標籤 -->
        <div class="flex items-center gap-x-2 absolute top-2 left-2">
            <div class="text-xs font-medium bg-Status-Color-Danger-500-Primary text-white px-2 py-1 rounded-md">
                促銷
            </div>

            <div class="text-xs font-medium bg-Status-Color-Success-400-Hover text-white px-2 py-1 rounded-md">
                免運
            </div>

            <div class="text-xs font-medium bg-Primary-500-Primary text-white px-2 py-1 rounded-md">獨家</div>
        </div>

        <!-- 愛心 -->
        <div class="absolute top-2 right-2">
            <img src="~assets/images/icon/heart-icon.svg" alt="favorite" v-show="false" />
            <img src="~assets/images/icon/heart-active-icon.svg" alt="favorite" v-show="true" />
        </div>

        <!-- 主圖 -->
        <img
            :src="helperPicture()"
            alt="product"
            class="rounded-lg w-[322px] h-[194px] md:w-[318px] md:h-[182px] object-cover"
        />

        <div class="w-72 mx-auto">
            <!-- 文字 -->
            <p class="text-sm font-medium mt-3 mb-5">
                All Day水潤機 | 突破日夜保濕侷限，填滿保養空窗期，創造24小時保養時區！
            </p>

            <div class="flex items-center">
                <!-- 價格 -->
                <p class="text-Neutral-800 font-medium">$ 544,980</p>

                <!-- 日期 -->
                <img src="~assets/images/icon/clock-icon.svg" alt="clock" width="12" class="ml-auto" />
                <p class="ml-1 text-Neutral-700 text-sm">19日</p>

                <!-- 人數 -->
                <img src="~assets/images/icon/user-icon.svg" alt="clock" width="12" class="ml-3" />
                <p class="ml-1 text-Neutral-700 text-sm">345人</p>
            </div>

            <!-- 百分比 -->
            <div class="flex items-center gap-3 mt-1">
                <UMeter
                    :value="progressMeter"
                    :ui="{ meter: { color: 'text-Primary-500-Primary', background: 'bg-Primary-50' } }"
                    color="violet"
                />
                <span class="text-Primary-500-Primary font-medium text-xs">{{ progressMeter }}%</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const progressMeter = ref(300);
</script>

<style scoped></style>
