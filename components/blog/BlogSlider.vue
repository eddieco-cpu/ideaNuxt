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
                        <div class="w-full h-full md:grid md:grid-cols-[65%_auto] md:grid-row-2 md:gap-5">
                            <BlogSliderCard :slide="slide" class="row-span-2 h-full" />

                            <BlogSliderCard
                                class="hidden md:block h-full"
                                v-for="(subSlide, index) in slide.subSlider"
                                :key="index"
                                :slide="subSlide"
                                :isSubSlide="true"
                            />
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
}
:deep(.swiper-slide:not(.swiper-slide-active)) {
    opacity: 0;
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

    :deep(.swiper-slide:not(.swiper-slide-active)) {
        opacity: 0.6;
    }

    :deep(.swiper-slide) {
        margin: 0 8px;
    }
}
</style>
