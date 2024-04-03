<template>
    <div class="min-h-[300px] relative mb-8 max-md:min-h-[213px]">
        <ClientOnly>
            <Swiper
                v-if="slides.length > 0"
                :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
                :slides-per-view="'auto'"
                :centered-slides="true"
                :loop="true"
                :navigation="{
                    nextEl: '.main-slide__btn-next',
                    prevEl: '.main-slide__btn-pre',
                }"
                :autoplay="false"
                :pagination="pagination"
            >
                <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
                    <div class="w-[324px] aspect-[324/200] md:w-[1200px] md:aspect-[2.73/1]">
                        <div class="w-full h-full">
                            <picture class="block overflow-hidden w-full h-full rounded-lg">
                                <img
                                    :src="slide.photo"
                                    alt="product"
                                    class="block w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </picture>
                            <div
                                class="py-4 px-3 md:py-[30px] md:px-[47px] absolute z-[2] bottom-0 left-0 w-full bg-gradient-to-b from-[#001738]/0 to-[#001738]/80"
                            >
                                <div class="flex">
                                    <div class="bg-white/40 rounded-xl text-sm py-1 px-[10px]">
                                        <span class="text-white mr-1">＃</span>
                                        <span class="text-white">{{ slide.tag }}</span>
                                    </div>
                                </div>

                                <p class="mt-2 text-sm md:text-2xl font-medium text-white leading-5 md:leading-[34px]">
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
                    </div>
                </SwiperSlide>
            </Swiper>
        </ClientOnly>

        <div class="main-slide__pagnation"></div>
    </div>
</template>

<script setup>
//
const props = defineProps({
    slides: {
        type: Array,
        default: () => [],
    },
});

//
const pagination = {
    el: ".main-slide__pagnation",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
    renderBullet: function (index, className) {
        return `<li class="${className}" data-index="${index}"></li>`;
    },
    dynamicBullets: true,
    dynamicMainBullets: 4,
};
</script>

<style scoped lang="scss">
:deep(.swiper-slide) {
    width: auto;
    margin: 0 8px;
}
:deep(.swiper-slide:not(.swiper-slide-active)) {
    opacity: 0.6;
}
:deep(.main-slide__pagnation) {
    width: auto;
    transform: translate(0, 10px) !important;
    left: 0 !important;
    background-color: transparent;
    margin: 0 auto;
}
:deep(.swiper-pagination-bullet) {
    width: 36px;
    height: 4px !important;
    background-color: #ccbff6;
    border-radius: 50px;
    cursor: pointer;
}
:deep(.swiper-pagination-bullet-active-main) {
    opacity: 1;
    background-color: #ccbff6;
}
:deep(.swiper-pagination-bullet-active) {
    width: 48px;
    background-color: #917fdd;
}
@media screen and (max-width: 768px) {
    :deep(.swiper-pagination-bullet) {
        width: 16px;
        height: 3px;
    }
    :deep(.swiper-pagination-bullet-active) {
        width: 24px;
    }
}
</style>
