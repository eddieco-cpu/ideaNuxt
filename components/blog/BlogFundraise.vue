<template>
    <div
        class="flex md:gap-x-3 justify-between py-2 px-[10px] rounded-lg border border-Primary-100 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.02)] group cursor-pointer"
        @click="goToPage"
    >
        <div class="w-[100px] md:w-[184px]">
            <img
                :src="helperPicture()"
                alt="image"
                class="aspect-[1/0.62] object-cover rounded transition-transform duration-300 group-hover:scale-[1.03]"
            />
        </div>

        <div class="flex flex-col justify-between max-w-[55%] md:max-w-[48%]">
            <p class="line-clamp-2 text-xs text-Neutral-900 font-medium leading-[22px]">
                All Day水潤機 | 突破日夜保濕侷限，填滿保養空窗期，創造24小時保養時區！
            </p>

            <div class="flex items-center mt-1">
                <!-- 價格 -->
                <p class="font-medium text-Primary-500-Primary text-sm font-roboto">$ {{ helperMoneyComma(3000) }}</p>

                <!-- 日期 -->
                <img src="~assets/images/icon/clock-icon.svg" alt="clock" width="10" class="ml-auto" />
                <p class="ml-1 text-xs font-roboto">{{ 15 }}日</p>

                <!-- 人數 -->
                <img src="~assets/images/icon/user-icon.svg" alt="user" width="10" class="ml-3" />
                <p class="ml-1 text-xs font-roboto">{{ 300 }}人</p>
            </div>

            <div class="flex items-center gap-3 mt-1">
                <UMeter :value="60" />
                <span class="font-medium text-xs text-Primary-500-Primary font-roboto">{{ 60 }}%</span>
            </div>
        </div>

        <div class="self-center relative size-5 md:size-8">
            <img
                src="~assets/images/blog/right-circle-light.svg"
                alt="arrow"
                class="w-full transition-all duration-300 group-hover:opacity-0 absolute top-0"
            />

            <img
                src="~assets/images/blog/right-circle-active.svg"
                alt="arrow"
                class="transition-all duration-300 w-full opacity-0 group-hover:opacity-100 absolute top-0"
            />
        </div>
    </div>
</template>

<script setup>
function goToPage() {
    navigateTo(`/project/${1}`);
}
</script>
