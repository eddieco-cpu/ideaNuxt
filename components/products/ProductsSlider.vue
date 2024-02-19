<template>
    <div class="h-full w-full relative max-xl:h-auto max-xl:ring-2 max-xl:ring-orange-400">
        <Swiper
            :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
            :slides-per-view="'auto'"
            :centered-slides="true"
            :autoplay="{
                delay: 5000,
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
                <div
                    class="relative block w-[626px] h-[400px] aspect-[313/200] rounded-lg overflow-hidden max-xl:aspect-auto"
                >
                    <picture class="block overflow-hidden w-full h-full">
                        <img :src="slide.photo" alt="product" class="block w-full h-full object-cover" />
                    </picture>
                </div>
            </SwiperSlide>
        </Swiper>
        <div
            class="main-slide__btn-pre w-6 h-6 bg-white rounded-[50px] border-2 border-Primary-200 flex justify-center items-center cursor-pointer absolute m-auto bottom-2 right-0 left-0 z-[2] translate-x-[-280px]"
        >
            <UIcon name="i-heroicons-chevron-left" class="text-Primary-500-Primary text-sm" />
        </div>

        <div
            class="main-slide__btn-next w-6 h-6 bg-white rounded-[50px] border-2 border-Primary-200 flex justify-center items-center cursor-pointer absolute m-auto bottom-2 right-0 left-0 z-[2] translate-x-[280px]"
        >
            <UIcon name="i-heroicons-chevron-right" class="text-Primary-500-Primary text-sm" />
        </div>

        <div class="main-slide__pagnation">
            <!-- <li class="main-slide__pagnation--page"></li> -->
        </div>
    </div>
</template>

<script setup>
const slides = ref(
    Array.from({ length: 12 }, () => {
        return {
            photo: helperPicture(),
        };
    }),
);

//
const pagination = {
    el: ".main-slide__pagnation",
    type: "fraction",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
    // renderBullet: function (index, className) {
    //     return `<li class="${className}" data-index="${index}"></li>`;
    // },
    dynamicBullets: true,
    dynamicMainBullets: 4,
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
    width: auto;
    width: 50px;
    border-radius: 50px;
    background-color: rgba(1, 1, 1, 0.35);
    color: #fff;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    padding: 5px 0px;
    box-sizing: content-box;
    margin: 0 auto;
    transform: translateY(-36px);
    position: relative;
    z-index: 1;
}
/* .swiper-pagination-bullet {

    width: 36px;
    height: 100%;
    background-color: #ccbff6;
    border-radius: 50px;
    cursor: pointer;
}
.swiper-pagination-bullet-active-main {
    opacity: 1;
    background-color: #ccbff6;
}
.swiper-pagination-bullet-active {
    width: 48px;
    background-color: #917fdd;
} */
</style>
