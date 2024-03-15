<!-- 子組件 -->
<template>
    <button class="w-48 h-10 rounded-lg" :class="typeClass">
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    class: String,
    type: {
        type: String,
        default: "default",
    },
});
const typeClass = computed(() => {
    switch (props.type) {
        case "default":
            return props.class + " bg-Primary-500-Primary text-white";
        case "primary":
            return props.class + " bg-Primary-500-Primary text-white";
        case "secondary":
            return props.class + " bg-white text-Primary-500-Primary border  border-gray-200";
        case "prohibit":
            return props.class + " bg-[#f4f4f4] text-[#bbbec2] border border-gray-200"; //禁止
        // case "success":
        //     return "bg-Success-500-Success";
        // case "warning":
        //     return "bg-Warning-500-Warning";
        // case "danger":
        //     return "bg-Danger-500-Danger";
        default:
            return props.class + " bg-Primary-500-Primary text-white";
    }
});
</script>
