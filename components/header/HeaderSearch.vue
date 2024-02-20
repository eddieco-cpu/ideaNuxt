<template>
    <div
        class="modal-container rounded-lg py-8 px-6 md:p-5 bg-white max-h-lvh overflow-y-auto absolute left-0 z-[999]"
        :class="showClass"
    >
        <img
            src="~assets/images/icon/close-icon.svg"
            alt=""
            class="bg-Neutral-400-Hover rounded-3xl absolute right-4 top-4 cursor-pointer"
            @click="openModal"
        />
        <div class="pb-6 border-b border-Neutral-300">
            <h3 class="text-Primary-500-Primary font-medium mb-4">熱門搜尋</h3>

            <div class="flex flex-wrap items-center gap-3">
                <button
                    class="px-2 py-1 text-Primary-500-Primary bg-Primary-50 rounded"
                    v-for="(item, index) in hotSearch"
                    :key="index"
                >
                    {{ item }}
                </button>
            </div>
        </div>

        <div class="pt-6">
            <h3 class="text-Neutral-800 font-medium mb-4">歷史紀錄</h3>

            <div class="flex flex-wrap items-center gap-3">
                <button
                    class="px-2 py-1 text-Neutral-800 bg-Neutral-200 rounded flex items-center gap-x-1"
                    v-for="(item, index) in historySearch"
                    :key="index"
                >
                    {{ item }} <img src="~assets/images/icon/close-serch-icon.svg" alt="close" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(["openModal"]);

const { isMobile } = defineProps({
    isMobile: {
        type: Boolean,
        default: false,
    },
});

const hotSearch = [
    "收納",
    "升降桌",
    "拖鞋",
    "收納",
    "升降桌",
    "拖鞋",
    "收納",
    "升降桌",
    "拖鞋",
    "收納",
    "升降桌",
    "拖鞋",
];
const historySearch = [
    "收納",
    "升降桌",
    "拖鞋",
    "收納",
    "升降桌",
    "拖鞋",
    "收納",
    "升降桌",
    "拖鞋",
    "收納",
    "升降桌",
    "拖鞋",
];

function openModal() {
    emit("openModal");
}

const showClass = computed(() => {
    if (isMobile) {
        return "w-full h-lvh bg-Neutral-bg top-[52px]";
    } else {
        return "min-w-[532px] top-[75px]";
    }
});
</script>
