<!-- 子組件 -->
<template>
    <li class="flex justify-start items-start max-w-[640px]" :class="class">
        <b class="font-roboto text-8xl mr-3 text-Primary-200">
            {{ dataObj.index }}
        </b>
        <article class="text-left">
            <h3 class="text-2xl font-bold text-Primary-500-Primary mb-2">{{ dataObj.title }}</h3>
            <p class="text-base leading-7 font-normal" v-html="dataObj.content"></p>
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
