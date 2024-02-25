<!-- 子組件 -->
<template>
    <!-- ring-1 -->
    <section class="max-w-[1200px] mx-auto m-10 py-1 max-md:px-6" :class="class">
        <!-- 定義插槽的位置 -->
        <slot></slot>
    </section>
</template>

<script setup>
const props = defineProps({
    class: String,
});
</script>
