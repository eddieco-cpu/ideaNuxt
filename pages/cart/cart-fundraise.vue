<template>
    <div class="flex flex-col gap-y-6">
        <!-- 廣告 -->
        <div class="w-full max-w-[324px] md:max-w-[1082px] mt-8 mx-auto">
            <CartAds />
        </div>

        <!-- 卡片 -->
        <div class="ml-[calc((100vw-324px)/2)] md:ml-[calc((100vw-1100px)/2)]">
            <UCarousel
                v-slot="{ item }"
                :items="productList"
                :ui="{
                    item: 'snap-start max-w-[324px] md:basis-[320px]',
                    container: 'gap-x-5 flex-col md:flex-row',
                }"
            >
                <ProductsFundraise
                    class="border-Primary-50 hover:border-Primary-100 transition-all duration-300"
                    :class="[
                        item.soldOut ? 'cursor-not-allowed' : 'cursor-pointer',
                        {
                            'border-Primary-500-Primary hover:border-Primary-500-Primary':
                                cart.selectFundRaiseProducts[0]?.id === item.id,
                        },
                    ]"
                    :prod="item"
                    :soldOut="item.soldOut"
                    @click="addToCart(item)"
                />
            </UCarousel>
        </div>

        <!-- 結帳 -->
        <div
            class="w-full flex items-center justify-between py-2 px-4 max-md:bg-white fixed bottom-0 left-0 md:static md:max-w-[1082px] md:mx-auto md:px-0 md:pt-[20px] md:border-t md:border-t-Primary-100"
        >
            <p class="text-xl text-Neutral-800 font-medium">NT${{ helperMoneyComma(cart.totalFundRaisePrice) }}</p>

            <div class="">
                <button
                    class="text-sm mr-2 rounded-lg px-4 py-2 text-Primary-400-Hover border border-Neutral-300 shadow-[0px_1px_10px_rgba(0,0,0,0.04)]"
                    @click="goBack"
                >
                    返回
                </button>

                <button
                    class="text-sm rounded-lg px-4 py-2 text-white bg-Primary-500-Primary shadow-[0px_1px_10px_rgba(0,0,0,0.02)]"
                    @click="goCheckoutPage"
                >
                    結帳去！
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { cartStore } from "@/stores/cart";
const router = useRouter();
const route = useRoute();
const cart = cartStore();
const projectId = route.query.project_id;
const projectCardId = route.query.project_card_id;

let query = {
    project_id: projectId,
    project_card_id: projectCardId,
};

const productList = ref([]);

async function getProdsData() {
    const data = await GET(`/api/productsFundraise`);

    if (!!data) {
        productList.value = data.prods;

        const selectProduct =
            productList.value
                .filter((item) => !item.soldOut)
                .find((item) => item.id.toString() === projectCardId.toString()) ||
            productList.value.filter((item) => !item.soldOut)[0];

        query.project_card_id = selectProduct.id;
        router.replace({ query });

        cart.selectFundRaiseProducts = [selectProduct];
    }
}
getProdsData();

function goCheckoutPage() {
    navigateTo(`/cart/checkout-fundraise?project_id=${projectId}&project_card_id=${projectCardId}`);
}

function addToCart(item) {
    if (item.soldOut) return;
    query.project_card_id = item.id;
    router.replace({ query });

    cart.selectFundRaiseProducts = [item];
}

function goBack() {
    router.go(-1);
}
</script>

<style lang="scss" scoped>
li {
    list-style: none;
}
</style>
