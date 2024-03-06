<!-- 子組件 -->
<template>
    <h3 class="font-medium text-xl mb-4" :class="class">
        <!-- 定義插槽的位置 -->
        <slot></slot>
    </h3>
</template>

<script setup>
const props = defineProps({
    class: String,
});
</script>
