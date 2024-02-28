<!-- 子組件 -->
<template>
    <section
        class="max-w-[590px] bg-white rounded-3xl border-2 border-Primary-100 p-10 shadow-card max-md:p-6"
        :class="class"
    >
        <div class="flex justify-between items-center mb-5 max-md:items-end max-md:mb-0">
            <div class="text-left">
                <h3 class="font-medium text-xl text-Primary-500-Primary max-md:text-xl">{{ dataObj.note }}</h3>
                <p class="text-4xl leading-tight font-bold text-Primary-500-Primary max-md:hidden">
                    {{ dataObj.title }}
                </p>
            </div>
            <img :src="dataObj.photo" class="block h-[94px] max-md:h-[73px]" />
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
.gradient-to-t {
    background-color: transparent;
    background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0) 30%);
    min-height: 350px;
}
.gradient-to-t > * {
    opacity: 0;
}
.gradient-to-b {
    background-color: transparent;
    background: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0) 30%);
    min-height: 350px;
}
.gradient-to-b > * {
    opacity: 0;
}

@media not all and (min-width: 1280px) {
    .gradient-to-t {
        background: linear-gradient(to top, #fff, #fff);
        min-height: auto;
    }
    .gradient-to-t > * {
        opacity: 1;
    }
    .gradient-to-b {
        background: linear-gradient(to bottom, #fff, #fff);
        min-height: auto;
    }
    .gradient-to-b > * {
        opacity: 1;
    }
}
</style>
