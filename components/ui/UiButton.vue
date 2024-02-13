<!-- 子組件 -->
<template>
    <button class="w-48 h-10 rounded-lg bg-Primary-500-Primary text-white" :class="class">
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    class: String,
});
</script>
