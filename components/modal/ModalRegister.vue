<template>
    <Transition name="modal">
        <ModalContainer
            :text="title"
            :subTitle="'為了確保是您本人，將會寄送驗證碼到您的手機，驗證碼有效時限為10分鐘。'"
            @openModal="openModal('close')"
            v-if="modelValue === 'register'"
        >
            <!-- 註冊第一步 -->
            <div class="w-full" v-if="registerStep === 1">
                <UFormGroup label="手機號碼" name="phone" class="w-full mb-6">
                    <UInput 
                        placeholder="輸入手機號碼："
                        v-model="registerData.account"
                    >
                        <template #leading>
                            <img src="~assets/images/icon/phone-icon.svg" alt="phone-icon" />
                        </template>
                    </UInput>
                </UFormGroup>

                <UFormGroup label="驗證碼：" name="validateCode">
                    <UButtonGroup orientation="horizontal" class="w-full self-start flex shadow-none">
                        <UFormGroup class="w-3/5">
                            <UInput 
                                placeholder="ex: 0912345678" 
                                class="mr-1" 
                                v-model="registerData.captcha"
                            />
                        </UFormGroup>

                        <button
                            :disabled="timeLeft > 0"
                            @click="sendSMS"
                            class="hover:opacity-70 transition duration-500 rounded-lg flex-1 px-4 py-1 justify-center bg-Primary-500-Primary text-sm text-white"
                        >
                            
                            {{ timeLeft > 0 ? `再次發送(${timeLeft})` : '發送驗證碼' }}
                        </button>
                    </UButtonGroup>
                </UFormGroup>

                <button
                    class="w-full bg-Primary-500-Primary block p-2 rounded-lg text-white mb-3 mt-12 text-sm"
                    @click="registerStepHandler(2)"
                >
                    只剩一步
                </button>
            </div>

            <!-- 註冊第二步 -->
            <div class="w-full" v-if="registerStep === 2">
                <p class="self-start mb-2 text-sm text-opacity-85">
                    密碼
                    <span class="text-xs text-neutral-500">（長度至少為8個字元且含大寫字母）</span>
                </p>

                <UInput type="password" placeholder="ex: A2345678" class="mb-6"  v-model="registerData.password">
                    <template #leading>
                        <img src="~assets/images/icon/lock-icon.svg" alt="phone-icon" />
                    </template>
                </UInput>

                <p class="self-start mb-2 text-sm text-opacity-85">請再輸入密碼</p>

                <UInput type="password" placeholder="ex: A2345678" class="mb-6"  v-model="registerData.password_confirmation">
                    <template #leading>
                        <img src="~assets/images/icon/lock-icon.svg" alt="phone-icon" />
                    </template>
                </UInput>

                <p class="mt-12 mb-3 text-center text-sm underline cursor-pointer" @click="registerStepHandler(1)">
                    回上一頁
                </p>

                <button
                    class="w-full bg-Primary-500-Primary block p-2 rounded-lg text-white mb-3 text-sm"
                    @click="onSubmitDebounced"
                >
                    恭喜你，完成註冊！
                </button>
            </div>
        </ModalContainer>
    </Transition>
</template>

<script setup>
import { useToast }     from "vue-toastification";
import { useAuthStore } from "@/stores/auth";
import { debounce }     from 'lodash';

const { modelValue } = defineProps(["modelValue"]);
const emit  = defineEmits(["update:modelValue"]);
const toast = useToast();
const store = useAuthStore();

const registerData = ref({
    account  : undefined,
    password : undefined,
    captcha  : undefined,
    password_confirmation: undefined
});

const registerStep = ref(1);
const timeLeft     = ref(0);

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

onMounted(() => {
  if (localStorage.getItem('endTime')) {
    updateTimer();
  }
});

const tempPhone = ref();
const tempSMS   = ref();

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

    const duration = 60;
    const endTime  = Date.now() + duration * 1000;
    localStorage.setItem('endTime', endTime);
    updateTimer();

    const data = await POST("/sendSMS", { 'account' : account }, '');
    if(!!data) {
        tempPhone.value = data.account;
        tempSMS.value   = data.sms;
    }
}

function registerStepHandler(step) {

    if(step == 2) {
        if(registerData.value.captcha !=  tempSMS.value) {
            toast.error('驗證碼錯誤');
            return;
        }

        if(registerData.value.account !=  tempPhone.value) {
            toast.error('手機與傳送驗證碼手機不一致');
            return;
        }
    }
    registerStep.value = step;
}

const onSubmitDebounced = debounce(register, 300);

async function register() {

    const payload = { 
        account  : registerData.value.account, 
        password : registerData.value.password,
        password_confirmation: registerData.value.password_confirmation,
    };

    const data = await POST("/registerUser", payload);

    if (!!data) {
        toast.success("註冊成功");
        registerStep.value = 1

        for (let key in registerData.value) {
            registerData.value[key] = undefined;
        }

        store.isLogin  = true;
        store.userInfo = data.user;
        store.setToken(data.access_token)

        openModal("close");
    }
}

function openModal() {
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
