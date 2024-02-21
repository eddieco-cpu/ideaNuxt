<template>
    <div>
        <div class="flex gap-4">
            <nuxt-link
                class="flex flex-col items-center justify-center gap-y-3 bg-white w-2/4 py-6 rounded-lg cursor-pointer"
                v-for="(item, index) in orderOption"
                :key="index"
                :to="item.link"
            >
                <img :src="item.imgUrl" alt="order" />
                <h3 class="text-Primary-500-Primary font-medium">{{ item.name }}</h3>
            </nuxt-link>
        </div>

        <!-- 空值圖 -->
        <div class="w-[160px] mx-auto mt-8 md:w-[300px] md:mt-24">
            <img src="~assets/images/status/emptyDataAddress.png" alt="noData" />
        </div>
    </div>
</template>

<script setup>
import Icon from "assets/images/";

const orderOption = [
    {
        name: "募資訂單",
        imgUrl: Icon.rocketOrderActive,
        link: "/member/order/funding",
    },
    {
        name: "團購訂單",
        imgUrl: Icon.users,
        link: "/member/order/groupbuying",
    },
];
</script>

<style scoped></style>
