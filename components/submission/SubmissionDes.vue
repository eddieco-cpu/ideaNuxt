<template>
    <article :class="class">
        <h3 class="text-xl font-medium mb-2">{{ title }}</h3>
        <p class="text-sm text-Neutral-600-Dark-Primary font-normal" v-html="context"></p>
    </article>
</template>
<script setup>
const props = defineProps({
    class: String,
    title: {
        type: String,
        default: "資料名稱",
    },
    context: String,
});
</script>
<style scoped></style>
