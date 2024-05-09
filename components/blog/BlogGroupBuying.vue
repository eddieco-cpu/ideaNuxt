<template>
    <div
        class="flex justify-between md:gap-x-3 py-2 px-[10px] rounded-lg border border-Primary-100 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.02)] group cursor-pointer"
        @click="goToPage"
    >
        <div class="w-[100px] md:w-[114px]">
            <img
                :src="helperPicture()"
                alt="image"
                class="aspect-[1/1] object-cover rounded transition-transform duration-300 group-hover:scale-[1.03]"
            />
        </div>

        <div class="flex flex-col justify-between max-w-[55%] md:max-w-[61%]">
            <div class="flex items-center gap-x-1">
                <UAvatar
                    :src="helperPicture()"
                    alt="user"
                    size="xl"
                    :ui="{
                        size: {
                            xl: `size-[20px]`,
                        },
                    }"
                />
                <span class="text-xs font-medium text-Neutral-700">媽媽我想嫁去台南</span>
            </div>

            <p class="line-clamp-2 text-xs text-Neutral-900 font-medium leading-[22px]">
                Yuki X【JWAY】綠能無線除濕器2小時極速還原除濕器2小時極速還原
            </p>

            <p class="text-Status-Color-Danger-500-Primary font-medium font-roboto">
                $ {{ helperMoneyComma(3000) }} - $ {{ helperMoneyComma(5000) }}
            </p>
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
    navigateTo(`/products/buying/${1}`);
}
</script>
