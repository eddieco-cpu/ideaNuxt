<template>
    <div class="flex justify-center items-center py-3" :class="class">
        <UIcon
            name="i-heroicons-chevron-left"
            :disabled="currentPage <= 1"
            class="block w-8 h-8 flex justify-center items-center text-xs scale-50 mr-2"
            :class="
                currentPage <= 1
                    ? 'text-gray-300 cursor-none'
                    : 'text-black cursor-pointer hover:text-Primary-400-Hover active:text-Primary-200'
            "
            @click="changePage(currentPage - 1)"
        />

        <button
            v-for="page in visiblePages"
            :key="page"
            class="block w-8 h-8 flex justify-center items-center text-base text-center rounded-[50px] mr-2 max-md:text-sm max-md:w-6 max-md:h-6 hover:bg-Primary-100 active:bg-Primary-200 active:text-Primary-100"
            :class="page == currentPage && 'ring-1 ring-Primary-200 text-Primary-500-Primary'"
            @click="changePage(page)"
        >
            {{ page }}
        </button>

        <UIcon
            name="i-heroicons-chevron-right"
            :disabled="currentPage >= totalPages"
            class="block w-8 h-8 flex justify-center items-center text-xs scale-50"
            :class="
                currentPage >= totalPages
                    ? 'text-gray-300 cursor-none'
                    : 'text-black cursor-pointer hover:text-Primary-400-Hover active:text-Primary-200'
            "
            @click="changePage(currentPage + 1)"
        />
    </div>
    <!-- <b class="block mx-auto w-36 text-center font-thin text-gray-300">{{ currentPage + " / " + totalPages }}</b> -->
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    currentPage: {
        type: Number,
        default: 1,
    },
    totalPages: {
        type: Number,
        default: 5,
    },
    class: {
        type: String,
        default: "",
    },
});
const emit = defineEmits(["updateCurrentPage"]);

// console.log(props.currentPage);
// console.log(props.totalPages);

const visiblePages = computed(() => {
    if (props.totalPages <= 5) return Array.from({ length: props.totalPages }, (_, i) => i + 1);

    let startPage = Math.max(props.currentPage - 2, 1);
    let endPage = startPage + 4;
    if (endPage > props.totalPages) {
        endPage = props.totalPages;
        startPage = Math.max(1, endPage - 4);
    }

    const pages = [];
    for (let page = startPage; page <= endPage; page++) {
        pages.push(page);
    }
    return pages;
});

const changePage = (page) => {
    if (page < 1 || page > props.totalPages) return;
    emit("updateCurrentPage", page);
};
</script>
