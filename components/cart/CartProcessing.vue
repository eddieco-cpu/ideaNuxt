<template>
    <div class="flex flex-col items-center gap-y-6">
        <UtilCircleProgress :progress="progress" />
        <div class="text-sm text-center">
            <p>系統處理中, 請稍候...</p>
            <p>如果您沒有被自動轉址 <button class="text-Primary-500-Primary underline">請重新更新頁面</button></p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    progress: {
        type: Number,
        default: 0,
    },
});
</script>
