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
                <div class="flex items-center gap-x-3 justify-between">
                    <USelectMenu
                        optionAttribute="name"
                        variant="none"
                        size="lg"
                        class="border border-Neutral-100 rounded-md bg-white max-md:flex-1 md:w-[180px]"
                        placeholder="文章"
                        v-model="typeSelected"
                        :options="type"
                    />

                    <USelectMenu
                        variant="none"
                        size="sm"
                        class="border border-Neutral-100 rounded-md bg-white max-md:flex-1 md:w-[130px]"
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
                        <span class="text-Primary-500-Primary mr-1">#</span>{{ typeSelected.name }}
                    </h1>

                    <div class="flex flex-col gap-y-6">
                        <BlogArticle v-for="item in blogList" v-bind="item" />

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

            <div class="md:w-[27%] md:h-screen md:overflow-auto md:sticky top-[120px]">
                <h1 class="text-[#010204] text-xl font-medium mb-4">猜你想看…</h1>
                <div class="flex flex-wrap gap-4">
                    <BlogTag v-for="tag in blogTagsList" :text="tag" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
console.log("route", route.params.name);

const blogList = ref([]);
const blogTagsList = ref([]);

const type = ref([
    { name: "科技AI", params: "technology-ai" },
    { name: "時尚流行", params: "fashion" },
    { name: "3C家電", params: "appliance" },
    { name: "書籍出版", params: "books" },
    { name: "設計藝術", params: "design" },
    { name: "遊戲動漫", params: "gaming" },
    { name: "保健食品", params: "health" },
    { name: "課程教育", params: "education" },
    { name: "攝影圖像", params: "photography" },
    { name: "表演/門票", params: "tickets" },
    { name: "服務/公益", params: "welfare" },
]);
const typeSelected = ref(type.value.find((item) => item.params === route.params.name));

const links = [{ label: "Home", to: "/" }, { label: "好物分享", to: "/blog" }, { label: typeSelected.value.name }];

const sort = ["發表新到舊", "發表舊到新", "最多人觀看", "最多人蒐藏"];
const sortSelected = ref(sort[0]);

const currentPage = ref(10);
const totalPages = ref(20);
const updateCurrentPage = (newPage) => {
    currentPage.value = newPage;
};

getBlogList();
getBlogTagList();

async function getBlogList() {
    const data = await GET("/api/blog");

    if (!!data) {
        blogList.value = data;
    }
}

async function getBlogTagList() {
    const data = await GET("/api/blogTags");

    if (!!data) {
        blogTagsList.value = data;
    }
}

watch(typeSelected, (newVal) => {
    if (!!newVal) {
        navigateTo(`/blog/list/${newVal.params}`);
    }
});
</script>
