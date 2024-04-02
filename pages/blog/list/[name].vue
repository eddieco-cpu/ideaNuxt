<template>
    <div class="pt-4 w-full max-w-[323px] md:max-w-[1200px] mx-auto">
        <UBreadcrumb
            divider="/"
            :links="links"
            :ui="{
                base: 'font-normal',
                active: 'text-black font-normal',
                inactive: 'text-Neutral-600-Dark-Primary text-sm',
            }"
            class="mb-5"
        />

        <div class="flex flex-col md:flex-row md:justify-between md:flex-wrap gap-y-8">
            <div class="flex flex-col gap-y-8 md:w-[67%]">
                <!-- filter -->
                <div class="flex items-center gap-x-3">
                    <USelectMenu
                        optionAttribute="name"
                        variant="none"
                        size="lg"
                        class="border border-Neutral-100 rounded-md bg-white flex-1"
                        placeholder="文章"
                        v-model="typeSelected"
                        :options="type"
                    />

                    <USelectMenu
                        variant="none"
                        size="sm"
                        class="border border-Neutral-100 rounded-md bg-white flex-1"
                        placeholder="排序"
                        v-model="sortSelected"
                        :options="sort"
                    >
                        <template #trailing>
                            <img src="~assets/images/icon/sort-icon.svg" alt="sort" />
                        </template>
                    </USelectMenu>
                </div>

                <div>
                    <h1 class="text-Neutral-900 text-xl font-medium pb-4 mb-6 border-b border-b-Neutral-300">
                        <span class="text-Primary-500-Primary mr-1">#</span>科技AI
                    </h1>

                    <div class="flex flex-col gap-y-6">
                        <BlogArticle v-for="item in 10" />

                        <div class="pt-3 border-t border-t-Neutral-30">
                            <UiPagination
                                :currentPage="currentPage"
                                :totalPages="totalPages"
                                @updateCurrentPage="updateCurrentPage"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="md:w-[27%]">
                <h1 class="text-[#010204] text-xl font-medium mb-4">猜你想看…</h1>
                <div class="flex flex-wrap gap-4">
                    <BlogTag v-for="item in 10" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
console.log("route", route.params.name);

const links = [{ label: "Home", to: "/" }, { label: "好物分享", to: "/blog" }, { label: "3C科技" }];

const type = ref([
    { name: "科技AI", query: "technology-ai" },
    { name: "時尚流行", query: "fashion" },
    { name: "3C家電", query: "appliance" },
    { name: "書籍出版", query: "books" },
    { name: "設計藝術", query: "design" },
    { name: "遊戲動漫", query: "gaming" },
    { name: "保健食品", query: "health" },
    { name: "課程教育", query: "education" },
    { name: "攝影圖像", query: "photography" },
    { name: "表演/門票", query: "tickets" },
    { name: "服務/公益", query: "welfare" },
]);
const typeSelected = ref(type.value[0]);

const sort = ["發表新到舊", "發表舊到新", "最多人觀看", "最多人蒐藏"];
const sortSelected = ref(sort[0]);

const currentPage = ref(10);
const totalPages = ref(20);
const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
};
</script>
