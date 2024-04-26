<template>
    <div class="w-full h-2vh pt-10 pb-10 flex items-center">
        <div class="modal-container rounded-lg py-8 mx-auto md:px-24 px-6 bg-white relative max-h-2vh ">
            <div class="flex flex-col items-center justify-center">
                <img src="~assets/images/header/logo.png" alt="logo" class="mb-3 block" width="200" />

                <h2 class="text-2xl font-medium">{{ text }}</h2>

                <p class="text-xs md:text-sm text-Neutral-800 text-center md:text-left mt-3 mb-7">
                    {{ subTitle }}
                </p>
                <slot />

                <p class="text-xs text-center text-Neutral-600-Dark-Primary mt-3 mb-9">
                    我們承諾保護您的隱私，您提供的手機號碼僅用於會員使用，絕不會被用於其他用途或向第三方分享。
                </p>

                <img src="~assets/images/auth/clown.svg" alt="clown" class="hidden md:block" />
            </div>
        </div>
    </div>
</template>

<script setup>

const { text, subTitle } = defineProps({
    text: {
        type: String,
        default: "會員登入",
    },
    subTitle: {
        type: String,
        default: "",
    },
});


</script>

<style scoped lang="scss">
.modal-container {
    width: 548px;
}

@media screen and (width < 768px) {
    .modal-container {
        width: 318px;
    }
}
</style>
