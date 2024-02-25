<template>
    <div class="bg-black rounded-[10px] w-[180px] h-[256px] flex-shrink-0 relative overflow-hidden cursor-pointer">
        <img :src="thumbnail" alt="" class="absolute top-0 left-0 w-full h-full object-cover" />
        <img src="~assets/images/icon/play-video-icon.svg" alt="play" class="absolute top-3 left-3" />

        <div class="rounded-b-[20px] px-3 absolute bottom-0 left-0 w-full h-[48px]">
            <span class="text-sm text-white line-clamp-2">{{ text }}</span>
        </div>
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
