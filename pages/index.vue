<template>
    <section>
        <div class="bg-white overflow-hidden">
            <nav class="flex justify-center items-center py-3">
                <NuxtLink
                    to="/"
                    class="whitespace-nowrap text-sm font-medium text-Neutral-900 hover:text-Primary-400-Hover active:text-Primary-600-Dark-Primary mx-6 transition-colors duration-200 ease-in-out"
                    v-for="cate in category"
                    :key="encodeURIComponent(cate)"
                    >{{ cate }}</NuxtLink
                >
            </nav>
            <div class="my-10">
                <!-- <ModalSlider /> -->
            </div>
        </div>
    </section>
</template>

<script setup>
const category = reactive([
    "科技AI",
    "時尚流行",
    "3C家電",
    "書籍出版",
    "設計藝術",
    "遊戲動漫",
    "保健食品",
    "課程教育",
    "攝影圖像",
    "表演/門票",
    "服務/公益",
]);
</script>
