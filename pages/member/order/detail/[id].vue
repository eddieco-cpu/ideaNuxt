<template>
    <div>
        <div class="flex gap-4 items-center justify-between mt-8 mb-4 md:mt-0 md:flex-col md:items-start">
            <h1 class="text-black text-xl font-medium flex items-center gap-x-2">
                <UIcon name="i-heroicons-chevron-left" class="block w-4 h-4 cursor-pointer" @click="goBack" />
                訂單詳情
            </h1>
        </div>

        <!-- 訂單排程 -->
        
        <ul class="bg-white py-4 px-3 flex items-start rounded-lg mb-3">
            <li
                class="flex flex-col gap-y-2 items-center text-xs font-medium text-Primary-500-Primary text-center step flex-1"
                :class="{ active: orderBuild }"
            >
                <img src="~assets/images/icon/circle-icon.svg" alt="circle " v-show="!orderBuild" />
                <img src="~assets/images/icon/circle-check-icon.svg" alt="circle " v-show="orderBuild" />
                <p :class="{ 'text-Neutral-500-Primary': !orderBuild }">已成立</p>
            </li>
            <li
                class="flex flex-col gap-y-2 items-center text-xs font-medium text-Primary-500-Primary text-center step flex-1"
                :class="{ active: orderPrepare }"
            >
                <img src="~assets/images/icon/circle-icon.svg" alt="circle " v-show="!orderPrepare" />
                <img src="~assets/images/icon/circle-check-icon.svg" alt="circle " v-show="orderPrepare" />
                <p :class="{ 'text-Neutral-500-Primary': !orderPrepare }">備貨中</p>
            </li>
            <li
                class="flex flex-col gap-y-2 items-center text-xs font-medium text-Primary-500-Primary text-center step flex-1"
                :class="{ active: orderDelivery }"
            >
                <img src="~assets/images/icon/circle-icon.svg" alt="circle " v-show="!orderDelivery" />
                <img src="~assets/images/icon/circle-check-icon.svg" alt="circle " v-show="orderDelivery" />
                <p :class="{ 'text-Neutral-500-Primary': !orderDelivery }">出貨中</p>
            </li>
            <li
                class="flex flex-col gap-y-2 items-center text-xs font-medium text-Primary-500-Primary text-center step flex-1"
                :class="{ active: orderFinished }"
            >
                <img src="~assets/images/icon/circle-icon.svg" alt="circle " v-show="!orderFinished" />
                <img src="~assets/images/icon/circle-check-icon.svg" alt="circle " v-show="orderFinished" />
                <p :class="{ 'text-Neutral-500-Primary': !orderFinished }">已完成</p>
            </li>
        </ul>


        <div class="flex flex-col flex-wrap gap-y-3 md:flex-row md:gap-x-3 mb-3" v-if="loaded">
            <CardOrderInformation class="w-full md:w-[40%]"  v-bind="orderData"/>
            <CardProductInformation class="w-full md:flex-1" :total="orderData.total" :ship="orderData.ship" :productSpecs="orderItem"/>
            <!-- <CardBuyerInformation class="w-full md:w-[calc(50%_-_6px)]" /> -->
            <CardReceiverInformation class="w-full md:w-[calc(50%_-_6px)]" v-bind="orderData" />
        </div>
    </div>
</template>

<script setup>
import { useRuntimeConfig } from '#app'
const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const token = authStore.token;


const config   = useRuntimeConfig();
const baseUrl  = config.public.apiBaseUrl;

const orderNumber = ref(route.params.id)
const orderData = ref([]);

const loaded = ref(false);

getData()

async function getData () {

    const data = await POST("/getOrder", {'orderNumber':orderNumber.value}, token);

    if(!!data.status) {
        orderData.value = data.order;
        loaded.value = true;
    }
}

const orderItem = computed(() => {
  return orderData.value.order_items.map(item => ({
    id: item.product_spec_id, 
    sales_price: item.price, 
    amount: item.quantity, 
    image: item.product_image, 
    name: item.product_name,
    cartItemId: 0
  }))
})



const orderBuild = computed(() => [1, 2, 3, 4].includes(orderData.value.status));
const orderPrepare = computed(() => [2, 3, 4].includes(orderData.value.status));
const orderDelivery = computed(() => [3, 4].includes(orderData.value.status));
const orderFinished = computed(() => [4].includes(orderData.value.status));

function goBack() {
    router.go(-1);
}
</script>

<style scoped>
.step {
    position: relative;
    padding: 0 5px;
}

.step:not(:first-child)::before {
    content: "";
    position: absolute;
    top: 7px;
    right: calc(50% + 8px);
    width: calc(100% - 16px);
    height: 2px;
}

.step:not(:first-child)::before {
    background-color: #917fdd;
}

.step.active:not(:first-child)::before {
    background-color: #6b56ca;
}
</style>
