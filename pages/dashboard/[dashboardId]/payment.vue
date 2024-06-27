<template>
    <div>
        <!--  -->
        <div class="flex justify-end items-center gap-x-2 mb-[-28px]" v-if ="buttonShow">
            <!-- <p class="flex justify-center items-center gap-1 p-1 px-[6px] rounded text-xs text-[#EB5232] bg-[#FFF8F2]">
                <UIcon name="i-heroicons-exclamation-circle" class="w-3 h-3 rotate-180 text-[#EB5232]" />
                審核未通過
            </p> -->
            <!-- <p class="flex justify-center items-center gap-1 p-1 px-[6px] rounded text-xs text-[#75BF46] bg-[#F6FAF0]">
                <UIcon name="i-heroicons-exclamation-circle" class="w-3 h-3 rotate-180 text-[#75BF46]" />
                審核已通過
            </p> -->
            <UiButton class="!text-sm max-w-[90px] max-h-8" @click="doSubmit()">
                <span>金流審核</span>
            </UiButton>
        </div>

        <!--  -->
        <UiTitle class="!mb-2">金流設定</UiTitle>
        <p class="text-sm font-normal text-Neutral-600-Dark-Primary mb-3">
            優秀的提案者您好，金流帳號設定，主要用來與第三方金流服務單位申請交易專戶，本網站的每一個募資專案，即代表一個獨立的金流專案系統，idea2gether提供您安心的金流服務與保障，並協助第三方金流暢通與良好的購物環境。
        </p>

        <section class="rounded-lg bg-white p-6 mb-7 max-md:p-3">
            <!--  -->
            <UFormGroup label="商品分類" help="請選擇適合您的商品分類/屬性。" class="mb-4">
                <div class="flex justify-start items-center w-[210px]">
                    <USelectMenu
                        class="w-full lg:h-10"
                        size="lg"
                        v-model="payment.shopCate"
                        :options="shopCateOpts"
                        value-attribute="id"
                        option-attribute="name"
                        :disabled="!buttonShow"
                    />
                </div>
            </UFormGroup>

            <!--  -->
            <UFormGroup
                label="商店名稱"
                help="顯示於信用卡帳單中，一專案一商案論，盡可能與專案名稱相同，便於核對專案，字數限20字，罕見文字與特殊符號無法使用。"
                class="mb-4"
            >
                <UInput placeholder="請輸入您的商品名稱" v-model="payment.shopName" :disabled="!buttonShow" />
            </UFormGroup>

            <!--  -->
            <UFormGroup
                label="商店名稱 (英文)"
                help="顯示於刷卡交易上，僅接受半形英文、英文句點、數字、半形逗號與空白。"
                class="mb-4"
            >
                <UInput placeholder="請輸入您的商品名稱 (英文)" v-model="payment.shopNameEng" :disabled="!buttonShow" />
            </UFormGroup>

            <!--  -->
            <UFormGroup label="商店簡介" help="此欄位與集資專案詳情內「專案簡介」相同。" class="mb-4">
                <div class="relative">
                    <UTextarea
                        :ui="{
                            color: {
                                gray: {
                                    outline: 'bg-[rgb(244,244,244)]',
                                },
                            },
                        }"
                        placeholder="聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的最佳音樂夥伴聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機。聲震宇宙領域，虛擬現實音效耳罩，嵌入式通訊系統，危機中的音。"
                        :rows="screenWidth <= 768 ? 3 : 3"
                        resize
                        class="w-full"
                        size="lg"
                        v-model="payment.shopIntro"
                        :disabled="!buttonShow"
                    />
                    <p class="text-sm text-right text-Neutral-500-Primary absolute bottom-[-20px] right-0">
                        <span>{{ payment.shopIntro.length }}</span> / <span>90</span>
                    </p>
                </div>
            </UFormGroup>

        </section>

        <!--  -->
        <UiTitle class="!mb-2">銀行帳戶資訊</UiTitle>
        <section class="rounded-lg bg-white p-6 mb-7 max-md:p-3">
            <!--  -->
            <UFormGroup label="銀行戶名" help="戶名必須與您的真實身分/名稱相同。" class="mb-4">
                <UInput  placeholder="虛擬國際網站事業有限公司" v-model="payment.accountName" :disabled="!buttonShow" />
            </UFormGroup>

            <section class="grid grid-cols-2 gap-x-3">
                <!--  -->
                <UFormGroup label="銀行代碼" class="mb-4">
                    <div class="flex justify-start items-center">
                        <UInput class="w-full" placeholder="銀行代碼" v-model="payment.accountCode" :disabled="!buttonShow" />
                    </div>
                </UFormGroup>

                <UFormGroup label="銀行分行代碼" class="mb-4">
                    <div class="flex justify-start items-center">
                        <UInput class="w-full" placeholder="銀行分行代碼" v-model="payment.accountSecCode" :disabled="!buttonShow" />
                    </div>
                </UFormGroup>

            </section>

            <!--  -->
            <UFormGroup label="銀行帳號" class="mb-6">
                <UInput  placeholder="1444320960360" v-model="payment.accountNumber" :disabled="!buttonShow" />
            </UFormGroup>
        </section>

        <!--  -->
        <UiTitle class="!mb-2">刷卡交易聯繫資料</UiTitle>
        <section class="rounded-lg bg-white p-6 mb-7 max-md:p-3">
            <!--  -->
            <UFormGroup
                label="客服信箱 / 爭議帳款聯絡 e-mail"
                help="將顯示於刷卡交易頁面上，並將用於爭議帳款聯繫處理，請確保信箱可聯繫相關負責單位。"
                class="mb-4"
            >
                <UInput  placeholder="viw53869697@gmail.com" v-model="payment.contactMail" :disabled="!buttonShow" />
            </UFormGroup>

            <!--  -->
            <UFormGroup label="聯絡地址" help="聯絡地址必須與 公司基本資料 資料相符。" class="mb-4">
                <UInput  placeholder="viw53869697@gmail.com" v-model="payment.contactAddress" :disabled="!buttonShow" />
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
                    :disabled="!buttonShow"
                />
            </UFormGroup>

            <!--  -->
            <UFormGroup label="登記營業地址" help="登記營業地址必須與 公司基本資料 資料相符。" class="mb-4">
                <UInput  placeholder="太平路20號10樓" v-model="payment.registerAddress" :disabled="!buttonShow" />
            </UFormGroup>

            <!--  -->
            <UFormGroup label="登記城市 (英文)" help="必須與登記營業地址相符。" class="mb-4">
                <UInput  placeholder="New Taipei City" v-model="payment.registerCityEng" :disabled="!buttonShow" />
            </UFormGroup>
        </section>

        <!--  -->
        <UiTitle class="!mb-2">結帳方式設定</UiTitle>
        <p class="text-sm font-normal text-Neutral-600-Dark-Primary mb-3">信用卡交易設定 (送審後不可更改)</p>
        <section class="rounded-lg bg-white p-6 mb-7 max-md:p-3">
            <!--  -->
            <div class="flex justify-between items-center py-3 border-b-[1px] border-gray-50">
                <article>
                    <p class="text-base font-normal mb-1">信用卡</p>
                    <p class="text-xs font-normal">金流商將另收取逐筆 2.5% 交易手續費</p>
                </article>
                <UCheckbox v-model="payment.creditCard" :disabled="!buttonShow" />
            </div>

            <!--  -->
            <div class="flex justify-between items-center py-3 border-b-[1px] border-gray-50">
                <article>
                    <p class="text-base font-normal mb-1">信用卡分期</p>
                    <p class="text-xs font-normal">金流商將另收取逐筆手續費，三期 3%、六期 3.9%</p>
                </article>
                <div class="flex justify-start items-center w-[110px]">
                    <USelectMenu
                        class="w-full lg:h-10"
                        size="lg"
                        v-model="payment.installment"
                        :options="installmentOpts"
                        placeholder="分3期"
                        value-attribute="id"
                        option-attribute="name"
                        :disabled="!buttonShow"
                        :class="true ? 'bg-[rgb(244,244,244)] opacity-100' : 'bg-white'"
                    />
                </div>
            </div>

            <!--  -->
            <div class="flex justify-between items-center py-3 border-b-[1px] border-gray-50">
                <article>
                    <p class="text-base font-normal mb-1">國外卡</p>
                    <p class="text-xs font-normal">金流商將另收取逐筆 3.8% 交易手續費</p>
                </article>
                <UCheckbox v-model="payment.foreignCard" :disabled="!buttonShow" />
            </div>

            <!--  -->
            <div class="flex justify-between items-center py-3 border-b-[1px] border-gray-50">
                <article>
                    <p class="text-base font-normal mb-1">銀聯卡</p>
                    <p class="text-xs font-normal">金流商將另收取逐筆 2.5% 交易手續費</p>
                </article>
                <UCheckbox v-model="payment.unionPayCard" :disabled="!buttonShow" />
            </div>
        </section>

        <!-- <div class="flex justify-start items-start gap-x-2">
            <UCheckbox v-model="agreement" />
            <p class="text-sm">
                提交申請視為提案人 (及法定代理人) 均已充分了解且同意金流商之 「會員服務條款」 及 「隱私權保護條款」。
            </p>
        </div> -->
    </div>
