<template>
    <Transition name="modal">
        <ModalContainer
            :text="'忘記密碼'"
            :subTitle="'為了確保是您本人，將會寄送驗證碼到您的手機，驗證碼有效時限為10分鐘。'"
            @openModal="openModal('close')"
            v-if="modelValue === 'forgotPassword'"
        >
            <UFormGroup label="手機號碼" name="phone" class="w-full mb-6">
                <UInput placeholder="輸入手機號碼："
                        v-model="registerData.account"
                >
                    <template #leading>
                        <img src="~assets/images/icon/phone-icon.svg" alt="phone-icon" />
                    </template>
                </UInput>
            </UFormGroup>

            <UFormGroup label="驗證碼：" name="validateCode" class="w-full">
                <UButtonGroup orientation="horizontal" class="self-start flex shadow-none">
                    <UFormGroup class="w-3/5">
                        <UInput placeholder="請輸入驗證碼" class="mr-1" v-model="registerData.captcha"/>
                    </UFormGroup>

                    <button
                        :disabled="timeLeft > 0"
                        @click="onSubmitsendSMS"
                        class="hover:opacity-70 transition duration-500 rounded-lg flex-1 px-4 py-1 justify-center bg-Primary-500-Primary text-sm text-white"
                    >
                        {{ timeLeft > 0 ? `再次發送(${timeLeft})` : '發送驗證碼' }}
                    </button>
                </UButtonGroup>
            </UFormGroup>

            <button
                class="w-full bg-Primary-500-Primary block p-2 rounded-lg text-white mb-3 mt-12 text-sm"
                @click="onSubmitDebounced"
            >
                確認送出
            </button>
        </ModalContainer>
    </Transition>
</template>

<script setup>
import { debounce }     from 'lodash';
import { useToast }     from "vue-toastification";

const { modelValue } = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

function openModal(value = "") {
    emit("update:modelValue", value);
}

const toast = useToast();

const registerData = ref({
    account  : undefined,
    captcha  : undefined,
});

const timeLeft     = ref(0);
const tempPhone    = ref();
const tempSMS      = ref();

const updateTimer = () => {
  const interval = setInterval(() => {

        const endTime     = localStorage.getItem('endTime');
        const secondsLeft = (endTime - Date.now()) / 1000;

        if (secondsLeft > 0) {
            timeLeft.value = Math.round(secondsLeft);
        } else {
            clearInterval(interval);
            timeLeft.value = 0;
            localStorage.removeItem('endTime'); 
        }
  }, 1000);
};

const onSubmitsendSMS = debounce(sendSMS, 300);

async function sendSMS() {

    const account = registerData.value.account;
    const regex   = /^09\d{8}$/;

    if(!regex.test(account)) {
        toast.error('手機格式錯誤');
        return;
    }

    if(!account) {
        toast.error('請輸入帳號後傳送驗證碼');
        return;
    }

    const data = await POST("/sendPasswordSMS", { 'account' : account }, '');
    if(!!data) {
        const duration = 60;
        const endTime  = Date.now() + duration * 1000;
        localStorage.setItem('endTime', endTime);
        updateTimer();
        tempPhone.value = data.account;
        tempSMS.value   = data.sms;
    }
}

const onSubmitDebounced = debounce(forgotPassword, 300);

async function forgotPassword() {

    if(registerData.value.account == '' || registerData.value.captcha == '') {
        toast.error('帳號或驗證碼不可為空');
    }

    if(registerData.value.captcha !=  tempSMS.value) {
        toast.error('驗證碼錯誤');
        return;
    }

    if(registerData.value.account !=  tempPhone.value) {
        toast.error('手機與傳送驗證碼手機不一致');
        return;
    }

    const payload = { 
        account  : registerData.value.account, 
    };

    const data = await POST("/forgotPassword", payload);

    if (!!data) {
        toast.success("新密碼已傳送至手機");

        for (let key in registerData.value) {
            registerData.value[key] = undefined;
        }

        openModal("close");
    }
}

onMounted(() => {
  if (localStorage.getItem('endTime')) {
    updateTimer();
  }
});

</script>

<style scoped lang="scss"></style>
