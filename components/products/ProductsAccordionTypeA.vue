<template>
    <UAccordion :items="items">
        <template #default="{ item, index, open }">
            <UButton
                class="mb-4 py-4 border-b border-gray-200 dark:border-gray-700 w-full bg-white rounded-none text-black hover:bg-gray-50 active:bg-gray-100"
            >
                <span class="truncat text-base font-medium min-w-[68px] mr-2">{{ item.label }}</span>
                <span class="truncat text-lg font-bold">{{ open ? "＋" : "－" }}</span>
            </UButton>
        </template>
        <template #item="{ item }">
            <ul class="pl-6">
                <li
                    class="text-sm mb-3 mx-3 mt-[-6px] list-outside list-disc"
                    v-for="(content, i) in item.content"
                    :key="i"
                    v-html="content"
                ></li>
            </ul>
        </template>
    </UAccordion>
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
</script>
