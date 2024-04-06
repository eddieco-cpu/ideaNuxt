<template>
    <li class="rounded-lg overflow-hidden bg-white">
        <picture class="block w-full aspect-[1/1] rounded-lg overflow-hidden">
            <img :src="select.img" class="block w-full h-full object-cover" />
        </picture>
        <section class="p-3 pb-2 max-md:aspect-[212/200] xl:aspect-[212/200]">
            <h4 class="text-sm font-medium text-ellipsis line-clamp-2 mb-2">{{ select.name }}</h4>
            <h4 class="text-base font-medium text-Status-Color-Danger-500-Primary">團購價 $ {{ select.sales_price }}</h4>
            <p class="line-through text-xs text-Neutral-600-Dark-Primary mb-3">市價 $ {{ select.base_price }}</p>

            <div class="flex justify-center ring-1 ring-gray-200 rounded overflow-hidden mb-3">
                <button
                    class="w-8 flex justify-center items-center"
                    @click="select.amount > 1 ? select.amount-- : (select.amount = 1)"
                >
                    －
                </button>
                <p class="flex-grow flex justify-center items-center ring-1 ring-gray-200">
                    {{ select.amount }}
                </p>
                <button class="w-8 flex justify-center items-center" @click="select.amount++">＋</button>
            </div>

            <!-- <p>
                <input type="text" v-model="select.name" />
            </p> -->
            <UiButton class="max-xl:w-full max-md:h-[30px] max-md:text-sm" @click="addToCart">加入購物車</UiButton>
        </section>
    </li>
</template>
<script setup>
import { cartStore } from "@/stores/cart";
import { useToast } from "vue-toastification";
const route = useRoute();
const toast = useToast();
const cart = cartStore();
const authStore = useAuthStore();
const token = authStore.token;

const { select, id, groupId } = defineProps({
    select: Object,
    id: Number,
    groupId:String
});
async function addToCart() {
   
    const groupbuyingId = parseInt(route.params.pid);
    const productId = id;


    const payload = { product_id: select.product_id, amount: select.amount, spec_id: select.id, groupId:groupId };

    const data = await POST("/add2Cart", payload, token);

    if(!!data.status) {
        toast.success("已加入購物車");
        select.amount = 1;
        cart.isHaveCartItem = true
    }

    // const productInfo = {
    //     id: productId,
    //     image: `https://picsum.photos/id/${10 + id}/600/600`,
    //     title: `第${groupbuyingId}購物車的第${productId}產品`,
    //     text: helperLorem(30, 50),
    //     price: 1000,
    //     qty: select.amount,
    // };

    // if (cart.cartList[groupbuyingId]) {
    //     const isProductInCart = cart.cartList[groupbuyingId]["products"].find((item) => item.id === productId);

    //     if (isProductInCart) {
    //         isProductInCart.qty += select.amount;
    //     } else {
    //         cart.cartList[groupbuyingId]["products"].push(productInfo);
    //     }
    // } else {
    //     cart.cartList[groupbuyingId] = {};
    //     cart.cartList[groupbuyingId]["cartId"] = parseInt(groupbuyingId);
    //     cart.cartList[groupbuyingId]["mainImage"] = `https://picsum.photos/id/${20 + groupbuyingId}/600/600`;
    //     cart.cartList[groupbuyingId]["products"] = [productInfo];
    // }

    

   
}
</script>
