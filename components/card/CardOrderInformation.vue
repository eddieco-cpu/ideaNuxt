<template>
    <CardContainer title="訂單資訊">
        <template #body>
            <ul class="flex flex-col gap-y-3">
                <li class="flex items-center gap-x-4">
                    <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">訂單編號</h5>
                    <p class="text-Neutral-900 text-sm">{{ number }}</p>
                </li>
                <li class="flex items-center gap-x-4">
                    <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">成立時間</h5>
                    <p class="text-Neutral-900 text-sm">{{ created_at }}</p>
                </li>
                <li class="flex items-center gap-x-4">
                    <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">訂單狀態</h5>
                    <p class="text-Neutral-900 text-sm">{{ statusDescription }}</p>
                </li>
                <li class="flex items-center gap-x-4">
                    <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">訂單金額</h5>
                    <p class="text-Neutral-900 text-sm">NT${{ total +  ship}}</p>
                </li>
                <li class="flex items-center gap-x-4">
                    <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">付款方式</h5>
                    <p class="text-Neutral-900 text-sm">{{ payTypeDescription }}</p>
                </li>
                <li class="flex items-center gap-x-4">
                    <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">配送方式</h5>
                    <p class="text-Neutral-900 text-sm">{{ LogistTypeDescription }}</p>
                </li>
                <li class="flex items-center gap-x-4" v-if="remark">
                    <h5 class="text-Neutral-600-Dark-Primary text-sm min-w-[70px]">訂單備註</h5>
                    <div class="text-Neutral-900 text-sm" v-html="remark"></div>
                </li>
            </ul>
        </template>
    </CardContainer>
</template>

<script setup>
const { number, total, ship, created_at, status, logist_type, pay_type, remark } = defineProps({
    number: {
        type: String,
    },
    total: {
        type: Number,
    },
    ship: {
        type: Number,
    },
    created_at: {
        type: String,
        default: "",
    },
    status: {
        type: Number,
    },
    logist_type: {
        type: Number,
    },
    pay_type: {
        type: Number,
    },
    remark: {
        type: String,
        default:""
    },
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

const payTypeDescription = computed(() => {
    switch (pay_type) {
        case 1:
            return '信用卡';
        case 2:
            return 'ATM轉帳';
        case 3:
            return '貨到付款';
        default:
            return '未知';
    }
});

const LogistTypeDescription = computed(() => {
    switch (logist_type) {
        case 1:
            return '超商取貨';
        case 2:
            return '宅配到府';
        default:
            return '未知';
    }
});


</script>
