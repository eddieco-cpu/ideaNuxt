<template>
    <article class="rounded-lg overflow-hidden bg-white border-2 min-h-32 p-5" :class="typeClass">
        <div>
            <h3 class="mb-1 text-sm font-medium">{{ contentObj.label }}</h3>
            <h2 class="text-3xl font-bold mb-2">{{ contentObj.amount }}</h2>
            <p class="text-xs font-normal" v-html="contentObj.description" v-if="contentObj.description"></p>
        </div>
    </article>
</template>
<script setup>
const props = defineProps({
    class: String,
    contentObj: {
        type: Object,
        default: () => ({
            label: "累積集資金額X",
            amount: "$ 0",
            description: "目標金額 $ 1,000,000",
        }),
    },
    type: {
        type: String,
        default: "default",
    },
});
const typeClass = computed(() => {
    switch (props.type) {
        case "primary":
            return props.class + " text-Primary-500-Primary border-Primary-100";
        case "secondary":
            return props.class + " text-Secondary-500-Primary border-Secondary-50";
        default:
            return props.class + " text-Primary-500-Primary border-Primary-100";
    }
});
</script>
