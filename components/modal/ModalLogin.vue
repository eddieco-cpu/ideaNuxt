<template>
    <Transition name="modal">
        <ModalContainer :text="'會員登入'" @hideModal="hideModal" v-if="modelValue === 'login'">
            <UFormGroup class="w-full mb-6">
                <UInput placeholder="輸入手機號碼">
                    <template #leading>
                        <img src="~assets/images/icon/phone-icon.svg" alt="phone-icon" />
                    </template>
                </UInput>
            </UFormGroup>

            <UFormGroup class="w-full mb-6">
                <UInput type="password" placeholder="輸入密碼">
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

            <button class="w-full bg-Primary-500-Primary block p-2 rounded-lg text-white m-3 text-sm">登入</button>
        </ModalContainer>
    </Transition>
</template>

<script setup>
const { modelValue } = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

function hideModal(value = "") {
    emit("update:modelValue", value);
}
</script>

<style scoped lang="scss"></style>
