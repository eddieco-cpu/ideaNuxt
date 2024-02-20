<template>
    <section class="flex justify-center items-start gap-x-10 mx-auto max-w-[1088px] mb-10" :class="class">
        <!--  -->
        <slot name="des"></slot>

        <!--  -->
        <div class="w-[710px] p-6 rounded-lg shrink-0 bg-white" :class="formClass">
            <slot name="form"></slot>
        </div>
    </section>
</template>
<script setup>
const props = defineProps({
    class: String,
    formClass: String,
});
</script>
<style scoped></style>
