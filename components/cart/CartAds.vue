<template>
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
</template>
