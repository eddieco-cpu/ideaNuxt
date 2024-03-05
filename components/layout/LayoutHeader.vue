<template>
    <header class="fixed top-0 w-full z-50 border border-b-neutral-100 shadow bg-white">
        <div
            class="flex items-center justify-between max-w-[363px] md:max-w-[1200px] mx-auto min-h-[52px] md:min-h-[74px]"
        >
            <!-- 漢堡 -->
            <div class="block md:hidden" :class="{ 'w-16': !isShowSearchContent }" @click="openModal('sideMenu')">
                <img src="~assets/images/header/menu.svg" alt="menu" />
            </div>

            <!-- logo -->
            <div class="logo cursor-pointer md:block" :class="{ hidden: isShowSearchContent }">
                <NuxtLink to="/">
                    <img src="~assets/images/header/logo.png" alt="logo" class="w-[160px] md:w-[213px]" />
                </NuxtLink>
            </div>

            <!-- 導覽列 -->
            <ul class="hidden md:flex gap-10 text-Primary-600-Dark-Primary font-medium text-sm">
                <li v-for="(item, index) in navLink" :key="index">
                    <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
                </li>
            </ul>

            <!-- 搜尋欄 -->
            <div class="search md:flex" :class="{ hidden: !isShowSearchContent }">
                <UButtonGroup size="lg" orientation="horizontal" class="shadow-none md:relative">
                    <UInput
                        ref="searchInput"
                        variant="none"
                        placeholder="找點子、找團購"
                        class="bg-Neutral-100 rounded-l-md mr-1"
                        @click="openModal('search')"
                    />

                    <transition name="modal">
                        <LayoutSearch @openModal="openModal" v-if="isShowSearchContent" />
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
            <div class="flex">
                <img
                    src="~assets\images\header\heart.svg"
                    alt="heart"
                    class="mr-5 cursor-pointer flex-1 w-[20px] hidden md:block"
                />
                <img
                    src="~assets/images/header/search-purple.svg"
                    alt="search"
                    class="mr-5 cursor-pointer flex-1 w-[20px] md:hidden"
                    @click="openModal('search')"
                    :class="{ hidden: isShowSearchContent }"
                />

                <div class="relative flex-1 w-[20px]">
                    <img
                        src="~assets/images/header/shoppingCart.svg"
                        alt="shoppingCart"
                        class="cursor-pointer"
                        @click="goToPage('/cart')"
                    />

                    <div
                        class="absolute -right-1 -top-1 bg-Dust-Red-5 rounded-full w-[7.5px] h-[7.5px]"
                        v-if="true"
                    ></div>
                </div>
            </div>

            <!-- 會員 -->
            <div class="hidden md:block">
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
                    @click="goToPage('/member/information')"
                    v-else
                >
                    <img
                        :src="store.userInfo.image"
                        alt="memberPic"
                        class="block rounded-full w-[18px] h-[18px] object-cover"
                    />

                    <span class="font-normal"> 會員中心 </span>

                    <div
                        class="absolute top-full left-0 w-full bg-white rounded-lg py-1 shadow hidden group-hover:block"
                    >
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
        </div>

        <!-- 側邊選單 -->
        <div>
            <Transition name="mask">
                <div
                    class="fixed left-0 top-0 h-full w-full bg-black bg-opacity-50 z-50"
                    @click="hideSideNav = true"
                    v-if="!hideSideNav"
                ></div>
            </Transition>

            <div
                class="w-64 fixed left-0 top-0 h-full bg-white overflow-x-auto transition duration-500 transform z-50"
                :class="{ '-translate-x-full': hideSideNav }"
            >
                <div class="auth py-4 px-7 flex items-center bg-Primary-500-Primary">
                    <!-- 會員未登入 -->
                    <button
                        class="rounded-lg bg-Primary-500-Primary border border-Primary-200 text-white px-3 py-1.5 text-sm flex gap-x-1 items-center justify-center"
                        v-if="!store.isLogin"
                        @click="openModal('login')"
                    >
                        <img src="~assets/images/header/user.svg" />

                        <span class="font-normal"> 登入 /註冊 </span>
                    </button>

                    <!-- 會員已登入 -->
                    <div class="flex" v-else>
                        <button
                            class="rounded-lg bg-Primary-500-Primary border border-Primary-200 text-white px-3 py-1.5 text-sm flex gap-x-1 items-center justify-center"
                            @click="goToPage('/member/information')"
                        >
                            <img
                                :src="store.userInfo.image"
                                alt="memberPic"
                                class="block rounded-full w-[18px] h-[18px] object-cover"
                            />

                            <span class="font-normal"> 會員中心 </span>
                        </button>

                        <button class="underline text-white text-sm ml-3" @click="logout">登出</button>
                    </div>

                    <img
                        src="~assets/images/header/arrow-left.svg"
                        alt="arrow-left"
                        class="ml-auto"
                        @click="hideSideNav = true"
                    />
                </div>

                <UAccordion
                    :items="navAccordionItems"
                    color="black"
                    size="xl"
                    open-icon="i-heroicons-plus"
                    close-icon="i-heroicons-minus"
                    :ui="{
                        item: { padding: 'p-0' },
                    }"
                    class="text-Primary-600-Dark-Primary px-7"
                >
                    <template #category="{ item }">
                        <ul class="text-left bg-Primary-50 py-3 px-5 text-Neutral-900">
                            <li
                                v-for="(list, index) in item.lists"
                                :key="index"
                                class="mb-5 last:mb-0 cursor-pointer"
                                @click="goToPage(list.link)"
                            >
                                <p>{{ list.name }}</p>
                            </li>
                        </ul>
                    </template>

                    <template #proposal="{ item }">
                        <ul class="text-left bg-Primary-50 py-3 px-5 text-Neutral-900">
                            <li
                                v-for="(list, index) in item.lists"
                                :key="index"
                                class="mb-5 last:mb-0 cursor-pointer"
                                @click="goToPage(list.link)"
                            >
                                <p>{{ list.name }}</p>
                            </li>
                        </ul>
                    </template>

                    <template #default="{ item, open }">
                        <UButton
                            color="white"
                            variant="ghost"
                            :ui="{ rounded: 'rounded-none' }"
                            class="text-Primary-600-Dark-Primary disabled:opacity-100 text-base justify-between p-0 pt-4 pb-2"
                            @click="goToPage(item.link)"
                        >
                            <span class="truncate">{{ item.label }}</span>

                            <template #trailing>
                                <div v-show="item.showOpenIcon">
                                    <UIcon
                                        v-if="open"
                                        name="i-heroicons-minus"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200 flex"
                                    />
                                    <UIcon
                                        v-else
                                        name=" i-heroicons-plus"
                                        class="w-5 h-5 ms-auto transform transition-transform duration-200 flex"
                                    />
                                </div>
                            </template>
                        </UButton>
                    </template>
                </UAccordion>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";

