<template>
    <div class="">
        <div class="flex justify-between items-center mb-3">
            <nuxt-link
                :to="`/dashboard/${$route.params.dashboardId}/details/faq`"
                class="flex justify-start items-center"
            >
                <UIcon name="i-heroicons-chevron-left" class="block w-4 h-4 mr-2" />
                <b class="text-xl font-medium">{{ submissionFaq.id ? "編輯問與答" : "新增問與答" }}</b>
            </nuxt-link>
            <span class="text-xs text-Neutral-500-Primary">{{
                submissionFaq.id ? "最後更新於" + submissionFaq.time : $route.params.faqId
            }}</span>
        </div>
        <article class="border-[1px] border-[Primary-100] rounded-lg p-6 bg-white">
            <UForm :schema="basicFaqSchema" :state="submissionFaq" @submit="doSubmit">
                <!--  -->
                <UFormGroup label="問題" name="qus" required class="mb-8">
                    <div class="relative">
                        <UTextarea
                            :placeholder="qusPlaceholder"
                            :rows="screenWidth <= 768 ? 7 : 3"
                            resize
                            class="w-full"
                            size="lg"
                            v-model="submissionFaq.qus"
                            @input="(e) => (e.target.value = e.target.value.slice(0, qusMaxLength))"
                        />
                        <p class="text-sm text-right text-Neutral-500-Primary absolute bottom-[-20px] right-0">
                            <span>{{ submissionFaq.qus.length }}</span> / <span>{{ qusMaxLength }}</span>
                        </p>
                    </div>
                </UFormGroup>

                <!--  -->
                <UFormGroup label="回答" name="ans" required class="mb-8">
                    <div class="relative">
                        <UTextarea
                            :placeholder="ansPlaceholder"
                            :rows="screenWidth <= 768 ? 5 : 4"
                            resize
                            class="w-full"
                            size="lg"
                            v-model="submissionFaq.ans"
                            @input="(e) => (e.target.value = e.target.value.slice(0, ansMaxLength))"
                        />
                        <p class="text-sm text-right text-Neutral-500-Primary absolute bottom-[-20px] right-0">
                            <span>{{ submissionFaq.ans.length }}</span> / <span>{{ ansMaxLength }}</span>
                        </p>
                    </div>
                </UFormGroup>

                <!--  -->
                <div class="flex justify-start items-center">
                    <UiButton type="primary" class="max-md:w-16 md:w-16 mr-2">
                        {{ submissionFaq.id ? "儲存" : "送出" }}
                    </UiButton>
                    <UiButton
                        type="secondary"
                        class="max-md:w-16 md:w-16"
                        @click="
                            (e) => {
                                e.preventDefault();
                                doCancel();
                            }
                        "
                    >
                        {{ submissionFaq.id ? "刪除" : "取消" }}
                    </UiButton>
                </div>
            </UForm>
        </article>
    </div>
</template>
<script setup>
import { basicFaqSchema } from "~/validation";
import { useToast } from "vue-toastification";

const toast = useToast();

const submissionFaq = ref({
    id: "",
    qus: "",
    ans: "",
});

const route       = useRoute();
const faqId       = route.params.faqId;
const dashboardId = route.params.dashboardId;

async function getEditedFaqData() {

    const data = await POST("/getProjectFaq", {'id' : faqId }, '');
    if (!!data) {
        submissionFaq.value = data
    }
}
getEditedFaqData();

const qusPlaceholder =
    "請優先針對您的產品 / 服務建立簡短有力的問答，多數消費者期望透過常見問答獲得更多關於 產品功能 / 服務、規格、配件、保固、安裝、服務特點等資訊。您也可針對常常被詢問的問題建立問答。 消費者對產品的疑問越快獲得滿意的答覆，訂單成交的機會就越大。";
const ansPlaceholder = "寫下對於問題的最佳回答...";

const qusMaxLength = 100;
const ansMaxLength = 200;
const screenWidth  = ref(800);

onMounted(() => {
    screenWidth.value = window.innerWidth;
});

const check = ref(false)

async function doSubmit() {

    const payload = {
        ...submissionFaq.value,
        'project_id' : dashboardId
    }

    if(submissionFaq.value.id == '') {

        const data = await POST("/addProjectFaq", payload, '');

        if(!!data) {
            check.value = true
            toast.success(data.message)
        }

    } else {
        
        const data = await POST("/updateProjectFaq", payload, '');

        if(!!data) {
            check.value = true
            toast.success(data.message)
        }
    }

    if(check.value) {
        navigateTo(`/dashboard/${dashboardId}/details/faq`);
    }
}
async function doCancel() {
    
    const id = submissionFaq.value.id;

    const data = await POST("/deleteProjectFaq", {'id':id}, '');

<<<<<<< HEAD
        if(!!data) {
            toast.success(data.message)
            navigateTo(`/dashboard/${dashboardId}/details/faq`);
        }
=======
    if(!!data) {
        toast.success(data.message)
        navigateTo(`/dashboard/${dashboardId}/details/faq`);
    }
>>>>>>> 1cdb0af (0427)
}
</script>
