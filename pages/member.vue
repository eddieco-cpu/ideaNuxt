<template>
    <div class="md:flex md:gap-x-10 md:max-w-[1082px] md:mx-auto md:pt-8">
        <!-- 頭像 -->
        <div class="bg-white md:max-w-[216px] md:bg-transparent md:mt-6">
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
                    class="flex gap-x-3 py-3 flex-shrink-0 items-center border-b-2 border-white md:py-2 md:px-8 md:border-none"
                    @click="memberTypeChoose(index)"
                >
                    <img :src="item.imgUrl" :alt="item.name" class="default" />
                    <img :src="item.imgActiveUrl" :alt="item.name" class="active" />
                    <span>{{ item.name }}</span>
                </nuxt-link>
            </nav>
        </div>

        <!-- 導航列顯示內容 -->
        <NuxtPage class="max-w-[323px] mx-auto mt-8 md:col-span-9 md:max-w-full md:flex-1" />
    </div>
</template>

<script setup>
const memberNav = ref(null);

const memberList = ref([
    {
        name: "基本資料",
        imgUrl: "/_nuxt/assets/images/icon/user-info-icon.svg",
        imgActiveUrl: "/_nuxt/assets/images/icon/user-info-active-icon.svg",
        link: "/member/information",
    },
    {
        name: "我的地址",
        imgUrl: "/_nuxt/assets/images/icon/home-icon.svg",
        imgActiveUrl: "/_nuxt/assets/images/icon/home-active-icon.svg",
        link: "/member/address",
    },
    {
        name: "修改密碼",
        imgUrl: "/_nuxt/assets/images/icon/key-icon.svg",
        imgActiveUrl: "/_nuxt/assets/images/icon/key-active-icon.svg",
        link: "/member/password",
    },
    {
        name: "我的訂單",
        imgUrl: "/_nuxt/assets/images/icon/order-icon.svg",
        imgActiveUrl: "/_nuxt/assets/images/icon/order-active-icon.svg",
        link: "/member/order",
    },
    {
        name: "我的追蹤",
        imgUrl: "/_nuxt/assets/images/icon/heart-small-icon.svg",
        imgActiveUrl: "/_nuxt/assets/images/icon/heart-small-active-icon.svg",
        link: "/member/follow",
    },
    {
        name: "提案管理",
        imgUrl: "/_nuxt/assets/images/icon/rocket-icon.svg",
        imgActiveUrl: "/_nuxt/assets/images/icon/rocket-smaill-active-icon.svg",
        link: "/member/proposal",
    },
]);

function memberTypeChoose(index) {
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

.router-link-exact-active {
    border-radius: 8px;
    background-color: #e5defa;
    color: #6b56ca;
}

img.active {
    display: none;
}

.router-link-exact-active img.default {
    display: none;
}

.router-link-exact-active img.active {
    display: block;
}

@media screen and (width < 768px) {
    .router-link-exact-active {
        border-radius: 8px;
        background-color: transparent;
        color: #6b56ca;
        border-bottom: 2px solid #6b56ca;
        border-radius: 0px;
    }
}
</style>
