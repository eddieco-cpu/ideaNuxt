<template>
    <div class="md:flex md:gap-x-7 md:max-w-[1082px] md:mx-auto md:pt-8">
        <!--  -->
        <!--  -->
        <div class="bg-white md:max-w-[256px]">
            <!-- 導航列 -->
            <nav
                ref="dashboardNav"
                class="dashboard-nav flex flex-nowrap gap-x-8 overflow-x-auto max-md:px-3 md:px-0 md:flex-col md:gap-y-2 md:rounded-lg md:overflow-hidden md:w-[256px] ring-1"
            >
                <nuxt-link
                    v-for="(item, index) in dashboardNavList"
                    :key="index"
                    :to="item.link"
                    class="flex gap-x-3 flex-shrink-0 items-center border-b-2 border-white max-md:py-3 md:py-4 md:px-6 md:border-none"
                    @click="memberTypeChoose(index)"
                >
                    <UIcon :name="`${item.imgUrl}`" />
                    <span>{{ item.name }}</span>
                </nuxt-link>
            </nav>
        </div>

        <!-- 導航列顯示內容 -->
        <NuxtPage class="max-w-[323px] mx-auto md:col-span-9 md:max-w-full md:flex-1 ring-1" />
    </div>
</template>

<script setup>
// import { useAuthStore } from "@/stores/auth";
// import Icon from "assets/images/";

// const store = useAuthStore();

const dashboardNav = ref(null);

const dashboardNavList = ref([
    {
        name: "數據總覽",
        imgUrl: "i-heroicons-rectangle-group",
        link: "/dashboard/",
    },
    {
        name: "專案基本內容",
        imgUrl: "i-heroicons-pencil-square",
        link: "/dashboard/basic",
    },
    {
        name: "編輯商品詳情",
        imgUrl: "i-heroicons-rocket-launch",
        link: "/dashboard/product",
    },
    {
        name: "編輯方案",
        imgUrl: "i-heroicons-shopping-bag",
        link: "/dashboard/proposal",
    },
    {
        name: "常見問與答",
        imgUrl: "i-heroicons-megaphone",
        link: "/dashboard/faq",
    },
    {
        name: "募資進度更新",
        imgUrl: "i-heroicons-newspaper",
        link: "/dashboard/progress",
    },
    {
        name: "訂單總覽",
        imgUrl: "i-heroicons-shopping-cart",
        link: "/dashboard/orders",
    },
    {
        name: "提案人資料",
        imgUrl: "i-heroicons-home-modern",
        link: "/dashboard/proposer",
    },
    {
        name: "金流帳號設定",
        imgUrl: "i-heroicons-credit-card",
        link: "/dashboard/payment",
    },
]);

function memberTypeChoose(index) {
    dashboardNav.value.scrollTo({
        left: 122 * index,
        behavior: "smooth",
    });
}
</script>

<style scoped>
.dashboard-nav::-webkit-scrollbar {
    display: none;
}

.router-link-exact-active {
    background-color: #f7f5fd;
    color: #6b56ca;
    border-right: 2px solid #6b56ca;
}

@media screen and (width < 768px) {
    .router-link-exact-active {
        background-color: transparent;
        color: #6b56ca;
        border-right: 0;
        border-bottom: 2px solid #6b56ca;
    }
}
</style>
