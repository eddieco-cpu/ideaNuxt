<template>
    <div>
        <h1 class="text-xl mb-3">基本資料</h1>
        <div class="p-3 md:p-6 rounded-lg bg-white">
            <UForm
                :schema="memberInformationSchema"
                :state="memberInfo"
                class="md:max-w-[434px] flex flex-col gap-y-3"
                @submit="onSubmit"
            >
                <UFormGroup label="暱稱" name="nickName" help="使用平台時，大家會看到您的基本暱稱。">
                    <UInput placeholder="凍齡教主小美" v-model="memberInfo.nickName" />
                </UFormGroup>

                <UFormGroup
                    label="真實姓名"
                    name="name"
                    help="請填寫您個人真實姓名，此為提案、身分驗證或寄送商品時使用。"
                    required
                >
                    <UInput placeholder="王小美" v-model="memberInfo.name" />
                </UFormGroup>

                <UFormGroup
                    label="手機號碼"
                    name="phone"
                    help="手機已驗證成功。若您需修改手機，請聯繫官方客服中心。"
                    required
                >
                    <UInput placeholder="0902123123" v-model="memberInfo.phone" disabled />
                </UFormGroup>

                <UFormGroup label="電子信箱" name="email" help="請填寫您個人真實信箱，便於通知使用。" required>
                    <UInput placeholder="0902123123" v-model="memberInfo.email" />
                </UFormGroup>

                <!-- 出生日 -->
                <UFormGroup label="出生日" name="birth">
                    <VueDatePicker
                        position="left"
                        auto-apply
                        year-first
                        placeholder="出生日"
                        :format-locale="zhTW"
                        :max-date="new Date()"
                        :start-date="new Date(1988, 9)"
                        :enable-time-picker="false"
                        v-model="memberInfo.birthDay"
                    />
                </UFormGroup>

                <URadioGroup
                    v-model="memberInfo.sex"
                    legend="性別"
                    :options="sexOptions"
                    :ui="{ legend: 'mb-2' }"
                    class="radio"
                />

                <div class="mt-9 mb-2">
                    <UCheckbox
                        v-model="memberInfo.notification"
                        name="notification"
                        label="允許訊息通知（專案更新、站內訊息）"
                        class="mb-2"
                    />
                    <UCheckbox v-model="memberInfo.subscription" name="subscription" label="訂閱idea2gether電子報" />
                </div>

                <!-- 儲存更新 -->
                <div class="mt-3">
                    <button type="submit" class="bg-Primary-500-Primary text-white px-4 py-1 rounded-lg text-sm">
                        儲存更新
                    </button>
                </div>
            </UForm>
        </div>

        <!-- 是否註冊開團達人 -->
        <div class="p-3 mt-6 rounded-lg bg-white">
            <UCheckbox
                v-model="memberInfo.register"
                name="register"
                label="我想註冊成為開團達人/推薦名人"
                class="mb-2"
                help="歡迎成為開團達人，我們將會為您設立個人頁面，開始你的團購之路！"
            />
        </div>

        <MemberBeLeader v-show="memberInfo.register" :name="memberInfo.name" />
    </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "assets/css/datepicker.css";
import { memberInformationSchema } from "~/validation";
import { zhTW } from "date-fns/locale";

const memberInfo = ref({
    nickName: undefined,
    name: undefined,
    phone: undefined,
    email: undefined,
    birthDay: undefined,
    sex: "0",
    notification: true,
    subscription: true,
    register: false,
});

const sexOptions = [
    {
        value: "1",
        label: "女性",
    },
    {
        value: "2",
        label: "男性",
    },
    {
        value: "0",
        label: "不便透漏",
    },
];

function onSubmit(event) {
    console.log(event.data);
}
</script>

<style scoped>
.radio :deep(fieldset) {
    display: flex;
    gap: 0 16px;
}
</style>
