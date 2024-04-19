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
                                    placeholder="請選擇分類"
                                    value-attribute="id"
                                    option-attribute="name"
                                />
                            </div>
                        </UFormGroup>
                        <ClientOnly>
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
                        </ClientOnly>

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
                            <ModalDropImg ref="imgData" :files="imgFilesFetched" />
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
import { zhTW }                   from "date-fns/locale";
import { useAuthStore }           from "@/stores/auth";
import { useToast }               from "vue-toastification";
import VueDatePicker              from "@vuepic/vue-datepicker";

const toast       = useToast();
const authStore   = useAuthStore();
const token       = authStore.token;
const route       = useRoute();
const dashboardId = route.params.dashboardId;

const cateOpts = ref([]);

getCategory()

async function getCategory() {
    const data = await GET(`/frontend/getCategory?type=fundraise`,1);
    
    if (!!data) {
        cateOpts.value = data.data;
    }
}

const pageStatus  = ref("edit"); // new, edit, reviewed
const pageTime    = ref("2023/10/27 11:16");
const screenWidth = ref(800);

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

getData();

const imgFilesFetched = reactive([]);

async function getData() {
    const data = await POST("/getOneProjectNew", {'project_id' : dashboardId }, token);

    Object.assign(submissionData, {
            projectName: data.data.name || "",
            projectDes: data.data.overview || "",
            projectWebsiteName: data.data.url_key || "",
            projectTargetValue: data.data.goal_price || "",
            projectCate: data.data.category_id || "",
            startDate: data.data.start_time || "",
            endDate: data.data.end_time || "",
            imgData: data.data.img_data || "",
    });
    data.data.img_data.forEach(imgPath => {
        let imgFile = {
            preview: imgPath,
        };
        imgFilesFetched.push(imgFile);
    });
}

onMounted(() => {
    screenWidth.value = window.innerWidth;
});

const imgData = ref([]); 
const imgDataQuantity = computed(() => imgData.value?.files?.length || 0);

watch(imgDataQuantity, (val) => {
    submissionData.imgDataQuantity = val;
    submissionData.imgData = imgData.value.files;
});

async function doSubmit() {

    const payload = {...submissionData,'project_id': dashboardId};
    const data    = await POST("/updateProject", payload, token);

    if(!!data) {
        toast.success(data.message)
    }
}
</script>

<style>
.date-picker .dp__input {
    height: 40px;
    border-color: rgba(221, 222, 224, 0.7);
}
</style>
