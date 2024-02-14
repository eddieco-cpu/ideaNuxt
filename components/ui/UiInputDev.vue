<!-- 子組件 -->
<template>
    <div class="ring-1 ring-slate-200" :class="class">
        <label
            :for="id"
            class="inline-flex justify-start items-center text-sm font-normal mb-2"
            :class="
                id && !isDisabled
                    ? 'active:text-Primary-400-Hover hover:text-Primary-500-Primary'
                    : ' pointer-events-none'
            "
            v-if="name"
        >
            <span v-if="isRequired" class="text-red-500 text-[10px]">＊</span>
            <span class="pl-[2px]">{{ name }}</span>
        </label>
        <slot></slot>

        <p class="text-xs text-Neutral-600-Dark-Primary opacity-90 font-normal leading-5 mt-[2px]" v-if="notes">
            {{ notes }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
    class: String,
    id: String,
    isRequired: {
        type: Boolean,
        default: false,
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
    name: String,
    notes: String,
});
</script>
