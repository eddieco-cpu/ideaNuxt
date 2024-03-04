<template>
    <div class="bg-white rounded-lg p-3">
        <h1 class="text-black/85 font-medium pb-[10px] border-b border-b-Neutral-200">商品資訊</h1>
        <div class="pt-[10px] flex gap-x-4">
            <img :src="helperPicture()" alt="product" class="size-16 rounded" />

            <div class="flex flex-col gap-y-3">
                <h1 class="line-clamp-2 font-medium">
                    聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的最佳音樂夥伴
                </h1>

                <div class="flex justify-between gap-x-3">
                    <p class="text-Neutral-700 text-sm">VIP超早鳥限定｜全套桌曆＋年曆</p>
                    <p class="text-Neutral-900 font-roboto">NT$1,620</p>
                </div>

                <div class="flex justify-between gap-x-3">
                    <p class="text-Neutral-700 text-sm">運費</p>
                    <p class="text-Neutral-900 font-roboto">NT$80</p>
                </div>
            </div>
        </div>

        <div class="flex justify-between pt-[10px] mt-[70px] border-t border-t-Neutral-200">
            <p class="text-Neutral-700 text-sm">總金額</p>
            <p class="text-Neutral-900 font-roboto">NT$1,620</p>
        </div>
    </div>
</template>
