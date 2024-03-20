<template>
    <div class="">
        <div
            class="mb-3 max-md:w-44 max-md:relative max-md:h-9 max-md:bg-white max-md:mt-8 max-md:rounded-md max-md:ring-1 ring-gray-300"
        >
            <p
                class="hidden max-md:flex justify-between items-center w-full h-full px-3 py-2 max-md:rounded-md cursor-pointer"
                @click="detailsNavSwitcher = !detailsNavSwitcher"
            >
                {{ detailsNavList.find((el) => $route.path.includes(el.pathName))?.name || "" }}
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
                    :class="
                        $route.path.includes(item.pathName)
                            ? 'router-link-active router-link-exact-active pointer-events-none'
                            : ''
                    "
                    @click="memberTypeChoose(index)"
                >
                    <span>{{ item.name }}</span>
                </nuxt-link>
            </nav>
        </div>

        <NuxtPage class="mx-auto md:max-w-full min-h-96 bg-transparent" />
    </div>
</template>
<!-- <template>
    <div>
        <NuxtPage class="mx-auto md:max-w-full min-h-96" />
    </div>
</template> -->

<script setup>
//
const route = useRoute();
const dashboardId = route.params.dashboardId;

const fullPaths = route.fullPath.split("/").filter((el) => el);
console.log("fullPaths", fullPaths);

//
const detailsNavSwitcher = ref(false);

const detailsNav = ref(null);

const detailsNavList = ref([
    {
        name: "基本資料",
        link: "/dashboard/" + dashboardId + "/details/basic",
        pathName: "basic",
    },
    {
        name: "商品介紹",
        link: "/dashboard/" + dashboardId + "/details/product",
        pathName: "product",
    },
    {
        name: "優惠方案",
        link: "/dashboard/" + dashboardId + "/details/proposals",
        pathName: "proposals",
    },
    {
        name: "常見問題",
        link: "/dashboard/" + dashboardId + "/details/faq",
        pathName: "faq",
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
