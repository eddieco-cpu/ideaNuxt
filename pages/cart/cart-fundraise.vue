<template>
    <div class="flex flex-col gap-y-6">
        <!-- 廣告 -->
        <div class="w-full max-w-[324px] md:max-w-[1082px] mt-8 mx-auto">
            <div class="bg-white rounded-lg p-3 flex gap-x-2 items-center md:items-stretch">
                <img
                    :src="helperPicture()"
                    alt="image"
                    class="rounded-lg w-[65px] h-[42px] md:w-[96px] md:h-[62px] object-cover"
                />
                <div class="flex flex-col justify-between">
                    <h1 class="text-sm md:text-xl font-medium text-Neutral-900 md:order-2">
                        聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的最佳音樂夥伴
                    </h1>

                    <div class="flex items-center md:items-end gap-x-1 md:order-1">
                        <Tag :tag="{ name: '促銷', color: 'danger', type: 'text' }" />
                        <span class="text-Neutral-900 text-xs md:text-sm"
                            >提案人 <span class="text-Primary-500-Primary">華生科技股份有限公司Inc</span></span
                        >
                    </div>
                </div>
            </div>
        </div>

        <!-- 卡片 -->
        <div class="ml-[calc((100vw-324px)/2)] md:ml-[calc((100vw-1100px)/2)]">
            <UCarousel
                v-slot="{ item, index }"
                :items="[1, 1, 2, 2, 1]"
                :ui="{
                    item: 'snap-start max-w-[324px] md:basis-[320px]',
                    container: 'gap-x-5 flex-col md:flex-row',
                }"
            >
                <ProductsFundraise />
            </UCarousel>
        </div>

        <!-- 結帳 -->
        <div
            class="w-full flex items-center justify-between py-2 px-4 max-md:bg-white fixed bottom-0 left-0 md:static md:max-w-[1082px] md:mx-auto md:px-0 md:pt-[20px] md:border-t md:border-t-Primary-100"
        >
            <p class="text-xl text-Neutral-800 font-medium">NT$1620</p>

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
const router = useRouter();
import { cartStore } from "@/stores/cart";
const cart = cartStore();

function goCheckoutPage() {
    navigateTo("/cart/checkout?type=fundraise");
}

function goBack() {
    router.go(-1);
}
</script>
