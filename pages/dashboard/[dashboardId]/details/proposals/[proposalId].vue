<template>
    <section>
        <div class="flex justify-between items-center mb-3">
            <nuxt-link
                :to="`/dashboard/${$route.params.dashboardId}/details/proposals`"
                class="flex justify-start items-center"
            >
                <UIcon name="i-heroicons-chevron-left" class="block w-4 h-4 mr-2" />
                <b class="text-xl font-medium">{{ pageStatus === "new" ? "新增方案" : "編輯方案內容" }}</b>
            </nuxt-link>
            <span class="opacity-0">{{ $route.params.proposalId }}</span>
        </div>

        <section class="flex justify-start items-start gap-x-6 rounded-lg bg-white p-6 px-5 relative max-md:p-3">
            <!-- form -->
            <article class="max-w-[420px]">
                <UForm :schema="proposalSchema" :state="submissionData" @submit="doSave">
                    <!--  -->
                    <div>
                        <!-- 方案名稱 -->
                        <UFormGroup
                            label="方案名稱"
                            help="方案名稱請說明屬性及特色。"
                            name="projectName"
                            required
                            class="mb-8"
                        >
                            <div class="relative">
                                <UTextarea
                                    placeholder="例如：超早鳥優惠"
                                    :rows="1"
                                    resize
                                    class="w-full"
                                    size="lg"
                                    v-model="submissionData.projectName"
                                />
                                <p class="text-sm text-right text-Neutral-500-Primary absolute bottom-[-20px] right-0">
                                    <span>{{ submissionData.projectName.length }}</span> / <span>25</span>
                                </p>
                            </div>
                        </UFormGroup>

                        <!-- 方案圖片 -->
                        <UFormGroup
                            label="方案照片"
                            help="請上傳檔案小於 1000KB 的圖片，尺寸必須為 873x284 像素"
                            required
                            name="imgDataQuantity"
                            class="mb-3"
                        >
                            <div class="h-0 overflow-hidden opacity-0">
                                <UInput type="number" v-model="submissionData.imgDataQuantity" />
                            </div>
                            <ModalDropImg ref="imgData" :max="1" :files="imgFilesFetched" />
                        </UFormGroup>

                        <!-- 方案金額 -->
                        <UFormGroup label="方案金額" help="本方案預計售價。" name="specialOffer" required class="mb-3">
                            <UInput
                                class="max-w-[400px]"
                                type="number"
                                inputClass="!pl-[55px]"
                                placeholder="請輸入金額"
                                v-model="submissionData.specialOffer"
                            >
                                <template #leading>
                                    <div
                                        class="flex justify-center items-center h-full px-2 bg-gray-50 relative left-[-14px] border-[1px] border-[rgb(221,222,224)] rounded-s-md"
                                    >
                                        NT$
                                    </div>
                                </template>
                            </UInput>
                        </UFormGroup>

                        <!-- 原始金額 -->
                        <UFormGroup
                            label="原始金額"
                            help="本方案原始售價，系統將會自動幫您計算折扣金額顯示於前台。"
                            name="originalPrice"
                            required
                            class="mb-3"
                        >
                            <UInput
                                class="max-w-[400px]"
                                type="number"
                                inputClass="!pl-[55px]"
                                placeholder="請輸入金額"
                                v-model="submissionData.originalPrice"
                            >
                                <template #leading>
                                    <div
                                        class="flex justify-center items-center h-full px-2 bg-gray-50 relative left-[-14px] border-[1px] border-[rgb(221,222,224)] rounded-s-md"
                                    >
                                        NT$
                                    </div>
                                </template>
                            </UInput>
                        </UFormGroup>

                        <!-- 銷售規則 -->
                        <div class="flex justify-start items-end gap-x-2">
                            <!--  -->
                            <UFormGroup label="銷售規則" required class="mb-3" name="salesLimit">
                                <URadioGroup
                                    :options="[
                                        { value: true, label: '限制數量' },
                                    ]"
                                    v-model="submissionData.salesLimit"
                                    class="mt-2"
                                    @change="
                                        () =>
                                            !submissionData.salesLimit
                                                ? (submissionData.salesLimitedQuantity = null)
                                                : ''
                                    "
                                >
                                    <template #label="{ option }">
                                        <p class="mb-3">{{ option.label }}</p>
                                    </template>
                                </URadioGroup>
                            </UFormGroup>
                            <!--  -->
                            <UFormGroup class="mb-3 relative" name="salesLimitedQuantity">
                                <UInput
                                    class="w-52 mb-1 max-md:w-[205px]"
                                    :disabled="!submissionData.salesLimit"
                                    type="number"
                                    :modelValue="submissionData.salesLimitedQuantity"
                                    v-model="submissionData.salesLimitedQuantity"
                                    @change="(e) => (e.target.value = Math.max(1, e.target.value))"
                                    size="sm"
                                >
                                    <template #trailing>
                                        <p class="flex justify-center items-center">組</p>
                                    </template>
                                </UInput>
                                <p
                                    class="dark:text-red-400 mt-0 text-Status-Color-Danger-500-Primary text-sm absolute bottom-[-20px] right-2"
                                    v-if="submitedError.salesLimitedQuantity"
                                >
                                    請輸入組數
                                </p>
                            </UFormGroup>
                        </div>

                        <!-- 預計出貨時間 -->
                        <UFormGroup
                            label="預計出貨時間"
                            help="請填寫預計出貨時間（月份或日期），以利消費者充分瞭解專案預計出貨時間。"
                            name="deliveryTime"
                            required
                            class="mb-3"
                        >
                            <div class="max-w-64 relative">
                                <VueDatePicker
                                    position="right"
                                    auto-apply
                                    year-first
                                    placeholder="選擇時間"
                                    :format-locale="zhTW"
                                    :min-date="new Date()"
                                    :start-date="new Date()"
                                    :enable-time-picker="false"
                                    v-model="submissionData.deliveryTime"
                                />
                            </div>
                        </UFormGroup>

                        <!-- 商品內容物 -->
                        <UFormGroup
                            label="商品內容/規格詳情"
                            help="建議您可使用點列、數字等方式顯示較易於閱讀。"
                            name="content"
                            required
                            class="mb-3"
                        >
                            <UTextarea
                                placeholder=" ．商品x1  ．濾網x1"
                                :rows="4"
                                resize
                                class="w-full"
                                size="lg"
                                v-model="submissionData.content"
                            />
                        </UFormGroup>

                        <!-- 出貨方式與運費 -->
                        <div class="flex justify-start items-start max-md:block max-md:relative">
                            <UFormGroup
                                label="出貨方式與運費 (可複選)"
                                required
                                help="提供多種配送服務可以提高顧客選擇與購買意願，物流費用可針對不同優惠方案進行區隔設定，物流費將於顧客結帳時另外收取。"
                                class="mb-3"
                                name="deliveryWays"
                            >
                                <div class="h-0 overflow-hidden opacity-0">
                                    <USelectMenu
                                        v-model="submissionData.deliveryWays"
                                        :options="deliveryWays"
                                        multiple
                                        placeholder="請選擇"
                                        @change="updateDeliveryWays(submissionData.deliveryWays)"
                                    />
                                </div>
                            </UFormGroup>
                        </div>

                        <section class="mb-10">
                            <!-- deliveToStore -->
                            

                            <!-- deliveToHouse -->
                            <div class="flex justify-start items-center gap-x-3 mb-5 max-md:items-start max-md:gap-x-0">
                                <UCheckbox
                                    label="宅配"
                                    class="whitespace-nowrap"
                                    v-model="submissionData.deliveToHouse.isAvailable"
                                    @change="cancelFeeIfNotAvailable(submissionData.deliveToHouse, 'deliveToHouse')"
                                />
                                <div class="flex justify-start items-end gap-2 flex-wrap">
                                    <UInput
                                        class="w-44 m-auto max-md:h-[32px] max-md:ml-3"
                                        type="number"
                                        placeholder="輸入運費金額"
                                        inputClass="!pl-[55px]"
                                        size="sm"
                                        :disabled="!submissionData.deliveToHouse.isAvailable"
                                        v-model="submissionData.deliveToHouse.fee"
                                    >
                                        <template #leading>
                                            <div
                                                class="flex justify-center items-center h-full px-2 bg-gray-50 relative left-[-10px] border-[1px] border-[rgb(221,222,224)] rounded-s-md"
                                            >
                                                NT$
                                            </div>
                                        </template>
                                    </UInput>
                                    <p
                                        class="dark:text-red-400 mt-0 text-Status-Color-Danger-500-Primary text-sm max-md:pl-4 max-md:mt-[-8px]"
                                        v-if="submitedError.deliveToHouseFee"
                                    >
                                        請輸入金額
                                    </p>
                                </div>
                            </div>

                            <!-- deliveOverseas -->
                            <div class="flex justify-start items-center gap-x-3 mb-5 max-md:items-start max-md:gap-x-0">
                                <UCheckbox
                                    label="國外/離島配送"
                                    class="whitespace-nowrap"
                                    v-model="submissionData.deliveOverseas.isAvailable"
                                    @change="cancelFeeIfNotAvailable(submissionData.deliveOverseas, 'deliveOverseas')"
                                />
                                <div class="flex justify-start items-end gap-2 flex-wrap">
                                    <UInput
                                        class="w-44 m-auto max-md:h-[32px] max-md:ml-2"
                                        type="number"
                                        placeholder="輸入運費金額"
                                        inputClass="!pl-[55px]"
                                        size="sm"
                                        @input="(e) => (e.target.value = Math.max(0, e.target.value))"
                                        :disabled="!submissionData.deliveOverseas.isAvailable"
                                        v-model="submissionData.deliveOverseas.fee"
                                    >
                                        <template #leading>
                                            <div
                                                class="flex justify-center items-center h-full px-2 bg-gray-50 relative left-[-10px] border-[1px] border-[rgb(221,222,224)] rounded-s-md"
                                            >
                                                NT$
                                            </div>
                                        </template>
                                    </UInput>
                                    <p
                                        class="dark:text-red-400 mt-0 text-Status-Color-Danger-500-Primary text-sm max-md:pl-4 max-md:mt-[-8px]"
                                        v-if="submitedError.deliveOverseasFee"
                                    >
                                        請輸入金額
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <!--  -->
                    <div class="flex justify-start items-center">
                        <UiButton type="primary" class="max-md:w-16 md:w-16 mr-2"> 儲存 </UiButton>
                        <UiButton type="secondary" class="max-md:w-[104px] md:w-[104px]" @click="doDel($event)">
                            刪除此方案
                        </UiButton>
                    </div>
                </UForm>
            </article>

            <!-- card -->
            <div
                class="absolute top-6 right-5 w-[320px] min-h-[400px] border-[1px] border-Primary-100 rounded-lg px-4 py-3 bg-white max-xl:hidden"
            >
                <div class="flex flex-col justify-start items-center min-h-[495px]">
                    <picture
                        class="w-full block aspect-[212/75] rounded overflow-hidden mb-[10px]"
                        :class="!imgData?.files[0]?.preview ? ' bg-gray-200' : ''"
                    >
                        <img
                            v-if="imgData?.files[0]?.preview"
                            class="block h-full w-full object-cover"
                            :src="imgData?.files[0]?.preview"
                        />
                    </picture>

                    <div class="w-full">
                        <div
                            v-if="submissionData.salesLimit"
                            class="bg-Primary-400-Hover text-white rounded inline-block p-1 px-[6px] mb-[10px] text-[9px]"
                        >
                            剩餘{{ submissionData.salesLimitedQuantity }}組
                        </div>
                    </div>

                    <h3 class="w-full text-base font-medium mb-2 line-clamp-1">
                        {{ submissionData.projectName }}
                    </h3>

                    <p class="w-full flex justify-start items-center gap-x-1 mb-[10px]">
                        <b class="text-Status-Color-Danger-500-Primary text-xl font-medium"
                            >NT$ {{ submissionData.specialOffer }}</b
                        >
                        <b class="text-Status-Color-Danger-400-Hover text-xs font-normal line-through"
                            >定價 ${{ submissionData.originalPrice }}，現省 ${{
                                submissionData.originalPrice - submissionData.specialOffer
                            }}</b
                        >
                    </p>
                    <section class="w-full border-t-[1px] border-gray-100 py-[6px] mb-1 text-[#29303D]">
                        <p class="text-xs font-medium mb-1">商品內容：</p>
                        <article
                            class="text-xs text-[#29303D] break-words"
                            v-html="textToHtml(submissionData.content)"
                        ></article>
                    </section>

                    <ul
                        class="flex-grow w-full text-xs text-Neutral-800 flex flex-col justify-start items-start gap-1 mb-3"
                    >
                        <li
                            class="flex justify-start items-center gap-x-1 text-xs"
                            v-if="submissionData.deliveToStore.isAvailable"
                        >
                            <UIcon
                                name="i-heroicons-check-circle"
                                class="block text-base w-4 h-4 text-Primary-500-Primary"
                            />
                            {{
                                submissionData.deliveToStore.fee === 0
                                    ? `本專案享超商取貨免運`
                                    : `本專案可超商取貨，運費${submissionData.deliveToStore.fee}元`
                            }}
                        </li>
                        <li
                            class="flex justify-start items-center gap-x-1 text-xs"
                            v-if="submissionData.deliveToHouse.isAvailable"
                        >
                            <UIcon
                                name="i-heroicons-check-circle"
                                class="block text-base w-4 h-4 text-Primary-500-Primary"
                            />

                            {{
                                submissionData.deliveToHouse.fee === 0
                                    ? `本專案享宅配免運優惠`
                                    : `本專案宅配出貨，運費${submissionData.deliveToHouse.fee}元`
                            }}
                        </li>
                        <li
                            class="flex justify-start items-center gap-x-1 text-xs"
                            v-if="submissionData.deliveOverseas.isAvailable"
                        >
                            <UIcon
                                name="i-heroicons-check-circle"
                                class="block text-base w-4 h-4 text-Primary-500-Primary"
                            />
                            {{
                                submissionData.deliveOverseas.fee === 0
                                    ? `可寄送國外離島，享免運優惠`
                                    : `可寄送國外/離島，運費${submissionData.deliveOverseas.fee}元`
                            }}
                        </li>
                    </ul>
                    <div class="w-full border-t-[1px] border-gray-100">
                        <p class="pt-3 pb-2 text-center text-xs font-normal text-Primary-500-Primary">
                            本專案預計
                            {{ submissionData.deliveryTime ? formatDateToYearMonth(submissionData.deliveryTime) : "" }}
                            實現，敬啟期待
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script setup>
import { proposalSchema } from "~/validation";
import { zhTW }           from "date-fns/locale";
import { useToast }       from "vue-toastification";
import VueDatePicker      from "@vuepic/vue-datepicker";

