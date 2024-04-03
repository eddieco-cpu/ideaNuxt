<template>
    <div class="group/tag">
        <div
            class="bg-white rounded-xl text-xs py-1 px-2 transition-all duration-300 group-hover/tag:bg-Primary-50 cursor-pointer"
        >
            <span class="text-Primary-500-Primary mr-1">＃</span>
            <span
                class="text-Neutral-600-Dark-Primary group-hover/tag:text-Primary-500-Primary transition-all duration-300"
                >{{ text }}</span
            >
        </div>
    </div>
</template>

<script setup>
const { text } = defineProps({
    text: {
        type: String,
        default: "",
    },
});
</script>
