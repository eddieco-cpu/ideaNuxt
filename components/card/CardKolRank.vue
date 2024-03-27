<template>
    <div
        class="relative min-h-[138px] w-full mx-auto rounded-2xl flex bg-white border border-Secondary-200 flex-shrink-0 group cursor-pointer"
        @click="goToPage"
    >
        <!-- 名次-->
        <div
            class="absolute top-0 left-4 w-8 h-8 bg-Secondary-500-Primary rounded-b-lg flex items-center justify-center"
        >
            <span class="text-white text-center font-bold font-roboto text-xl">{{ index }}</span>
        </div>
        <!-- 主圖 -->
        <img :src="image" alt="kol" class="w-[138px] h-[138px] object-cover block rounded-2xl" />

        <!-- 文字 -->
        <div class="px-3 py-4">
            <h2 class="text-xs text-Neutral-700">NO.{{ index }} 推薦達人</h2>

            <h1 class="font-medium text-Neutral-900">{{ name }}</h1>

            <p
                class="text-Secondary-500-Primary text-sm tracking-wide flex items-center gap-x-1 mt-9 group-hover:underline group-hover:text-Secondary-400-Hover"
            >
                瞧瞧達人推薦商品
                <img src="~assets/images/kol/rightCircle-icon.svg" alt="rightCircle" />
            </p>
        </div>
    </div>
</template>

<script setup>
const { index, id, name, image, hashId } = defineProps({
    index: {
        type: Number,
    },
    id: {
        type: Number,
    },
    name: {
        type: String,
        default: "",
    },
    image: {
        type: String,
        default: "",
    },
    hashId: {
        type: String,
        default: "",
    }
});

function goToPage() {
    navigateTo(`/kol/${hashId}`);
}
</script>

<style scoped></style>
