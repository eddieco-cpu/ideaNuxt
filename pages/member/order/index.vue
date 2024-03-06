<template>
    <div>
        <div class="flex flex-col md:flex-row gap-4">
            <nuxt-link
                class="flex flex-col items-center justify-center gap-y-3 bg-white w-full md:w-2/4 py-6 rounded-lg cursor-pointer"
                v-for="(item, index) in orderOption"
                :key="index"
                :to="item.link"
            >
                <h3 class="text-Primary-500-Primary font-medium">{{ item.name }}</h3>
                <img :src="item.imgUrl" alt="order" class="w-[100px] md:w-[180px]" />
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
import Icon from "assets/images/";

const orderOption = [
    {
        name: "募資訂單",
        imgUrl: Icon.fundRaise,
        link: "/member/order/funding",
    },
    {
        name: "團購訂單",
        imgUrl: Icon.groupBuy,
        link: "/member/order/groupbuying",
    },
];
</script>

<style scoped></style>
