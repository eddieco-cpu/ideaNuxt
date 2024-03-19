<template>
    <section>
        <div class="flex justify-between items-center mb-3">
            <nuxt-link to="/dashboard/details/proposals" class="flex justify-start items-center">
                <UIcon name="i-heroicons-chevron-left" class="block w-4 h-4 mr-2" />
                <b class="text-xl font-medium">{{ pageStatus === "new" ? "新增方案" : "編輯方案內容" }}</b>
            </nuxt-link>
            <span class="opacity-0">{{ $route.params.proposalId }}</span>
        </div>

        <section class="flex justify-start items-start gap-x-6 rounded-lg bg-white p-6 relative max-md:p-3">
            <!-- form -->
            <article>
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
                                    @input="(e) => (e.target.value = e.target.value.slice(0, 25))"
                                />
                                <p class="text-sm text-right text-Neutral-500-Primary absolute bottom-[-20px] right-0">
                                    <span>{{ submissionData.projectName.length }}</span> / <span>25</span>
                                </p>
                            </div>
                        </UFormGroup>

                        <!-- 方案圖片 -->
                        <UFormGroup
                            label="方案照片"
                            help="請上傳檔案小於 500kb 的圖片，尺寸必須為 1252 x 800 像素"
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
                                        { value: false, label: '無限制' },
                                        { value: true, label: '限制數量' },
                                    ]"
                                    v-model="submissionData.salesLimit"
                                    class="mt-2"
                                >
                                    <template #label="{ option }">
                                        <p class="mb-3">{{ option.label }}</p>
                                    </template>
                                </URadioGroup>
                            </UFormGroup>
                            <!--  -->
                            <UFormGroup class="mb-3" name="salesLimitedQuantity">
                                <UInput
                                    class="w-52 mb-1 max-md:w-[205px]"
                                    :disabled="!submissionData.salesLimit"
                                    type="number"
                                    :modelValue="submissionData.salesLimitedQuantity"
                                    v-model="submissionData.salesLimitedQuantity"
                                    size="sm"
                                >
                                    <template #trailing>
                                        <p class="flex justify-center items-center">組</p>
                                    </template>
                                </UInput>
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
                            label="商品內容物"
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

                        <!-- 商品規格 -->
                        <UFormGroup
                            label="商品規格"
                            help="請詳細填入基本商品規格與內容介紹，建議可用條列式方式顯示。"
                            name="specification"
                            required
                            class="mb-3"
                        >
                            <UTextarea
                                placeholder=" ．淨重 4.5 kg   ．尺寸 39 x 25 x 59cm"
                                :rows="4"
                                resize
                                class="w-full"
                                size="lg"
                                v-model="submissionData.specification"
                            />
                        </UFormGroup>

                        <!-- 出貨方式與運費 -->
                        <div class="flex justify-start items-start max-md:block max-md:relative">
                            <UFormGroup label="出貨方式與運費 (可複選)" required class="mb-3" name="deliveryWays">
                                <UCheckbox
                                    label="超商取貨"
                                    class="mb-3 mt-3"
                                    :value="deliveryWays[0].val"
                                    @change="updateDeliveryWays($event)"
                                />
                                <UCheckbox
                                    label="宅配"
                                    class="mb-3"
                                    :value="deliveryWays[1].val"
                                    @change="updateDeliveryWays($event)"
                                />
                                <UCheckbox
                                    label="國內離島配送"
                                    class="mb-3"
                                    :value="deliveryWays[2].val"
                                    @change="updateDeliveryWays($event)"
                                />
                            </UFormGroup>
                            <div>
                                <UInput
                                    class="w-40 m-auto relative bottom-[-26px] left-[-70px] max-md:absolute max-md:left-0 max-md:right-0 max-md:top-[26px] max-md:bottom-auto max-md:translate-x-7 max-md:h-[32px]"
                                    :disabled="!submissionData.deliveryWays.includes('deliveToStore')"
                                    type="number"
                                    inputClass="!pl-[55px]"
                                    v-model="submissionData.deliveToStoreFee"
                                    size="sm"
                                >
                                    <template #leading>
                                        <div
                                            class="flex justify-center items-center h-full px-2 bg-gray-50 relative left-[-14px] border-[1px] border-[rgb(221,222,224)] rounded-s-md"
                                        >
                                            NT$
                                        </div>
                                    </template>
                                </UInput>
                            </div>
                        </div>
                    </div>

                    <!--  -->
                    <div class="flex justify-start items-center">
                        <UiButton type="primary" class="max-md:w-16 md:w-16 mr-2" @click="doSave"> 儲存 </UiButton>
                        <UiButton type="secondary" class="max-md:w-[104px] md:w-[104px]" @click="doDel($event)">
                            刪除此方案
                        </UiButton>
                    </div>
                </UForm>
            </article>

            <!-- card -->
            <div
                class="absolute top-6 right-6 w-[242px] min-h-[316px] border-[1px] border-Primary-100 rounded-lg px-4 py-3 max-xl:hidden"
            >
                <picture
                    class="block aspect-[212/75] rounded overflow-hidden mb-[10px]"
                    :class="!imgData?.files[0]?.preview ? ' bg-gray-200' : ''"
                >
                    <img
                        v-if="imgData?.files[0]?.preview"
                        class="block h-full w-full object-cover"
                        :src="imgData?.files[0]?.preview"
                    />
                </picture>

                <div
                    v-if="submissionData.salesLimit"
                    class="bg-Primary-400-Hover text-white rounded inline-block p-1 px-[6px] mb-[10px] text-[9px]"
                >
                    剩餘{{ submissionData.salesLimitedQuantity }}組
                </div>

                <h3 class="text-xs font-medium mb-[10px] line-clamp-1">
                    {{ submissionData.projectName }}
                </h3>

                <p class="flex justify-start items-center gap-x-1 mb-[10px]">
                    <b class="text-Status-Color-Danger-500-Primary text-sm font-medium text-sm"
                        >NT$ {{ submissionData.specialOffer }}</b
                    >
                    <b class="text-Status-Color-Danger-400-Hover text-xs font-normal line-through text-[9px]"
                        >定價 ${{ submissionData.originalPrice }}，現省 ${{
                            submissionData.originalPrice - submissionData.specialOffer
                        }}</b
                    >
                </p>
                <section class="border-y-[1px] border-gray-100 py-[6px] mb-[10px]">
                    <p class="text-[9px] font-medium">商品內容</p>
                    <article class="text-[8px] leading-3 mb-4" v-html="textToHtml(submissionData.content)"></article>
                    <p class="text-[9px] font-medium">商品規格</p>
                    <article class="text-[8px] leading-3" v-html="textToHtml(submissionData.specification)"></article>
                </section>
                <ul class="text-xs text-Neutral-800 flex justify-start content-start items-start flex-wrap gap-1">
                    <li class="mb-1 flex justify-start items-center gap-x-1 text-[9px]">
                        <UIcon name="i-heroicons-shopping-bag" class="block w-3 h-3" />
                        預計{{
                            submissionData.deliveryTime
                                ? formatDateToYearMonth(submissionData.deliveryTime)
                                : " yyyy/mm "
                        }}出貨
                    </li>
                    <li
                        v-if="submissionData.deliveryWays.includes('deliveInCountry')"
                        class="mb-1 flex justify-start items-center gap-x-1 text-[9px]"
                    >
                        <UIcon name="i-heroicons-shopping-cart" class="block w-3 h-3" />
                        台灣本島免運費
                    </li>
                    <li
                        v-if="submissionData.deliveryWays.includes('deliveToStore')"
                        class="mb-1 flex justify-start items-center gap-x-1 text-[9px]"
                    >
                        <UIcon name="i-heroicons-shopping-cart" class="block w-3 h-3" />
                        超商取貨 {{ submissionData.deliveToStoreFee }} 元
                    </li>
                    <li
                        v-if="submissionData.deliveryWays.includes('deliveToHouse')"
                        class="mb-1 flex justify-start items-center gap-x-1 text-[9px]"
                    >
                        <UIcon name="i-heroicons-shopping-cart" class="block w-3 h-3" />
                        宅配
                    </li>
                </ul>
            </div>
        </section>
    </section>
