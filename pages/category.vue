<template>
    <div class="max-w-80 md:max-w-[1200px] mt-6 mx-auto md:grid md:grid-cols-12 md:gap-x-6 md:mt-10">
        <!-- 下拉選單 -->
        <div class="grid grid-cols-2 gap-3 md:flex md:flex-col md:col-span-2">
            <USelectMenu
                optionAttribute="name"
                variant="none"
                size="lg"
                class="border border-Neutral-100 rounded-md bg-white"
                placeholder="集資/團購"
                v-model="typeSelected"
                :options="type"
            />

            <!-- 手機版分類 -->
            <USelectMenu
                optionAttribute="name"
                variant="none"
                size="lg"
                class="border border-Neutral-100 rounded-md bg-white md:hidden"
                placeholder="分類"
                v-model="categorySelected"
                :options="category"
            />

            <!-- 桌機版分類 -->
            <div class="hidden md:block px-4 py-3">
                <h2 class="text-Neutral-900 text-xl font-medium mb-7">分類</h2>

                <div class="flex flex-col gap-y-5 items-start">
                    <NuxtLink :to="item.link" class="text-Neutral-900" v-for="(item, index) in category" :key="index">
                        {{ item.name }}
                    </NuxtLink>
                </div>
            </div>
        </div>

        <NuxtPage class="md:col-span-10" />
    </div>
</template>

<script setup>
const route = useRoute();

const type = ref([
    { name: "集資", query: "fundraise" },
    { name: "團購", query: "groupbuying" },
]);
const typeSelected = ref(type.value[0]);

if (route.query.type) {
    typeSelected.value = type.value.find((item) => item.query === route.query.type);
}

const category = computed(() => {
    const link = [
        {
            name: "科技AI",
            link: `/category/technology-ai?type=${typeSelected.value.query}`,
        },
        {
            name: "時尚流行",
            link: `/category/fashion?type=${typeSelected.value.query}`,
        },
        {
            name: "3C家電",
            link: `/category/appliance?type=${typeSelected.value.query}`,
        },
        {
            name: "書籍出版",
            link: `/category/books?type=${typeSelected.value.query}`,
        },
        {
            name: "設計藝術",
            link: `/category/design?type=${typeSelected.value.query}`,
        },
        {
            name: "遊戲動漫",
            link: `/category/gaming?type=${typeSelected.value.query}`,
        },
        {
            name: "保健食品",
            link: `/category/health?type=${typeSelected.value.query}`,
        },
        {
            name: "課程教育",
            link: `/category/education?type=${typeSelected.value.query}`,
        },
        {
            name: "攝影圖像",
            link: `/category/photography?type=${typeSelected.value.query}`,
        },
        {
            name: "表演/門票",
            link: `/category/tickets?type=${typeSelected.value.query}`,
        },
        {
            name: "服務/公益",
            link: `/category/welfare?type=${typeSelected.value.query}`,
        },
    ];

    return link;
});

const categorySelected = ref(category.value[0]);

watch(categorySelected, async (newValue) => {
    await navigateTo(`${newValue.link}`);
});

watch(typeSelected, async (newValue) => {
    await navigateTo({
        path: route.path,
        query: {
            type: newValue.query,
        },
    });
});

watch(
    () => route.query,
    (query) => {
        if (!!query?.type) {
            typeSelected.value = type.value.find((item) => item.query === query.type);

            if (process.client) {
                window.scrollTo({
                    top: 0,
                });
            }
        }
    },
    { immediate: true },
);
</script>

<style scoped>
.router-link-exact-active {
    color: #6b56ca;
}
</style>
