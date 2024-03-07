<template>
    <div>
        <CartHeader :step="2" />
        <!-- 商品資訊 -->
        <div class="flex flex-col gap-y-6 mx-auto w-full max-w-[324px] md:max-w-[786px]">
            <CardContainer title="訂單明細">
                <template #body>
                    <CardCheckOutProduct v-for="(item, index) in 5" :key="index" :showButton="false" />
                </template>
            </CardContainer>

            <CardContainer title="收件人資訊">
                <template #body>
                    <div class="flex flex-col gap-y-4">
                        <URadioGroup v-model="buyerInforamtion.delivery" :options="deliveryOptions" class="delivery" />

                        <MemberEditAddress
                            class="border border-Primary-100"
                            bgColor="bg-Primary-50"
                            v-bind="tempAddress"
                            @onAbort="onAbort"
                            @onSubmit="onSubmit"
                            v-if="tempAddress"
                        />

                        <CardMemberAddress
                            v-for="(item, index) in addressInfo"
                            class="border border-Primary-100"
                            bgColor="bg-Primary-50"
                            :key="index"
                            v-bind="item"
                        >
                            <template #title>
                                <div class="flex pb-[10px] mb-[10px] border-b border-Primary-100 text-sm">
                                    <p class="text-black/[0.85]">地址{{ index + 1 }}</p>
                                </div>
                            </template>
                        </CardMemberAddress>

                        <button
                            class="flex gap-x-1 items-center justify-center w-full rounded-lg border border-Primary-100 bg-Primary-50 py-2"
                            @click="editAddress"
                        >
                            <img src="~assets/images/icon/plus-icon.svg" alt="add" />
                            <span class="text-Primary-400-Hover text-sm">新增地址</span>
                        </button>
                    </div>
                </template>
            </CardContainer>

            <CardContainer title="訂購人資訊">
                <template #body>
                    <div class="grid md:grid-cols-2 gap-3">
                        <UFormGroup label="訂購人" name="name">
                            <UInput placeholder="請輸入訂購人" v-model="buyerInforamtion.name" />
                        </UFormGroup>

                        <UFormGroup label="訂購人手機" name="phone">
                            <UInput v-model="buyerInforamtion.phone" disabled />
                        </UFormGroup>

                        <UFormGroup
                            label="發票種類"
                            name="invoice"
                            help="手機載具應輸入共8碼，第1碼應為 / ，後7碼可為數字 0 - 9 、大寫英文 A - Z、半形符號共三種 + - ."
                        >
                            <USelectMenu
                                size="lg"
                                v-model="buyerInforamtion.invoice"
                                :options="invoiceOptions"
                                value-attribute="value"
                                option-attribute="label"
                            />
                        </UFormGroup>
                    </div>
                </template>
            </CardContainer>

            <CardContainer title="付款方式">
                <template #tip>
                    <p class="text-Neutral-700 text-xs pb-3">
                        交易全程使用安全加密，信用卡資料將不會儲存於網站，您可以安心使用信用卡付款。
                    </p>
                </template>
                <template #body>
                    <URadioGroup v-model="buyerInforamtion.payment" :options="paymentOptions" class="payment" />
                </template>
            </CardContainer>

            <CardContainer title="訂單備註" class="pb-8 md:pb-8">
                <template #body>
                    <UFormGroup name="remark">
                        <UtilTextarea
                            :resize="true"
                            placeholder="如有需要，請您簡短的以  90字備註說明，謝謝。"
                            :max="90"
                            v-model="buyerInforamtion.remark"
                        />
                    </UFormGroup>
                </template>
            </CardContainer>
        </div>

        <!-- 總計 -->
        <div class="flex-1 fixed w-full bottom-0 md:sticky md:top-[98px]">
            <CardContainer class="rounded-none md:rounded-lg">
                <template #body>
                    <div
                        class="flex flex-col gap-y-3 fixed w-screen -bottom-[150px] left-0 p-3 md:p-0 rounded-t-lg bg-white md:static md:w-full transition-[bottom] duration-300"
                        :class="{ 'bottom-[87px]': showTotalDetail }"
                    >
                        <h1 class="pb-3 text-black/85 font-medium border-b border-b-Neutral-200">總計</h1>
                        <div class="flex justify-between text-Neutral-700 text-sm">
                            <p>2件商品</p>
                            <p>NT$3,240</p>
                        </div>
                        <div class="flex justify-between text-Neutral-700 text-sm pb-3 border-b border-b-Neutral-200">
                            <p>運費</p>
                            <p>NT$240</p>
                        </div>
                    </div>
                </template>

                <template #footer>
                    <div class="py-2 md:py-0 flex md:block bg-white relative z-50">
                        <div class="flex-1">
                            <p class="text-xs pb-1 text-Neutral-600-Dark-Primary md:hidden flex items-center gap-x-1">
                                共3商品
                                <UIcon
                                    name="i-heroicons-chevron-up"
                                    class="block w-4 h-4 text-Neutral-600-Dark-Primary cursor-pointer transition-transform duration-300"
                                    :class="{ 'rotate-180': showTotalDetail }"
                                    @click="showTotalDetail = !showTotalDetail"
                                />
                            </p>
                            <p
                                class="text-xl text-Neutral-800 md:text-Primary-500-Primary font-roboto font-medium md:text-right md:pb-3"
                            >
                                NT$1,620
                            </p>
                        </div>

                        <button
                            class="px-4 py-2 text-sm bg-Primary-500-Primary text-center rounded-lg w-full text-white flex-1"
                            @click="goFinishedPage"
                        >
                            付款結帳
                        </button>
                    </div>
                </template>
            </CardContainer>

            <transition name="mask">
                <div
                    class="fixed w-screen h-screen top-0 left-0 z-[-1] bg-black/50 md:hidden"
                    v-show="showTotalDetail"
                ></div>
            </transition>
        </div>

        <div class="w-screen h-screen pt-[170px] fixed top-0 left-0 bg-Neutral-bg" v-if="inProcessing">
            <CartProcessing :progress="progress" />
        </div>
    </div>