</template>
<script setup>
import { proposalSchema } from "~/validation";
import { zhTW } from "date-fns/locale";

import VueDatePicker from "@vuepic/vue-datepicker";

//
const route = useRoute();
const proposalId = route.params.proposalId;

async function getEditedProposalData() {
    const data = await GET(`/api/dashboard/details/proposals/${proposalId}`);
    if (!!data) {
        console.log("data", data);
        pageStatus.value = data.proposalStatus;

        if (data.proposalData) {
            //
            let editedSubmissionData = {
                ...data.proposalData,
            };
            submissionData.value = editedSubmissionData;

            //
            let imgFile = {
                path: "",
                preview: data.proposalData.imgData,
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

//
const pageStatus = ref("new"); // new, edit
//const pageTime;

const screenWidth = ref(800);
onMounted(() => {
    screenWidth.value = window.innerWidth;
});

//
const submissionData = ref({
    projectName: "",
    originalPrice: null,
    specialOffer: null,
    salesLimit: null, //boolean
    salesLimitedQuantity: undefined,
    deliveryTime: null,
    content: "",
    specification: "",
    deliveryWays: [],
    deliveToStoreFee: 0,

    imgData: null,
    imgDataQuantity: 0,
});

const imgFilesFetched = reactive([
    // {},
]);

const imgData = ref(); //imgData.value.files
const imgDataQuantity = computed(() => imgData.value?.files?.length || 0);

watch(imgDataQuantity, (val) => {
    //console.log(val);
    console.log(imgData.value.files);
    submissionData.value.imgDataQuantity = val;
    submissionData.value.imgData = imgData.value.files[0];
});

//
const deliveryWays = ref([
    {
        val: "deliveToStore",
        name: "超商取貨",
    },
    {
        val: "deliveToHouse",
        name: "宅配",
    },
    {
        val: "deliveInCountry",
        name: "國內離島配送",
    },
]);

const updateDeliveryWays = (event) => {
    const { value, checked } = event.target;
    if (checked) {
        // 如果被選取，將此 value 加入到陣列中
        submissionData.value.deliveryWays.push(value);
    } else {
        // 如果取消選取，從陣列中移除此 value
        const index = submissionData.value.deliveryWays.indexOf(value);
        if (index > -1) {
            submissionData.value.deliveryWays.splice(index, 1);
        }
    }
};

function textToHtml(text) {
    // 將文本中的換行符轉換為<br>標籤
    return text.replace(/\n/g, "<br>");
}
function formatDateToYearMonth(dateInput) {
    // 將輸入的日期字符串轉換成Date物件
    const date = new Date(dateInput);

    // 獲取年份和月份，並確保月份為兩位數格式
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);

    // 組合年份和月份成"yyyy/mm"格式
    return `${year}/${month}`;
}

//
function doSave() {
    alert("doSave");
    //console.log(imgData.value.files);
}
function doDel(event) {
    event.preventDefault();
    alert("doDel");
    console.log(imgData.value.files);
}
</script>
