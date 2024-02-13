<template>
    <div class="md:flex md:gap-x-10 md:w-[1082px] md:mx-auto md:pt-8">
        <!-- 頭像 -->
        <div class="bg-white md:w-[216px] md:bg-transparent md:mt-6">
            <div class="w-[137px] mx-auto py-4">
                <div class="relative">
                    <img
                        src="https://avatars.githubusercontent.com/u/739984?v=4"
                        alt="avatar"
                        class="block rounded-full w-[120px] mx-auto"
                    />

                    <div
                        class="absolute bg-Primary-500-Primary bottom-0 right-2 w-8 h-8 rounded-full bg-no-repeat bg-center bg-[length:16px] bg-[url('/_nuxt/assets/images/icon/camera.svg')]"
                    ></div>
                </div>

                <p class="text-lg text-center font-medium mt-3">Hi, 09*****123</p>
            </div>

            <!-- 導航列 -->
            <nav
                ref="memberNav"
                class="member-nav px-6 flex flex-nowrap gap-x-8 overflow-x-auto md:flex-col md:gap-y-2 md:items-center"
            >
                <nuxt-link
                    v-for="(item, index) in memberList"
                    :key="index"
                    :to="item.link"
                    class="flex gap-x-3 py-3 flex-shrink-0 items-center md:py-2 md:px-8 md:border-none"
                    :class="activeNav(item.name)"
                    @click="memberTypeChoose(item.name, index)"
                >
                    <img :src="item.imgUrl" :alt="item.name" />
                    <span>{{ item.name }}</span>
                </nuxt-link>
            </nav>
        </div>

        <!-- 導航列顯示內容 -->
        <NuxtPage class="max-w-[323px] mx-auto mt-8 md:col-span-9 md:max-w-full md:flex-1" />
    </div>
</template>

<script setup>
const navSelected = ref("基本資料");
const memberNav = ref(null);

const memberList = ref([
    {
        name: "基本資料",
        imgUrl: "/_nuxt/assets/images/icon/user-info-icon.svg",
        link: "/member/information",
    },
    {
        name: "我的地址",
        imgUrl: "/_nuxt/assets/images/icon/key-icon.svg",
        link: "/member/address",
    },
    {
        name: "修改密碼",
        imgUrl: "/_nuxt/assets/images/icon/home-icon.svg",
        link: "/member/password",
    },
    {
        name: "我的訂單",
        imgUrl: "/_nuxt/assets/images/icon/order-icon.svg",
        link: "/member/order",
    },
    {
        name: "我的追蹤",
        imgUrl: "/_nuxt/assets/images/icon/heart-small-icon.svg",
        link: "/member/follow",
    },
    {
        name: "提案管理",
        imgUrl: "/_nuxt/assets/images/icon/rocket-icon.svg",
        link: "/member/proposal",
    },
]);

const activeNav = (type) => {
    if (type === navSelected.value) {
        return "border-b-2 border-Primary-500-Primary text-Primary-500-Primary font-medium md:bg-Primary-100 md:rounded-lg";
    } else {
        return "border-b-2 border-white";
    }
};

function memberTypeChoose(type, index) {
    navSelected.value = type;

    memberNav.value.scrollTo({
        left: 122 * index,
        behavior: "smooth",
    });
}
</script>

<style scoped>
.member-nav::-webkit-scrollbar {
    display: none;
}
</style>
