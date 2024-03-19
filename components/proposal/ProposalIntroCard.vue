<!-- 子組件 -->
<template>
    <section
        class="max-w-[590px] bg-white rounded-3xl border-2 border-Primary-100 p-10 pb-8 pt-12 shadow-card max-md:p-6 max-md:pb-5 max-md:pt-14"
        :class="class"
    >
        <div class="deco"></div>
        <div class="relative flex justify-between items-center mb-5 max-md:items-end max-md:mb-0">
            <div class="text-left">
                <h3 class="font-medium text-xl text-Primary-500-Primary max-md:text-xl">{{ dataObj.note }}</h3>
                <p class="text-4xl leading-tight font-bold text-Primary-500-Primary max-md:hidden">
                    {{ dataObj.title }}
                </p>
            </div>
            <img :src="dataObj.photo" class="absolute bottom-0 right-0 block h-[95px] max-md:h-[73px]" />
        </div>
        <p class="text-2xl leading-tight font-bold text-Primary-500-Primary md:hidden max-md:mb-4">
            {{ dataObj.title }}
        </p>
        <article>
            <p class="text-base leading-7 font-normal max-md:text-sm" v-html="dataObj.content"></p>
        </article>
    </section>
</template>
<script setup>
const props = defineProps({
    class: String,
    dataObj: {
        type: Object,
        default: () => ({}),
    },
});
</script>
<style scoped>
/* -- */
.deco {
    display: none;
}

/* -- */
.gradient-to-t {
    @apply xl:border-0;
    background-color: transparent;
    background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0) 30%);
    min-height: 350px;

    position: relative;
}
.gradient-to-t > * {
    opacity: 0;
}
.gradient-to-t .deco {
    display: block;
    box-sizing: border-box;
    opacity: 1;
    position: absolute;
    width: 100%;
    height: 25px;
    bottom: 0;
    left: 0;
    z-index: 2;
    border-radius: 0 0 24px 24px;
    border: 2px solid rgb(229, 222, 250);
    border-top: transparent;
}
.gradient-to-t::before {
    content: "";
    position: absolute;
    width: 2px;
    height: calc(350px - 24px);
    bottom: 24px;
    left: 0;
    z-index: 1;
    background: linear-gradient(to top, rgb(229, 222, 250), rgba(255, 255, 255, 0) 20%);
}
.gradient-to-t::after {
    content: "";
    position: absolute;
    width: 2px;
    height: calc(350px - 24px);
    bottom: 24px;
    right: 0;
    z-index: 1;
    background: linear-gradient(to top, rgb(229, 222, 250), rgba(255, 255, 255, 0) 20%);
}

/* -- */
.gradient-to-b {
    @apply xl:border-0;
    background-color: transparent;
    background: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0) 30%);
    min-height: 350px;

    position: relative;
}
.gradient-to-b > * {
    opacity: 0;
}
.gradient-to-b .deco {
    display: block;
    box-sizing: border-box;
    opacity: 1;
    position: absolute;
    width: 100%;
    height: 25px;
    top: 0;
    left: 0;
    z-index: 2;
    border-radius: 24px 24px 0 0;
    border: 2px solid rgb(229, 222, 250);
    border-bottom: transparent;
}
.gradient-to-b::before {
    content: "";
    position: absolute;
    width: 2px;
    height: calc(350px - 24px);
    top: 24px;
    left: 0;
    z-index: 1;
    background: linear-gradient(to bottom, rgb(229, 222, 250), rgba(255, 255, 255, 0) 30%);
}
.gradient-to-b::after {
    content: "";
    position: absolute;
    width: 2px;
    height: calc(350px - 24px);
    top: 24px;
    right: 0;
    z-index: 1;
    background: linear-gradient(to bottom, rgb(229, 222, 250), rgba(255, 255, 255, 0) 30%);
}

@media not all and (min-width: 1280px) {
    .gradient-to-t .deco,
    .gradient-to-b .deco {
        display: none;
    }
    .gradient-to-t {
        background: linear-gradient(to top, #fff, #fff);
        min-height: auto;
    }
    .gradient-to-t > * {
        opacity: 1;
    }
    .gradient-to-t::before,
    .gradient-to-t::after {
        display: none;
    }
    .gradient-to-b {
        background: linear-gradient(to bottom, #fff, #fff);
        min-height: auto;
    }
    .gradient-to-b > * {
        opacity: 1;
    }
    .gradient-to-b::before,
    .gradient-to-b::after {
        display: none;
    }
}
</style>
