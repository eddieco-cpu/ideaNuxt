<template>
    <div>
        <section class="mb-7">
            <UiTitle class="!mb-2">公司基本資料</UiTitle>
            <p class="text-sm font-normal mb-3 text-Neutral-600-Dark-Primary">
                此區資訊將依主管機關規定揭露。所提供之法人資料請與 商工登記資料 及 稅籍登記資料 一致。
            </p>

            <section class="bg-white p-6 rounded-lg grid grid-cols-2 grid-rows-[auto_auto] gap-3">
                <!--  -->
                <UFormGroup label="公司法人登記名稱" class="mb-6">
                    <UInput disabled placeholder="虛擬國際網站事業有限公司" v-model="proposer.companyName" />
                </UFormGroup>

                <!--  -->
                <UFormGroup label="統一編號" class="mb-6">
                    <UInput disabled placeholder="349670360" v-model="proposer.companyTaxIdNumber" />
                </UFormGroup>

                <!--  -->
                <UFormGroup label="法人資本額" help="可填「在中華民國境內營運資金」，若皆不適用請填 0">
                    <UInput
                        class=""
                        disabled
                        type="number"
                        inputClass="!pl-[55px]"
                        v-model="proposer.companyCapital"
                        placeholder="200,000,000"
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

                <!--  -->
                <UFormGroup label="法人成立日期">
                    <div class="max-w-[216px] relative">
                        <!-- :min-date="new Date()" -->
                        <VueDatePicker
                            position="left"
                            auto-apply
                            year-first
                            placeholder="2020-11-08"
                            :format-locale="zhTW"
                            :start-date="new Date()"
                            :enable-time-picker="false"
                            v-model="proposer.companyStartDate"
                            class="date-picker"
                            disabled
                        />
                    </div>
                </UFormGroup>
            </section>
        </section>

        <section class="mb-7">
            <UiTitle class="!mb-2">負責人基本資料</UiTitle>

            <section class="bg-white p-6 rounded-lg grid grid-cols-4 grid-rows-[auto_auto] gap-3">
                <!--  -->
                <UFormGroup label="負責人中文名" class="mb-6 col-span-2">
                    <UInput disabled placeholder="王大明" v-model="proposer.name" />
                </UFormGroup>

                <!--  -->
                <UFormGroup label="負責人英文名" class="mb-6 col-span-1">
                    <UInput disabled placeholder="CING YI" v-model="proposer.englishFirstName" />
                </UFormGroup>

                <!--  -->
                <UFormGroup
                    label="負責人英文名"
                    class="mb-6 col-span-1"
                    disabled
                    :ui="{
                        label: {
                            base: 'opacity-0',
                        },
                    }"
                >
                    <UInput disabled placeholder="LIU" v-model="proposer.englishLastName" />
                </UFormGroup>

                <!--  -->
                <UFormGroup label="負責人手機號碼" class="mb-6 col-span-2">
                    <UInput disabled placeholder="0909090909" v-model="proposer.phone" />
                </UFormGroup>

                <!--  -->
                <UFormGroup label="負責人手機號碼" class="mb-6 col-span-2">
                    <div class="max-w-[216px] relative">
                        <!-- :min-date="new Date()" -->
                        <VueDatePicker
                            position="left"
                            auto-apply
                            year-first
                            placeholder="2020-11-08"
                            :format-locale="zhTW"
                            :start-date="new Date()"
                            :enable-time-picker="false"
                            v-model="proposer.birthDate"
                            class="date-picker"
                            disabled
                        />
                    </div>
                </UFormGroup>
            </section>
        </section>

        <section class="mb-7">
            <UiTitle class="!mb-2">負責人身份文件</UiTitle>
            <p class="text-sm font-normal mb-3 text-Neutral-600-Dark-Primary">
                此區資訊為開設金流合作商店交易帳戶所必需。 請確認所填資訊與證件完全相符，若無法完成身份驗證，金流申請將會被拒絕。
            </p>

            <section class="bg-white p-6 rounded-lg grid grid-cols-6 grid-rows-[auto_auto] gap-3">
                <!--  -->
                <UFormGroup label="負責人身份證號碼" class="mb-6 col-span-2">
                    <UInput placeholder="A222256734" v-model="proposer.identityCardNumber" />
                </UFormGroup>

                <!--  -->
                <UFormGroup label="負責人身份證發放日期" class="mb-6 col-span-2">
                    <UInput placeholder="2020-11-08" v-model="proposer.identityCardPublishDate" />
                </UFormGroup>

                <!--  -->
                <UFormGroup label="負責人身份證發放地點" class="mb-6 col-span-2">
                    <UInput placeholder="新竹市" v-model="proposer.identityCardPublishAddress" />
                </UFormGroup>

                <!--  -->
                <UFormGroup label="發放狀態" class="mb-6 col-span-3">
                    <UInput placeholder="新竹市" v-model="proposer.identityCardPublishAddress" />
                </UFormGroup>

                <!--  -->
                <UFormGroup label="證件是否含照片" class="mb-6 col-span-3">
                    <UInput placeholder="新竹市" v-model="proposer.identityCardPublishAddress" />
                </UFormGroup>
            </section>
        </section>

        <section class="mb-7">
            <UiTitle class="!mb-2">聯絡資訊</UiTitle>

            <section class="bg-white p-6 rounded-lg">
                <!--  -->
                <UFormGroup
                    label="聯絡電話號碼"
                    help="僅接受數字，須為台灣本地號碼。 (市話含區碼 0212345678 或手機 0955555555)。"
                    class="mb-6 col-span-6"
                >
                    <UInput placeholder="0909090909" v-model="proposer.contactPhone" />
                </UFormGroup>

                <!--  -->
                <p class="mb-[6px] text-sm font-normal">聯絡地址</p>
                <section class="grid grid-cols-6 grid-rows-[auto_auto] gap-3 mb-9">
                    <!--  -->
                    <UFormGroup class="col-span-2">
                        <UInput placeholder="台北市" v-model="proposer.contactArea" />
                    </UFormGroup>

                    <UFormGroup class="col-span-2">
                        <UInput placeholder="新店區" v-model="proposer.contactCity" />
                    </UFormGroup>

                    <UFormGroup class="col-span-2">
                        <UInput placeholder="231" v-model="proposer.contactPostalCode" />
                    </UFormGroup>

                    <UFormGroup class="col-span-6">
                        <UInput placeholder="橋新街4巷3號3樓" v-model="proposer.contactAddress" />
                    </UFormGroup>
                </section>

                <!--  -->
                <UFormGroup label="法人登記地址" help="個人申請時，請填戶籍地址。法人所提交之地址需與工商登記一致。">
                    <UInput placeholder="橋新街4巷3號3樓" v-model="proposer.contactLogisticsAddress" />
                </UFormGroup>
            </section>
        </section>
    </div>
</template>
<script setup>
import { zhTW } from "date-fns/locale";
import VueDatePicker from "@vuepic/vue-datepicker";

const proposer = reactive({
    //
    name: "",
    englishFirstName: "",
    englishLastName: "",
    phone: "",
    birthDate: "",

    //
    identityCardNumber: "",
    identityCardPublishDate: "",
    identityCardPublishAddress: "",
    identityCardStatus: "",
    identityCardIsWithPhoto: "",

    //
    companyName: "",
    companyCapital: "",
    companyTaxIdNumber: "",
    companyStartDate: "",

    //
    contactPhone: "",
    contactArea: "",
    contactCity: "",
    contactPostalCode: "",
    contactAddress: "",
    contactLogisticsAddress: "",
});
</script>
<style>
.date-picker .dp__input {
    height: 40px;
    border-color: rgba(221, 222, 224, 0.7);
}
</style>
