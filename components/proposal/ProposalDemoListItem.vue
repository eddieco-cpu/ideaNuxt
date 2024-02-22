<!-- 子組件 -->
<template>
    <li
        class="flex justify-start items-start max-w-[640px] max-md:flex-col max-md:items-center max-md:px-5"
        :class="class"
    >
        <b class="font-roboto text-8xl mr-3 text-Primary-200 max-md:text-[40px] max-md:mr-0 max-md:mb-2">
            {{ dataObj.index }}
        </b>
        <article class="text-left max-md:text-center">
            <h3 class="text-2xl font-bold text-Primary-500-Primary mb-2 max-md:text-xl max-md:mb-3">
                {{ dataObj.title }}
            </h3>
            <p class="text-base leading-7 font-normal max-md:text-sm" v-html="dataObj.content"></p>
        </article>
    </li>
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
