<template>
    <div>
        <section
            class="banner relative z-[-1] overflow-hidden mb-[-5%] 2xl:aspect-[144/23] max-2xl:aspect-[144/26] max-xl:mb-0 max-lg:aspect-[144/30] max-md:aspect-[375/127]"
        >
            <h1
                class="block text-center font-bold text-white text-4xl h-10 mx-auto my-auto absolute z-[2] top-0 left-0 right-0 bottom-0 translate-y-[-185%] max-2xl:translate-y-[-175%] max-xl:translate-y-[-80%] max-md:scale-[0.55]"
            >
                提案必須資料
            </h1>
            <img
                class="block w-full h-full object-cover absolute z-[1] bottom-0 left-0 max-md:hidden"
                src="~assets/images/proposal/banner_w.svg"
            />
            <img
                class="block w-full h-full object-cover absolute z-[1] bottom-0 left-0 md:hidden"
                src="~assets/images/proposal/banner_m.svg"
            />
        </section>

        <UForm :schema="submissionSchema" :state="submissionData" @submit="doSubmit">
            <!--  -->
            <SubmissionLayout>
                <template #des>
                    <SubmissionDes
                        :title="descriptionDatas[0].title"
                        :context="descriptionDatas[0].context"
                    ></SubmissionDes>
                </template>
                <template #form>
                    <UFormGroup
                        label="真實姓名/公司名稱"
                        name="name"
                        required
                        help="募資專案發起代表人，必須使用真實姓名或公司名義申請募資專案，為求雙方合作權益，本平台暫不接受匿名或使用他人名義的提案。"
                        class="mb-3"
                    >
                        <UInput v-model="submissionData.name" class="max-w-[400px]" />
                    </UFormGroup>

                    <UFormGroup
                        label="電子信箱"
                        name="email"
                        required
                        help="後續聯繫與合作事宜，將以此信箱通知，請再次確認信箱是否正確且能順利收信，否則將無法聯繫到您。"
                        class="mb-3"
                    >
                        <UInput class="max-w-[400px]" v-model="submissionData.email" />
                    </UFormGroup>

                    <UFormGroup
                        label="聯絡電話"
                        name="phone"
                        required
                        disabled
                        help="手機已驗證成功。若需修改手機，請聯繫客服中心。"
                        class="mb-3"
                    >
                        <UInput class="max-w-[276px]" disabled v-model="submissionData.phone" readonly />
                    </UFormGroup>
                </template>
            </SubmissionLayout>

            <!--  -->
            <SubmissionLayout>
                <template #des>
                    <SubmissionDes
                        :title="descriptionDatas[1].title"
                        :context="descriptionDatas[1].context"
                    ></SubmissionDes>
                </template>
                <template #form>
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
                        <div class="flex justify-start items-center w-[210px]">
                            <USelectMenu
                                class="w-full h-11 lg:h-40"
                                size="lg"
                                v-model="submissionData.category"
                                :options="categoryOpts"
                                placeholder="請選擇"
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

                    <UFormGroup label="專案說明審核" required class="mb-8" name="projectDetailsDes">
                        <div class="relative">
                            <UTextarea
                                placeholder=" 請您提供關於本次專案的故事與內容介紹，例如為什麼大家應該支持你的計畫，提案者必須提供足夠的資訊才有辦法審核計畫，如無法評估計畫的真實性、可行性，計畫就會無法上架，請特別注意唷！"
                                :rows="screenWidth <= 768 ? 4 : 3"
                                resize
                                class="w-full"
                                size="lg"
                                v-model="submissionData.projectDetailsDes"
                                @input="(e) => (e.target.value = e.target.value.slice(0, 300))"
                            />
                            <p class="text-sm text-right text-Neutral-500-Primary absolute bottom-[-20px] right-0">
                                <span>{{ submissionData.projectDetailsDes.length }}</span> / <span>300</span>
                            </p>
                        </div>
                    </UFormGroup>
                </template>
            </SubmissionLayout>

            <!--  -->
            <SubmissionLayout>
                <template #des>
                    <SubmissionDes
                        :title="descriptionDatas[2].title"
                        :context="descriptionDatas[2].context"
                    ></SubmissionDes>
                </template>
                <template #form>
                    <!-- plus-circle / minus-circle -->
                    <UFormGroup label="相關網頁" required class="mb-3">
                        <UInput placeholder="https://web.com" v-model="submissionData.website.related" />
                    </UFormGroup>

                    <div class="flex justify-start content-center items-center flex-wrap gap-x-2">
                        <!-- ig -->
                        <UFormGroup
                            @click="!igSwitcher ? (igSwitcher = !igSwitcher) : ''"
                            class="mb-3 relative"
                            :class="
                                igSwitcher
                                    ? 'w-full flex-shrink-0 order-1'
                                    : ' !inline-block px-4 py-2 pl-8 ring-1 ring-Primary-100 rounded-lg cursor-pointer order-10'
                            "
                            :ui="igSwitcher ? {} : { label: { base: `text-Primary-500-Primary` } }"
                        >
                            <template #label>
                                <p
                                    @click="!igSwitcher ? (igSwitcher = !igSwitcher) : ''"
                                    :class="igSwitcher ? ' pb-1' : ''"
                                >
                                    <UIcon
                                        name="i-heroicons-plus-circle"
                                        class="block w-4 h-4 text-base text-Primary-500-Primary absolute m-auto top-0 bottom-0 left-3"
                                        :class="igSwitcher ? 'hidden' : ' cursor-pointer'"
                                    />
                                    <span :class="igSwitcher ? '' : 'cursor-pointer'">instagram</span>
                                    <span :class="igSwitcher ? '' : ' hidden'">{{ " " }}網址</span>
                                </p>
                            </template>
                            <UInput
                                placeholder="https://instagram.com/account-name"
                                :class="igSwitcher ? '' : 'hidden'"
                                v-model="submissionData.website.ig"
                            />
                            <UIcon
                                name="i-heroicons-minus-circle"
                                @click="
                                    (e) => {
                                        e.stopPropagation();
                                        igSwitcher = false;
                                    }
                                "
                                v-if="igSwitcher"
                                class="block w-4 h-4 text-base text-Neutral-500-Primary absolute z-[2] bottom-3 right-3 cursor-pointer hover:text-Neutral-600-Dark-Primary active:text-Primary-400-Hover"
                            />
                        </UFormGroup>

                        <!-- fb -->
                        <UFormGroup
                            @click="!fbSwitcher ? (fbSwitcher = !fbSwitcher) : ''"
                            class="mb-3 relative"
                            :class="
                                fbSwitcher
                                    ? 'w-full flex-shrink-0 order-2'
                                    : ' !inline-block px-4 py-2 pl-8 ring-1 ring-Primary-100 rounded-lg cursor-pointer order-11'
                            "
                            :ui="fbSwitcher ? {} : { label: { base: `text-Primary-500-Primary` } }"
                        >
                            <template #label>
                                <p
                                    @click="!fbSwitcher ? (fbSwitcher = !fbSwitcher) : ''"
                                    :class="fbSwitcher ? ' pb-1' : ''"
                                >
                                    <UIcon
                                        name="i-heroicons-plus-circle"
                                        class="block w-4 h-4 text-base text-Primary-500-Primary absolute m-auto top-0 bottom-0 left-3"
                                        :class="fbSwitcher ? 'hidden' : ' cursor-pointer'"
                                    />
                                    <span :class="fbSwitcher ? '' : 'cursor-pointer'">Facebook</span>
                                    <span :class="fbSwitcher ? '' : ' hidden'">{{ " " }}網址</span>
                                </p>
                            </template>
                            <UInput
                                placeholder="https://facebook.com/account-name"
                                :class="fbSwitcher ? '' : 'hidden'"
                                v-model="submissionData.website.fb"
                            />
                            <UIcon
                                name="i-heroicons-minus-circle"
                                @click="
                                    (e) => {
                                        e.stopPropagation();
                                        fbSwitcher = false;
                                    }
                                "
                                v-if="fbSwitcher"
                                class="block w-4 h-4 text-base text-Neutral-500-Primary absolute z-[2] bottom-3 right-3 cursor-pointer hover:text-Neutral-600-Dark-Primary active:text-Primary-400-Hover"
                            />
                        </UFormGroup>

                        <!-- yt -->
                        <UFormGroup
                            @click="!ytSwitcher ? (ytSwitcher = !ytSwitcher) : ''"
                            class="mb-3 relative"
                            :class="
                                ytSwitcher
                                    ? 'w-full flex-shrink-0 order-3'
                                    : ' !inline-block px-4 py-2 pl-8 ring-1 ring-Primary-100 rounded-lg cursor-pointer order-12'
                            "
                            :ui="ytSwitcher ? {} : { label: { base: `text-Primary-500-Primary` } }"
                        >
                            <template #label>
                                <p
                                    @click="!ytSwitcher ? (ytSwitcher = !ytSwitcher) : ''"
                                    :class="ytSwitcher ? ' pb-1' : ''"
                                >
                                    <UIcon
                                        name="i-heroicons-plus-circle"
                                        class="block w-4 h-4 text-base text-Primary-500-Primary absolute m-auto top-0 bottom-0 left-3"
                                        :class="ytSwitcher ? 'hidden' : ' cursor-pointer'"
                                    />
                                    <span :class="ytSwitcher ? '' : 'cursor-pointer'">Youtube/Vimeo</span>
                                    <span :class="ytSwitcher ? '' : ' hidden'">{{ " " }}網址</span>
                                </p>
                            </template>
                            <UInput
                                placeholder="https://youtube.com/account-name"
                                :class="ytSwitcher ? '' : 'hidden'"
                                v-model="submissionData.website.yt"
                            />
                            <UIcon
                                name="i-heroicons-minus-circle"
                                @click="
                                    (e) => {
                                        e.stopPropagation();
                                        ytSwitcher = false;
                                    }
                                "
                                v-if="ytSwitcher"
                                class="block w-4 h-4 text-base text-Neutral-500-Primary absolute z-[2] bottom-3 right-3 cursor-pointer hover:text-Neutral-600-Dark-Primary active:text-Primary-400-Hover"
                            />
                        </UFormGroup>
                    </div>
                </template>
            </SubmissionLayout>

            <!--  -->
            <SubmissionLayout>
                <template #des>
                    <SubmissionDes
                        :title="descriptionDatas[3].title"
                        :context="descriptionDatas[3].context"
                    ></SubmissionDes>
                </template>
                <template #form>
                    <div
                        class="w-full h-44 rounded-md border-2 border-Neutral-400-Hover overflow-y-scroll scroll-container mb-4"
                    >
                        <article class="py-3 px-3 pb-4 pr-2">
                            <h4 class="text-xl mb-2 font-medium">嘖嘖網站預購式專案委託契約書</h4>
                            <p class="text-sm">
                                本契約書為您（提案人）在idea2gether網站上提出預購式專案時，您必須同意的提案契約書內容，當您提出專案內容時，idea2gether網站會請您詳閱並同意本契約書內容後才可送出。
                            </p>
                            <p class="text-sm">
                                提案人（以下稱乙方）基於刊登及宣傳專案之需求，向愛上大數據股份有限公司（以下稱甲方）租借
                                https://www.idea2gether.com
                                網域（以下簡稱「本網站」）之網頁空間，透過該網頁向第三人（以下簡稱「贊助者」）提出贊助之要約，就甲乙雙方有關該租借網域及其他宣傳相關之權利與義務，雙方同意並訂定契約條款如下述，乙方完成提案、或勾選「同意提案契約書」時，即視為已閱讀、暸解、並同意以下所有約定條款之所有內容。
                            </p>
                            <p class="text-sm">
                                提案人（以下稱乙方）基於刊登及宣傳專案之需求，向愛上大數據股份有限公司（以下稱甲方）租借
                                https://www.idea2gether.com
                                網域（以下簡稱「本網站」）之網頁空間，透過該網頁向第三人（以下簡稱「贊助者」）提出贊助之要約，就甲乙雙方有關該租借網域及其他宣傳相關之權利與義務，雙方同意並訂定契約條款如下述，乙方完成提案、或勾選「同意提案契約書」時，即視為已閱讀、暸解、並同意以下所有約定條款之所有內容。
                            </p>
                        </article>
                    </div>
                    <div class="mb-2">
                        <UCheckbox
                            v-model="submissionData.agree.contract"
                            name="contract"
                            label="同意提案契約書"
                            class="mb-3"
                        />
                        <UCheckbox
                            v-model="submissionData.agree.understand"
                            name="understand"
                            label="提案人 (及法定代理人) 均已充分了解且同意合作條款之權利義務"
                        />
                    </div>
                </template>
            </SubmissionLayout>

            <!--  -->
            <SubmissionLayout formClass="!bg-transparent !p-0">
                <template #des>
                    <SubmissionDes
                        :title="descriptionDatas[3].title"
                        :context="descriptionDatas[3].context"
                        class="opacity-0 max-md:h-0 max-md:overflow-hidden"
                    ></SubmissionDes>
                </template>
                <template #form>
                    <div class="max-md:text-center">
                        <UiButton class="max-w-[90px] mr-2" @click="doSubmit">送出提案</UiButton>
                        <UiButton class="max-w-[62px]" type="secondary">取消</UiButton>
                    </div>
                </template>
            </SubmissionLayout>
        </UForm>
    </div>
