<template>
    <div class="relative h-[174px] md:h-[224px] bg-black rounded-[20px] cursor-pointer group" @click="goToPage">
        <!-- 主圖 -->
        <img :src="image" alt="kol" class="rounded-[20px] w-full h-full object-cover absolute top-0 left-0" />

        <!-- 愛心 -->
        <div class="absolute top-2 right-2">
            <TagHeart />
        </div>

        <!-- 名稱 -->
        <div
            class="rounded-b-[20px] px-3 flex items-center justify-center gap-x-2 absolute bottom-0 left-0 w-full h-[48px] bg-[#1E253399] bg-opacity-60"
        >
            <span class="text-sm text-white line-clamp-2 w-[100px] group-hover:underline flex-1">{{ name }}</span>

            <img src="~assets/images/kol/rightCircle-w.svg" alt="rightCircle" />
        </div>
    </div>
</template>

<script setup>
const { index, id, name } = defineProps({
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
});

function goToPage() {
    navigateTo(`/kol/${id}`);
}
</script>

<style scoped>
/* Your CSS styles go here */
</style>
