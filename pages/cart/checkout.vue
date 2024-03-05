<template>
    <div>
        <CartHeader :step="2" />
        <!-- 商品資訊 -->
        <div class="flex flex-col gap-y-6 mx-auto w-full max-w-[324px] md:max-w-[786px]">
            <CartCardContainer title="訂單明細">
                <CardCheckOutProduct v-for="(item, index) in 5" :key="index" :showButton="false" />
            </CartCardContainer>

            <CartCardContainer title="收件人資訊">
                <URadioGroup v-model="delivery" :options="sexOptions" class="delivery" />

                <div class="flex flex-col gap-y-2">
                    <MemberEditAddress
                        v-bind="tempAddress"
                        :isEditmode="isEditmode"
                        @onAbort="onAbort"
                        @onSubmit="onSubmit"
                        v-if="tempAddress"
                    />

                    <CardMemberAddress
                        v-for="(item, index) in addressInfo"
                        :key="index"
                        v-bind="item"
                        @setDefaultAddress="setDefaultAddress"
                        @editAddress="editAddress"
                    />

                    <button
                        class="flex gap-x-1 items-center justify-center w-full rounded-lg bg-white border border-Primary-100 py-2"
                        @click="editAddress(undefined, false)"
                    >
                        <img src="~assets/images/icon/plus-icon.svg" alt="add" />
                        <span class="text-Primary-400-Hover text-sm">新增地址</span>
                    </button>
                </div>
            </CartCardContainer>

            <CartCardContainer title="訂購人資訊">
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
                        <UDropdown v-model:open="open" :items="dropdownItems" :popper="{ placement: 'bottom-start' }">
                            <UButton
                                color="white"
                                :label="dropdownValue || '請選擇'"
                                class="min-w-[210px]"
                                :class="dropdownValue ? 'text-Neutral-900-Primary' : 'text-Neutral-500-Primary'"
                            />
                            <UIcon
                                name="i-heroicons-chevron-down-20-solid"
                                class="text-2xl flex justify-center items-center h-8 ml-[-32px] pointer-events-none"
                            />
                        </UDropdown>
                    </UFormGroup>
                </div>
            </CartCardContainer>

            <CartCardContainer title="付款方式">
                <template #tip>
                    <p class="text-Neutral-700 text-xs pb-3">
                        交易全程使用安全加密，信用卡資料將不會儲存於網站，您可以安心使用信用卡付款。
                    </p>
                </template>

                <URadioGroup v-model="payment" :options="paymentOptions" class="payment" />
            </CartCardContainer>

            <CartCardContainer title="訂單備註" class="pb-8 md:pb-8">
                <UFormGroup name="remark">
                    <UtilTextarea
                        :resize="true"
                        placeholder="如有需要，請您簡短的以  90字備註說明，謝謝。"
                        :max="90"
                        v-model="buyerInforamtion.remark"
                    />
                </UFormGroup>
            </CartCardContainer>
        </div>

        <!-- 總計 -->
        <div class="flex-1 md:sticky md:top-[98px]">
            <CartTotal />
        </div>
    </div>
</template>

<script setup>
const buyerInforamtion = ref({
    name: "",
    phone: "0911123456",
    invoice: "",
    remark: "",
});
const open = ref(false);
defineShortcuts({
    o: () => (open.value = !open.value),
});
const dropdownValue = ref("A category");
const dropdownItems = [
    [
        {
            label: "A category",
            click: function () {
                dropdownValue.value = this.label;
            },
        },
        {
            label: "B category",
            click: function () {
                dropdownValue.value = this.label;
            },
        },
        {
            label: "C category",
            click: function () {
                dropdownValue.value = this.label;
            },
        },
    ],
];
const delivery = ref();
const payment = ref();
const tempAddress = ref(null);
const isEditmode = ref(false);
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

function setDefaultAddress(index) {
    addressInfo.value = addressInfo.value.map((item, i) => {
        item.defaultAddress = i === index;

        return { ...item };
    });
}

async function editAddress(index, isEdit) {
    tempAddress.value = null;
    isEditmode.value = isEdit;

    await nextTick();

    if (isEdit) {
        // 編輯地址
        tempAddress.value = addressInfo.value.find((item, i) => i === index);
    } else {
        // 新增地址
        tempAddress.value = {
            index: Math.max(Math.max(...addressInfo.value.map((item) => item.index)), 0) + 1,
        };
    }
}

function onAbort(payload) {
    if (payload.title === "刪除") {
        addressInfo.value = addressInfo.value.filter((item) => item.index !== payload.index);
    }
    tempAddress.value = null;
}

function onSubmit(data, isEditmode) {
    const { index, name, phone, email, address, defaultAddress } = data;

    const payload = {
        index,
        defaultAddress,
        name,
        phone,
        email,
        address,
    };

    if (isEditmode) {
        // 編輯地址
        console.log("編輯地址");
    } else {
        // 新增地址
        addressInfo.value.push(payload);
    }

    if (defaultAddress) {
        // 是否設預設
        setDefaultAddress(index - 1);
    }
    tempAddress.value = null;
}
const paymentOptions = [
    {
        value: "1",
        label: "信用卡(3、6期)",
    },
    {
        value: "2",
        label: "ATM 轉帳",
    },
    {
        value: "3",
        label: "貨到付款",
    },
    {
        value: "4",
        label: "LINE Pay",
    },
];

const sexOptions = [
    {
        value: "1",
        label: "超商取貨",
    },
    {
        value: "2",
        label: "宅配到府",
    },
];
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
