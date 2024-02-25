<template>
    <div class="">
        <!-- 導航列 -->
        <div
            class="mb-3 max-md:w-44 max-md:relative max-md:h-9 max-md:bg-white max-md:mt-8 max-md:rounded-md max-md:ring-1 ring-gray-300"
        >
            <p
                class="hidden max-md:flex justify-between items-center w-full h-full px-3 py-2 max-md:rounded-md cursor-pointer"
                @click="detailsNavSwitcher = !detailsNavSwitcher"
            >
                {{ detailsNavList.find((el) => $route.path.startsWith(el.link)).name }}
                <UIcon name="i-heroicons-chevron-down" class="block w-4 h-4 text-Neutral-500-Primary" />
            </p>
            <nav
                ref="detailsNav"
                class="details-nav flex flex-nowrap gap-x-8 overflow-x-auto max-md:flex-col max-md:absolute max-md:top-10 max-md:left-0 max-md:bg-white max-md:w-full max-md:z-[2] max-md:ring-1 ring-gray-300 max-md:rounded"
                :class="{ 'max-md:hidden': !detailsNavSwitcher }"
                @click="detailsNavSwitcher = false"
            >
                <nuxt-link
                    v-for="(item, index) in detailsNavList"
                    :key="index"
                    :to="item.link"
                    class="flex-shrink-0 break-keep h-9 font-medium max-md:flex max-md:items-center max-md:justify-center max-md:font-normal max-md:hover:bg-Primary-50 max-md:active:bg-Primary-50"
                    @click="memberTypeChoose(index)"
                >
                    <span>{{ item.name }}</span>
                </nuxt-link>
            </nav>
        </div>

        <!-- 導航列顯示內容 -->
        <NuxtPage class="mx-auto md:max-w-full md:flex-1 ring-1 bg-white rounded-lg p-6 min-h-96" />
    </div>
</template>

<script setup>
// import { useAuthStore } from "@/stores/auth";
// import Icon from "assets/images/";

// const store = useAuthStore();

const detailsNavSwitcher = ref(false);

const detailsNav = ref(null);

const detailsNavList = ref([
    {
        name: "基本資料",
        link: "/dashboard/details/basic",
    },
    {
        name: "商品介紹",
        link: "/dashboard/details/product",
    },
    {
        name: "優惠方案",
        link: "/dashboard/details/proposals",
    },
    {
        name: "常見問題",
        link: "/dashboard/details/faq",
    },
]);

function memberTypeChoose(index) {
    detailsNav.value.scrollTo({
        left: 122 * index,
        behavior: "smooth",
    });
}
</script>

<style scoped>
.details-nav::-webkit-scrollbar {
    display: none;
}

.router-link-exact-active {
    color: #6b56ca;
    border-bottom: 2px solid #6b56ca;
}

@media screen and (width < 768px) {
    .router-link-exact-active {
        color: #6b56ca;
        border-bottom: 0px solid #6b56ca;
    }
}
</style>
