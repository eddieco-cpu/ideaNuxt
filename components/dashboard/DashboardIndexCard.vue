<template>
    <article class="rounded-lg overflow-hidden relative bg-white border-2 md:min-h-32 md:p-5 p-3" :class="typeClass">
        <img
            src="~assets/images/dashboard/purpleCircles.svg"
            class="absolute top-[-40px] right-[-50px] max-md:hidden"
            v-if="type === 'primary'"
        />
        <img
            src="~assets/images/dashboard/purpleCirclesMd.svg"
            class="absolute top-0 right-0 md:hidden"
            v-if="type === 'primary'"
        />
        <img
            src="~assets/images/dashboard/blueCircles.svg"
            class="absolute top-[-40px] right-[-50px] max-md:hidden"
            v-if="type === 'secondary'"
        />
        <img
            src="~assets/images/dashboard/blueCirclesMd.svg"
            class="absolute top-0 right-0 md:hidden"
            v-if="type === 'secondary'"
        />
        <div>
            <h3 class="mb-1 text-sm font-medium">{{ contentObj.label }}</h3>
            <h2 class="text-3xl font-bold mb-2 max-md:text-2xl max-md:mb-1">{{ contentObj.amount }}</h2>
            <p class="text-xs font-normal" v-if="contentObj.description">
                {{ contentObj.description }}
                <nuxt-link v-if="isLink" to="/dashboard/orders">前往出貨</nuxt-link>
            </p>
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
    isLink: {
        type: Boolean,
        default: false,
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