</template>
<script setup>
import { useToast }  from "vue-toastification";
const toast        = useToast();
const route        = useRoute();
const dashboardId  = route.params.dashboardId;

const payment = reactive({
    shopCate: 1520, 
    shopName: "",
    shopNameEng: "",
    shopIntro: "",
    accountName: "",
    accountCode: "",
    accountSecCode: "",
    accountNumber: "",
    contactMail: "",
    contactAddress: "",
    contactAddressEng: "",
    registerAddress: "",
    registerCityEng: "",

    creditCard: false,
    unionPayCard: false,
    foreignCard: false,

    installment: "0",
    project_id: dashboardId
});
const buttonShow = ref(true);
const { data, refresh }  = useCustomFetch("/getCreditInfo", {'project_id' : dashboardId }, '');

watchEffect(() => {
      if (data.value && data.value.status) {

        buttonShow.value = false;
        
        Object.keys(payment).forEach(key => {
            if (data.value['data'][key] !== undefined) {
                if(key == 'shopCate') {
                    payment[key] = parseInt(data.value['data'][key]);
                } else {
                    payment[key] = data.value['data'][key];
                }
                
            }
        });
      }
    });
const agreement = ref(false);

const shopCateOpts = reactive([
      { id: 1520, name: "一般承造,住宅及商業" },
      { id: 5973, name: "宗教用品" },
      { id: 4111, name: "通勤,運輸" },
      { id: 5977, name: "化妝/美容保養產品" },
      { id: 4121, name: "計程車,加長禮車" },
      { id: 5992, name: "花店" },
      { id: 5995, name: "寵物用品" },
      { id: 5996, name: "游泳池" },
      { id: 6513, name: "房租" },
      { id: 7011, name: "飯店/民宿" },
      { id: 7032, name: "運動,休閒營地" },
      { id: 7211, name: "洗衣服務" },
      { id: 7221, name: "相館" },
      { id: 7230, name: "美容院" },
      { id: 7261, name: "喪葬服務及用品" },
      { id: 7297, name: "按摩店" },
      { id: 7298, name: "美容美體服務" },
      { id: 7299, name: "房屋仲介" },
      { id: 7311, name: "廣告服務" },
      { id: 7361, name: "人力仲介" },
      { id: 7372, name: "網路資訊服務" },
      { id: 7392, name: "諮詢服務" },
      { id: 7399, name: "商業服務" },
      { id: 7519, name: "休閒交通工具租借" },
      { id: 7523, name: "停車場" },
      { id: 7538, name: "汽車服務" },
      { id: 7542, name: "洗車" },
      { id: 7622, name: "電器修理" },
      { id: 7832, name: "電影院" },
      { id: 7941, name: "運動俱樂部" },
      { id: 7996, name: "樂區 / 博覽會" },
      { id: 7999, name: "娛樂休閒服務" },
      { id: 8043, name: "眼鏡公司" },
      { id: 8062, name: "醫院" },
      { id: 8211, name: "中小學" },
      { id: 8220, name: "學校" },
      { id: 4215, name: "快遞" },
      { id: 4225, name: "倉儲服務" },
      { id: 4411, name: "遊艇,遊輪" },
      { id: 4511, name: "航空公司,空中運輸(不在上列名單)" },
      { id: 4722, name: "旅行社" },
      { id: 4789, name: "交通運輸" },
      { id: 4812, name: "電話通訊設備及服務" },
      { id: 4899, name: "有線電視" },
      { id: 5013, name: "汽車設備,零件" },
      { id: 5045, name: "3C商品" },
      { id: 5094, name: "寶石/黃金/珠寶貴重物" },
      { id: 5192, name: "書報雜誌" },
      { id: 5251, name: "五金店" },
      { id: 5261, name: "園藝用品" },
      { id: 5300, name: "大批發會員店" },
      { id: 5309, name: "免稅店" },
      { id: 5311, name: "百貨公司" },
      { id: 5331, name: "雜貨店" },
      { id: 5399, name: "一般商品買賣" },
      { id: 5411, name: "超市,量販店" },
      { id: 5422, name: "冷凍食品" },
      { id: 5462, name: "西點麵包" },
      { id: 5499, name: "食品名特產" },
      { id: 5511, name: "二手車(汽車商)服務買賣" },
      { id: 5533, name: "汽車零件" },
      { id: 5541, name: "加油站" },
      { id: 5571, name: "機車店" },
      { id: 5699, name: "服飾配件" },
      { id: 5712, name: "各種家用品" },
      { id: 5732, name: "電器行" },
      { id: 5812, name: "餐廳" },
      { id: 5813, name: "酒店" },
      { id: 5931, name: "二手店" },
      { id: 5940, name: "腳踏車店" },
      { id: 5941, name: "運動商品" },
      { id: 5946, name: "攝影用品" },
      { id: 5963, name: "直銷" },
      { id: 5970, name: "手工藝品店" },
      { id: 5971, name: "藝術商品" },
      { id: 8351, name: "托兒所" },
      { id: 8299, name: "補習/教學服務" },
      { id: 8398, name: "社會福利團體" },
      { id: 8651, name: "政治團體" },
      { id: 8661, name: "宗教團體" },
      { id: 8699, name: "工會" },
      { id: 8999, name: "其他專業服務" },
      { id: 9399, name: "政府服務" }
]);

const installmentOpts = reactive([
    {
        id: 1,
        name: "分3期",
    },
    {
        id: 2,
        name: "分6期",
    }
]);

async function doSubmit () {
    const data = await POST("/createCreditInfo", payment, '');
    if(!!data) {
        toast.success(data.message)
        refresh()
    }
}

//
const screenWidth = ref(800);
onMounted(() => {
    screenWidth.value = window.innerWidth;
});
</script>
