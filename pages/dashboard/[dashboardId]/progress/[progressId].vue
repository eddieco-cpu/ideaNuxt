<template>
    <div>
        <UiTitle class="w-full max-md:mb-1">
            <nuxt-link
                :to="`/dashboard/${$route.params.dashboardId}/progress/`"
                class="inline-flex justify-start items-center gap-1"
            >
                <UIcon name="i-heroicons-chevron-left" class="" />
                {{ pageStatus === "edit" ? "編輯" : "新增" }}進度更新</nuxt-link
            >
        </UiTitle>
        <p
            class="text-xs text-Neutral-500-Primary pointer-events-none text-right h-7 leading-7 mb-4 mt-[calc(-28px-16px)] max-md:mt-0 max-md:mb-3 max-md:h-auto max-md:leading-4 max-md:text-left"
            v-if="pageStatus === 'edit'"
        >
            {{ "最後更新於" + pageTime }}
        </p>

        <section class="min-h-32 rounded-lg border-[1px] border-[#E5E5E5] bg-white mb-3 p-6">
            <!--  -->
            <UForm
                :schema="basicProgressSchema"
                :state="submissionProgress"
                @submit="pageStatus === 'edit' ? doSubmitEdit : doSubmitNew"
            >
                <!--  -->
                <UFormGroup label="標題" required name="title" class="mb-9">
                    <div class="relative">
                        <UTextarea
                            placeholder="請輸入簡潔明瞭的標題"
                            :rows="screenWidth <= 768 ? 2 : 1"
                            resize
                            class="w-full"
                            size="lg"
                            v-model="submissionProgress.title"
                            @input="(e) => (e.target.value = e.target.value.slice(0, 40))"
                        />
                        <p class="text-sm text-right text-Neutral-500-Primary absolute bottom-[-20px] right-0">
                            <span>{{ submissionProgress.title.length }}</span> / <span>{{ titleMaxLength }}</span>
                        </p>
                    </div>
                </UFormGroup>

                <!--  -->
                <UFormGroup label="更新內容" required name="content" class="mb-6">
                    <DashboardProgressFullContext ref="fullContext" />
                </UFormGroup>

                <div v-if="pageStatus === 'edit'" class="flex justify-start items-center gap-x-2">
                    <UiButton class="max-w-16 max-h-8 !text-sm" @click="doSubmitEdit">發佈</UiButton>
                    <UiButton class="max-w-16 max-h-8 !text-sm" type="secondary" @click="doCancelEdit($event)"
                        >刪除</UiButton
                    >
                </div>
                <div v-if="pageStatus === 'new'" class="flex justify-start items-center gap-x-2">
                    <UiButton class="max-w-16 max-h-8 !text-sm" @click="doSubmitNew">發佈</UiButton>
                    <UiButton class="max-w-16 max-h-8 !text-sm" type="secondary" @click="doCancelNew($event)"
                        >取消</UiButton
                    >
                </div>
            </UForm>
        </section>
    </div>
</template>
<script setup>
import { basicProgressSchema } from "~/validation";

//
const route = useRoute();
const progressId = route.params.progressId;

//
const pageStatus = ref("edit"); // new, edit
const pageTime = ref("2023/10/27 11:16");

const screenWidth = ref(800);
onMounted(() => {
    screenWidth.value = window.innerWidth;
});

const fullContext = ref();
const fullContextLength = computed(() => fullContext?.value?.editorContent?.length || 0);
const titleMaxLength = 40;

//
const submissionProgress = reactive({
    title: "",
    content: "",
});

watch(fullContextLength, (val) => {
    //console.log("fullContext", fullContext.value.editorContent);
    submissionProgress.content = fullContext.value.editorContent;
});

//
async function getReviewedProgressData() {
    const data = await GET(`/api/dashboard/progress/${progressId}`);
    if (!!data) {
        console.log("data", data);

        pageStatus.value = data.progressStatus;
        pageTime.value = data.progressData?.date || "";

        submissionProgress.title = data.progressData?.title || "";
        submissionProgress.content = data.progressData?.html || "";
        fullContext.value.quillEditorBody.setHTML(data.progressData?.html || "");
    }
}
onMounted(() => {
    getReviewedProgressData();
});

//
function doSubmitEdit() {
    console.log("doSubmit");
    console.log("submissionProgress", submissionProgress);
}
function doCancelEdit(e) {
    e.stopPropagation();
    console.log("doCancel");

    submissionProgress.title = "";
    fullContext.value.quillEditorBody.setHTML("");
}

function doSubmitNew() {
    console.log("doSubmit");
    console.log("submissionProgress", submissionProgress);
}
function doCancelNew(e) {
    e.stopPropagation();
    console.log("doCancel");

    submissionProgress.title = "";
    fullContext.value.quillEditorBody.setHTML("");
}
</script>
