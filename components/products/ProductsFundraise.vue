<template>
    <li
        class="bg-white p-6 rounded-lg border-2 border-Primary-100 mb-5 relative xl:mr-[5px]"
        :class="
            prod.soldOut
                ? 'opacity-50 cursor-not-allowed pointer-events-none'
                : 'opacity-100 cursor-pointer active:border-white hover:border-Primary-400-Hover transition duration-300'
        "
        @click="goToCart"
    >
        <!--  -->
        <p
            :class="
                prod.soldOut
                    ? 'm-auto inline-flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 text-white bg-gray-500 rounded text-xl w-40 h-9 z-[1]'
                    : ' hidden'
            "
        >
            - 方案已售完 -
        </p>

        <!--  -->
        <picture class="block w-full mb-4 aspect-[396/142] max-md:aspect-[283/100]">
            <img :src="prod.imgData" alt="" class="block w-full h-full object-cover" />
        </picture>
        <div class="flex justify-start items-center mb-3">
            <p class="inline-block px-[6px] py-1 rounded text-xs text-white bg-Primary-400-Hover mr-2">
                已支持{{ prod.sponsors }}人
            </p>
            <p class="inline-block px-[6px] py-1 rounded text-xs text-white bg-Primary-400-Hover">
                剩餘{{ prod.salesLimitedQuantity }}組
            </p>
        </div>
        <h3 class="text-base font-medium mb-1">{{ prod.projectName }}</h3>
        <p class="text-Status-Color-Danger-500-Primary text-xl font-medium mb-2">
            NT${{ prod.specialOffer }}
            <span class="text-xs font-normal opacity-80 line-through">定價 ${{ prod.originalPrice }}</span>
            <span class="text-xs font-normal opacity-80">，限省 ${{ prod.originalPrice - prod.specialOffer }}</span>
        </p>
        <div class="h-[1px] bg-gray-300 mb-2"></div>
        <div class="mb-4">
            <p class="text-xs font-medium text-gray-700 leading-5">商品內容：</p>
            <ul class="text-xs font-medium text-gray-700 leading-5 list-disc pl-8">
                <li v-for="(content, contentI) in prod.content" :key="contentI">{{ content }}</li>
            </ul>
        </div>
        <div class="mb-2">
            <p class="text-xs font-medium text-gray-700 leading-5">商品規格：</p>
            <ul class="text-xs font-medium text-gray-700 leading-5 list-disc pl-8">
                <li v-for="(specification, specificationI) in prod.specification" :key="specificationI">
                    {{ specification }}
                </li>
            </ul>
        </div>
        <div class="h-[1px] bg-gray-300 mb-2"></div>
        <p></p>
    </li>
</template>
<script setup>
const props = defineProps({
    prod: {
        type: Object,
        default: () => ({
            id: "",
            imgData: "",
            sponsors: 0,
            salesLimit: true,
            salesLimitedQuantity: 0,
            projectName: "",
            specialOffer: 0,
            originalPrice: 0,
            content: [],
            specification: [],
            soldOut: false,
        }),
    },
});
</script>
