<template>
    <div class="w-full bg-white p-3 md:p-5 rounded-lg">
        <h1 class="pb-3">{{ title }}</h1>

        <slot name="tip" class="pb-3" />

        <div class="pt-3 flex flex-col gap-y-8 border-t border-t-Neutral-200">
            <slot />
        </div>
    </div>
</template>

<script setup>
const { title } = defineProps({
    title: {
        type: String,
        default: "",
    },
});
</script>
