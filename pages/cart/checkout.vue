<template>
    <div class="max-w-[324px] md:max-w-[1082px] mx-auto mt-8">
        <div>
            <CartAds v-if="isFundRaiseCheckout" />
            <CartHeader :step="2" v-else />
        </div>

        <!-- 商品資訊 -->
        <UForm
            :schema="checkOutSchema"
            :state="checkoutPayload"
            class="pt-6 grid grid-cols-1 md:grid-cols-[76%_auto] items-start gap-6"
            @submit="goFinishedPage"
        >
            <div class="flex flex-col gap-6">
                <CardContainer title="訂單明細">
                    <template #body>
                        <CardCheckOutProduct
                            v-for="(item, index) in productLists"
                            :key="index"
                            :showButton="false"
                            v-bind="item"
                        />
                    </template>
                </CardContainer>

                <CardContainer title="收件人資訊">
                    <template #body>
                        <div class="flex flex-col gap-y-4">
                            <URadioGroup
                                v-model="checkoutPayload.deliveryType"
                                :options="deliveryOptions"
                                class="delivery"
                            />

                            <div
                                class="w-full p-6 border border-Primary-100 bg-Primary-50 shadow-[0_0_5px_0_rgba(0,0,0,0.02)] rounded-lg flex flex-col gap-y-[10px]"
                                v-if="checkoutPayload.deliveryType === 1"
                            >
                                <p class="text-sm text-black/85" v-if="storeType">
                                    已選擇取貨超商：{{ storeType.label }}
                                </p>
                                <p class="text-sm text-black/85" v-if="!storeType">請選擇欲取貨超商</p>
                                <p class="text-xs text-black/45">
                                    將優先為你安排超商取貨，但若出貨時，選擇的超商因故不支援店取，將把回饋品寄至收件地址。廠商保有寄件方式的最終決定權。
                                </p>
                                <div class="flex flex-col md:flex-row gap-3">
                                    <label
                                        v-for="(item, index) in convenienceStoreOptions"
                                        :key="index"
                                        class="flex p-3 items-center justify-between rounded-lg border w-full shadow-[0_0_5px_0_rgba(0,0,0,0.02)] cursor-pointer"
                                        :class="{
                                            'bg-Primary-200 border-Primary-200 text-white':
                                                item.value === storeType?.value ?? -1,
                                            'bg-white border-Primary-100': item.value !== storeType?.value ?? -1,
                                        }"
                                    >
                                        <input type="radio" v-model="storeType" :value="item" hidden />
                                        <span class="text-sm">{{ item.label }}</span>
                                        <img :src="item.img" :alt="item.label" />
                                    </label>
                                </div>
                            </div>

                            <div class="flex flex-col gap-y-4" v-if="checkoutPayload.deliveryType === 2">
                                <MemberEditAddress
                                    class="border border-Primary-100"
                                    bgColor="bg-Primary-50"
                                    v-bind="tempAddress"
                                    @onAbort="addressOnAbort"
                                    @onSubmit="addressOnSubmit"
                                    v-if="tempAddress"
                                />

                                <label v-for="(item, index) in addressInfo" :key="index">
                                    <CardMemberAddress
                                        class="border border-Primary-100 cursor-pointer"
                                        bgColor="bg-Primary-50"
                                        v-bind="item"
                                    >
                                        <template #title>
                                            <div
                                                class="flex gap-x-2 items-center pb-[10px] mb-[10px] border-b border-Primary-100 text-sm"
                                            >
                                                <label class="radio-container">
                                                    <input
                                                        hidden
                                                        type="radio"
                                                        name="address"
                                                        v-model="deliveryAddress"
                                                        :value="item"
                                                    />
                                                    <div class="mark"></div>
                                                </label>
                                                <p class="text-black/[0.85]">地址{{ index + 1 }}</p>
                                            </div>
                                        </template>
                                    </CardMemberAddress>
                                </label>

                                <button
                                    class="flex gap-x-1 items-center justify-center w-full rounded-lg border border-Primary-100 bg-Primary-50 py-2"
                                    @click="editAddress"
                                >
                                    <img src="~assets/images/icon/plus-icon.svg" alt="add" />
                                    <span class="text-Primary-400-Hover text-sm">新增地址</span>
                                </button>
                            </div>
                        </div>
                    </template>
                </CardContainer>

                <CardContainer title="訂購人資訊">
                    <template #body>
                        <div class="grid md:grid-cols-2 gap-3">
                            <UFormGroup label="訂購人" name="name" required>
                                <UInput placeholder="請輸入訂購人" v-model="checkoutPayload.name" />
                            </UFormGroup>

                            <UFormGroup label="訂購人手機" name="phone">
                                <UInput placeholder="請輸入訂購人" v-model="checkoutPayload.phone" />
                            </UFormGroup>
                        </div>

                        <div>
                            <UFormGroup label="發票種類" name="invoice" :help="invoiceHint" required>
                                <div class="grid grid-cols-1 md:flex gap-3">
                                    <USelectMenu
                                        size="lg"
                                        class="min-w-[210px]"
                                        v-model="checkoutPayload.invoiceType"
                                        :options="invoiceOptions"
                                        value-attribute="value"
                                        option-attribute="label"
                                    />
                                    <UInput
                                        placeholder="請輸入載具號碼"
                                        v-model="checkoutPayload.invoiceCarrier"
                                        v-if="checkoutPayload.invoiceType === 1"
                                    />

                                    <UInput
                                        placeholder="請輸入自然人憑證"
                                        v-model="checkoutPayload.citizenDigitalCertificate"
                                        v-if="checkoutPayload.invoiceType === 2"
                                    />

                                    <div
                                        class="grid grid-cols-1 md:grid-cols-2 gap-3"
                                        v-if="checkoutPayload.invoiceType === 3"
                                    >
                                        <UInput placeholder="公司抬頭" v-model="checkoutPayload.orgInvoice.title" />
                                        <UInput
                                            placeholder="公司統一編號"
                                            v-model="checkoutPayload.orgInvoice.taxIdNumber"
                                        />
                                        <UInput
                                            type="address"
                                            placeholder="公司地址"
                                            v-model="checkoutPayload.orgInvoice.address"
                                        />
                                        <UInput
                                            type="email"
                                            placeholder="信箱(發票寄送於此)"
                                            v-model="checkoutPayload.orgInvoice.email"
                                        />
                                    </div>

                                    <USelectMenu
                                        size="lg"
                                        placeholder="選擇捐贈機構"
                                        v-model="checkoutPayload.donateInvoice"
                                        :options="donateInvoiceOptions"
                                        value-attribute="value"
                                        option-attribute="label"
                                        v-if="checkoutPayload.invoiceType === 4"
                                    />
                                </div>
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
                        <URadioGroup v-model="checkoutPayload.payment" :options="paymentOptions" class="payment" />
                    </template>
                </CardContainer>

                <CardContainer title="訂單備註" class="pb-8 md:pb-8">
                    <template #body>
                        <UFormGroup name="remark">
                            <UtilTextarea
                                :resize="true"
                                placeholder="如有需要，請您簡短的以  90字備註說明，謝謝。"
                                :max="90"
                                v-model="checkoutPayload.remark"
                            />
                        </UFormGroup>
                    </template>
                </CardContainer>
            </div>

            <!-- 總計 -->
            <div
                class="flex-1 fixed w-full bottom-0 left-0 md:sticky md:top-[98px] shadow-[0_-2px_20px_0px_rgba(0,0,0,0.06)]"
            >
                <CardContainer class="rounded-none md:rounded-lg">
                    <template #body>
                        <div
                            class="flex flex-col gap-y-3 fixed w-screen -bottom-[150px] left-0 p-3 md:p-0 rounded-t-lg bg-white md:static md:w-full transition-[bottom] duration-300"
                            :class="{ 'bottom-[87px]': showTotalDetail }"
                        >
                            <h1 class="pb-3 text-black/85 font-medium border-b border-b-Neutral-200">總計</h1>
                            <div class="flex justify-between text-Neutral-700 text-sm">
                                <p>{{ productListsLength }}件商品</p>
                                <p>NT${{ helperMoneyComma(total) }}</p>
                            </div>
                            <div
                                class="flex justify-between text-Neutral-700 text-sm pb-3 border-b border-b-Neutral-200"
                            >
                                <p>運費</p>
                                <p>NT$0</p>
                            </div>
                        </div>
                    </template>

                    <template #footer>
                        <div class="py-2 md:py-0 flex gap-x-2 md:block bg-white relative z-50">
                            <div class="flex-1">
                                <p
                                    class="text-xs pb-1 text-Neutral-600-Dark-Primary md:hidden flex items-center gap-x-1"
                                >
                                    共{{ productListsLength }}商品
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
                                    NT${{ helperMoneyComma(total) }}
                                </p>
                            </div>

                            <div class="flex gap-y-2 md:gap-y-0 flex-col">
                                <UCheckbox
                                    v-model="checkoutPayload.isAgree"
                                    required
                                    name="agreement"
                                    label="我已閱讀 售後服務 並同意"
                                    class="md:mb-3 md:w-full"
                                />
                                <div class="flex gap-x-2">
                                    <button
                                        type="button"
                                        class="px-2 py-2 text-sm bg-Primary-50 text-center rounded-lg text-Primary-400-Hover w-[80px]"
                                        @click="goBack"
                                    >
                                        上一步
                                    </button>

                                    <button
                                        type="submit"
                                        class="px-2 py-2 text-sm bg-Primary-500-Primary text-center rounded-lg w-full text-white flex-1"
                                    >
                                        付款結帳
                                    </button>
                                </div>
                            </div>
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
        </UForm>

        <div class="w-screen h-screen pt-[170px] fixed top-0 left-0 bg-Neutral-bg" v-if="inProcessing">
            <CartProcessing :progress="progress" />
        </div>
    </div>
