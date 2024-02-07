<template>
  <Transition name="modal">
    <ModalContainer
      :text="'忘記密碼'"
      :subTitle="'為了確保是您本人，將會寄送驗證碼到您的手機，驗證碼有效時限為10分鐘。'"
      @hideModal="hideModal"
      v-if="modelValue === 'forgotPassword'"
    >
      <p class="self-start mt-7 mb-2 text-sm text-opacity-85">手機號碼</p>

      <UInput
        variant="none"
        placeholder="輸入手機號碼"
        class="w-full mb-6 rounded-lg border border-Neutral-400-Hover"
      >
        <template #leading>
          <img src="~assets/images/icon/phone-icon.svg" alt="phone-icon" />
        </template>
      </UInput>

      <p class="self-start mb-2 text-sm text-opacity-85">驗證碼：</p>

      <UButtonGroup
        orientation="horizontal"
        class="self-start flex w-full shadow-none"
      >
        <UInput
          variant="none"
          placeholder="ex: 0912345678"
          class="border border-Neutral-400-Hover rounded-lg mr-1 w-40 md:w-60"
        />

        <UButton
          color="black"
          variant="ghost"
          class="border border-Primary-500-Primary hover:opacity-70 transition duration-500 rounded-lg flex-1 justify-center bg-Primary-500-Primary text-sm text-white"
        >
          發送驗證碼
        </UButton>
      </UButtonGroup>

      <button
        class="w-full bg-Primary-500-Primary block p-2 rounded-lg text-white mb-3 mt-12 text-sm"
      >
        只剩一步
      </button>
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
