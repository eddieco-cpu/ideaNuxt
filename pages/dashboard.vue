<template>
    <div>
        <!-- <input type="number" v-model="stepsStatus" /> -->
        <section
            class="max-w-[1082px] mx-auto py-4 mt-8 rounded-lg bg-white max-md:max-w-[100%-24px] max-md:mt-6 max-xl:mx-3 max-xl:max-w-[100%]"
        >
            <ul
                class="w-[calc(100%-200px)] max-md:w-[calc(100%-20px)] mx-auto flex justify-between items-start relative"
            >
                <li
                    :key="step.id"
                    v-for="(step, stepIndex) in stepsData"
                    class="w-16 flex flex-col justify-center items-center gap-y-2 relative z-[1]"
                >
                    <div
                        class="w-4 h-4 rounded-full flex justify-center items-center"
                        :class="stepIndex > stepsStatus ? ' bg-Primary-400-Hover' : ' bg-Primary-500-Primary'"
                    >
                        <template v-if="stepIndex >= stepsStatus">
                            <div class="w-2 h-2 rounded-full bg-white"></div>
                        </template>
                        <template v-else>
                            <UIcon name="i-heroicons-check" class="block size-[13px] font-black text-white" />
                        </template>
                    </div>
                    <p
                        class="text-xs font-medium"
                        :class="stepIndex > stepsStatus ? ' text-Neutral-500-Primary' : 'text-Primary-500-Primary'"
                    >
                        {{ step.name }}
                    </p>
                </li>
                <li
                    class="mx-auto absolute top-[7px] left-0 right-0 w-[calc(100%-64px)] h-[2px] bg-Primary-500-Primary"
                    :style="
                        stepsStatus < 3
                            ? ` background-image: linear-gradient(to right, rgb(107,86,202) ${stepsStatus * 33.3333}%, rgb(145,127,221) ${stepsStatus * 33.3333}%);`
                            : ''
                    "
                ></li>
            </ul>
        </section>
        <section
            class="max-w-[1082px] mx-auto p-3 mt-8 rounded-lg bg-white max-md:max-w-[100%-24px] max-md:mt-3 max-xl:mx-3 max-xl:max-w-[100%]"
        >
            <div class="flex justify-between items-center gap-x-2">
                <div class="flex justify-start items-center">
                    <picture class="block w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 max-md:w-16 max-md:h-10">
                        <img :src="helperPicture()" alt="" class="block w-full h-full object-cover" />
                    </picture>
                    <article class="ml-2">
                        <p class="text-Primary-500-Primary flex justify-start items-center text-sm">
                            <span class="px-2 py-1 bg-Primary-100 rounded mr-3">群眾集資</span>
                            <span>#C00001</span>
                        </p>
                        <p class="line-clamp-2 max-md:text-sm">
                            聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的最佳音樂夥伴
                        </p>
                    </article>
                </div>

                <!-- start -->
                <UiButton class="max-w-[156px] max-md:max-w-[70px] max-md:text-sm" v-if="dataStatus === 'start'"
                    >提交送審</UiButton
                >

                <!-- inProgress -->
                <UiButton
                    class="max-w-[156px] pointer-events-none max-md:max-w-[70px] max-md:text-sm"
                    type="prohibit"
                    v-if="dataStatus == 'inProgresss'"
                    >審核中</UiButton
                >

                <!-- completed -->
                <button
                    class="w-8 h-8 border-2 border-Primary-100 rounded-lg flex justify-center items-center flex-shrink-0"
                >
                    <UIcon
                        name="i-heroicons-arrow-top-right-on-square"
                        class="block size-[14px] text-Primary-500-Primary"
                    />
                </button>
            </div>
        </section>
        <div
            class="md:flex md:gap-x-7 md:mx-auto md:pt-10 max-md:mt-3 xl:max-w-[1082px] max-xl:max-w-[calc(100%-24px)] max-md:max-w-[100%]"
        >
            <!--  -->
            <div class="md:max-w-[256px]">
                <!-- 導航列 -->
                <nav
                    ref="dashboardNav"
                    class="dashboard-nav flex flex-nowrap gap-x-8 overflow-x-auto bg-white max-md:px-3 md:px-0 md:flex-col md:gap-y-2 md:rounded-lg md:overflow-hidden md:w-[256px]"
                >
                    <template v-for="(item, index) in dashboardNavList" :key="item.id">
                        <template v-if="item.pathName !== 'index'">
                            <nuxt-link
                                :to="item.link"
                                class="flex gap-x-3 flex-shrink-0 items-center border-b-2 border-white max-md:py-3 md:py-4 md:px-6 md:border-none"
                                :class="
                                    $route.path.includes(item.pathName)
                                        ? 'router-link-exact-active pointer-events-none'
                                        : ''
                                "
                                @click="memberTypeChoose(index)"
                            >
                                <UIcon :name="`${item.imgUrl}`" />
                                <span>{{ item.name }}</span>
                            </nuxt-link>
                        </template>
                        <template v-else>
                            <nuxt-link
                                :to="item.link"
                                class="flex gap-x-3 flex-shrink-0 items-center border-b-2 border-white max-md:py-3 md:py-4 md:px-6 md:border-none"
                                @click="memberTypeChoose(index)"
                            >
                                <UIcon :name="`${item.imgUrl}`" />
                                <span>{{ item.name }}</span>
                            </nuxt-link>
                        </template>
                    </template>
                </nav>
            </div>

            <!-- 導航列顯示內容 -->
            <NuxtPage
                class="max-md:max-w-[323px] mx-auto max-w-full md:flex-1 max-md:mt-6 max-xl:overflow-x-auto ring-1"
            />
        </div>
    </div>
