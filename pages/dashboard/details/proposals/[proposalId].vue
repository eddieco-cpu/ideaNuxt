<template>
    <section>
        <div class="flex justify-between items-center mb-3">
            <nuxt-link to="/dashboard/details/proposals">編輯方案內容</nuxt-link>
            <span>{{ $route.params.proposalId }}</span>
        </div>

        <section class="flex justify-start items-start gap-x-6 rounded-lg bg-white">
            <!-- form -->
            <article>
                <UForm :schema="proposalSchema" :state="submissionData" @submit="doSubmit">
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
                            class="mb-3"
                        >
                            <ModalDropImg ref="imgData" />
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
                        <!--  -->

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
                                placeholder=" ．商品x1 \n ．濾網x1"
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
                                placeholder=" ．淨重 4.5 kg  \n ．尺寸 39 x 25 x 59cm"
                                :rows="4"
                                resize
                                class="w-full"
                                size="lg"
                                v-model="submissionData.specification"
                            />
                        </UFormGroup>

                        <!-- 出貨方式與運費 -->
                        <UFormGroup label="出貨方式與運費 (可複選)" required class="mb-3" name="deliveryWays">
                            <UCheckbox label="超商取貨" class="mb-3" />
                            <UCheckbox label="國內離島配送" class="mb-3" />
                            <UCheckbox label="國內離島配送" class="mb-3" />
                        </UFormGroup>
                    </div>
                </UForm>
            </article>

            <!-- card -->
            <div></div>
        </section>
    </section>
</template>
<script setup>
import { proposalSchema } from "~/validation";
import { zhTW } from "date-fns/locale";

import VueDatePicker from "@vuepic/vue-datepicker";

//
const route = useRoute();

//
const screenWidth = ref(800);
onMounted(() => {
    screenWidth.value = window.innerWidth;
});

//
const submissionData = reactive({
    projectName: "",
    originalPrice: null,
    specialOffer: null,
    deliveryTime: null,
    content: "",
    specification: "",
    deliveryWays: [],
});
const imgData = ref(); //imgData.value.files

//
function doSubmit() {
    alert("doSubmit");
}
</script>
