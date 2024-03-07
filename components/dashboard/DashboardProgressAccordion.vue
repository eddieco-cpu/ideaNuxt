<template>
    <div @click="item.defaultOpen = !item.defaultOpen" class="overflow-hidden mb-6 cursor-pointer">
        <h3 class="truncat text-lg font-semibold">{{ item.title }}</h3>
        <div
            class="grid grid-rows-[0fr] transition-all duration-200 ease-linear"
            :class="item.defaultOpen ? 'grid-rows-[1fr]' : ''"
        >
            <section class="overflow-hidden">
                <article class="py-4 text-base font-medium text-Neutral-700">
                    <div v-html="item.html"></div>
                </article>
            </section>
        </div>
        <div class="pt-3 flex justify-between items-center">
            <time class="text-xs text-Neutral-600-Dark-Primary">{{ item.date }}</time>
            <span class="text-xs text-blue-800 underline">{{ item.defaultOpen ? "收起" : "展開" }}</span>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => ({
            title: "Getting Started",
            defaultOpen: false,
            html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.</p>",
            date: "2022/9/17",
        }),
    },
});
</script>