</template>

<script setup>
//
const dataStatus = ref("inProgress");
const dataStatusOptions = ref(["start", "completed", "inProgress"]);

//
const stepsStatus = ref(4); //0~4
const stepsData = ref([
    {
        id: "1",
        name: "提案準備",
    },
    {
        id: "2",
        name: "專案修正中",
    },
    {
        id: "3",
        name: "審核中",
    },
    {
        id: "4",
        name: "金流串接中",
    },
]);

//
const dashboardNav = ref(null);
const dashboardNavListDep = [
    {
        id: "/",
        name: "數據總覽",
        imgUrl: "i-heroicons-rectangle-group",
        link: "/dashboard/",
        pathName: "index",
    },
    {
        id: "/details",
        name: "編輯商品詳情",
        imgUrl: "i-heroicons-rocket-launch",
        link: "/dashboard/details/basic",
        pathName: "details",
    },
    {
        id: "/progress",
        name: "募資進度更新",
        imgUrl: "i-heroicons-newspaper",
        link: "/dashboard/progress",
        pathName: "progress",
    },
    {
        id: "/orders",
        name: "訂單總覽",
        imgUrl: "i-heroicons-shopping-cart",
        link: "/dashboard/orders",
        pathName: "orders",
    },
    {
        id: "/proposer",
        name: "提案人資料",
        imgUrl: "i-heroicons-home-modern",
        link: "/dashboard/proposer",
        pathName: "proposer",
    },
    {
        id: "/payment",
        name: "金流帳號設定",
        imgUrl: "i-heroicons-credit-card",
        link: "/dashboard/payment",
        pathName: "payment",
    },
];
const dashboardNavList = computed(() => {
    switch (stepsStatus.value) {
        case 0:
            return dashboardNavListDep.filter((item, i) => i <= 1);
        case 1:
            return dashboardNavListDep.filter((item, i) => i <= 1);
        case 2:
            return dashboardNavListDep.filter((item, i) => i <= 1);
        case 3:
            return dashboardNavListDep.filter((item) => item.id !== "/orders");
        case 4:
            return dashboardNavListDep;
    }
});

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
