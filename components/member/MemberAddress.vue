<template>
    <div>
        <h1 class="text-xl mb-3">我的地址</h1>

        <button
            class="flex gap-x-1 items-center justify-center w-full rounded-lg bg-white border border-Primary-100 py-2"
        >
            <img src="~assets/images/icon/plus-icon.svg" alt="add" />
            <span class="text-Primary-400-Hover text-sm">新增地址</span>
        </button>

        <MemberEditAddress v-if="true" />

        <!-- 空值圖 -->
        <div class="w-[300px] mx-auto mt-16" v-else>
            <img src="~assets/images/status/emptyDataAddress.png" alt="noData" width="300" />
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>
