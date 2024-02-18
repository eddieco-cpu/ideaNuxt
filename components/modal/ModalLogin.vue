<template>
    <Transition name="modal">
        <ModalContainer :text="'會員登入'" @hideModal="hideModal" v-if="modelValue === 'login'">
            <UForm :schema="loginSchema" :state="state" class="w-full" @submit="onSubmit">
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
import { loginSchema } from "~/validation";

const { modelValue } = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

function hideModal(value = "") {
    emit("update:modelValue", value);
}

const state = reactive({
    phone: undefined,
    password: undefined,
});

async function onSubmit(event) {
    console.log(event.data);

    const data = await $fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: "kminchelle",
            password: "0lelplR",
        }),
    });

    const curruntUser = await $fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${data.token}`,
        },
    });

    console.log("data", data, "curruntUser", curruntUser);
}
</script>

<style scoped lang="scss"></style>
