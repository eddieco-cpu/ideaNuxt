<template>
    <section>
        <div class="pt-14 pb-1 bg-Primary-400-Hover mb-20">
            <h1 class="text-center font-bold text-white text-4xl">提案必須資料</h1>
        </div>
    </section>

    <!--  -->
    <SubmissionLayout>
        <template #des>
            <SubmissionDes :title="descriptionDatas[0].title" :context="descriptionDatas[0].context"></SubmissionDes>
        </template>
        <template #form>
            <UiInputDev
                name="真實姓名/公司名稱"
                id="userName"
                :isRequired="true"
                notes="募資專案發起代表人，必須使用真實姓名或公司名義申請募資專案，為求雙方合作權益，本平台暫不接受匿名或使用他人名義的提案。"
                class="mb-3"
            >
                <UInput v-model="userName" class="max-w-[400px]" :id="'userName'" />
            </UiInputDev>
            <UiInputDev
                name="電子信箱"
                id="mail"
                :isRequired="true"
                notes="後續聯繫與合作事宜，將以此信箱通知，請再次確認信箱是否正確且能順利收信，否則將無法聯繫到您。"
                class="mb-3"
            >
                <UInput class="max-w-[400px]" :id="'mail'" />
            </UiInputDev>
            <UiInputDev
                name="聯絡電話"
                id="phone"
                :isRequired="true"
                :isDisabled="true"
                notes="手機已驗證成功。若需修改手機，請聯繫客服中心。"
            >
                <UInput class="max-w-[276px]" :id="'phone'" disabled />
            </UiInputDev>
        </template>
    </SubmissionLayout>

    <!--  -->
    <SubmissionLayout>
        <template #des>
            <SubmissionDes :title="descriptionDatas[1].title" :context="descriptionDatas[1].context"></SubmissionDes>
        </template>
        <template #form>
            <UiInputDev name="專案名稱" id="projectName" :isRequired="true" class="mb-3">
                <div>
                    <UTextarea
                        :id="'projectName'"
                        placeholder="本次募資專案之名稱/品名，文字數量最多以 40字為限。"
                        :rows="1"
                        resize
                        class="w-full"
                    />
                    <p class="text-sm text-right text-Neutral-500-Primary"><span>0</span> / <span>40</span></p>
                </div>
            </UiInputDev>

            <UiInputDev name="專案簡介" id="projectDes" :isRequired="true" class="mb-3">
                <div>
                    <UTextarea
                        :id="'projectDes'"
                        placeholder=" 請您簡短的以  90字，快速的介紹本次計畫，將顯示於募資頁商品右側。"
                        :rows="2"
                        resize
                        class="w-full"
                    />
                    <p class="text-sm text-right text-Neutral-500-Primary"><span>0</span> / <span>90</span></p>
                </div>
            </UiInputDev>

            <UiInputDev
                name="專案達成目標"
                notes="根據您本次的專案內容，規劃及估算本次預計達成目標。"
                id="doller"
                :isRequired="true"
                class="mb-3"
            >
                <UInput class="max-w-[400px]" :id="'doller'" />
            </UiInputDev>

            <UiInputDev name="專案分類" notes="請選擇適合您本次計畫的商品分類/屬性。" :isRequired="false" class="mb-3">
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
            </UiInputDev>

            <UiInputDev
                name="預計開始時間"
                notes="您預計開始本次專案的時間，本站將會為你安排審核順序。請至少需要約七個工作天以上審核你的提案。"
                :isRequired="true"
                class="mb-3"
            >
                <div class="w-64">
                    <VueDatePicker v-model="startDate" />
                </div>
            </UiInputDev>

            <UiInputDev
                name="預計結束時間"
                notes="根據經驗，建議募資專案應在45-60天內執行完畢，成效最佳。"
                :isRequired="true"
                class="mb-3"
            >
                <div class="w-64">
                    <VueDatePicker v-model="endDate" />
                </div>
            </UiInputDev>

            <UiInputDev
                name="封面照片"
                notes="請上傳檔案小於 500kb 的圖片，尺寸必須為 1252 x 800 像素 ，至多5張，封面圖片可在專案上線前再另行編輯修改。"
                :isRequired="true"
                class="mb-3"
            >
                <UInput class="max-w-[400px]" />
            </UiInputDev>

            <UiInputDev name="專案說明審核" id="n" :isRequired="true" class="mb-3">
                <div>
                    <UTextarea
                        :id="'n'"
                        placeholder=" 請您提供關於本次專案的故事與內容介紹，例如為什麼大家應該支持你的計畫，提案者必須提供足夠的資訊才有辦法審核計畫，如無法評估計畫的真實性、可行性，計畫就會無法上架，請特別注意唷！"
                        :rows="3"
                        resize
                        class="w-full"
                    />
                    <p class="text-sm text-right text-Neutral-500-Primary"><span>0</span> / <span>300</span></p>
                </div>
            </UiInputDev>
        </template>
    </SubmissionLayout>

    <!--  -->
    <SubmissionLayout>
        <template #des>
            <SubmissionDes :title="descriptionDatas[2].title" :context="descriptionDatas[2].context"></SubmissionDes>
        </template>
        <template #form>
            <UiInputDev name="相關網頁" notes="" :isRequired="true">
                <UInput class="max-w-[400px]" />
            </UiInputDev>
        </template>
    </SubmissionLayout>

    <!--  -->
    <SubmissionLayout>
        <template #des>
            <SubmissionDes :title="descriptionDatas[3].title" :context="descriptionDatas[3].context"></SubmissionDes>
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
                <UCheckbox v-model="agree.contract" name="contract" label="同意提案契約書" class="mb-3" />
                <UCheckbox
                    v-model="agree.understand"
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
                class="opacity-0"
            ></SubmissionDes>
        </template>
        <template #form>
            <div>
                <UiButton class="max-w-[90px] mr-2" @click="doSubmit">送出提案</UiButton>
                <UiButton class="max-w-[62px]" type="secondary">取消</UiButton>
            </div>
        </template>
    </SubmissionLayout>
</template>
<script setup>
import { descriptionDatas } from "@/assets/others/submission/data";
//import { descriptionDatas } from "@/data/submission/data";

import VueDatePicker from "@vuepic/vue-datepicker";
import "/public/css/vue-datepicker.css";

const userName = ref("");

//
const dropdownValue = ref("");
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

const open = ref(false);
defineShortcuts({
    o: () => (open.value = !open.value),
});

//
const startDate = ref("");
const endDate = ref("");

//
const agree = reactive({
    contract: false,
    understand: false,
});

//
function doSubmit() {
    alert("doSubmit");
}
</script>
<style scoped>
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
