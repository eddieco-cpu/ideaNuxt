<template>
    <div class="bg-blue-200 w-3/4 m-auto">
        <div class="bg-blue-600" :style="{ width: `${percent}%` }">Bar</div>
    </div>
</template>

<script setup>
const props = defineProps({
    total: Number,
    price: Number,
});

const percent = computed(() => {
    const result = props.price / props.total;
    return result > 1 ? 100 : result * 100;
});
</script>
