<template>
    <!-- <Header /> -->
    <HeaderMobile class="block md:hidden" @openModal="openModal" />
    <HeaderWeb class="hidden md:block" @openModal="openModal" />

    <!-- 主要內容 -->
    <main class="pt-[52px] pb-[40px] md:pt-[74px] md:pb-[120px]">
        <slot />
    </main>

    <!-- 頁腳 -->
    <TheFooter />

    <!-- Modal -->
    <ModalRegister v-model="showModal" />
    <ModalLogin v-model="showModal" />
    <ModalForgotPassword v-model="showModal" />
</template>

<script setup>
const showModal = ref("");

function openModal(modalName = "close") {
    showModal.value = modalName;
}
</script>

<style scoped></style>
