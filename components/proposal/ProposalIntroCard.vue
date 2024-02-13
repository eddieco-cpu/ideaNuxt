import type { Html } from '#build/components';
<!-- 子組件 -->
<template>
    <section class="max-w-[590px] bg-white rounded-3xl border-2 border-Primary-100 p-10 shadow-card" :class="class">
        <div class="flex justify-between items-center mb-5">
            <div class="text-left">
                <h3 class="font-medium text-xl text-Primary-500-Primary">{{ dataObj.note }}</h3>
                <p class="text-4xl leading-tight font-bold text-Primary-500-Primary">
                    {{ dataObj.title }}
                </p>
            </div>
            <img :src="'/_nuxt/assets/images/proposal/' + dataObj.photo" class="block w-[100px]" />
        </div>
        <article>
            <p class="text-base leading-7 font-normal" v-html="dataObj.content"></p>
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
