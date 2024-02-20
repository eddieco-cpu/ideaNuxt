<template>
    <div class="w-full h-lvh bg-black bg-opacity-70 fixed top-0 left-0 z-[99] flex items-center">
        <div class="modal-container rounded-lg py-8 mx-auto md:px-24 px-6 bg-white relative max-h-lvh overflow-y-auto">
            <img
                src="~assets/images/icon/close-icon.svg"
                alt=""
                class="bg-Neutral-400-Hover rounded-3xl absolute right-4 top-4 cursor-pointer"
                @click="hideModal"
            />

            <div class="flex flex-col items-center justify-center">
                <img src="~assets/images/header/logo.png" alt="logo" class="mb-3 block" width="200" />

                <h2 class="text-2xl font-medium">{{ text }}</h2>

                <p class="text-xs text-Neutral-800 text-center md:text-left mt-3 mb-7">
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
const emit = defineEmits(["hideModal"]);

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

function hideModal() {
    emit("hideModal");
}
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
