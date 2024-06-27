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
                                        :src="item.group.image_first"
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

                <CardContainer title="結帳商品" v-if = "currentData">
                    <template #tip>
                        <div class="flex flex-col gap-y-1 pb-3"  >
                            <div class="flex items-center gap-x-1">
                                <Tag :tag="{ name: '限時團購', color: 'primary', type: 'text' }" />
                                <p class="text-Primary-500-Primary text-sm font-medium truncate flex-1">
                                    {{ currentData?.group.name}}
                                </p>
                            </div>
                            <ul class="bg-white py-3 flex-grow w-full">
                           
                                <li class="mb-2">
                                    <p class="flex justify-start items-center text-Primary-500-Primary text-sm gap-x-1 mb-1">
                                        <UIcon name="i-heroicons-shopping-bag" />
                                        <span>出貨時間</span>
                                    </p>
                                    
                                    <pre class="text-xs leading-relaxed">{{ currentData?.group.ship_time }}</pre>
                                </li>
                                <li class="mb-2" v-if = "shipText">
                                    <p class="flex justify-start items-center text-Primary-500-Primary text-sm gap-x-1 mb-1">
                                        <UIcon name="i-heroicons-truck" />
                                        <span>宅配運費</span>
                                    </p>
                                    <pre class="text-xs leading-relaxed">{{ shipText }}</pre>
                                </li>

                                <li class="mb-2">
                                    <p class="flex justify-start items-center text-Primary-500-Primary text-sm gap-x-1 mb-1">
                                        <UIcon name="i-heroicons-gift" />
                                        <span>滿額增品</span>
                                    </p>
                                    <pre class="text-xs leading-relaxed">{{ currentData?.group.give }}</pre>
                                </li>
                            </ul>
                            <!-- <div class="md:flex md:gap-x-6">
                                <div class="flex items-center gap-x-1">
                                    <img
                                        src="~assets/images/icon/shopping-icon.svg"
                                        alt="shopping"
                                        class="size-[14px]"
                                    />
                                    <pre class="text-xs text-Neutral-800"> {{ currentData?.group.ship_time }}</pre>
                                  
                                </div>
                                <div class="flex items-center gap-x-1">
                                    <img src="~assets/images/icon/car-icon.svg" alt="car" class="size-[14px]" />
                                    <p class="text-xs text-Neutral-800">{{shipText}}</p>
                                </div>
                            </div> -->
                        </div>
                    </template>

                    <template #body>
                        <CardCheckOutProduct
                            v-for="(item, index) in currentData?.items"
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
                                <p>{{ currentData?.productLength }}件商品</p>
                                <p>NT${{ currentData?.total }}</p>
                            </div>
                            <div
                                class="flex justify-between text-Neutral-700 text-sm pb-3 border-b border-b-Neutral-200"
                            >
                                <p>運費</p>
                                <p>NT${{ currentData?.fee }}</p>
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
                                    NT${{ currentData?.total +  currentData?.fee}}
                                    <!-- helperMoneyComma -->
                                </p>
                            </div>

                            <button
                                class="px-4 py-2 text-sm bg-Primary-500-Primary text-center rounded-lg w-full text-white flex-1"
                                @click="goCheckoutPage"
                            >
                                去結帳 ({{ currentData?.productLength }})
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
import { useToast } from "vue-toastification";
const cart = cartStore();
const authStore = useAuthStore();
const toast = useToast();
const token = authStore.token;


const datas = ref([]);
const groupKey = ref(null)


getData()

async function getData () {

    try{
        const data = await POST("/getItemByCartPage", {}, token);
        if(!!data) {
            if(data.status) {
                datas.value = data.data
                console.log(datas.value)

                groupKey.value = Object.keys(datas.value)[0];
            } else {
                toast.error(data.message)
                cart.isHaveCartItem = false
                navigateTo("/");
            }
          
        }
    }catch (error) {
        toast.error(error.message)
        navigateTo("/");
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

  if (data && Array.isArray(data.items)) {
    let productLength = 0;

    const total = data.items.reduce((sum, item) => {
        const salesPrice = Number(item.sales_price);
        const quantity = Number(item.quantity);
        productLength += quantity;
        return sum + salesPrice * quantity;
    }, 0);

    let fee = 0;
    let feeDoor = 0;

    data.group.ship.forEach( item => {

        if(item.type == 'deliveToHouse') {
            fee = item.value
            feeDoor = item.fee_door
        }
    })

    if(total >= feeDoor ) {
        fee = 0;
    }

    data = { ...data, total, fee, productLength };
  }

  return data;
});

const shipText = computed( () => {

    const key = groupKey.value;
    let data = datas.value[key];

    let text = '';

    if(data) {
            data.group.ship.forEach( item => {

            let fee = item.value;
            if(fee > 0) {
                if(item.type == 'deliveToHouse') {
                    text+= `宅配運費 $${fee}元 (滿$${item.fee_door}元免運)`
                }
            }else {
                    text+= `免運`
            }
        })

        return text
    } else {
        return ''
    }
}) 


const showTotalDetail = ref(false);

function isProductBeSelected(cartId) {
    return groupKey.value == cartId;
}
console.log(" cart.selectGroupBuyProducts", cart.selectGroupBuyProducts);
function selectProduct(groupId) {
    groupKey.value = groupId
}

function goCheckoutPage() {
    navigateTo(`/cart/checkout?group=${groupKey.value}`);
}
</script>
