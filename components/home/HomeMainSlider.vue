<template>
    <div class="min-h-[300px] relative mb-8 home max-md:min-h-[213px]">
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
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }"
                :pagination="pagination"
            >
                <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
                    <NuxtLink :to="slide.url" >
                    
                        <div
                            class="relative block w-[630px] aspect-[63/30] rounded-lg overflow-hidden max-md:w-[324px] max-md:aspect-[324/200] group"
                        >
                            <picture class="block overflow-hidden w-full h-full">
                                <img
                                    :src="slide.photo"
                                    alt="product"
                                    class="block w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </picture>
                            <div
                                class="py-4 px-6 absolute z-[2] bottom-0 left-0 w-full bg-[rgba(23,20,56,0.5)] text-white max-md:py-2 max-md:px-3"
                            >
                                <p
                                    class="font-medium text-base mb-3 flex justify-start items-center max-md:text-xs max-md:mb-[6px]"
                                >
                                    <span
                                        v-if = "slide.type === 1"
                                        class="inline-block font-normal text-sm text-center bg-Secondary-500-Primary rounded px-2 py-1 mr-2 max-md:text-xs"
                                        >限時團購</span
                                    >
                                    <span
                                        v-else
                                        class="inline-block font-normal text-sm text-center bg-Secondary-500-Primary rounded px-2 py-1 mr-2 max-md:text-xs"
                                        >限時募資</span
                                    >
                                    {{ slide.provider }}
                                    <!-- {{ useState(slide.photo + idx, () => helperLorem(5, 10)).value }} -->
                                </p>
                                <p
                                    class="font-normal text-xl leading-5 line-clamp-2 max-md:text-xs max-md:line-clamp-1 max-md:leading-3"
                                >
                                    {{ slide.title }}
                                </p>
                            </div>
                        </div>
                    </NuxtLink>
                </SwiperSlide>
            </Swiper>
        </ClientOnly>
        <div
            class="main-slide__btn-pre w-8 h-8 bg-white rounded-[50px] ring-2 ring-Primary-200 flex justify-center items-center cursor-pointer absolute m-auto top-0 bottom-0 right-0 left-0 z-[2] translate-x-[-370px] max-md:hidden"
        >
            <UIcon name="i-heroicons-chevron-left" class="text-Primary-500-Primary text-sm" />
        </div>

        <div
            class="main-slide__btn-next w-8 h-8 bg-white rounded-[50px] ring-2 ring-Primary-200 flex justify-center items-center cursor-pointer absolute m-auto top-0 bottom-0 right-0 left-0 z-[2] translate-x-[370px] max-md:hidden"
        >
            <UIcon name="i-heroicons-chevron-right" class="text-Primary-500-Primary text-sm" />
        </div>

        <div class="main-slide__pagnation">
            <!-- <li class="main-slide__pagnation--page"></li> -->
        </div>
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

<style>
.home .swiper-slide {
    width: auto;
    margin: 0 8px;
}
.home .swiper-slide:not(.swiper-slide-active) {
    opacity: 0.6;
}
.home .main-slide__pagnation {
    width: auto;
    transform: translate(0, 10px) !important;
    left: 0 !important;
    background-color: transparent;
    /* outline: 1px solid red; */
    margin: 0 auto;
}
.home .swiper-pagination-bullet {
    /* outline: 1px solid green; */

    width: 36px;
    height: 4px !important;
    background-color: #ccbff6;
    border-radius: 50px;
    cursor: pointer;
    /* opacity: 0; */
}
.home .swiper-pagination-bullet-active-main {
    opacity: 1;
    background-color: #ccbff6;
}
.home .swiper-pagination-bullet-active {
    width: 48px;
    background-color: #917fdd;
}
@media screen and (max-width: 768px) {
    .home .swiper-pagination-bullet {
        width: 16px;
        height: 3px;
    }
    .home .swiper-pagination-bullet-active {
        width: 24px;
    }
}
</style>
