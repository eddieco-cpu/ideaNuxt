<template>
    <Transition name="modal">
        <ModalContainer
            :text="'忘記密碼'"
            :subTitle="'為了確保是您本人，將會寄送驗證碼到您的手機，驗證碼有效時限為10分鐘。'"
            @openModal="openModal('close')"
            v-if="modelValue === 'forgotPassword'"
        >
            <UFormGroup label="手機號碼" name="phone" class="w-full mb-6">
                <UInput placeholder="輸入手機號碼：">
                    <template #leading>
                        <img src="~assets/images/icon/phone-icon.svg" alt="phone-icon" />
                    </template>
                </UInput>
            </UFormGroup>

            <UFormGroup label="驗證碼：" name="validateCode" class="w-full">
                <UButtonGroup orientation="horizontal" class="self-start flex shadow-none">
                    <UFormGroup class="w-3/5">
                        <UInput placeholder="ex: 0912345678" class="mr-1" />
                    </UFormGroup>

                    <button
                        class="hover:opacity-70 transition duration-500 rounded-lg flex-1 px-4 py-1 justify-center bg-Primary-500-Primary text-sm text-white"
                    >
                        發送驗證碼
                    </button>
                </UButtonGroup>
            </UFormGroup>

            <button
                class="w-full bg-Primary-500-Primary block p-2 rounded-lg text-white mb-3 mt-12 text-sm"
                @click="submit"
            >
                只剩一步
            </button>
        </ModalContainer>
    </Transition>
</template>

<script setup>
const { modelValue } = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

function openModal(value = "") {
    emit("update:modelValue", value);
}

function submit() {}
</script>

<style scoped lang="scss"></style>
