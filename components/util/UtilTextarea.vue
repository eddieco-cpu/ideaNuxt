<template>
    <div class="relative">
        <UTextarea
            :resize="resize"
            :placeholder="placeholder"
            :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)"
        />
        <p class="absolute bottom-[-22px] right-0 text-black/25">{{ modelValue.length }} / {{ max }}</p>
    </div>
</template>

<script setup>
const { modelValue, placeholder, max, resize } = defineProps({
    modelValue: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "",
    },
    max: {
        type: Number,
        default: 0,
    },
    resize: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["update:modelValue"]);
</script>
