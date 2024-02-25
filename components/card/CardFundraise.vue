<template>
    <div class="w-full rounded-lg shadow-card bg-white pb-2 cursor-pointer relative group">
        <!-- 標籤 -->
        <div class="flex items-center gap-x-2 absolute top-2 left-2">
            <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" />
        </div>

        <!-- 主圖 -->
        <div class="relative">
            <img :src="helperPicture()" alt="product" class="rounded w-full h-[194px] md:h-[182px] object-cover" />

            <!-- 愛心 -->
            <div class="absolute top-2 right-2">
                <TagHeart :isEditMode="isEditMode" />
            </div>
        </div>

        <div class="px-4">
            <!-- 文字 -->
            <p class="text-sm font-medium mt-3 mb-5 line-clamp-2 group-hover:underline">
                All Day水潤機 | 突破日夜保濕侷限，填滿保養空窗期，創造24小時保養時區！
            </p>

            <div class="flex items-center">
                <!-- 價格 -->
                <p class="font-medium" :class="isExpiredClass('price')">$ 544,980</p>

                <!-- 日期 -->
                <img src="~assets/images/icon/clock-icon.svg" alt="clock" width="12" class="ml-auto" />
                <p class="ml-1 text-sm" :class="isExpiredClass('text')">{{ isExpired ? "已結束" : "19日" }}</p>

                <!-- 人數 -->
                <img src="~assets/images/icon/user-icon.svg" alt="user" width="12" class="ml-3" />
                <p class="ml-1 text-sm" :class="isExpiredClass('text')">345人</p>
            </div>

            <!-- 百分比 -->
            <div class="flex items-center gap-3 mt-1">
                <UMeter
                    :value="progressMeter"
                    :ui="{ meter: { color: isExpiredClass('meter'), background: isExpiredClass('meter') } }"
                />
                <span class="font-medium text-xs" :class="isExpiredClass('meter')">{{ progressMeter }}%</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const { isEditMode, isExpired } = defineProps({
    isEditMode: {
        type: Boolean,
        default: false,
    },
    isExpired: {
        type: Boolean,
        default: false,
    },
});

const progressMeter = ref(300);

function isExpiredClass(type) {
    if (isExpired) {
        switch (type) {
            case "text":
            case "price":
            case "meter":
                return "text-Neutral-500-Primary";
            default:
                break;
        }
    } else {
        switch (type) {
            case "text":
                return "text-Neutral-700";
            case "price":
                return "text-Neutral-800";
            case "meter":
                return "text-Primary-500-Primary";
            default:
                break;
        }
    }
}

const tags = ref([
    { name: "促銷", color: "primary", type: "text" },
    { name: "免運", color: "danger", type: "text" },
    { name: "獨家", color: "success", type: "text" },
]);
</script>

<style scoped></style>