</template>

<script setup>
import { checkOutSchema } from "~/validation";
import { cartStore } from "@/stores/cart";
import Icon from "assets/images/";

const authStore = useAuthStore();
const token = authStore.token;
const cart = cartStore();
const route = useRoute();

const inProcessing = ref(false);
const progress = ref(0);
const progressTimer = ref(0);
const showTotalDetail = ref(false);

const invoiceOptions = [
    { label: "一般發票", value: 0 },
    // { label: "手機條碼載具", value: 1 },
    // { label: "自然人憑證", value: 2 },
    { label: "公司統編", value: 3 },
    // { label: "捐贈發票", value: 4 },
];
const paymentOptions = [
    // {
    //     value: 1,
    //     label: "信用卡(3、6期)",
    // },
    // {
    //     value: 2,
    //     label: "ATM 轉帳",
    // },
    {
        value: 3,
        label: "貨到付款",
    },
    // {
    //     value: 4,
    //     label: "LINE Pay",
    // },
];
const deliveryOptions = [
    // {
    //     value: 1,
    //     label: "超商取貨",
    // },
    {
        value: 2,
        label: "宅配到府",
    },
];

const deliveryAddress = ref();

const addressInfo = ref([]);

getAddress();

async function getAddress () {
    const data = await POST("/getAddress", {}, token);

    if(!!data.status) {
        addressInfo.value = data.data
        deliveryAddress.value = addressInfo.value[0]
    }
}


