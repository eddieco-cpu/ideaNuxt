<template>
  <CustomLoading  ref="customLoading"/>
  <NuxtLoadingIndicator />

  <!-- <Header /> -->
  <LayoutHeader @openModal="openModal" />

  <!-- 主要內容 -->
  <main class="pt-[52px] pb-[40px] md:pt-[74px] md:pb-[120px]">
    <slot />
  </main>

  <!-- 頁腳 -->
  <LayoutFooter />

  <!-- Modal -->
  <ModalRegister v-model="showModal" />
  <ModalLogin v-model="showModal" />
  <ModalForgotPassword v-model="showModal" />
</template>

<script setup>
import CustomLoading from '~/components/loading/CustomLoading.vue';

const showModal = ref("");

function openModal(modalName = "close") {
  showModal.value = modalName;
}

const customLoading = ref(null);

function showLoading() {
  if (customLoading.value) {
    customLoading.value.show();
  }
}

function hideLoading() {
  if (customLoading.value) {
    customLoading.value.hide();
  }
}

provide('showLoading', showLoading);
provide('hideLoading', hideLoading);
provide("openModal", openModal);
</script>

<style scoped></style>
