<template>
    <div class="w-full h-lvh bg-black bg-opacity-70 fixed left-0 z-[40]" :class="showClass"></div>
</template>

<script setup>
const emit = defineEmits(["hideModal"]);

const { showHeader } = defineProps({
    showHeader: {
        type: Boolean,
        default: false,
    },
});

function hideModal() {
    emit("hideModal");
}

const showClass = computed(() => {
    if (showHeader) {
        return "top-[72px]";
    } else {
        return "top-[0px]";
    }
});
</script>

<style scoped lang="scss"></style>
