<template>
    <Transition name="modal">
        <ModalContainer
            :text="title"
            :subTitle="'為了確保是您本人，將會寄送驗證碼到您的手機，驗證碼有效時限為10分鐘。'"
            @hideModal="hideModal"
            v-if="modelValue === 'register'"
        >
            <!-- 註冊第一步 -->
            <div class="w-full" v-if="registerStep === 1">
                <p class="self-start mt-7 mb-2 text-sm text-opacity-85">手機號碼</p>

                <UInput variant="none" placeholder="輸入手機號碼" class="w-full mb-6 rounded-lg border border-Neutral-400-Hover">
                    <template #leading>
                        <img src="~assets/images/icon/phone-icon.svg" alt="phone-icon" />
                    </template>
                </UInput>

                <p class="self-start mb-2 text-sm text-opacity-85">驗證碼：</p>

                <UButtonGroup orientation="horizontal" class="self-start flex w-full shadow-none">
                    <UInput variant="none" placeholder="ex: 0912345678" class="border border-Neutral-400-Hover rounded-lg mr-1 w-40 md:w-60" />

                    <button
                        class="hover:opacity-70 transition duration-500 rounded-lg flex-1 px-4 py-1 justify-center bg-Primary-500-Primary text-sm text-white"
                    >
                        發送驗證碼
                    </button>
                </UButtonGroup>

                <button class="w-full bg-Primary-500-Primary block p-2 rounded-lg text-white mb-3 mt-12 text-sm" @click="registerStepHandler(2)">
                    只剩一步
                </button>
            </div>

            <!-- 註冊第二步 -->
            <div class="w-full" v-if="registerStep === 2">
                <p class="self-start mt-7 mb-2 text-sm text-opacity-85">
                    密碼
                    <span class="text-xs text-neutral-500">（長度至少為8個字元且含大寫字母）</span>
                </p>

                <UInput variant="none" type="password" placeholder="ex: A2345678" class="w-full mb-6 rounded-lg border border-Neutral-400-Hover">
                    <template #leading>
                        <img src="~assets/images/icon/lock-icon.svg" alt="phone-icon" />
                    </template>
                </UInput>

                <p class="self-start mb-2 text-sm text-opacity-85">請再輸入密碼</p>

                <UInput variant="none" type="password" placeholder="ex: A2345678" class="w-full mb-6 rounded-lg border border-Neutral-400-Hover">
                    <template #leading>
                        <img src="~assets/images/icon/lock-icon.svg" alt="phone-icon" />
                    </template>
                </UInput>

                <p class="mt-12 mb-3 text-center text-sm underline cursor-pointer" @click="registerStepHandler(1)">回上一頁</p>

                <button class="w-full bg-Primary-500-Primary block p-2 rounded-lg text-white mb-3 text-sm">恭喜你，完成註冊！</button>
            </div>
        </ModalContainer>
    </Transition>
</template>

<script setup>
const { modelValue } = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const registerStep = ref(1);

function registerStepHandler(step) {
    registerStep.value = step;
}

function hideModal() {
    emit("update:modelValue", "");
}

const title = computed(() => {
    if (registerStep.value === 1) {
        return "註冊會員";
    } else {
        return "設定密碼";
    }
});
</script>

<style scoped lang="scss"></style>
