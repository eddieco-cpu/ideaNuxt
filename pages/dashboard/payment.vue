<template>
    <div>
        <!--  -->
        <UiTitle class="!mb-2">金流設定</UiTitle>
        <p class="text-sm font-normal text-Neutral-600-Dark-Primary mb-3">
            優秀的提案者您好，金流帳號設定，主要用來與第三方金流服務單位申請交易專戶，本網站的每一個募資專案，即代表一個獨立的金流專案系統，idea2gether提供您安心的金流服務與保障，並協助第三方金流暢通與良好的購物環境。
        </p>

        <section class="rounded-lg bg-white p-6 mb-7">
            <!--  -->
            <UFormGroup label="商品分類" help="請選擇適合您的商品分類/屬性。" class="mb-4">
                <UInput placeholder="3C科技" v-model="payment.shopCate" />
            </UFormGroup>

            <!--  -->
            <UFormGroup
                label="商店名稱"
                help="顯示於信用卡帳單中，一專案一商案論，盡可能與專案名稱相同，便於核對專案，字數限20字，罕見文字與特殊符號無法使用。"
                class="mb-4"
            >
                <UInput placeholder="請輸入您的商品名稱" v-model="payment.shopName" />
            </UFormGroup>

            <!--  -->
            <UFormGroup
                label="商店名稱 (英文)"
                help="顯示於刷卡交易上，僅接受半形英文、英文句點、數字、半形逗號與空白。"
                class="mb-4"
            >
                <UInput placeholder="請輸入您的商品名稱 (英文)" v-model="payment.shopNameEng" />
            </UFormGroup>

            <!--  -->
            <UFormGroup label="商店簡介" help="此欄位與集資專案詳情內「專案簡介」相同。" class="mb-4">
                <div class="relative">
                    <UTextarea
                        placeholder="聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的最佳音樂夥伴聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機。聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的音。"
                        :rows="screenWidth <= 768 ? 3 : 3"
                        resize
                        class="w-full"
                        size="lg"
                        v-model="payment.shopIntro"
                        @input="(e) => (e.target.value = e.target.value.slice(0, 90))"
                    />
                    <p class="text-sm text-right text-Neutral-500-Primary absolute bottom-[-20px] right-0">
                        <span>{{ payment.shopIntro.length }}</span> / <span>90</span>
                    </p>
                </div>
            </UFormGroup>

            <!--  -->
            <UFormGroup
                label="商品網址名稱"
                help="此欄位與集資專案詳情內「專案網址名稱」相同，如需修改此至 集資專案詳情。"
            >
                <UInput placeholder="project-id" v-model="payment.shopWebsite" />
            </UFormGroup>
        </section>

        <!--  -->
        <UiTitle class="!mb-2">銀行帳戶資訊</UiTitle>
        <section class="rounded-lg bg-white p-6 mb-7">
            <!--  -->
            <UFormGroup label="銀行戶名" help="戶名必須與您的真實身分/名稱相同。" class="mb-4">
                <UInput placeholder="虛擬國際網站事業有限公司" v-model="payment.accountName" />
            </UFormGroup>

            <section class="grid grid-cols-2">
                <!--  -->
                <UFormGroup label="銀行代碼" class="mb-4">
                    <UInput placeholder="007 第一商業營行" v-model="payment.accountCode" />
                </UFormGroup>

                <!--  -->
                <UFormGroup label="銀行分行代碼" class="mb-9">
                    <UInput placeholder="1440 城東分行" v-model="payment.accountSecCode" />
                </UFormGroup>
            </section>

            <!--  -->
            <UFormGroup label="銀行帳號" class="mb-6">
                <UInput placeholder="1444320960360" v-model="payment.accountNumber" />
            </UFormGroup>
        </section>

        <!--  -->
        <UiTitle class="!mb-2">銀行帳戶資訊</UiTitle>
        <section class="rounded-lg bg-white p-6 mb-7">
            <!--  -->
            <UFormGroup
                label="客服信箱 / 爭議帳款聯絡 e-mail"
                help="將顯示於刷卡交易頁面上，並將用於爭議帳款聯繫處理，請確保信箱可聯繫相關負責單位。"
                class="mb-4"
            >
                <UInput placeholder="viw53869697@gmail.com" v-model="payment.contactMail" />
            </UFormGroup>

            <!--  -->
            <UFormGroup label="聯絡地址" help="聯絡地址必須與 公司基本資料 資料相符。" class="mb-4">
                <UInput placeholder="viw53869697@gmail.com" v-model="payment.contactAddress" />
            </UFormGroup>

            <!--  -->
            <UFormGroup
                label="聯絡地址（英文）"
                help="必須與中文聯絡地址相符。可用 「中華郵政 中文地址英譯」 服務翻譯。"
                class="mb-4"
            >
                <UInput
                    placeholder="10F., No. 20, Taiping Rd., Xindian Dist., New Taipei City 231 , Taiwan (R.O.C.)"
                    v-model="payment.contactAddressEng"
                />
            </UFormGroup>

            <!--  -->
            <UFormGroup label="登記營業地址" help="登記營業地址必須與 公司基本資料 資料相符。" class="mb-4">
                <UInput placeholder="太平路20號10樓" v-model="payment.registerAddress" />
            </UFormGroup>

            <!--  -->
            <UFormGroup label="登記城市 (英文)" help="必須與登記營業地址相符。" class="mb-4">
                <UInput placeholder="New Taipei City" v-model="payment.contactMail" />
            </UFormGroup>
        </section>

        <!--  -->
        <UiTitle class="!mb-2">結帳方式設定</UiTitle>
        <p class="text-sm font-normal text-Neutral-600-Dark-Primary mb-3">信用卡交易設定 (送審後不可更改)</p>
        <section class="rounded-lg bg-white p-6 mb-7">
            <!--  -->
            <div class="flex justify-between items-center py-3 border-b-[1px] border-gray-50">
                <article>
                    <p class="text-base font-normal mb-1">信用卡</p>
                    <p class="text-xs font-normal">金流商將另收取逐筆 2.5% 交易手續費</p>
                </article>
                <UCheckbox v-model="payment.creditCard" />
            </div>

            <!--  -->
            <div class="flex justify-between items-center py-3 border-b-[1px] border-gray-50">
                <article>
                    <p class="text-base font-normal mb-1">信用卡分期</p>
                    <p class="text-xs font-normal">金流商將另收取逐筆手續費，三期 3%、六期 3.9%</p>
                </article>
                <UCheckbox v-model="payment.installment" />
            </div>

            <!--  -->
            <div class="flex justify-between items-center py-3 border-b-[1px] border-gray-50">
                <article>
                    <p class="text-base font-normal mb-1">國外卡</p>
                    <p class="text-xs font-normal">金流商將另收取逐筆 3.8% 交易手續費</p>
                </article>
                <UCheckbox v-model="payment.foreignCard" />
            </div>

            <!--  -->
            <div class="flex justify-between items-center py-3 border-b-[1px] border-gray-50">
                <article>
                    <p class="text-base font-normal mb-1">銀聯卡</p>
                    <p class="text-xs font-normal">金流商將另收取逐筆 2.5% 交易手續費</p>
                </article>
                <UCheckbox v-model="payment.unionPayCard" />
            </div>
        </section>

        <div class="flex justify-start items-start gap-x-2">
            <UCheckbox v-model="payment.unionPayCard" />
            <p class="text-sm">
                提交申請視為提案人 (及法定代理人) 均已充分了解且同意金流商之 「會員服務條款」 及 「隱私權保護條款」。
            </p>
        </div>
    </div>
</template>
<script setup>
const payment = reactive({
    shopCate: "",

    shopName: "",
    shopNameEng: "",

    shopIntro: "",
    shopWebsite: "",

    accountName: "",
    accountCode: "",
    accountSecCode: "",
    accountNumber: "",

    contactMail: "",
    contactAddress: "",
    contactAddressEng: "",

    registerAddress: "",
    registerCityEng: "",

    creditCard: "",
    unionPayCard: "",
    foreignCard: "",

    installment: "",
});

//
const screenWidth = ref(800);
onMounted(() => {
    screenWidth.value = window.innerWidth;
});

const agreement = ref(false);
</script>
