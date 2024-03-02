<template>
    <div class="flex md:flex-row gap-4">
        <img :src="helperPicture()" alt="product" class="size-[66px] md:size-[100px] rounded" />

        <div class="flex flex-col gap-y-3 md:flex-row md:gap-x-6 flex-1 relative">
            <div class="md:max-w-[450px]">
                <h1 class="text-Neutral-800 text-sm font-medium line-clamp-2">
                    聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的最佳音樂夥伴
                </h1>

                <p class="text-Neutral-700 text-xs mt-1">VIP超早鳥限定｜全套桌曆＋年曆</p>
            </div>

            <span class="text-Neutral-900 font-medium font-roboto flex-1">NT$1,620</span>

            <div
                class="text-xs text-Neutral-700 flex gap-x-2 absolute bottom-1 right-0 md:flex-col md:gap-y-2 md:items-end md:static"
            >
                <button class="underline">移至收藏夾</button>
                <button class="underline">刪除</button>
            </div>
        </div>
    </div>
</template>
