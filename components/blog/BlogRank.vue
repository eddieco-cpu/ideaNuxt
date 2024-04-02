<template>
    <div class="bg-white flex items-start justify-between first:pt-2 last:pb-2 py-6 px-3 group cursor-pointer">
        <div
            class="rounded-lg bg-Primary-400-Hover size-[30px] text-white font-bold text-center transition-all duration-300 group-hover:bg-Primary-500-Primary"
        >
            <span class="font-roboto leading-[30px]">1</span>
        </div>
        <div class="flex flex-col gap-y-1 w-[206px]">
            <p class="line-clamp-2 text-sm font-medium">揭開團購的神秘面紗，享受超值折扣，共享樂趣，省錢購物新體驗！</p>
            <span class="text-xs text-Primary-400-Hover mt-1">生活知識</span>
        </div>
        <div class="size-8 cursor-pointer relative">
            <img
                src="~assets/images/blog/right-circle.svg"
                alt="arrow"
                class="transition-all duration-300 w-full group-hover:opacity-0 absolute top-0"
            />
            <img
                src="~assets/images/blog/right-circle-active.svg"
                alt="arrow"
                class="transition-all duration-300 w-full opacity-0 group-hover:opacity-100 absolute top-0"
            />
        </div>
    </div>
</template>
