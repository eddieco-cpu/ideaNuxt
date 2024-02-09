<template>
    <div>
        <Swiper v-bind="swiperConfig">
            <SwiperSlide>
                <div class="w-40">Slide 1</div>
            </SwiperSlide>
            <SwiperSlide style="background-color: orange"><div class="w-40">Slide 2</div></SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide style="background-color: orange">Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide style="background-color: orange">Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide style="background-color: orange">Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
            <SwiperSlide style="background-color: orange">Slide 10</SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
//const slides = reactive([{ photo: helperPicture(), text: helperLorem(30, 40) }]);
// import Swiper 與模組樣式
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const swiperConfig = {
//     modules: [SwiperNavigation, SwiperEffectCreative],
//     slidesPerView: "auto",
//     spaceBetween: 16,
//     loop: true,
//     grabCursor: true,

//     // breakpoints: {
//     //     545: {
//     //         slidesPerView: 2,
//     //     },
//     //     1080: {
//     //         slidesPerView: 3,
//     //     },
//     //     1280: {
//     //         slidesPerView: 4,
//     //     },
//     // },
// };

const swiperConfig = {
    modules: [Pagination, FreeMode],
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    freeMode: true,

    // breakpoints: {
    //     545: {
    //         slidesPerView: 2,
    //     },
    //     1080: {
    //         slidesPerView: 3,
    //     },
    //     1280: {
    //         slidesPerView: 4,
    //     },
    // },
};
</script>

<style scoped></style>
