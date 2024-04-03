<template>
    <div class="block overflow-hidden rounded-lg relative">
        <img
            :src="slide.photo"
            alt="product"
            class="block w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div
            class="py-4 px-3 absolute z-[2] bottom-0 left-0 w-full bg-gradient-to-b from-[#001738]/0 to-[#001738]/80"
            :class="[isSubSlide ? 'md:py-4 md:px-5' : 'md:py-[30px] md:px-[47px]']"
        >
            <div class="flex">
                <div class="bg-white/40 rounded-xl text-sm py-1 px-[10px]">
                    <span class="text-white mr-1">＃</span>
                    <span class="text-white">{{ slide.tag }}</span>
                </div>
            </div>

            <p class="mt-2 text-sm text-white leading-[20px]" :class="showClass">
                {{ slide.title }}
            </p>

            <div class="hidden md:flex gap-x-3 items-center md:mt-4">
                <div class="text-white text-xs flex items-center">
                    <img src="~assets/images/blog/calendar-icon.svg" alt="calendar-icon" />
                    <span class="ml-1 font-roboto text-xs">{{ slide.date }}</span>
                </div>

                <div class="flex gap-x-2 items-center">
                    <UAvatar
                        :src="helperPicture()"
                        alt="user"
                        size="xl"
                        :ui="{
                            size: {
                                xl: 'w-[14px] h-[14px]',
                            },
                        }"
                    />
                    <span class="text-xs text-white"> {{ slide.provider }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    slide: {
        type: Object,
        default: () => {},
    },
    isSubSlide: {
        type: Boolean,
        default: false,
    },
});

const showClass = computed(() => {
    if (props.isSubSlide) {
        return "md:text-[16px] font-normal md:leading-[22px]";
    } else {
        return "md:text-[24px] font-medium md:leading-[34px]";
    }
});
</script>
