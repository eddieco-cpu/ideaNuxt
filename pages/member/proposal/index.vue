<template>
    <div>
        <div class="flex gap-4">
            <nuxt-link
                class="flex flex-col items-center justify-center gap-y-3 bg-white w-2/4 py-6 rounded-lg cursor-pointer"
                v-for="(item, index) in proposalOption"
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

const proposalOption = [
    {
        name: "提案編輯",
        imgUrl: Icon.edit,
        link: "/member/proposal/edit",
    },
    {
        name: "團隊共編設定",
        imgUrl: Icon.users,
        link: "/member/proposal/group-edit",
    },
];
</script>

<style scoped></style>
