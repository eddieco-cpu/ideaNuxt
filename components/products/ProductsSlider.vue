<template>
    <div class="h-full w-full relative max-xl:h-auto" v-if="slides">
        <!--  -->
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
                delay: 5000,
                disableOnInteraction: false,
            }"
            :pagination="pagination"
        >
            <SwiperSlide v-for="(slide, idx) in slides" :key="idx" >
                <div
                    class="relative block w-[626px] h-[400px] aspect-[313/200] rounded-lg overflow-hidden max-xl:aspect-auto max-md:aspect-[323/206] max-md:w-full max-md:h-auto"
                >
                    <picture
                        class="block overflow-hidden w-full h-full max-md:w-auto max-md:h-auto max-md:absolute max-md:top-0 max-md:left-0 max-md:right-0 max-md:bottom-0"
                    >
                        <img :src="slide" alt="product" class="block w-full h-full object-cover" />
                    </picture>
                </div>
            </SwiperSlide>
        </Swiper>
        <div
            class="main-slide__btn-pre w-6 h-6 bg-white rounded-[50px] border-2 border-Primary-200 flex justify-center items-center cursor-pointer absolute m-auto bottom-2 right-0 left-0 z-[2] translate-x-[-280px] max-xl:bottom-11 max-xl:translate-x-0 max-xl:right-auto max-xl:left-3"
        >
            <UIcon name="i-heroicons-chevron-left" class="text-Primary-500-Primary text-sm" />
        </div>

        <div
            class="main-slide__btn-next w-6 h-6 bg-white rounded-[50px] border-2 border-Primary-200 flex justify-center items-center cursor-pointer absolute m-auto bottom-2 right-0 left-0 z-[2] translate-x-[280px] max-xl:bottom-11 max-xl:translate-x-0 max-xl:right-3 max-xl:left-auto"
        >
            <UIcon name="i-heroicons-chevron-right" class="text-Primary-500-Primary text-sm" />
        </div>

        <div class="main-slide__pagnation">
            <!-- <li class="main-slide__pagnation--page"></li> -->
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    slides: {
        type: Array,
        default: () => [],
    },
});


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

@media screen and (max-width: 768px) {
    .swiper-slide {
        width: 100%;
        margin: 0;
    }
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
