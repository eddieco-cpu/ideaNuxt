<template>
    <div
        class="bg-white p-6 rounded-lg border-2 border-Primary-100 mb-5 relative xl:mr-[5px]"
        :class="soldOut ? 'opacity-50' : 'opacity-100'"
    >
        <!--  -->
        <p
            :class="
                soldOut
                    ? 'm-auto inline-flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 text-white bg-gray-500 rounded text-xl w-40 h-9 z-[1]'
                    : ' hidden'
            "
        >
            - 方案已售完 -
        </p>

        <!--  -->
        <picture class="block w-full mb-4 aspect-[396/142] max-md:aspect-[283/100]">
            <img :src="helperPicture()" alt="" class="block w-full h-full object-cover" />
        </picture>
        <div class="flex justify-start items-center mb-3">
            <p class="inline-block px-[6px] py-1 rounded text-xs text-white bg-Primary-400-Hover mr-2">已支持36人</p>
            <p class="inline-block px-[6px] py-1 rounded text-xs text-white bg-Primary-400-Hover">剩餘50組</p>
        </div>
        <h3 class="text-base font-medium mb-1">VIP超早鳥限定｜全套桌曆＋年曆</h3>
        <p class="text-Status-Color-Danger-500-Primary text-xl font-medium mb-2">
            NT$10,000
            <span class="text-xs font-normal opacity-80 line-through">定價 $15,000</span>
            <span class="text-xs font-normal opacity-80">，限省 $5,000</span>
        </p>
        <div class="h-[1px] bg-gray-300 mb-2"></div>
        <div class="mb-4">
            <p class="text-xs font-medium text-gray-700 leading-5">商品內容：</p>
            <ul class="text-xs font-medium text-gray-700 leading-5 list-disc pl-8">
                <li>Tripology 22 吋行李箱 x1</li>
                <li>專用防塵保護套 x1</li>
            </ul>
        </div>
        <div class="mb-2">
            <p class="text-xs font-medium text-gray-700 leading-5">商品規格：</p>
            <ul class="text-xs font-medium text-gray-700 leading-5 list-disc pl-8">
                <li>淨重 4.5 kg</li>
                <li>尺寸 39 x 25 x 59cm</li>
            </ul>
        </div>
        <div class="h-[1px] bg-gray-300 mb-2"></div>
        <p></p>
    </div>
</template>
<script setup>
const { soldOut } = defineProps({
    soldOut: {
        type: Boolean,
        default: false,
    },
});
</script>
