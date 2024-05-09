<template>
    <div class="flex flex-col gap-y-6" v-if = "projectData && projectData.data">
        <!-- 廣告 -->
        <div class="w-full max-w-[324px] md:max-w-[1082px] mt-8 mx-auto" >
            <CartAds v-bind = "projectData.data"/>
        </div>

        <!-- 卡片 -->
        <div class="ml-[calc((100vw-324px)/2)] md:ml-[calc((100vw-1100px)/2)]">
            <UCarousel
                v-slot="{ item }"
                :items="proposals"
                :ui="{
                    item: 'snap-start max-w-[324px] md:basis-[320px]',
                    container: 'gap-x-5 flex-col md:flex-row',
                }"
            >
                <DashboardProposalsCard
                    :item="item"
                    class="max-md:mb-5"
                    @click="addToCart(item)"
                    :class="[
                        item.soldOut ? 'cursor-not-allowed' : 'cursor-pointer',
                        {
                            'border-Primary-500-Primary hover:border-Primary-500-Primary':
                                cart.selectFundRaiseProducts[0]?.id === item.id,
                        },
                    ]"
                />
            </UCarousel>
        </div>

        <!-- 結帳 -->
        <div
            class="w-full flex items-center justify-between py-2 px-4 max-md:bg-white fixed bottom-0 left-0 md:static md:max-w-[1082px] md:mx-auto md:px-0 md:pt-[20px] md:border-t md:border-t-Primary-100"
        >
            <p class="text-xl text-Neutral-800 font-medium">NT${{ ( total ) }}</p>

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

const { data:projectData }   = useCustomGetFetch(`/frontend/getProject?product_id=${projectId}`);



const proposals = ref([]);

async function getReviewedProposalsData() {

    const data = await POST("/getProjectCardData", {'project_id' : projectId, type:'hash' }, '');

    if (!!data) {
        proposals.value = data.data;
    }
}
getReviewedProposalsData();




const cardData = computed(() => {
  // 首先检查 projectData.value.data.cards 是否存在并且是一个数组
  if (!projectData.value || !Array.isArray(projectData.value.data.cards)) {
    return [];  // 如果不存在或不是数组，则返回一个空数组
  }

  // 如果存在且是数组，则继续处理
  return projectData.value.data.cards.map(project => ({
    id: project.id,  // 假设ID前缀，需要具体规则可自行调整
    projectName: project.title,
    originalPrice: project.original_price,
    specialOffer: project.sell_price,
    salesLimit: (project.limit_qty - project.sell_qty) > 0,
    salesLimitedQuantity: project.limit_qty,
    sponsors: project.sell_qty,
    content: project.content, // 将 content 包装为数组
    specification: [project.remark || "无特别说明"], // 默认值为"无特别说明"
    image: project.image,
    soldOut: project.sell_qty >= project.limit_qty,
    
    // 进一步的属性检查可以在这里添加
  }));
});

const total = ref(0);

watchEffect( () => {
    if(cardData.value) {

        console.log(projectData.value)
        const selectProduct = cardData.value.filter((item) => !item.soldOut)
                            .find((item) => item.id.toString() === projectCardId.toString());

       
        if(selectProduct) {
            console.log(selectProduct)
            query.project_card_id = selectProduct.id;
        router.replace({ query });

        cart.selectFundRaiseProducts = [selectProduct];
        total.value = selectProduct.specialOffer;
        }
       
    }
})


const productList = ref([]);

// async function getProdsData() {
//     const data = await GET(`/api/productsFundraise`);

//     if (!!data) {
//         productList.value = data.prods;

//         const selectProduct =
//             productList.value
//                 .filter((item) => !item.soldOut)
//                 .find((item) => item.id.toString() === projectCardId.toString()) ||
//             productList.value.filter((item) => !item.soldOut)[0];

//         query.project_card_id = selectProduct.id;
//         router.replace({ query });

//         cart.selectFundRaiseProducts = [selectProduct];
//     }
// }
// getProdsData();

function goCheckoutPage() {
    navigateTo(`/cart/checkout-fundraise?project_id=${projectId}&project_card_id=${projectCardId}`);
}

function addToCart(item) {
    if (item.soldOut) return;
    query.project_card_id = item.id;
    router.replace({ query });

    cart.selectFundRaiseProducts = [item];
    total.value = item.specialOffer;
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
