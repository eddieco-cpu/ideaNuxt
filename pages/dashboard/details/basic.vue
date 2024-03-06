<template>
    <div>
        <UForm :schema="basicProjectDataSchema" :state="submissionData" @submit="doSubmit">
            <!--  -->
            <div>
                <UFormGroup label="專案名稱" name="projectName" required class="mb-8">
                    <div class="relative">
                        <UTextarea
                            placeholder="本次募資專案之名稱/品名，文字數量最多以 40字為限。"
                            :rows="screenWidth <= 768 ? 2 : 1"
                            resize
                            class="w-full"
                            size="lg"
                            v-model="submissionData.projectName"
                            @input="(e) => (e.target.value = e.target.value.slice(0, 40))"
                        />
                        <p class="text-sm text-right text-Neutral-500-Primary absolute bottom-[-20px] right-0">
                            <span>{{ submissionData.projectName.length }}</span> / <span>40</span>
                        </p>
                    </div>
                </UFormGroup>

                <UFormGroup label="專案簡介" name="projectDes" required class="mb-8">
                    <div class="relative">
                        <UTextarea
                            placeholder=" 請您簡短的以  90字，快速的介紹本次計畫，將顯示於募資頁商品右側。"
                            :rows="screenWidth <= 768 ? 3 : 2"
                            resize
                            class="w-full"
                            size="lg"
                            v-model="submissionData.projectDes"
                            @input="(e) => (e.target.value = e.target.value.slice(0, 90))"
                        />
                        <p class="text-sm text-right text-Neutral-500-Primary absolute bottom-[-20px] right-0">
                            <span>{{ submissionData.projectDes.length }}</span> / <span>90</span>
                        </p>
                    </div>
                </UFormGroup>

                <UFormGroup
                    label="專案達成目標"
                    help="根據您本次的專案內容，規劃及估算本次預計達成目標。"
                    name="projectTargetValue"
                    required
                    class="mb-3"
                >
                    <UInput
                        class="max-w-[400px]"
                        type="number"
                        inputClass="!pl-[55px]"
                        v-model="submissionData.projectTargetValue"
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

                <UFormGroup label="專案分類" help="請選擇適合您本次計畫的商品分類/屬性。" class="mb-3">
                    <div class="flex justify-start items-center">
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
                    </div>
                </UFormGroup>

                <UFormGroup
                    label="預計開始時間"
                    help="您預計開始本次專案的時間，本站將會為你安排審核順序。請至少需要約七個工作天以上審核你的提案。"
                    name="startDate"
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
                            v-model="submissionData.startDate"
                        />
                    </div>
                </UFormGroup>

                <UFormGroup
                    label="預計結束時間"
                    help="根據經驗，建議募資專案應在45-60天內執行完畢，成效最佳。"
                    name="endDate"
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
                            v-model="submissionData.endDate"
                        />
                    </div>
                </UFormGroup>

                <UFormGroup
                    label="封面照片"
                    help="請上傳檔案小於 500kb 的圖片，尺寸必須為 1252 x 800 像素 ，至多5張，封面圖片可在專案上線前再另行編輯修改。"
                    required
                    class="mb-3"
                >
                    <ModalDropImg ref="imgData" />
                </UFormGroup>
            </div>
        </UForm>
    </div>
</template>

<script setup>
import { basicProjectDataSchema } from "~/validation";
import { zhTW } from "date-fns/locale";

import VueDatePicker from "@vuepic/vue-datepicker";

const screenWidth = ref(800);
onMounted(() => {
    screenWidth.value = window.innerWidth;
});

//
const submissionData = reactive({
    projectName: "",
    projectDes: "",
    projectTargetValue: "",
    dropdownValue: "",
    startDate: "",
    endDate: "",
});
const imgData = ref(); //imgData.value.files

//
function doSubmit() {
    alert("doSubmit");
}
</script>
