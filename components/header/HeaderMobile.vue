<template>
    <header class="px-1.5 fixed top-0 w-full z-50 bg-white">
        <div class="py-4 px-2.5 flex justify-between">
            <div class="w-16" @click="hideSideNav = !hideSideNav">
                <img src="~assets/images/header/menu.svg" alt="menu" />
            </div>

            <div class="logo">
                <img src="~assets/images/header/logo.png" alt="logo" width="160" />
            </div>

            <div class="search-area">
                <div class="search flex">
                    <img src="~assets/images/header/search-purple.svg" class="mr-5" alt="search" />
                    <img src="~assets/images/header/shoppingCart.svg" alt="shoppingCart" />
                </div>
            </div>
        </div>
    </header>

    <!-- 側邊選單 -->
    <div>
        <Transition name="mask">
            <div
                class="fixed left-0 top-0 h-full w-full bg-black bg-opacity-50 transition duration-1000 z-50"
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
                    @click="openModal"
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
                :items="navItems"
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
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";

const store = useAuthStore();

const navItems = [
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
        link: "/member/proposal",
        showOpenIcon: false,
    },
];

const emit = defineEmits(["openModal"]);

const hideSideNav = ref(true);

function goToPage(link) {
    if (link) {
        hideSideNav.value = true;

        navigateTo(link);
    }
}

function openModal() {
    hideSideNav.value = true;
    emit("openModal", "login");
}

async function logout() {
    store.isLogin = false;
    store.userInfo = {};
    await navigateTo("/");
}
</script>

<style scoped>
.mask-enter-active,
.mask-leave-active {
    transition: opacity 0.5s ease;
}

.mask-enter-from,
.mask-leave-to {
    opacity: 0;
}
</style>
