<template>
    <div class="rounded-lg bg-white border p-6">
        <div class="flex pb-[10px] border-b border-Neutral-100 font-medium">
            <p class="text-Secondary-400-Hover" v-show="defaultAddress">預設 -&nbsp;</p>
            <p class="text-black/[0.85]">地址{{ index }}</p>

            <div class="ml-auto flex gap-x-6">
                <button
                    class="underline text-Primary-500-Primary text-sm"
                    v-show="!defaultAddress"
                    @click="setDefaultAddress"
                >
                    設為預設地址
                </button>

                <button class="underline text-Primary-500-Primary text-sm" @click="editAddress">編輯</button>
            </div>
        </div>

        <div class="pt-[10px] text-sm">
            <p>{{ name }} / {{ phone }}</p>
            <p class="mt-[10px]">{{ email }} / {{ address }}</p>
        </div>
    </div>
</template>

<script setup>
const { index, defaultAddress, name, phone, email, address } = defineProps({
    index: {
        type: Number,
        default: 1,
    },
    defaultAddress: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        default: "",
    },
    phone: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },
});

const emit = defineEmits(["setDefaultAddress", "editAddress"]);

function setDefaultAddress() {
    emit("setDefaultAddress", index - 1);
}

function editAddress() {
    emit("editAddress", index - 1, true);
}
</script>

<style lang="scss" scoped></style>
