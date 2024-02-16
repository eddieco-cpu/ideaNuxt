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
        </template>
    </SubmissionLayout>

    <!--  -->
    <SubmissionLayout>
        <template #des>
            <SubmissionDes :title="descriptionDatas[2].title" :context="descriptionDatas[2].context"></SubmissionDes>
        </template>
        <template #form> 表單 </template>
    </SubmissionLayout>

    <!--  -->
    <SubmissionLayout>
        <template #des>
            <SubmissionDes :title="descriptionDatas[3].title" :context="descriptionDatas[3].context"></SubmissionDes>
        </template>
        <template #form> 表單 </template>
    </SubmissionLayout>
</template>
<script setup>
import { descriptionDatas } from "@/assets/others/submission/data";
//import { descriptionDatas } from "@/data/submission/data";

const userName = ref("");
</script>
