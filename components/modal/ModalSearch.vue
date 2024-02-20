<template>
    <Transition name="modal">
        <ModalSearchContainer
            :text="'會員登入'"
            @hideModal="hideModal"
            v-if="modelValue === 'search'"
            :showHeader="true"
        >
            <div>123</div>
        </ModalSearchContainer>
    </Transition>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { useToast } from "vue-toastification";

import { POST } from "~/utils/helperFetchData.js";

const toast = useToast();
const store = useAuthStore();

const { modelValue } = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

function hideModal(value = "") {
    emit("update:modelValue", value);
}

const state = reactive({
    phone: "kminchelle",
    password: "0lelplR",
});

async function onSubmit(event) {
    const { phone, password } = event.data;

    const payload = { username: phone, password: password };

    const data = await POST("https://dummyjson.com/auth/login", payload);

    if (!!data) {
        toast.success("登入成功");

        store.isLogin = true;
        store.userInfo = data;

        hideModal();
    }
}
</script>

<style scoped lang="scss"></style>