const convenienceStoreOptions = [
    {
        value: 1,
        label: "7-Eleven",
        img: Icon.sevenEleven,
    },
    {
        value: 2,
        label: "全家便利商店",
        img: Icon.familyMart,
    },
];

const checkoutPayload = ref({
    name: "",
    phone: "",
    invoiceType: invoiceOptions[0].value,
    invoiceCarrier: "",
    citizenDigitalCertificate: "",
    donateInvoice: "",
    orgInvoice: { title: "", taxIdNumber: "", address: "", email: "" },
    payment: 3,
    deliveryType: 2,
    isAgree: false,
    remark: "",
});

const donateInvoiceOptions = [
    { label: "機構1", value: 1 },
    { label: "機構2", value: 2 },
];

const invoiceHint = computed(() => {
    const invoiceType = checkoutPayload.value.invoiceType;
    switch (invoiceType) {
        case 1:
            return "手機載具應輸入共8碼，第1碼應為 / ，後7碼可為數字 0 - 9 、大寫英文 A - Z、半形符號共三種 + - .";
        case 2:
            return "自然人憑證應輸入共16碼，前2碼為大寫英文 A - Z，後14碼為數字 0 - 9";
        default:
            return "";
    }
});

const isFundRaiseCheckout = computed(() => {
    return route.query.type === "fundraise";
});

