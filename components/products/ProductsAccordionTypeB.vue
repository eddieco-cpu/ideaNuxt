<template>
    <div
        v-for="(item, i) in items"
        @click="activeItem = activeItem === i ? items.length : i"
        class="bg-Primary-50 hover:ring-Primary-200 active:ring-Primary-200 ring-Primary-100 ring-2 rounded-lg overflow-hidden mb-6 py-4 px-3 cursor-pointer"
    >
        <h3 class="truncat text-lg font-semibold">{{ item.label }}</h3>
        <div
            class="grid grid-rows-[0fr] transition-all duration-200 ease-linear"
            :class="i === activeItem && 'grid-rows-[1fr]'"
        >
            <section class="overflow-hidden">
                <article class="py-4 text-base font-medium text-Neutral-700">
                    <p v-for="(content, i) in item.content" :key="i" v-html="content"></p>
                </article>
            </section>
        </div>
        <div class="pt-3 flex justify-between items-center">
            <time class="text-xs text-Neutral-600-Dark-Primary">2022/9/17</time>
            <span class="text-xs text-blue-800 underline">{{ i === activeItem ? "收起" : "展開" }}</span>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    items: {
        type: Array,
        default: () => [
            {
                label: "Getting Started",
                defaultOpen: true,
                content: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
                ],
            },
            {
                label: "Contributing",
                content: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
                ],
            },
            {
                label: "Community Guidelines",
                content: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
                ],
            },
        ],
    },
});
const activeItem = ref(0);
</script>
