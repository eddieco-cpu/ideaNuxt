<template>
    <div>
        <section class="mt-[1px] max-md:mb-16">
            <p
                class="text-xs text-Neutral-500-Primary pointer-events-none text-right h-7 leading-7 mb-5 mt-[calc(-44px)] max-lg:mt-0 max-lg:mb-3 max-lg:h-auto max-lg:leading-4 max-lg:text-left"
                v-if="pageStatus === 'edit'"
            >
                {{ "最後更新於" + pageTime }}
            </p>

            <div>
                <!--  -->
                <UForm :schema="basicProjectDataSchema" :state="submissionData" @submit="doSubmit">
                    <!--  -->
                    <div class="relative bg-white p-6 rounded-lg">
                        <UFormGroup label="專案名稱" name="projectName" required class="mb-8">
                            <div class="relative">
                                <UTextarea
                                    placeholder="本次募資專案之名稱/品名，文字數量最多以 40字為限。"
                                    :rows="screenWidth <= 768 ? 3 : 1"
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
                            label="專案網址名稱"
                            name="projectWebsiteName"
                            :help="`此為本專案的網址 ，同金流資料，請謹慎修改。網址目前為：https://www.idea2gether.com/projects/${submissionData.projectWebsiteName}`"
                            required
                            class="mb-8"
                        >
                            <UInput
                                class="md:max-w-[218px]"
                                v-model="submissionData.projectWebsiteName"
                                @input="(e) => (e.target.value = e.target.value.replace(/[^a-zA-Z0-9\-_]/g, ''))"
                                @keydown="
                                    (e) => {
                                        const allowedKeys = /[a-zA-Z0-9\-_]/;
                                        const isControlKey =
                                            e.ctrlKey ||
                                            e.metaKey ||
                                            e.altKey ||
                                            e.key === 'Backspace' ||
                                            e.key === 'Delete' ||
                                            e.key === 'ArrowLeft' ||
                                            e.key === 'ArrowRight' ||
                                            (e.key === 'v' && (e.ctrlKey || e.metaKey));
                                        if (!allowedKeys.test(e.key) && !isControlKey) e.preventDefault();
                                    }
                                "
                            />
                        </UFormGroup>

                        <UFormGroup
                            label="專案達成目標"
                            help="根據您本次的專案內容，規劃及估算本次預計達成目標。"
                            name="projectTargetValue"
                            required
                            class="mb-3"
                        >
                            <UInput
                                class="max-w-[280px]"
                                type="number"
                                placeholder="1000000"
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
                            <div class="flex justify-start items-center max-w-[400px]">
                                <USelectMenu
                                    class="w-full lg:h-10"
                                    size="lg"
                                    v-model="submissionData.projectCate"
                                    :options="cateOpts"
                                    placeholder="3C 科技"
                                    value-attribute="id"
                                    option-attribute="name"
                                />
                            </div>
                        </UFormGroup>

                        <UFormGroup
                            label="預計開始時間"
                            help="您預計開始本次專案的時間，本站將會為你安排審核順序。請至少需要約七個工作天以上審核你的提案。"
                            name="startDate"
                            required
                            class="mb-3"
                        >
                            <div class="max-w-[216px] relative max-lg:max-w-[80%]">
                                <!-- :min-date="new Date()" -->
                                <VueDatePicker
                                    position="left"
                                    auto-apply
                                    year-first
                                    placeholder="2020-11-08"
                                    :format-locale="zhTW"
                                    :start-date="new Date()"
                                    :enable-time-picker="false"
                                    v-model="submissionData.startDate"
                                    class="date-picker"
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
                            <div class="max-w-[216px] relative max-lg:max-w-[80%]">
                                <!-- :min-date="new Date()" -->
                                <VueDatePicker
                                    position="left"
                                    auto-apply
                                    year-first
                                    placeholder="2020-11-08"
                                    :format-locale="zhTW"
                                    :start-date="new Date()"
                                    :enable-time-picker="false"
                                    v-model="submissionData.endDate"
                                    class="date-picker"
                                />
                            </div>
                        </UFormGroup>

                        <UFormGroup
                            label="封面照片"
                            help="請上傳檔案小於 500kb 的圖片，尺寸必須為 1252 x 800 像素 ，至多5張。"
                            required
                            name="imgDataQuantity"
                            class="mb-3"
                        >
                            <div class="h-0 overflow-hidden opacity-0">
                                <UInput type="number" v-model="submissionData.imgDataQuantity" />
                            </div>
                            <ModalDropImg ref="imgData" />
                        </UFormGroup>

                        <UiButton
                            v-if="pageStatus !== 'reviewed'"
                            class="max-w-[90px] absolute !text-sm bottom-[calc(-24px-12px-20px)] left-0"
                            @click="doSubmit"
                            >資料儲存</UiButton
                        >
                    </div>
                </UForm>
            </div>
        </section>
    </div>
</template>

<script setup>
import { basicProjectDataSchema } from "~/validation";
import { zhTW } from "date-fns/locale";

import VueDatePicker from "@vuepic/vue-datepicker";

//
const pageStatus = ref("edit"); // new, edit, reviewed
const pageTime = ref("2023/10/27 11:16");

const screenWidth = ref(800);
onMounted(() => {
    screenWidth.value = window.innerWidth;
});

//
const submissionData = reactive({
    projectName: "",
    projectDes: "",
    projectWebsiteName: "long-jing-you",
    projectTargetValue: "",
    projectCate: "",
    startDate: "",
    endDate: "",
    imgData: [],
    imgDataQuantity: 0,
});
const imgData = ref(); //imgData.value.files
const imgDataQuantity = computed(() => imgData.value?.files?.length || 0);

watch(imgDataQuantity, (val) => {
    //console.log(val);
    submissionData.imgDataQuantity = val;
    submissionData.imgData = imgData.value.files;
});

const cateOpts = reactive([
    {
        id: 1,
        name: "3C科技",
    },
    {
        id: 2,
        name: "家電",
    },
    {
        id: 3,
        name: "生活用品",
    },
    {
        id: 4,
        name: "食品",
    },
    {
        id: 5,
        name: "服飾",
    },
    {
        id: 6,
        name: "美妝",
    },
    {
        id: 7,
        name: "運動",
    },
    {
        id: 8,
        name: "寵物",
    },
    {
        id: 9,
        name: "書籍",
    },
    {
        id: 10,
        name: "文具",
    },
    {
        id: 11,
        name: "玩具",
    },
    {
        id: 12,
        name: "手作",
    },
    {
        id: 13,
        name: "藝術",
    },
    {
        id: 14,
        name: "音樂",
    },
    {
        id: 15,
        name: "影視",
    },
    {
        id: 16,
        name: "遊戲",
    },
    {
        id: 17,
        name: "教育",
    },
    {
        id: 18,
        name: "旅遊",
    },
    {
        id: 19,
        name: "醫療",
    },
    {
        id: 20,
        name: "其他",
    },
]);

//
function doSubmit() {
    alert("doSubmit");
}
</script>
<style>
.date-picker .dp__input {
    height: 40px;
    border-color: rgba(221, 222, 224, 0.7);
}
</style>
