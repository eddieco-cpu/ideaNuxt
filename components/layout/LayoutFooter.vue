<template>
    <footer class="bg-white p-1">
        <section
            class="max-w-[1156px] mx-auto my-9 grid grid-cols-[auto_auto] grid-rows-[auto_auto] px-2 max-lg:block max-lg:my-14"
        >
            <div class="max-lg:text-center max-lg:mb-10">
                <NuxtLink to="/">
                    <img src="~assets/images/header/logo.png" alt="logo" width="224" class="inline-block" />
                </NuxtLink>
                <h3 class="text-Primary-500-Primary text-sm leading-5 mt-3">
                    <span class="max-lg:hidden">全台首創募資型團購網站，</span>
                    <span>讓好創意變成好生意!</span>
                </h3>
            </div>
            <ul class="flex justify-end items-start row-span-2 col-start-2 max-lg:justify-center">
                <li
                    v-for="(footerLink, i) in footerLinks"
                    :key="encodeURIComponent(footerLink.name)"
                    :class="i === 1 ? 'mx-[180px] max-lg:mx-12' : ''"
                >
                    <h4 class="text-Primary-500-Primary text-base font-medium leading-5">{{ footerLink.name }}</h4>
                    <nav>
                        <template v-for="link in footerLink.links" :key="link.name">
                            <NuxtLink
                                :to="link.url"
                                class="block mt-4 text-sm transition-colors duration-200 ease-in-out hover:text-Primary-400-Hover active:text-Primary-600-Dark-Primary"
                                >{{ link.name }}</NuxtLink
                            >
                        </template>
                    </nav>
                </li>
            </ul>
            <div>
                <nav
                    class="my-10 flex justify-start items-center max-lg:justify-center max-lg:w-80 max-lg:mx-auto max-lg:border-t max-lg:border-solid max-lg:border-gray-100 max-lg:pt-10"
                >
                    <template v-for="(socialLink, i) in socialLinks" :key="socialLink.name">
                        <a
                            :href="socialLink.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mr-4"
                            :class="i === socialLinks.length - 1 ? ' mr-0' : ''"
                        >
                            <img :src="socialLink.iconUrl" :alt="socialLink.name" class="w-[32px] h-[32px]" />
                        </a>
                    </template>
                </nav>
                <p class="text-xs text-Neutral-600-Dark-Primary mb-3 max-lg:text-center">
                    愛上大數據股份有限公司｜ 統一編號：85013744
                </p>
                <p class="text-xs text-Neutral-600-Dark-Primary max-lg:text-center">
                    Copyright © 2024 idea2gether. All rights reserved.
                </p>
            </div>
        </section>
    </footer>
</template>

<script setup>
//
import Icon from "assets/images/";
//
const footerLinks = reactive([
    {
        name: "來逛逛",
        links: [
            { name: "創意集資", url: "/category/technology-ai?type=fundraise" },
            { name: "好評團購", url: "/category/technology-ai?type=groupbuying" },
            { name: "團主推薦", url: "/kol" },
            { name: "好物分享", url: "/" },
        ],
    },
    {
        name: "關於我們",
        links: [
            { name: "關於我們", url: "/" },
            { name: "聯絡我們", url: "/contact-us" },
            { name: "隱私權政策", url: "/" },
            { name: "服務條例", url: "/" },
        ],
    },
    {
        name: "商務洽談",
        links: [{ name: "提案", url: "/proposal" }],
    },
]);
const socialLinks = reactive([
    { name: "facebook", iconUrl: Icon.facebook, url: "https://www.facebook.com" },
    { name: "instagram", iconUrl: Icon.instagram, url: "https://www.instagram.com" },
    { name: "line", iconUrl: Icon.line, url: "https://www.line.com" },
    { name: "youtube", iconUrl: Icon.youtube, url: "https://www.youtube.com" },
]);
</script>