</template>

<script setup>
const inProcessing = ref(false);
const progress = ref(0);
const progressTimer = ref(0);
const showTotalDetail = ref(false);

const paymentOptions = [
    {
        value: 1,
        label: "信用卡(3、6期)",
    },
    {
        value: 2,
        label: "ATM 轉帳",
    },
    {
        value: 3,
        label: "貨到付款",
    },
    {
        value: 4,
        label: "LINE Pay",
    },
];

const deliveryOptions = [
    {
        value: 1,
        label: "超商取貨",
    },
    {
        value: 2,
        label: "宅配到府",
    },
];

const invoiceOptions = [
    { label: "手機條碼載具", value: 1 },
    { label: "自然人憑證", value: 2 },
    { label: "公司統編", value: 3 },
    { label: "捐贈發票", value: 4 },
];

const buyerInforamtion = ref({
    name: "",
    phone: "0911123456",
    invoice: invoiceOptions[0].value,
    payment: 1,
    delivery: 2,
    remark: "",
});

const tempAddress = ref(null);

const addressInfo = ref([
    {
        index: 1,
        defaultAddress: true,
        name: "陳大明",
        phone: "0911123456",
        email: "fake@hotmail.com",
        address: "新北市淡水區",
    },
    {
        index: 2,
        defaultAddress: false,
        name: "王小美",
        phone: "0922321123",
        email: "fake@hotmail.com",
        address: "台北市信義區",
    },
]);

async function editAddress() {
    tempAddress.value = null;

    await nextTick();
    // 新增地址
    tempAddress.value = {
        index: Math.max(Math.max(...addressInfo.value.map((item) => item.index)), 0) + 1,
    };
}

function onAbort() {
    tempAddress.value = null;
}

function onSubmit(data) {
    const { index, name, phone, email, address, defaultAddress } = data;

    const payload = {
        index,
        defaultAddress,
        name,
        phone,
        email,
        address,
    };

    // 新增地址
    addressInfo.value.push(payload);

    tempAddress.value = null;
}

function goFinishedPage() {
    inProcessing.value = true;
    progressTimer.value = setInterval(() => {
        progress.value += 10;
        if (progress.value >= 80) {
            navigateTo("/cart/finished");
        }
    }, 500);
}

onBeforeUnmount(() => {
    clearInterval(progressTimer.value);
});
</script>

<style scoped>
.delivery :deep(fieldset) {
    display: flex;
    gap: 0 12px;
    width: 100%;
}
.payment :deep(fieldset) {
    display: flex;
    gap: 20px 12px;
    width: 100%;
    flex-wrap: wrap;
}

.payment :deep(fieldset) > div {
    width: calc(50% - 6px);
    flex-shrink: 0;
}

.delivery :deep(fieldset) > div {
    flex: 1;
}

.delivery :deep(fieldset) > div,
.payment :deep(fieldset) > div {
    border-radius: 8px;
    border: 1px solid #e5defa;
    padding: 12px 8px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.02);
}

.delivery :deep(fieldset) label,
.payment :deep(fieldset) label {
    cursor: pointer;
}
</style>
