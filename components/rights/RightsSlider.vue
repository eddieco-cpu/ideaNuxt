<template>
    <div>
        <h1>Nuxt Swiper Basic Example</h1>
        <Swiper
            :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
            :slides-per-view="'auto'"
            :centered-slides="true"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
            }"
            :loop="true"
        >
            <SwiperSlide
                v-for="(slide, idx) in slides"
                :key="idx"
                :style="`background-color: ${slide.bg}; color: ${slide.color}`"
            >
                <!-- <picture class="block w-[600px] overflow-hidden aspect-[285/182] rounded max-md:aspect-[304/186]">
                    <img
                        :src="helperPicture()"
                        alt="product"
                        class="block w-full h-full group-hover:scale-110 object-cover transition-transform duration-350 ease-in-out"
                    />
                </picture> -->
                <div
                    class="relative w-[630px] h-[630px] overflow-hidden flex justify-center items-center ring-2 text-5xl"
                >
                    {{ idx }}
                </div>
            </SwiperSlide>

            <!-- useSwiper() within a swiper instance -->
            <!-- <SwiperControls /> -->
        </Swiper>
    </div>
</template>

<script setup>
const slides = ref(
    Array.from({ length: 10 }, () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        // Figure out contrast color for font
        const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "black" : "white";

        return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast };
    }),
);
</script>

<style>
/* .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 20vh;
    font-size: 4rem;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
}
.swiper-wrapper {
    min-width: 100vh;
    width: 100vh;
}
.swiper-cards {
    width: 240px;
    height: 240px;
}
.swiper-cards .swiper-slide {
    border-radius: 6px;
    border: 1px solid black;
} */

.swiper-slide {
    /* width: 630px; */
    /* margin: 0 10px; */
    width: auto;
}
</style>