const toast       = useToast();
const route       = useRoute();
const authStore   = useAuthStore();
const token       = authStore.token;
const proposalId  = route.params.proposalId;
const dashboardId = route.params.dashboardId;
const pageStatus  = ref("new"); // new, edit

async function getEditedProposalData() {

    const data = await POST("/getEditedProposalData", {'project_id' : dashboardId, 'spec_id' : proposalId }, token);

    if (!!data) {
        pageStatus.value = 'edit';
        console.log(data.proposalData)
        if (data.proposalData) {
            let editedSubmissionData = {
                ...data.proposalData,
            };

            submissionData.value = Object.assign({}, submissionData.value, editedSubmissionData);

            let imgFile = {
                path: "",
                preview: data.proposalData.projectPreview,
                sizeKB: "",
                dimensions: "",
            };
            imgFilesFetched.push(imgFile);
        }
    }
}

onMounted(() => {
    getEditedProposalData();
});



const screenWidth = ref(800);
onMounted(() => {
    screenWidth.value = window.innerWidth;
});

const submitedError = ref({
    salesLimitedQuantity : false,
    deliveToStoreStores  : false,
    deliveToStoreFee     : false,
    deliveOverseasFee    : false,
    deliveToHouseFee     : false,
});
const submissionData = ref({
    projectName          : "",
    originalPrice        : null,
    specialOffer         : null,
    salesLimit           : null, 
    salesLimitedQuantity : null,
    deliveryTime         : null,
    content              : "",
    specification        : "",

    deliveryWays: [],

    deliveOverseas: {
        isAvailable: false,
        fee: null,
    },
    deliveToStore: {
        isAvailable: false,
        fee: null,
        stores: [],
    },
    deliveToHouse: {
        isAvailable: false,
        fee: null,
    },

    imgData: null,
    imgDataQuantity: 0,
});