const store = useAuthStore();
const emit = defineEmits(["openModal"]);

const searchInput = ref(null);
const isShowSearchContent = ref(false);
const hideSideNav = ref(true);

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
    {
        name: "提案",
        link: "/proposal",
    },
];

const navAccordionItems = [
    {
        label: "分類",
        slot: "category",
        showOpenIcon: true,
        lists: [
            { name: "科技AI", link: "/category/technology-ai" },
            { name: "時尚流行", link: "/category/fashion" },
            { name: "書籍出版", link: "/category/books" },
            { name: "設計藝術", link: "/category/design" },
            { name: "遊戲動漫", link: "/category/gaming" },
            { name: "保健食品", link: "/category/health" },
            { name: "課程教育", link: "/category/education" },
            { name: "攝影圖像", link: "/category/photography" },
            { name: "表演/門票", link: "/category/tickets" },
            { name: "服務/公益", link: "/category/welfare" },
        ],
    },
    {
        label: "群眾集資",
        link: "/category/technology-ai?type=fundraise",
        showOpenIcon: false,
    },
    {
        label: "好評團購",
        link: "/category/technology-ai?type=groupbuying",
        showOpenIcon: false,
    },
    {
        label: "團主推薦",
        link: "/kol",
        showOpenIcon: false,
    },
    {
        label: "好物分享",
        link: "/category",
        showOpenIcon: false,
    },
    {
        label: "關於我們",
        slot: "proposal",
        showOpenIcon: true,
        lists: [
            { name: "關於我們", link: "/" },
            { name: "聯絡我們", link: "/" },
            { name: "隱私權政策", link: "/" },
        ],
    },
    {
        label: "提案",
        link: "/proposal",
        showOpenIcon: false,
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

function openModal(type) {
    if (type === "search") {
        hideSideNav.value = true;
        isShowSearchContent.value = true;
    } else if (type === "close") {
        hideSideNav.value = true;
        isShowSearchContent.value = false;
    } else if (type === "sideMenu") {
        hideSideNav.value = !hideSideNav.value;
        isShowSearchContent.value = false;
    }

    emit("openModal", type);
}

function goToPage(link) {
    if (link) {
        hideSideNav.value = true;

        navigateTo(link);
    }
}

async function logout() {
    store.isLogin = false;
    store.userInfo = {};
    await navigateTo("/");
}
</script>

<style scoped></style>
