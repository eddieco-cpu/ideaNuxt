<template>
    <div>
        <UiTitle class="w-full">
            <nuxt-link
                :to="`/dashboard/${$route.params.dashboardId}/orders/`"
                class="flex justify-start items-center gap-1"
            >
                <UIcon name="i-heroicons-chevron-left" class="" /> 訂單詳情</nuxt-link
            >
        </UiTitle>

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

const orderNumber = ref(route.params.ordersId)
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
.grid_block {
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    grid-template-rows: repeat(2, auto);
}
.grid_item {
    @apply bg-white rounded-lg shadow-md rounded-lg p-6;
}
.grid_block > .grid_item:first-child {
    grid-column: 1 / 8;
    grid-row: 1 / 2;
}
.grid_block > .grid_item:nth-child(2) {
    grid-column: 8 / 19;
    grid-row: 1 / 2;
}
.grid_block > .grid_item:nth-child(3) {
    grid-column: 1 / 10;
    grid-row: 2 / 3;
}
.grid_block > .grid_item:nth-child(4) {
    grid-column: 10 / 19;
    grid-row: 2 / 3;
}

@media screen and (width < 1280px) {
    .grid_block {
        display: block;
    }
    .grid_item {
        margin-bottom: 12px;
    }
}
</style>
