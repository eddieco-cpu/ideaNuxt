<template>
    <div
        class="text-xs font-medium text-Primary-50 px-2 py-1 rounded-md"
        :class="showClass(tag.color)"
        v-if="tag.type === 'text'"
    >
        {{ tag.name }}
    </div>
    <div
        class="text-xs font-medium text-Primary-50 px-2 py-1 rounded-md flex items-center gap-x-[2px]"
        :class="showClass(tag.color)"
        v-if="tag.type === 'time'"
    >
        <img src="~assets/images/icon/clock-white-icon.svg" alt="clock" />

        {{ tag.name }}
    </div>
</template>

<script setup>
const { tag } = defineProps({
    tag: Object,
    default: () => ({
        name: "",
        color: "primary",
        type: "text",
    }),
});

function showClass(type) {
    switch (type) {
        case "danger":
            return "bg-Status-Color-Danger-500-Primary";
        case "success":
            return "bg-Status-Color-Success-400-Hover";
        case "primary":
            return "bg-Primary-500-Primary";
        default:
            return "bg-Status-Color-Danger-500-Primary";
    }
}
</script>

<style scope></style>
