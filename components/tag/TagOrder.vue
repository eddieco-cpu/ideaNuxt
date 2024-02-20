<template>
    <div class="text-xs bg-Primary-50 text-Primary-500-Primary px-2 py-1 rounded" :class="showClass(status)">
        {{ status }}
    </div>
</template>

<script setup>
const { status } = defineProps({
    status: String,
    default: "已成立",
});

function showClass(status) {
    switch (status) {
        case "已成立":
            return "bg-Primary-50 text-Primary-500-Primary";
        case "備貨中":
        case "出貨中":
            return "bg-Secondary-50 text-Secondary-500-Primary";
        case "已完成":
            return "bg-Status-Color-Success-50 text-Status-Color-Success-500-Primary";
        case "錯誤":
            return "bg-Dust-Red-1 text-Dust-Red-6";
        case "取消":
            return "bg-Status-Color-Danger-50 text-Status-Color-Danger-400-Hover";
        default:
            break;
    }
}
</script>

<style scope></style>
