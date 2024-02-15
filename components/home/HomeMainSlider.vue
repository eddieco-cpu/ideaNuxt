<template>
    <div class="min-h-[300px] relative mb-8" :style="`--x: 100; --t: ${slides.length}`">
        <Swiper
            :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
            :slides-per-view="'auto'"
            :centered-slides="true"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
            }"
            :loop="true"
            :navigation="{
                nextEl: '.main-slide__btn-next',
                prevEl: '.main-slide__btn-pre',
            }"
            :pagination="pagination"
        >
            <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
                <div class="relative block w-[630px] aspect-[63/30] rounded-lg overflow-hidden">
                    <picture class="overflow-hidden w-full h-full">
                        <img :src="slide.photo" alt="product" class="block w-full h-full object-cover" />
                    </picture>
                    <div class="py-4 px-6 absolute z-[2] bottom-0 left-0 w-full bg-[rgba(0,0,0,0.3)] text-white">
                        <p class="font-medium text-base mb-4 flex justify-start items-center">
                            <span
                                class="inline-block font-normal text-sm text-center bg-Secondary-500-Primary rounded px-2 py-1 mr-2"
                                >限時團購</span
                            >
                            {{ slide.provider }}
                        </p>
                        <p class="font-normal text-xl">{{ slide.title }}</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <div
            class="main-slide__btn-pre w-8 h-8 bg-white rounded-[50px] ring-2 ring-Primary-200 flex justify-center items-center cursor-pointer absolute m-auto top-0 bottom-0 right-0 left-0 z-[2] translate-x-[-370px]"
        >
            <UIcon name="i-heroicons-chevron-left" class="text-Primary-500-Primary text-sm" />
        </div>

        <div
            class="main-slide__btn-next w-8 h-8 bg-white rounded-[50px] ring-2 ring-Primary-200 flex justify-center items-center cursor-pointer absolute m-auto top-0 bottom-0 right-0 left-0 z-[2] translate-x-[370px]"
        >
            <UIcon name="i-heroicons-chevron-right" class="text-Primary-500-Primary text-sm" />
        </div>

        <div class="main-slide__pagnation" stlye="overflow: auto">
            <!-- <li class="main-slide__pagnation--page"></li> -->
        </div>
    </div>
</template>

<script setup>
//
// const props = defineProps({
//     slides: {
//         type: Array,
//         default: () => [],
//     },
// });
const slides = ref(
    Array.from({ length: 10 }, () => {
        return {
            photo: helperPicture(),
            provider: "觸把結值取受想",
            title: "假父雙十近英底死概宗久消原防找行終早板二。",
        };
    }),
);

//
const pagination = {
    el: ".main-slide__pagnation",
    clickable: true,
    // bulletClass: "swiper-pagination-bullet",
    // renderBullet: function (index, className) {
    //     return `<li class="${className}" data-index="${index}">${index}</li>`;
    // },
    // dynamicBullets: true,
    // dynamicMainBullets: 4,
};
</script>

<style>
.swiper-slide {
    width: auto;
    margin: 0 8px;
}
.swiper-slide:not(.swiper-slide-active) {
    opacity: 0.6;
}
.main-slide__pagnation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    transform: translateY(10px);
    /* outline: 1px solid red; */
    margin: 0 auto;
}
/* .swiper-pagination-bullet {
    width: 36px;
    height: 36px;
    background-color: #ccbff6;
    border-radius: 50px;
    cursor: pointer;
    outline: 1px solid green;
    display: block;
    display: none;
}
.swiper-pagination-bullet-active,
.swiper-pagination-bullet-active-main {
    width: 48px;
    background-color: #917fdd;
    display: block;
}

.swiper-pagination-bullet-active + * {
    display: block;
} */

/* .swiper-pagination-bullet:not(.swiper-pagination-bullet-active):nth-child(1),
.swiper-pagination-bullet:not(.swiper-pagination-bullet-active):nth-child(2) {
    display: block;
} */
</style>
