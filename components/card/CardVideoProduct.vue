<template>
    <div class="flex items-center bg-white rounded-2xl w-[324px] min-h-[72px]">
        <div>
            <img :src="helperPicture()" alt="products" class="block w-[72px] h-[72px] object-cover rounded-2xl" />
        </div>

        <div class="flex items-center gap-x-2 px-4 py-2">
            <div class="w-[188px]">
                <h3
                    class="text-xs mb-1"
                    :class="[isFundRaising ? 'text-Primary-500-Primary' : 'text-Secondary-500-Primary']"
                >
                    {{ isFundRaising ? "點子集資" : "限時團購" }}
                </h3>

                <p class="line-clamp-2 text-xs text-Neutral-900 font-medium">
                    All Day水潤機 | 突破日夜保濕侷限，填滿保養空窗期，創造24小時保養時區！
                </p>
            </div>

            <NuxtLink v-show="isFundRaising" to="/category/technology-ai?type=fundraise">
                <img src="~assets/images/icon/rightCircle-purple-icon.svg" alt="rightCircle" class="w-8 h-8" />
            </NuxtLink>

            <NuxtLink v-show="!isFundRaising" to="/category/technology-ai?type=groupbuying">
                <img src="~assets/images/kol/rightCircle-icon.svg" alt="rightCircle" class="w-8 h-8" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { isFundRaising } = defineProps({
    isFundRaising: {
        type: Boolean,
        default: true,
    },
});
</script>
