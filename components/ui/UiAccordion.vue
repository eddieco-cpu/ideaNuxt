<template>
    <UAccordion :items="items">
        <template #default="{ item, index, open }">
            <UButton
                class="bg-Primary-50 hover:bg-Primary-100 active:bg-Primary-100 mb-4 py-[10px]"
                :class="open && 'ring-Primary-100 ring-2'"
            >
                <!-- <template #leading> 最前方 icon 
                    <div
                        class="w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1"
                    >
                        <UIcon :name="item.icon" class="w-4 h-4 text-white dark:text-gray-900" />
                    </div>
                </template> -->

                <span class="truncate text-Primary-500-Primary text-base font-medium"
                    >Q{{ index + 1 }}. {{ " " + item.label }}</span
                >

                <template #trailing>
                    <UIcon
                        name="i-heroicons-chevron-right-20-solid"
                        class="w-6 h-6 ms-auto transform transition-transform duration-200 text-Primary-500-Primary"
                        :class="[open && 'rotate-90']"
                    />
                </template>
            </UButton>
        </template>
        <template #item="{ item }">
            <p class="text-sm mb-2 mx-3 mt-[-6px]" v-for="(content, i) in item.content" :key="i" v-html="content"></p>
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
                label: "Basics",
                defaultOpen: true,
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
