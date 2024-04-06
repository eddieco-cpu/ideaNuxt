<template>
    <div class="relative">
        <UTextarea
            :resize="resize"
            :placeholder="placeholder"
            :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)"
            :maxlength="max"
        />
        <p class="number absolute bottom-[-22px] right-0 text-black/25 text-sm">{{ modelValue.length }} / {{ max }}</p>
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
