<template>
    <div class="w-full p-3 md:p-5 rounded-lg relative shadow-[0_0_5px_0_rgba(0,0,0,0.02)]" :class="bgColor">
        <div class="pb-3" v-if="hasTitle">
            <h1 class="font-medium" v-if="title !== ''">{{ title }}</h1>
            <p class="text-Neutral-600-Dark-Primary text-xs" v-if="subTitle !== ''">{{ subTitle }}</p>
        </div>

        <div class="font-medium">
            <slot name="title" />
        </div>

        <div class="flex items-center gap-x-6 absolute top-5 right-5">
            <slot name="tag" />
        </div>

        <slot name="tip" class="pb-3" />

        <div
            class="flex flex-col gap-y-8"
            :class="{
                'border-t-Neutral-200': hasTitle,
                'border-t': hasTitle,
                'pt-3': hasTitle,
            }"
        >
            <div class="flex flex-col gap-y-3">
                <slot name="body" />

                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script setup>
const { title, subTitle, bgColor } = defineProps({
    title: {
        type: String,
        default: "",
    },
    subTitle: {
        type: String,
        default: "",
    },
    bgColor: {
        type: String,
        default: "bg-white",
    },
});

const hasTitle = computed(() => {
    return title !== "";
});
</script>
