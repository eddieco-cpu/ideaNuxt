<template>
    <div>
        <section class="mb-7">
            <div class="text-right mb-[-28px] mt-[-12px] max-md:mt-0">
                <UiButton class="max-w-[90px]" @click="doSubmit">審核</UiButton>
            </div>
            <UiTitle class="!mb-2">公司基本資料</UiTitle>
            <p class="text-sm font-normal mb-3 text-Neutral-600-Dark-Primary">
                此區資訊將依主管機關規定揭露。所提供之法人資料請與 商工登記資料 及 稅籍登記資料 一致。
            </p>

            <section
                class="bg-white p-6 rounded-lg grid grid-cols-2 grid-rows-[auto_auto] gap-3 max-md:p-3 max-lg:grid-cols-1 max-lg:grid-rows-[auto_auto_auto_auto]"
            >
                <!--  -->
                <UFormGroup label="公司法人登記名稱" class="mb-6">
                    <UInput disabled placeholder="虛擬國際網站事業有限公司" v-model="proposer.companyName" />
                </UFormGroup>

                <!--  -->
                <UFormGroup label="統一編號" class="mb-6">
                    <UInput disabled placeholder="349670360" v-model="proposer.companyTaxIdNumber" />
                </UFormGroup>

                <!--  -->
                <UFormGroup
                    label="法人資本額"
                    help="可填「在中華民國境內營運資金」，若皆不適用請填 0"
                    class="max-lg:mb-3"
                >
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
                <UFormGroup label="法人成立日期" class="max-md:mb-3">
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

            <section
                class="bg-white p-6 rounded-lg grid grid-cols-4 grid-rows-[auto_auto] gap-3 max-md:p-3 max-lg:grid-cols-2 max-lg:grid-rows-[auto_auto_auto_auto]"
            >
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
                <UFormGroup label="負責人出生日期" class="mb-6 col-span-2">
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

            <section
                class="bg-white p-6 rounded-lg grid grid-cols-6 grid-rows-[auto_auto] gap-3 max-md:p-3 max-lg:grid-cols-1 max-lg:grid-rows-[auto_auto_auto_auto]"
            >
                <!--  -->
                <UFormGroup label="負責人身份證號碼" class="mb-6 col-span-2">
                    <UInput disabled placeholder="A222256734" v-model="proposer.identityCardNumber" />
                </UFormGroup>

                <!--  -->
                <UFormGroup label="負責人身份證發放日期" class="mb-6 col-span-2">
                    <div class="relative">
                        <!-- :min-date="new Date()" -->
                        <VueDatePicker
                            position="left"
                            auto-apply
                            year-first
                            placeholder="2020-11-08"
                            :format-locale="zhTW"
                            :start-date="new Date()"
                            :enable-time-picker="false"
                            v-model="proposer.identityCardPublishDate"
                            class="date-picker"
                            disabled
                        />
                    </div>
                </UFormGroup>

                <!--  -->
                <UFormGroup label="負責人身份證發放地點" class="mb-6 col-span-2">
                    <div class="flex justify-start items-center">
                        <USelectMenu
                            class="w-full lg:h-10"
                            size="lg"
                            v-model="proposer.identityCardPublishAddress"
                            :options="areas"
                            placeholder="新竹市"
                            value-attribute="id"
                            option-attribute="name"
                            disabled
                            :class="true ? ' bg-gray-200 opacity-100 rounded-md' : 'bg-white'"
                        />
                    </div>
                </UFormGroup>

                <!--  -->
                <UFormGroup label="發放狀態" class="mb-6 col-span-3">
                    <URadioGroup
                        v-model="proposer.identityCardStatus"
                        :options="identityCardStatusOpts"
                        :ui="{
                            fieldset: 'flex justify-between items-center',
                        }"
                        class="flex-radio-group my-[14px]"
                    >
                        <template #label="{ option }">
                            <span class="">
                                {{ option.label }}
                            </span>
                        </template>
                    </URadioGroup>
                </UFormGroup>

                <!--  -->
                <UFormGroup label="證件是否含照片" class="mb-6 col-span-3">
                    <URadioGroup
                        v-model="proposer.identityCardIsWithPhoto"
                        :options="[
                            { label: '有', value: true },
                            { label: '無', value: false },
                        ]"
                        :ui="{
                            fieldset: 'flex justify-between items-center',
                        }"
                        class="flex-radio-group my-[14px]"
                    >
                        <template #label="{ option }">
                            <span class="">
                                {{ option.label }}
                            </span>
                        </template>
                    </URadioGroup>
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
                    <UInput disabled placeholder="0909090909" v-model="proposer.contactPhone" />
                </UFormGroup>

                <!--  -->
                <p class="mb-[6px] text-sm font-normal">聯絡地址</p>
                <section
                    class="grid grid-cols-6 grid-rows-[auto_auto] gap-3 mb-9 max-md:grid-cols-1 max-md:grid-rows-[auto_auto_auto_auto]"
                >
                    <!--  -->
                    <UFormGroup class="md:col-span-2">
                        <div class="flex justify-start items-center">
                            <USelectMenu
                                class="w-full lg:h-10"
                                size="lg"
                                v-model="proposer.contactArea"
                                :options="areas"
                                placeholder="台北市"
                                value-attribute="id"
                                option-attribute="name"
                                disabled
                                :class="true ? ' bg-gray-200 opacity-100 rounded-md' : 'bg-white'"
                            />
                        </div>
                    </UFormGroup>

                    <UFormGroup class="md:col-span-2">
                        <div class="flex justify-start items-center">
                            <USelectMenu
                                class="w-full lg:h-10"
                                size="lg"
                                v-model="proposer.contactCity"
                                :options="cities"
                                placeholder="新店區"
                                value-attribute="id"
                                option-attribute="name"
                                disabled
                                :class="true ? ' bg-gray-200 opacity-100 rounded-md' : 'bg-white'"
                            />
                        </div>
                    </UFormGroup>

                    <UFormGroup class="md:col-span-2">
                        <UInput disabled placeholder="231" v-model="proposer.contactPostalCode" />
                    </UFormGroup>

                    <UFormGroup class="md:col-span-6">
                        <UInput disabled placeholder="橋新街4巷3號3樓" v-model="proposer.contactAddress" />
                    </UFormGroup>
                </section>

                <!--  -->
                <UFormGroup label="法人登記地址" help="個人申請時，請填戶籍地址。法人所提交之地址需與工商登記一致。">
                    <UInput disabled placeholder="橋新街4巷3號3樓" v-model="proposer.contactLogisticsAddress" />
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

