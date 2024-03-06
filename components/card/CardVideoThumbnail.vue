<template>
    <div class="rounded-[10px] w-[180px] h-[256px] flex-shrink-0 relative overflow-hidden cursor-pointer">
        <img :src="thumbnail" alt="" class="absolute top-0 left-0 w-full h-full object-cover" />
        <img src="~assets/images/icon/play-video-icon.svg" alt="play" class="absolute top-3 left-3 z-[2]" />

        <div class="rounded-b-[20px] px-3 absolute z-[2] bottom-0 left-0 w-full h-[48px]">
            <span class="text-sm text-white line-clamp-2">{{ text }}</span>
        </div>

        <div class="absolute top-0 left-0 w-full h-full mask"></div>
    </div>
</template>

<script setup>
const { thumbnail } = defineProps({
    thumbnail: {
        type: String,
        default: "",
    },
    text: {
        type: String,
        default: "",
    },
});
</script>

<style scoped>
.mask {
    background: linear-gradient(
        182deg,
        rgba(13, 13, 13, 0.03) 1.5%,
        rgba(3, 3, 3, 0.48) 73.62%,
        rgba(0, 0, 0, 0.54) 98.5%
    );
}
</style>
