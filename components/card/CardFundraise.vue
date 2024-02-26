<template>
    <div class="w-full rounded-lg shadow-card bg-white pb-2 cursor-pointer relative group" @click="goProductDetailPage">
        <!-- 標籤 -->
        <div class="flex items-center gap-x-2 absolute top-2 left-2 z-10">
            <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" />
        </div>

        <!-- 主圖 -->
        <div class="relative">
            <img :src="image" alt="product" class="rounded w-full h-[194px] md:h-[182px] object-cover" />

            <!-- 愛心 -->
            <div class="absolute top-2 right-2">
                <TagHeart :isEditMode="isEditMode" />
            </div>
        </div>

        <div class="px-4">
            <!-- 文字 -->
            <p class="text-sm font-medium mt-3 mb-5 line-clamp-2 group-hover:underline">
                {{ text }}
            </p>

            <div class="flex items-center">
                <!-- 價格 -->
                <p class="font-medium" :class="isExpiredClass('price')">$ {{ helpMoneyComma(price) }}</p>

                <!-- 日期 -->
                <img src="~assets/images/icon/clock-icon.svg" alt="clock" width="12" class="ml-auto" />
                <p class="ml-1 text-sm" :class="isExpiredClass('text')">{{ isExpired ? "已結束" : `${dataTime}日` }}</p>

                <!-- 人數 -->
                <img src="~assets/images/icon/user-icon.svg" alt="user" width="12" class="ml-3" />
                <p class="ml-1 text-sm" :class="isExpiredClass('text')">{{ people }}人</p>
            </div>

            <!-- 百分比 -->
            <div class="flex items-center gap-3 mt-1">
                <UMeter
                    :value="achievementRate"
                    :ui="{ meter: { color: isExpiredClass('meter'), background: isExpiredClass('meter') } }"
                />
                <span class="font-medium text-xs" :class="isExpiredClass('meter')">{{ achievementRate }}%</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const { isEditMode, isExpired, id } = defineProps({
    isEditMode: {
        type: Boolean,
        default: false,
    },
    isExpired: {
        type: Boolean,
        default: false,
    },
    text: {
        type: String,
        default: "",
    },
    image: {
        type: String,
        default: "",
    },
    id: {
        type: Number,
    },
    dataTime: {
        type: Number,
    },
    people: {
        type: Number,
    },
    price: {
        type: Number,
    },
    achievementRate: {
        type: Number,
    },
    tags: {
        type: Array,
        default: () => [],
    },
});

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

function goProductDetailPage() {
    navigateTo(`/products/funding/${id}`);
}
</script>

<style scoped></style>