const imgFilesFetched = reactive([]);

const imgData         = ref(); 
const imgDataQuantity = computed(() => imgData.value?.files?.length || 0);

watch(imgDataQuantity, (val) => {
    submissionData.value.imgDataQuantity = val;
    submissionData.value.imgData = imgData.value.files[0];
});

const deliveryWays = ref(["deliveToStore", "deliveToHouse", "deliveOverseas"]);

const updateDeliveryWays = (deliveryWaysData) => {
    console.log(deliveryWaysData)
    deliveryWays.value.map((el) => {
        
        submissionData.value[el].isAvailable = deliveryWaysData.includes(el);
    });
};

const cancelFeeIfNotAvailable = (deliveObj, key) => {
    if (!deliveObj.isAvailable) {
        deliveObj.fee = null;
        let i = submissionData.value.deliveryWays.indexOf(key);
        i > -1 && submissionData.value.deliveryWays.splice(i, 1);
    } else {
        !submissionData.value.deliveryWays.includes(key) && submissionData.value.deliveryWays.push(key);
    }
};

const setStoresInDeliveToStore = (e, store) => {
    if (e.target.checked) {
        submissionData.value.deliveToStore.stores.push(store);
    } else {
        let i = submissionData.value.deliveToStore.stores.indexOf(store);
        i > -1 && submissionData.value.deliveToStore.stores.splice(i, 1);
    }
};

