<template>
    <section class="relative mb-4">
        <ul class="flex justify-center items-center">
            <li
                v-for="(item, index) in navItems"
                :key="item.id"
                @click="changeNav(item.id)"
                class="text-center py-3 cursor-pointer"
                :class="` w-[${100 / navItems.length}%]` + (activeIndex === index ? ' text-Primary-500-Primary' : '')"
                :style="{ width: `${100 / navItems.length}%` }"
                v-html="item.html"
            ></li>
            <div
                class="absolute bottom-[-2px] h-[2px] scale-x-90 bg-Primary-500-Primary transition-all duration-350 ease-in-out"
                :style="underlineStyle"
            ></div>
        </ul>
    </section>
</template>
<script setup>
//
const props = defineProps({
    navItems: {
        type: Array,
        default: () => [
            {
                id: "A",
                html: "nav A",
            },
            {
                id: "B",
                html: "nav B",
            },
            {
                id: "C",
                html: "nav C",
            },
        ],
    },
    activeNavItemId: {
        type: String,
        default: "A",
    },
});
const emit = defineEmits(["updateNavItemId"]);

//
const activeIndex = computed(() => {
    return props.navItems.findIndex((item) => item.id === props.activeNavItemId);
});

const underlineStyle = computed(() => {
    const width = 100 / props.navItems.length;
    return {
        width: `${width}%`,
        left: `calc(${width * activeIndex.value}%)`,
    };
});

const changeNav = (id) => {
    emit("updateNavItemId", id);
};
</script>
