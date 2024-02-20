<template>
    <Transition name="modal">
        <ModalContainer :text="'會員登入'" @hideModal="hideModal" v-if="modelValue === 'login'">
            <UForm :state="state" class="w-full" @submit="onSubmit">
                <UFormGroup name="phone" class="mb-6">
                    <UInput v-model="state.phone" placeholder="輸入手機號碼">
                        <template #leading>
                            <img src="~assets/images/icon/phone-icon.svg" alt="phone-icon" />
                        </template>
                    </UInput>
                </UFormGroup>

                <UFormGroup name="password" class="mb-6">
                    <UInput v-model="state.password" type="password" placeholder="輸入密碼">
                        <template #leading>
                            <img src="~assets/images/icon/lock-icon.svg" alt="lock-icon" />
                        </template>
                    </UInput>
                </UFormGroup>
                <div class="mt-6 flex items-center justify-between w-full">
                    <span
                        class="text-sm text-Primary-600-Dark-Primary underline cursor-pointer"
                        @click="hideModal('register')"
                        >尚未有帳號，點此註冊
                    </span>

                    <span
                        class="text-sm text-Primary-600-Dark-Primary underline cursor-pointer"
                        @click="hideModal('forgotPassword')"
                        >忘記密碼</span
                    >
                </div>

                <button
                    type="submit"
                    class="w-full bg-Primary-500-Primary block p-2 rounded-lg text-white mt-3 text-sm"
                >
                    登入
                </button>
            </UForm>
        </ModalContainer>
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
