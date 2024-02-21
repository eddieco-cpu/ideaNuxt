<template>
    <header class="py-4 fixed top-0 w-full z-50 border border-b-neutral-100 shadow bg-white">
        <div class="flex items-center justify-between max-w-[1200px] mx-auto">
            <!-- logo -->
            <div class="logo cursor-pointer">
                <NuxtLink to="/">
                    <img src="~assets/images/header/logo.png" alt="logo" width="213" />
                </NuxtLink>
            </div>

            <!-- 導覽列 -->
            <ul class="flex gap-10 text-Primary-600-Dark-Primary font-medium text-sm">
                <li v-for="(item, index) in navLink" :key="index">
                    <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
                </li>
            </ul>

            <!-- 搜尋欄 -->
            <div class="search flex">
                <UButtonGroup size="lg" orientation="horizontal" class="shadow-none relative">
                    <UInput
                        variant="none"
                        placeholder="找點子、找團購"
                        class="bg-Neutral-100 rounded-l-md mr-1"
                        @click="openModal('search')"
                    />

                    <transition name="modal">
                        <HeaderSearch @openModal="openModal" v-if="isShowSearchContent" />
                    </transition>

                    <UButton
                        color="gray"
                        variant="ghost"
                        class="bg-Neutral-100 hover:bg-opacity-30 border border-Neutral-100 hover:border-Neutral-100 transition duration-500 text-Primary-400-Hover px-3 py-1.5"
                    >
                        <template #leading>
                            <img src="~assets/images/header/search.svg" />
                        </template>
                    </UButton>
                </UButtonGroup>
            </div>

            <!-- 購物車 -->
            <div>
                <div class="flex">
                    <img src="~assets\images\header\heart.svg" alt="heart" class="mr-5 cursor-pointer" />

                    <div class="relative">
                        <img src="~assets/images/header/shoppingCart.svg" alt="shoppingCart" class="cursor-pointer" />

                        <div
                            class="absolute -right-1 -top-1 bg-Dust-Red-5 rounded-full w-[7.5px] h-[7.5px]"
                            v-if="true"
                        ></div>
                    </div>
                </div>
            </div>

            <!-- 會員未登入 -->
            <button
                class="bg-Primary-50 px-4 py-2 flex items-center gap-x-1 rounded-lg text-sm text-Primary-400-Hover"
                v-if="!store.isLogin"
                @click="openModal('login')"
            >
                <img src="~assets/images/header/user-purple.svg" class="block w-[18px] h-[18px]" />

                <span class="font-normal"> 登入 /註冊 </span>
            </button>

            <!-- 會員已登入 -->
            <button
                class="member-center relative bg-Primary-50 px-4 py-2 flex items-center gap-x-1 rounded-lg text-sm text-Primary-400-Hover group"
                v-else
            >
                <img
                    :src="store.userInfo.image"
                    alt="memberPic"
                    class="block rounded-full w-[18px] h-[18px] object-cover"
                />

                <span class="font-normal"> 會員中心 </span>

                <div class="absolute top-full left-0 w-full bg-white rounded-lg py-1 shadow hidden group-hover:block">
                    <ul
                        class="flex flex-col items-center [&>*:nth-child(4)]:border-t-Neutral-200 [&>*:nth-child(4)]:border-t"
                    >
                        <li
                            class="text-black hover:bg-Primary-50 w-full"
                            v-for="(item, index) in memberCenterLink"
                            :key="index"
                        >
                            <nuxt-link class="block w-full py-2" :to="item.link">{{ item.name }}</nuxt-link>
                        </li>
                    </ul>

                    <button
                        class="bg-white border border-Primary-50 px-4 py-2 rounded-lg text-sm text-Primary-400-Hover w-[80px] mt-2"
                        @click="logout"
                    >
                        <span class="text-Primary-400-Hover"> 登出 </span>
                    </button>
                </div>
            </button>
        </div>
    </header>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";

const store = useAuthStore();

const emit = defineEmits(["openModal"]);

const isShowSearchContent = ref(false);

const navLink = [
    {
        name: "群眾集資",
        link: "/category/technology-ai?type=fundraise",
    },
    {
        name: "好評團購",
        link: "/category/technology-ai?type=groupbuying",
    },
    {
        name: "團主推薦",
        link: "/kol",
    },
    {
        name: "好物分享",
        link: "/category",
    },
];

const memberCenterLink = [
    {
        name: "基本資料",
        link: "/member/information",
    },
    {
        name: "我的追蹤",
        link: "/member/follow",
    },
    {
        name: "贊助紀錄",
        link: "/",
    },
    {
        name: "提案管理",
        link: "/member/proposal/edit",
    },
    {
        name: "團隊設定",
        link: "/member/proposal/group-edit",
    },
];

function openModal(type = "") {
    if (type === "search") {
        isShowSearchContent.value = true;
    } else {
        isShowSearchContent.value = false;
    }

    emit("openModal", type);
}

async function logout() {
    store.isLogin = false;
    store.userInfo = {};
    await navigateTo("/");
}
</script>

<style scoped></style>