const areas = reactive([
    { id: 1, name: "新北市" },
    { id: 2, name: "台北市" },
    { id: 3, name: "桃園市" },
    { id: 4, name: "台中市" },
    { id: 5, name: "台南市" },
    { id: 6, name: "高雄市" },
    { id: 7, name: "基隆市" },
    { id: 8, name: "新竹市" },
    { id: 9, name: "嘉義市" },
    { id: 10, name: "新竹縣" },
    { id: 11, name: "苗栗縣" },
    { id: 12, name: "彰化縣" },
    { id: 13, name: "南投縣" },
    { id: 14, name: "雲林縣" },
    { id: 15, name: "嘉義縣" },
    { id: 16, name: "屏東縣" },
    { id: 17, name: "宜蘭縣" },
    { id: 18, name: "花蓮縣" },
    { id: 19, name: "台東縣" },
    { id: 20, name: "澎湖縣" },
    { id: 21, name: "金門縣" },
    { id: 22, name: "連江縣" },
]);

const cities = reactive([
    { id: 1, name: "新店區" },
    { id: 2, name: "中和區" },
    { id: 3, name: "永和區" },
    { id: 4, name: "新莊區" },
    { id: 5, name: "新莊區" },
    { id: 6, name: "新莊區" },
    { id: 7, name: "新莊區" },
    { id: 8, name: "新莊區" },
    { id: 9, name: "新莊區" },
    { id: 10, name: "新莊區" },
    { id: 11, name: "新莊區" },
    { id: 12, name: "新莊區" },
    { id: 13, name: "新莊區" },
    { id: 14, name: "新莊區" },
    { id: 15, name: "新莊區" },
    { id: 16, name: "新莊區" },
    { id: 17, name: "新莊區" },
    { id: 18, name: "新莊區" },
    { id: 19, name: "新莊區" },
    { id: 20, name: "新莊區" },
    { id: 21, name: "新莊區" },
    { id: 22, name: "新莊區" },
    { id: 23, name: "新莊區" },
    { id: 24, name: "新莊區" },
    { id: 25, name: "新莊區" },
    { id: 26, name: "新莊區" },
    { id: 27, name: "新莊區" },
    { id: 28, name: "新莊區" },
]);

const identityCardStatusOpts = reactive([
    { label: "初發", value: "initialIssuance" },
    { label: "補發", value: "reissuance" },
    { label: "換發", value: "replacement" },
]);

function doSubmit() {
    alert("doSubmit");
}
</script>
<style>
.date-picker .dp__input {
    height: 40px;
    border-color: rgba(221, 222, 224, 0.7);
}
.flex-radio-group > * {
    @apply flex justify-start items-center gap-x-4;
}
</style>
