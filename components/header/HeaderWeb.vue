<template>
    <header class="py-4 fixed top-0 w-full z-50 border border-b-neutral-100 shadow bg-white">
        <div class="px-12 flex gap-8 items-center justify-between max-w-7xl mx-auto">
            <!-- logo -->
            <div class="logo cursor-pointer">
                <NuxtLink to="/">
                    <img src="~assets/images/header/logo.png" alt="logo" width="213" />
                </NuxtLink>
            </div>

            <!-- 導覽列 -->
            <ul class="flex gap-10 text-Primary-600-Dark-Primary font-medium text-sm">
                <li>
                    <NuxtLink to="/category">群眾集資</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/category">好評團購</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/category">團主推薦</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/category">好物分享</NuxtLink>
                </li>
            </ul>

            <!-- 搜尋欄 -->
            <div class="search flex">
                <UButtonGroup size="lg" orientation="horizontal" class="shadow-none">
                    <UInput
                        variant="none"
                        placeholder="找點子、找團購"
                        class="border border-Neutral-100 bg-Neutral-100 rounded-l-md mr-1"
                        size="lg"
                    />

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
                    <img src="~assets/images/header/shoppingCart.svg" alt="shoppingCart" class="cursor-pointer" />
                </div>
            </div>

            <!-- 會員登入 -->
            <UButton
                color="white"
                variant="ghost"
                class="rounded-lg bg-Primary-50 hover:bg-opacity-30 border border-Primary-50 hover:border-Primary-50 transition duration-500 text-Primary-400-Hover px-3 py-1.5 text-sm"
                @click="openModal"
            >
                <template #leading>
                    <img src="~assets/images/header/user-purple.svg" class="text-Primary-400-Hover" />
                </template>
                <span class="font-normal"> 登入 /註冊 </span>
            </UButton>
        </div>
    </header>
</template>

<script setup>
const emit = defineEmits(["openModal"]);

function openModal() {
    emit("openModal", "login");
}
</script>

<style scoped></style>