</template>
<script setup>
import { descriptionDatas } from "@/assets/others/submission/data";
//import { descriptionDatas } from "@/data/submission/data";

import { submissionSchema } from "~/validation";
import { zhTW } from "date-fns/locale";

import VueDatePicker from "@vuepic/vue-datepicker";
//import "/public/css/vue-datepicker.css";

//
const submissionData = reactive({
    name: "",
    email: "",
    phone: "0987654321",
    projectName: "",
    projectDes: "",
    projectDetailsDes: "",
    projectTargetValue: "",
    category: "",
    startDate: "",
    endDate: "",
    agree: {
        contract: false,
        understand: false,
    },
    website: {
        related: "",
        ig: "",
        fb: "",
        yt: "",
    },
});
const imgData = ref(); //imgData.value.files

//
const screenWidth = ref(800);
onMounted(() => {
    screenWidth.value = window.innerWidth;
});

//
const igSwitcher = ref(false);
const ytSwitcher = ref(false);
const fbSwitcher = ref(false);

//
const categoryOpts = [
    {
        id: "A",
        name: "A category",
    },
    {
        id: "B",
        name: "B category",
    },
    {
        id: "C",
        name: "C category",
    },
];

//
function doSubmit() {
    alert("doSubmit");
}
</script>
<style scoped>
/* .banner {
    background-image: linear-gradient(to bottom, #917fdd 50%, transparent 50%);
} */
.scroll-container::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}
.scroll-container::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
}
.scroll-container::-webkit-scrollbar-track {
    background-color: #f5f5f5;
}
</style>
