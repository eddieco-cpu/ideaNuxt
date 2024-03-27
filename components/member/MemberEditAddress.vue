<template>
    <CardContainer>
        <template #body>
            <div class="flex">
                <p class="text-Secondary-400-Hover" v-show="addressInfo.defaultAddress">預設 -</p>
                <h2 class="font-medium text-black/[0.85] mb-5">
                    {{ isEditmode ? `編輯地址${index}` : `新增地址${index}` }}
                </h2>

                <button
                    class="underline text-Primary-500-Primary text-sm ml-auto"
                    v-show="!isEditmode && index > 1"
                    @click="setDefaultAddress"
                >
                    設為預設地址
                </button>
            </div>

            <UForm :schema="addressSchema" :state="addressInfo" class="flex flex-col gap-y-3" @submit="onSubmit">
                <UFormGroup label="index" name="index" class="hidden">
                    <UInput v-model="addressInfo.index" />
                </UFormGroup>

                <UFormGroup label="defaultAddress" name="defaultAddress" class="hidden">
                    <UToggle v-model="addressInfo.defaultAddress" />
                </UFormGroup>

                <UFormGroup label="收件人" name="name" help="請填寫您個人真實姓名，才能確實收到包裹。" required>
                    <UInput placeholder="王小美" v-model="addressInfo.name" />
                </UFormGroup>

                <UFormGroup label="收件人手機" name="phone" help="用於聯絡到貨通知使用。" required>
                    <UInput placeholder="0902123456" v-model="addressInfo.phone" />
                </UFormGroup>

                <UFormGroup label="收件人電子信箱" name="email" help="用於聯絡到貨通知使用。" required>
                    <UInput placeholder="idea2gether@gmail.com" v-model="addressInfo.email" />
                </UFormGroup>

                <UFormGroup label="收件人地址" name="address" help="如使用宅配到府得以直接帶入該地址。" required>
                    <div class="twzipcode w-full flex flex-wrap gap-2 mb-2">
                        <input
                            placeholder="郵遞區號"
                            data-role="zipcode"
                            ref="zipcode"
                            class="zipcode w-[calc(50%-4px)] md:flex-1 border border-Neutral-400-Hover rounded-md py-[7px] px-3 focus-visible:outline-Primary-400-Hover bg-white"
                        />
                        <select
                            placeholder="縣市"
                            data-role="county"
                            class="w-[calc(50%-4px)] md:flex-1 border border-Neutral-400-Hover rounded-md py-[7px] px-3 focus-visible:outline-Primary-400-Hover bg-white"
                            @change="getZipCode"
                            v-model="addressInfo.city"
                        ></select>
                        <select
                            placeholder="鄉鎮市區"
                            data-role="district"
                            class="w-full md:flex-1 border border-Neutral-400-Hover rounded-md py-[7px] px-3 focus-visible:outline-Primary-400-Hover bg-white"
                            @change="getZipCode"
                            v-model="addressInfo.district"
                        ></select>
                    </div>
                    <UInput placeholder="詳細地址" v-model="addressInfo.address" />
                </UFormGroup>

                <!-- 儲存更新 -->
                <div class="mt-4 flex gap-x-2">
                    <button type="submit" class="bg-Primary-500-Primary text-white px-4 py-1 rounded-lg text-sm">
                        儲存更新
                    </button>

                    <button
                        type="button"
                        class="bg-white border border-Neutral-300 px-4 py-1 rounded-lg text-sm text-Primary-400-Hover"
                        @click="abortAddress"
                    >
                        {{ isEditmode ? "刪除" : "取消" }}
                    </button>
                </div>
            </UForm>
        </template>
    </CardContainer>
</template>

<script setup>
import TWzipcode from "twzipcode.js";
import { addressSchema } from "~/validation";
import { useToast } from "vue-toastification";

const toast = useToast();
const twzipcode = ref(null);
const zipcode = ref(null);

const { index, defaultAddress, name, phone, email, address, isEditmode } = defineProps({
    index: {
        type: Number,
        default: 1,
    },
    defaultAddress: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        default: "",
    },
    phone: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },
    isEditmode: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["onSubmit", "onAbort"]);

const addressInfo = reactive({
    index: index,
    defaultAddress: defaultAddress,
    name: name,
    phone: phone,
    email: email,
    zipCode: undefined,
    city: "",
    district: "",
    address: address,
});

async function getZipCode() {
    await nextTick();

    setTimeout(() => {
        addressInfo.zipCode = zipcode.value.value;
    }, 0);
}

function abortAddress() {
    if (defaultAddress) {
        toast.error("預設地址不能刪除");

        return;
    }

    let payload = isEditmode ? { index, title: "刪除" } : { index, title: "取消" };

    emit("onAbort", payload);
}

function setDefaultAddress() {
    addressInfo.defaultAddress = true;
}

function onSubmit(event) {
    emit("onSubmit", event.data, isEditmode);
}

onMounted(() => {
    twzipcode.value = new TWzipcode();
});
</script>

<style lang="scss" scoped>
.twzipcode select {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
}
</style>