const group_id = ref(route.query.group);

const cartData = ref([]);

getCartData()

async function getCartData () {
    const payload = {'group_id': route.query.group};

    const data = await POST("/getItemByCheckoutPage", payload, token);
    if(!!data.status) {
        cartData.value = data.data
        console.log(cartData.value)
    }
}

const productLists = computed(() => {
  if (Array.isArray(cartData.value.items)) {
    return cartData.value.items.reduce((accumulator, item) => {
        const productSpecsWithItemId = item.product_specs.map(spec => ({
        ...spec, // 複製現有的 product_specs 屬性
        cartItemId: 0 // 添加 itemId 屬性，設置其值為當前 item 的 id
      }));
      // 將修改後的 product_specs 數組合併到累加器中
      return [...accumulator, ...productSpecsWithItemId];
    }, []);
  } else {
    return [];
  }
});

const total = computed(() => {
  return productLists.value.reduce((accumulator, spec) => {
    // 對每個 product_spec，計算其價值（sales_price * amount）並加到累加器上
    return accumulator + (spec.sales_price * spec.amount);
  }, 0); // 初始累加器值為 0
});

const productListsLength = computed(() => {
    if (Array.isArray(cartData.value.items)) {
    return cartData.value.items.length;
  } else {
    return 0;
  }
});

const totalPrice = computed(() => {
    if (route.query.type === "fundraise") {
        return cart.totalFundRaisePrice;
    } else {
        return cart.totalGroupBuyPrice;
    }
});

const tempAddress = ref(null);

const storeType = ref(null);

async function editAddress() {
    tempAddress.value = null;

    await nextTick();
    tempAddress.value = {
        index: Object.keys(addressInfo.value).length + 1,
    };
}

function addressOnAbort() {
    tempAddress.value = null;
}

async function addressOnSubmit(addressData) {

    const { index, name, phone, email, address, defaultAddress, zipCode, city, district } = addressData;

    const payload = {
        index,
        defaultAddress,
        name,
        phone,
        email,
        address,
        zipCode,
        city,
        district,
        
    };

    const data = await POST("/addAddress", payload, token);

    if(!!data.status) {
        getAddress();
        tempAddress.value = null;
    }
}

function goBack() {
    navigateTo("/cart");
}

async function goFinishedPage() {

    checkoutPayload.value.deliveryAddress = deliveryAddress.value;
    checkoutPayload.value.group_id = group_id.value;
    console.log(checkoutPayload.value)

    const data = await POST("/createOrder", checkoutPayload.value, token);

    console.log(data)

    if(!!data.status) {
        if(data.isCartEmpty) {
            cart.isHaveCartItem = false
        }

        inProcessing.value = true;
        progressTimer.value = setInterval(() => {
            progress.value += 10;
            if (progress.value >= 80) {
                navigateTo("/cart/finished");
            }
        }, 500);
    }

    // inProcessing.value = true;
    // progressTimer.value = setInterval(() => {
    //     progress.value += 10;
    //     if (progress.value >= 80) {
    //         navigateTo("/cart/finished");
    //     }
    // }, 500);
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

.radio-container {
    display: inline-flex;
}
.mark {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: #fff;
    border: 1px solid #d5d9de;
}

input:checked + .mark {
    border: 5px solid #6b56ca;
}
</style>