function textToHtml(text) {
    return text.replace(/\n/g, "<br>");
}
function formatDateToYearMonth(dateInput) {
    const date = new Date(dateInput);

    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);

    return `${year}/${month}`;
}

const check = ref(false);

async function doSave() {

    if(submissionData.value.specialOffer > submissionData.value.originalPrice){
        toast.error('方案價格不可高於原價');
        return;
    }
    if(submissionData.value.deliveToHouse.isAvailable && submissionData.value.deliveToHouse.fee == null) {
        toast.error('請輸入運費金額');
        return;
    }
    if(submissionData.value.deliveOverseas.isAvailable && submissionData.value.deliveOverseas.fee == null) {
        toast.error('請輸入運費金額');
        return;
    }

    submitedError.value = {
        salesLimitedQuantity: submissionData.value.salesLimit && !submissionData.value.salesLimitedQuantity,
        deliveToStoreStores:
            submissionData.value.deliveToStore.isAvailable && !submissionData.value.deliveToStore.stores.length,
        deliveToStoreFee:
            submissionData.value.deliveToStore.isAvailable && submissionData.value.deliveToStore.fee === null,
        deliveOverseasFee:
            submissionData.value.deliveOverseas.isAvailable && submissionData.value.deliveOverseas.fee === null,
        deliveToHouseFee:
            submissionData.value.deliveToHouse.isAvailable && submissionData.value.deliveToHouse.fee === null,
    };

    const payload = {
        'image'            : submissionData.value.imgData,
        'title'            : submissionData.value.projectName,
        'original_price'   : submissionData.value.originalPrice,
        'sell_price'       : submissionData.value.specialOffer,
        'content'          : submissionData.value.content,
        'limit_qty'        : submissionData.value.salesLimitedQuantity,
        'ship_date'        : submissionData.value.deliveryTime,
        'deliveOverseas'   : submissionData.value.deliveOverseas,
        'deliveToHouse'    : submissionData.value.deliveToHouse,
        'deliveryWays'     : submissionData.value.deliveryWays,
        'project_id'       : dashboardId,
        'spec_id'          : proposalId
    }


    if(pageStatus.value == 'edit') {
        console.log(payload)
        const data = await POST("/updateProjectSpec", payload, token);

        if(!!data) {
            check.value = true
            toast.success(data.message)
        }
    } else {
        const data = await POST("/addProjectSpec", payload, token);

        if(!!data) {
            check.value = true
            toast.success(data.message)
        } 
    }
    if(check.value) {
        navigateTo(`/dashboard/${dashboardId}/details/proposals`);
    }
}
async function doDel() {

    const id = proposalId;

    const data = await POST("/deleteProjectSpec", {'id':id}, '');

    if(!!data) {
        toast.success(data.message)
        navigateTo(`/dashboard/${dashboardId}/details/proposals`);
    }
}
</script>
