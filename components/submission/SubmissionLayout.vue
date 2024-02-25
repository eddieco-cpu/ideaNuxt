<template>
    <section
        class="flex justify-center items-start gap-x-10 mx-auto max-w-[1088px] mb-10 max-lg:flex-col max-lg:max-w-[710px] max-lg:gap-y-6 max-lg:gap-x-0 max-md:mx-6"
        :class="class"
    >
        <!--  -->
        <slot name="des"></slot>

        <!--  -->
        <div class="w-[710px] p-6 rounded-lg shrink-0 bg-white max-md:w-full max-md:p-3" :class="formClass">
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
