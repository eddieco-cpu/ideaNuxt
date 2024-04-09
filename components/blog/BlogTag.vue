<template>
    <div class="tag rounded-xl group/tag" @click="goToPage">
        <div
            class="bg-white rounded-xl text-xs py-1 px-2 transition-all duration-300 cursor-pointer group-hover/tag:!bg-Primary-50"
            :style="styleObject"
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
const { text, backgroundColor, fontSize } = defineProps({
    text: {
        type: String,
        default: "",
    },
    backgroundColor: {
        type: String,
        default: "#fff",
    },
    fontSize: {
        type: String,
        default: "14px",
    },
});

const styleObject = reactive({
    backgroundColor: backgroundColor,
    fontSize: fontSize,
});

function goToPage(e) {
    e.stopPropagation();

    navigateTo("/blog/list/technology-ai");
}
</script>
