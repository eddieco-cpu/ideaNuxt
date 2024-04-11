<template>
    <CardContainer :title="number" :subTitle="created_at">
        <template #tag>
            <TagOrder :status="statusDescription" />
        </template>

        <template #body>
            <div class="flex items-center gap-x-4">
                <img :src="image" alt="orderPic" class="block rounded w-16 h-16 object-cover" />

                <div class="flex-1">
                    <h2 class="text-sm text-Neutral-700 mb-2">共{{ itemsCount }}件商品</h2>
                    <p class="font-medium text-Neutral-900">NT${{ total }}</p>

                    <!-- <p class="text-Status-Color-Danger-600-Dark-Primary underline text-sm cursor-pointer" v-if="false">
                        繼續付款
                    </p>
                    <p class="text-Primary-500-Primary underline text-sm cursor-pointer" v-else>再次訂購</p> -->
                </div>

                <UIcon
                    name="i-heroicons-chevron-right"
                    class="block w-4 h-4 text-Neutral-500-Primary cursor-pointer"
                    @click="goPage"
                />
            </div>
        </template>

        <!-- <template #footer>
            <div class="border-t border-Neutral-200 pt-2 mt-2 flex items-center gap-x-1">
                <img src="~assets/images/icon/truck-icon.svg" alt="物流" class="w-4 h-4" />

                <p class="text-Neutral-700 text-sm">物流：黑貓 4309672096</p>
            </div>
        </template> -->
    </CardContainer>
</template>

<script setup>

const { itemsCount, number, total, ship, image, created_at, status } = defineProps({
    number: {
        type: String,
    },
    itemsCount: {
        type: Number,
    },
    total: {
        type: Number,
    },
    ship: {
        type: Number,
    },
    image: {
        type: String,
        default: "",
    },
    created_at: {
        type: String,
        default: "",
    },
    status: {
        type: Number,
    }
});

const statusDescription = computed(() => {
    switch (status) {
        case 1:
            return '已成立';
        case 2:
            return '備貨中';
        case 3:
            return '出貨中';
        case 4:
            return '已完成';
        case 99:
            return '取消';
        default:
            return '未知狀態';
    }
});

function goPage() {
    navigateTo(`/member/order/detail/${number}`);
}
</script>

<style lang="scss" scoped></style>
