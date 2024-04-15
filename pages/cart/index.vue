<template>
    <div class="max-w-[324px] md:max-w-[1082px] 3xl:max-w-[1300px] mx-auto mt-8">
        <CartHeader :step="1" v-if="cart.isHaveCartItem" />
        <div class="pt-6 grid grid-cols-1 md:grid-cols-[76%_auto] items-start gap-6" v-if="cart.isHaveCartItem">
            <!-- 商品資訊 -->
            <div class="flex flex-col gap-6">
                <CardContainer title="選擇團購">
                    <template #body>
                        <div>
                            <UCarousel
                                v-slot="{ item, index }"
                                :items="allData"
                                :ui="{
                                    item: 'snap-start basis-[128px]',
                                    container: 'gap-x-3',
                                }"
                                class="max-w-[1200px]"
                            >
                                <div class="cursor-pointer" @click="selectProduct(item.group.id)">
                                    <img
                                        :src="item.projects.image"
                                        alt="product"
                                        class="rounded-lg w-[126px] flex-1 h-[81px] object-cover"
                                        :class="{
                                            'opacity-40': !isProductBeSelected(item.group.id),
                                        }"
                                    />
                                </div>
                            </UCarousel>
                        </div>
                    </template>
                </CardContainer>

                <CardContainer title="結帳商品">
                    <template #tip>
                        <div class="flex flex-col gap-y-1 pb-3">
                            <div class="flex items-center gap-x-1">
                                <Tag :tag="{ name: '限時團購', color: 'primary', type: 'text' }" />
                                <p class="text-Primary-500-Primary text-sm font-medium truncate flex-1">
                                    {{ currentData?.projects?.name}}
                                </p>
                            </div>
                            <div class="md:flex md:gap-x-6">
                                <div class="flex items-center gap-x-1">
                                    <img
                                        src="~assets/images/icon/shopping-icon.svg"
                                        alt="shopping"
                                        class="size-[14px]"
                                    />
                                    <p class="text-xs text-Neutral-800" v-html="currentData?.group?.ship_remark">
                                    </p>
                                </div>
                                <!-- <div class="flex items-center gap-x-1">
                                    <img src="~assets/images/icon/car-icon.svg" alt="car" class="size-[14px]" />
                                    <p class="text-xs text-Neutral-800">$100 元 (滿 $1,000 元免運)，限台灣本島配送</p>
                                </div> -->
                            </div>
                        </div>
                    </template>

                    <template #body>
                        <CardCheckOutProduct
                            v-for="(item, index) in currentData?.productSpecs"
                            :key="index"
                            v-bind="item"
                            :get-data="getData"
                        />
                    </template>
                </CardContainer>
            </div>

            <!-- 總計 -->
            <div
                class="flex-1 fixed w-full bottom-0 left-0 md:sticky md:top-[98px] shadow-[0_-2px_20px_0px_rgba(0,0,0,0.06)]"
            >
                <CardContainer class="rounded-none md:rounded-lg">
                    <template #body>
                        <div
                            class="flex flex-col gap-y-3 fixed w-screen -bottom-[150px] left-0 p-3 md:p-0 rounded-t-lg bg-white md:static md:w-full transition-[bottom] duration-300"
                            :class="{ 'bottom-[87px]': showTotalDetail }"
                        >
                            <h1 class="pb-3 text-black/85 font-medium border-b border-b-Neutral-200">總計</h1>
                            <div class="flex justify-between text-Neutral-700 text-sm">
                                <p>{{ currentData?.productSpecs?.length ?? 0 }}件商品</p>
                                <p>NT${{ currentData?.total }}</p>
                            </div>
                            <div
                                class="flex justify-between text-Neutral-700 text-sm pb-3 border-b border-b-Neutral-200"
                            >
                                <p>運費</p>
                                <p>NT$0</p>
                            </div>
                        </div>
                    </template>

                    <template #footer>
                        <div class="py-2 md:py-0 flex md:block bg-white relative z-50">
                            <div class="flex-1">
                                <p
                                    class="text-xs pb-1 text-Neutral-600-Dark-Primary md:hidden flex items-center gap-x-1"
                                >
                                    <!-- 共{{ cart.selectGroupBuyProducts?.products?.length ?? 0 }}商品 -->
                                    <UIcon
                                        name="i-heroicons-chevron-up"
                                        class="block w-4 h-4 text-Neutral-600-Dark-Primary cursor-pointer transition-transform duration-300"
                                        :class="{ 'rotate-180': showTotalDetail }"
                                        @click="showTotalDetail = !showTotalDetail"
                                    />
                                </p>
                                <p
                                    class="text-xl text-Neutral-800 md:text-Primary-500-Primary font-roboto font-medium md:text-right md:pb-3"
                                >
                                    NT${{ currentData?.total }}
                                    <!-- helperMoneyComma -->
                                </p>
                            </div>

                            <button
                                class="px-4 py-2 text-sm bg-Primary-500-Primary text-center rounded-lg w-full text-white flex-1"
                                @click="goCheckoutPage"
                            >
                                去結帳 ({{ currentData?.productSpecs?.length ?? 0 }})
                            </button>
                        </div>
                    </template>
                </CardContainer>

                <transition name="mask">
                    <div
                        class="fixed w-screen h-screen top-0 left-0 z-[-1] bg-black/50 md:hidden"
                        v-show="showTotalDetail"
                    ></div>
                </transition>
            </div>
        </div>

        <div class="pt-6 flex flex-wrap items-start gap-6 max-w-[324px] md:max-w-[1082px] mx-auto" v-else>
            <CardContainer title="購物車" class="w-full">
                <template #body>
                    <div class="flex flex-col items-center gap-y-6">
                        <img src="~assets/images/status/emptyDataCart.svg" alt="empty" class="w-[224px]" />
                        <p class="text-Neutral-600-Dark-Primary">購物車無商品</p>
                        <NuxtLink to="/category/technology-ai?type=groupbuying">
                            <button
                                class="text-sm rounded-lg px-4 py-2 text-white bg-Primary-500-Primary shadow-[0px_1px_10px_rgba(0,0,0,0.04)]"
                            >
                                來去逛逛！
                            </button>
                        </NuxtLink>
                    </div>
                </template>
            </CardContainer>
        </div>
    </div>
</template>

<script setup>
import { cartStore } from "@/stores/cart";
const cart = cartStore();
const authStore = useAuthStore();
const token = authStore.token;

const datas = ref([]);
const groupKey = ref(null)

getData()

async function getData () {
    const payload = {};

    const data = await POST("/getItemByCartPage", payload, token);

    if(!!data.status) {
        datas.value = data.data

        groupKey.value = Object.keys(datas.value)[0];
    }
}

const allData = computed(() => {
  const data = datas.value;

  let tempData = [];

  Object.keys(data).forEach(key => {
    tempData.push(data[key]);
  });

  return tempData;
});

const currentData = computed(() => {
  const key = groupKey.value;
  let data = datas.value[key];

  if (data && Array.isArray(data.productSpecs)) {
    const total = data.productSpecs.reduce((sum, item) => {
      const salesPrice = Number(item.sales_price);
      const amount = Number(item.amount);
      return sum + salesPrice * amount;
    }, 0);

    data = { ...data, total };
  }

  return data;
});

const showTotalDetail = ref(false);

function isProductBeSelected(cartId) {
    return groupKey.value === cartId;
}
console.log(" cart.selectGroupBuyProducts", cart.selectGroupBuyProducts);
function selectProduct(products) {
    groupKey.value = products
}

function goCheckoutPage() {
    navigateTo(`/cart/checkout?group=${groupKey.value}`);
}
</script>
